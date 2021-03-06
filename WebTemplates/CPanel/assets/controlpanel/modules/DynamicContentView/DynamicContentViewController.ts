/**
 * Created by kalle on 31.5.2014.
 */

/// <reference path="../require.d.ts" />
/// <reference path="../dustjs-linkedin.d.ts" />
/// <reference path="../lodash.d.ts" />

import ViewControllerBase = require("../ViewControllerBase");

class DynamicContentViewController extends ViewControllerBase {
    currData:any;
    ControllerInitialize():void {
        var me = this;
        require(["DynamicContentView/DynamicContent_dust",
            "DynamicContentView/DynamicContentAdvanced_dust",
            "DynamicContentView/DynamicContentPageSkeleton_dust",
            "DynamicContentView/DynamicContentView_Modals_dust",
            "DynamicContentView/DynamicContentPageHost_dust",
            "DynamicContentView/DynamicContentGroupEditView_dust",
            "lib/dusts/objectdeleteicon_dust",
            "lib/dusts/command_button_dust",
            "lib/dusts/command_icon_dust",
            "lib/dusts/insidemodal_button_dust",
            "lib/dusts/hiddeninput_dust",
            "lib/dusts/openmodal_button_dust",
            "lib/dusts/modal_begin_dust",
            "lib/dusts/modal_end_dust"], (template) => {
            me.currUDG.GetData(this.dataUrl, function(data) {
                me.currData = data;
                //console.log("Init: " + dataUrl);
                dust.render("DynamicContent.dust", data, (error, output) => {
                    if(error)
                        alert("DUST ERROR: " + error);
                    var $hostDiv = $("#" + me.divID);
                    $hostDiv.empty();
                    $hostDiv.html(output);
                    if(me.StateContent.LastActiveSection)
                        me.ActivateSection(me.StateContent.LastActiveSection);
                    else
                        me.$getSelectedFieldsWithin(".oipdynamiccontenteditorsection").hide();
                    $hostDiv.find(".oiphover-showlocation").hover(function() {
                        var $canvas = $hostDiv.find("canvas.oipdynamiccontentlocationview")
                        var canvas = <HTMLCanvasElement> $canvas[0];
                        me.DisplayLocation($(this), canvas);
                    }, function() {
                        me.ClearCanvas($(this));
                    });
                    $hostDiv.find(".oipcanvas-showlocation").each(function(index, element) {
                        var $canvas = $(this).find("canvas");
                        var canvas:HTMLCanvasElement = <HTMLCanvasElement> $canvas[0];
                        me.DisplayLocation($(this), canvas);
                    });

                    var $rtEditors:any = $hostDiv.find(".oipdynamicedit-richtextarea");
                    $rtEditors.redactor({
                        minHeight: 300,
                        maxHeight: 350,
                        autoresize: false,
                        buttons: ['bold', 'italic', 'alignment', 'unorderedlist', 'orderedlist', 'image', 'video', "link"]
                        });
                    var $imageDatas:any = $hostDiv.find(".oipdynamicedit-imageinput");
                    $imageDatas.each(function() {
                        var currentID = $(this).attr("data-contentid");
                        var currentObject = me.getObjectByID(me.currData.DynamicContents.CollectionContent, currentID);
                        var imageSizeString:string;
                        if(currentObject.EditType == "IMAGELARGE")
                            imageSizeString = "256";
                        else
                            imageSizeString = "128";
                        var currentImagePath = currentObject.ImageData
                            ? "../../AaltoGlobalImpact.OIP/MediaContent/" + currentObject.ImageData.ID + "_" + imageSizeString + "x" + imageSizeString + "_crop" + currentObject.ImageData.AdditionalFormatFileExt
                            : null;
                        // Initiate binary file elements for image
                        var noImageUrl = "../assets/controlpanel/images/lightGray.jpg";

                        me.currOPM.InitiateBinaryFileElementsAroundInput($(this), currentID, "ImageData", currentImagePath, noImageUrl, "Image" + currentID);
                    });
                    /*
                     <input type="file" data-contentid="{ID}" data-oipfile-filegroupid="ImageData{ID}"
                     class="oipdynamiceditinput oipdynamicedit-imageinput" name="ImageDataFileInput{ID}">

                     */
                    me.ControllerInitializeDone();
                });
            });
        });
    }

    VisibleTemplateRender():void {
        //alert("Connections view ctrl visible render: " + this.divID);
    }

    InvisibleTemplateRender():void {
        //alert("Connections view ctrl invisible render: " + this.divID);
    }

    ClearCanvas($element) {
        var $hostDiv = $("#" + this.divID);
        var $canvas = $hostDiv.find("canvas.oipdynamiccontentlocationview")
        this.CurrentCanvas = <HTMLCanvasElement> $canvas[0];
        var canvas = this.CurrentCanvas;
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    DisplayLocation($element, canvas:HTMLCanvasElement) {
        var pageLocation = $element.attr("data-pagelocation");
        if(!pageLocation)
            return;
        var locations = pageLocation.split(";");
        if(locations.length != 4)
            return;
        var startX = parseFloat(locations[0]);
        var startY = parseFloat(locations[1]);
        var endX = parseFloat(locations[2]);
        var endY = parseFloat(locations[3]);
        var width = canvas.width;
        var height = canvas.height;
        var ctx = canvas.getContext("2d");

        var startXCoord = (startX * width) / 10;
        var startYCoord = (startY * height) / 10;
        var endXCoord = (endX * width) / 10;
        var endYCoord = (endY * height) / 10;
        var rectWidth = endXCoord - startXCoord;
        var rectHeight = endYCoord - startYCoord;
        // Red rectangle
        ctx.beginPath();
        ctx.lineWidth=6;
        ctx.strokeStyle="green";
        ctx.rect(startXCoord,startYCoord,rectWidth,rectHeight);
        ctx.stroke();
        //console.log("Drawn: " + startXCoord + " " + startYCoord + " " + endXCoord + " " + endYCoord);
    }

    SetActiveSection($source) {
        var wnd:any = window;
        wnd.Foundation.libs.dropdown.close($("#drop-SelectDynamicContentPage"));
        var activatedSectionName = $source.attr("data-templatename");
        this.ActivateSection(activatedSectionName);
    }

    CurrentCanvas:HTMLCanvasElement;
    ActivateSection(sectionName) {
        this.$getSelectedFieldsWithin(".oipdynamiccontenteditorsection").hide();
        var $activeSection = this.$getNamedFieldWithin(sectionName);
        $activeSection.show();
        this.StateContent.LastActiveSection = sectionName;
    }

    OpenAddDynamicContentGroupModal() {
        var $modal:any = this.$getNamedFieldWithin("AddNewDynamicContentGroupModal");
        this.$getNamedFieldWithinModal($modal, "HostName").val("");
        this.$getNamedFieldWithinModal($modal, "GroupHeader").val("");
        this.$getNamedFieldWithinModal($modal, "SortValue").val("");
        this.$getNamedFieldWithinModal($modal, "PageLocation").val("");
        this.$getNamedFieldWithinModal($modal, "ContentItemNames").val("");
        $modal.foundation('reveal', 'open');
    }

    EditDynamicContentGroup($source) {
        var $modal:any = this.$getNamedFieldWithin("EditDynamicContentGroupModal");
        var me = this;
        var jq:any = $;
        var wnd:any = window;
        var clickedEditID = $source.attr("data-objectid");
        $.getJSON('../../AaltoGlobalImpact.OIP/DynamicContentGroup/' + clickedEditID + ".json", function (contentData) {
            var currentObject = contentData;
            var currentID = currentObject.ID;
            var currentETag = currentObject.MasterETag;
            var currentRelativeLocation = currentObject.RelativeLocation;
            me.$getNamedFieldWithinModal($modal, "ID").val(currentID);
            me.$getNamedFieldWithinModal($modal, "ETag").val(currentETag);
            me.$getNamedFieldWithinModal($modal, "RelativeLocation").val(currentRelativeLocation);
            me.$getNamedFieldWithinModal($modal, "HostName").val(contentData.HostName);
            me.$getNamedFieldWithinModal($modal, "GroupHeader").val(contentData.GroupHeader);
            me.$getNamedFieldWithinModal($modal, "SortValue").val(contentData.SortValue);
            me.$getNamedFieldWithinModal($modal, "PageLocation").val(contentData.PageLocation);
            me.$getNamedFieldWithinModal($modal, "ContentItemNames").val(contentData.ContentItemNames);
            $modal.foundation('reveal', 'open');
        });
    }


    OpenAddDynamicContentModal() {
        var $modal:any = this.$getNamedFieldWithin("AddNewDynamicContentModal");
        this.$getNamedFieldWithinModal($modal, "HostName").val("");
        this.$getNamedFieldWithinModal($modal, "ContentName").val("");
        this.$getNamedFieldWithinModal($modal, "ElementQuery").val("");
        this.$getNamedFieldWithinModal($modal, "EditType").val("");
        this.$getNamedFieldWithinModal($modal, "PageLocation").val("");
        this.$getNamedFieldWithinModal($modal, "Title").val("");
        this.$getNamedFieldWithinModal($modal, "Description").val("");
        this.$getNamedFieldWithinModal($modal, "RawContent").val("");
        this.$getNamedFieldWithinModal($modal, "Content").val("");
        this.$getNamedFieldWithinModal($modal, "ApplyActively").prop("checked", false);
        var $content:any = this.$getNamedFieldWithinModal($modal, "Content");
        $content.destroyEditor();
        $content.val("");
        $content.redactor(
            {   minHeight: 300,
                maxHeight: 350,
                autoresize: false,
                buttons: ['bold', 'italic', 'alignment', 'unorderedlist', 'orderedlist', 'image', 'video', "link"]
            });
        $modal.foundation('reveal', 'open');
    }

    EditDynamicContent($source) {
        var $modal:any = this.$getNamedFieldWithin("EditDynamicContentModal");
        var me = this;
        var jq:any = $;
        var wnd:any = window;
        var clickedEditID = $source.attr("data-objectid");
        $.getJSON('../../AaltoGlobalImpact.OIP/DynamicContent/' + clickedEditID + ".json", function (contentData) {
            var currentObject = contentData;
            var currentID = currentObject.ID;
            var currentETag = currentObject.MasterETag;
            var currentRelativeLocation = currentObject.RelativeLocation;
            me.$getNamedFieldWithinModal($modal, "ID").val(currentID);
            me.$getNamedFieldWithinModal($modal, "ETag").val(currentETag);
            me.$getNamedFieldWithinModal($modal, "RelativeLocation").val(currentRelativeLocation);
            me.$getNamedFieldWithinModal($modal, "HostName").val(contentData.HostName);
            me.$getNamedFieldWithinModal($modal, "ContentName").val(contentData.ContentName);
            me.$getNamedFieldWithinModal($modal, "ElementQuery").val(contentData.ElementQuery);
            me.$getNamedFieldWithinModal($modal, "EditType").val(contentData.EditType);
            me.$getNamedFieldWithinModal($modal, "PageLocation").val(contentData.PageLocation);
            me.$getNamedFieldWithinModal($modal, "Title").val(contentData.Title);
            me.$getNamedFieldWithinModal($modal, "Description").val(contentData.Description);
            me.$getNamedFieldWithinModal($modal, "RawContent").val(contentData.RawContent);
            me.$getNamedFieldWithinModal($modal, "ApplyActively").prop("checked", contentData.ApplyActively);
            var $content:any = me.$getNamedFieldWithinModal($modal, "Content");
            $content.destroyEditor();
            $content.val(contentData.Content);
            $content.redactor(
                {   minHeight: 300,
                    maxHeight: 350,
                    autoresize: false,
                    buttons: ['bold', 'italic', 'alignment', 'unorderedlist', 'orderedlist', 'image', 'video', "link"]
                });
            $modal.foundation('reveal', 'open');
        });
    }

    ViewDynamicContent($source) {
        var $modal:any = this.$getNamedFieldWithin("ViewDynamicContentModal");
        var me = this;
        var jq:any = $;
        var wnd:any = window;
        var clickedEditID = $source.attr("data-objectid");
        $.getJSON('../../AaltoGlobalImpact.OIP/DynamicContent/' + clickedEditID + ".json", function (contentData) {
            var currentObject = contentData;
            me.$getNamedFieldWithinModal($modal, "HostName").html(contentData.HostName);
            me.$getNamedFieldWithinModal($modal, "ContentName").html(contentData.ContentName);
            me.$getNamedFieldWithinModal($modal, "ElementQuery").html(contentData.ElementQuery);
            me.$getNamedFieldWithinModal($modal, "EditType").html(contentData.EditType);
            me.$getNamedFieldWithinModal($modal, "PageLocation").html(contentData.PageLocation);
            me.$getNamedFieldWithinModal($modal, "Title").html(contentData.Title);
            me.$getNamedFieldWithinModal($modal, "Description").html(contentData.Description);
            me.$getNamedFieldWithinModal($modal, "ApplyActively").html(contentData.ApplyActively);
            if(contentData.RawContent)
                me.$getNamedFieldWithinModal($modal, "Content").html(contentData.RawContent);
            else
                me.$getNamedFieldWithinModal($modal, "Content").html(contentData.Content);
            $modal.foundation('reveal', 'open');
        });
    }

    Modal_SaveNewDynamicContentGroup($modal) {
        var hostName = this.$getNamedFieldWithinModal($modal, "HostName").val();
        var groupHeader = this.$getNamedFieldWithinModal($modal, "GroupHeader").val();
        var sortValue = this.$getNamedFieldWithinModal($modal, "SortValue").val();
        var pageLocation = this.$getNamedFieldWithinModal($modal, "PageLocation").val();
        var contentItemNames = this.$getNamedFieldWithinModal($modal, "ContentItemNames").val();

        var saveData = {
            HostName: hostName,
            GroupHeader: groupHeader,
            SortValue: sortValue,
            PageLocation: pageLocation,
            ContentItemNames: contentItemNames
        };

        var me = this;
        var jq:any = $;
        jq.blockUI({ message: '<h2>Adding new dynamic content group...</h2>' });
        me.currOPM.CreateObjectAjax("AaltoGlobalImpact.OIP", "DynamicContentGroup", saveData, function() {
            jq.unblockUI();
            $modal.foundation('reveal', 'close');
            me.ReInitialize();
        }, me.CommonOperationErrorHandler);
    }

    Modal_SaveExistingDynamicContentGroup($modal) {
        var id = this.$getNamedFieldWithinModal($modal, "ID").val();
        var etag = this.$getNamedFieldWithinModal($modal, "ETag").val();
        var objectRelativeLocation = this.$getNamedFieldWithinModal($modal, "RelativeLocation").val();
        var hostName = this.$getNamedFieldWithinModal($modal, "HostName").val();
        var groupHeader = this.$getNamedFieldWithinModal($modal, "GroupHeader").val();
        var sortValue = this.$getNamedFieldWithinModal($modal, "SortValue").val();
        var pageLocation = this.$getNamedFieldWithinModal($modal, "PageLocation").val();
        var contentItemNames = this.$getNamedFieldWithinModal($modal, "ContentItemNames").val();

        var saveData = {
            HostName: hostName,
            GroupHeader: groupHeader,
            SortValue: sortValue,
            PageLocation: pageLocation,
            ContentItemNames: contentItemNames
        };

        var me = this;
        var jq:any = $;
        jq.blockUI({ message: '<h2>Saving Dynamic Content Group...</h2>' });
        me.currOPM.SaveIndependentObject(id, objectRelativeLocation, etag, saveData, function() {
            jq.unblockUI();
            $modal.foundation('reveal', 'close');
            me.ReInitialize();
        }, me.CommonOperationErrorHandler);
    }


    Modal_SaveNewDynamicContent($modal) {
        var hostName = this.$getNamedFieldWithinModal($modal, "HostName").val();
        var contentName = this.$getNamedFieldWithinModal($modal, "ContentName").val();
        var elementQuery = this.$getNamedFieldWithinModal($modal, "ElementQuery").val();
        var editType = this.$getNamedFieldWithinModal($modal, "EditType").val();
        var pageLocation = this.$getNamedFieldWithinModal($modal, "PageLocation").val();
        var title = this.$getNamedFieldWithinModal($modal, "Title").val();
        var description = this.$getNamedFieldWithinModal($modal, "Description").val();
        var rawContent = this.$getNamedFieldWithinModal($modal, "RawContent").val();
        rawContent = $("<div/>").text(rawContent).html();
        var content = this.$getNamedFieldWithinModal($modal, "Content").val();
        content = $('<div/>').text(content).html();
        var applyActively = this.$getNamedFieldWithinModal($modal, "ApplyActively").is(':checked');

        var saveData = {
            HostName: hostName,
            ContentName: contentName,
            ElementQuery: elementQuery,
            EditType: editType,
            PageLocation: pageLocation,
            Title: title,
            Description: description,
            "ENC.RawContent": rawContent,
            "ENC.Content": content,
            ApplyActively: applyActively
        };

        var me = this;
        var jq:any = $;
        jq.blockUI({ message: '<h2>Adding new dynamic content...</h2>' });
        me.currOPM.CreateObjectAjax("AaltoGlobalImpact.OIP", "DynamicContent", saveData, function() {
            jq.unblockUI();
            $modal.foundation('reveal', 'close');
            me.ReInitialize();
        }, me.CommonOperationErrorHandler);
    }

    Modal_SaveExistingDynamicContent($modal) {
        var id = this.$getNamedFieldWithinModal($modal, "ID").val();
        var etag = this.$getNamedFieldWithinModal($modal, "ETag").val();
        var objectRelativeLocation = this.$getNamedFieldWithinModal($modal, "RelativeLocation").val();
        var hostName = this.$getNamedFieldWithinModal($modal, "HostName").val();
        var contentName = this.$getNamedFieldWithinModal($modal, "ContentName").val();
        var elementQuery = this.$getNamedFieldWithinModal($modal, "ElementQuery").val();
        var editType = this.$getNamedFieldWithinModal($modal, "EditType").val();
        var pageLocation = this.$getNamedFieldWithinModal($modal, "PageLocation").val();
        var title = this.$getNamedFieldWithinModal($modal, "Title").val();
        var description = this.$getNamedFieldWithinModal($modal, "Description").val();
        var rawContent = this.$getNamedFieldWithinModal($modal, "RawContent").val();
        rawContent = $("<div/>").text(rawContent).html();
        var content = this.$getNamedFieldWithinModal($modal, "Content").val();
        content = $('<div/>').text(content).html();
        var applyActively = this.$getNamedFieldWithinModal($modal, "ApplyActively").is(':checked');

        var saveData = {
            HostName: hostName,
            ContentName: contentName,
            ElementQuery: elementQuery,
            EditType: editType,
            PageLocation: pageLocation,
            Title: title,
            Description: description,
            "ENC.RawContent": rawContent,
            "ENC.Content": content,
            ApplyActively: applyActively
        };

        var me = this;
        var jq:any = $;
        jq.blockUI({ message: '<h2>Saving Dynamic Content...</h2>' });
        me.currOPM.SaveIndependentObject(id, objectRelativeLocation, etag, saveData, function() {
            jq.unblockUI();
            $modal.foundation('reveal', 'close');
            me.ReInitialize();
        }, me.CommonOperationErrorHandler);
    }

    DeleteObject($source) {
        var id = $source.data("objectid");
        var domainName = $source.data("domainname");
        var objectName = $source.data("objectname");
        var me = this;
        var jq:any = $;
        jq.blockUI({ message: '<h2>Deleting...</h2>' });
        this.currOPM.DeleteIndependentObject(domainName, objectName, id, function(responseData) {
            jq.unblockUI();
            me.ReInitialize();
        }, me.CommonOperationErrorHandler);
    }

    SavePageContent($source) {
        var me = this;
        var $hostSection = $source.closest(".oipdynamiccontenteditorsection");
        var $editControls = $hostSection.find(".oipdynamiceditinput");
        var contentsToSave = [];
        var imageItemsArray = [];
        $editControls.each(function() {
            var $control = $(this);
            var currID = $control.attr("data-contentid");
            var currContent = me.getObjectByID(me.currData.DynamicContents.CollectionContent, currID);
            if(!currContent)
                throw "Object not found";
            var objectRelativeLocation = currContent.RelativeLocation;
            var eTag = currContent.MasterETag;
            var isChanged:Boolean = false;
            var controlValue = $control.val();
            var propertyName:string = null;
            var isImage = false;
            switch(currContent.EditType) {
                case "RICHTEXT":
                    propertyName = "ENC.Content";
                    isChanged = controlValue != currContent.Content;
                    break;
                case "RAWLINE":
                case "RAWMULTILINE":
                case "":
                    propertyName = "ENC.RawContent";
                    isChanged = controlValue != currContent.RawContent;
                    break;
                case "IMAGESMALL":
                case "IMAGELARGE":
                    isImage = true;
            }
            if(isChanged) {
                var encodedValue = $('<div/>').text(controlValue).html();
                var saveData = {};
                saveData[propertyName] = encodedValue;
                contentsToSave.push({
                    "ContentObject": currContent,
                    "SaveData": saveData
                });
            }
            if(isImage) {
                imageItemsArray.push({
                    "ContentObject": currContent
                });
            }
        });
        if(contentsToSave.length > 0 || imageItemsArray.length > 0) {
            contentsToSave = contentsToSave.reverse();
            imageItemsArray = imageItemsArray.reverse();
            me.SaveAllContents(contentsToSave, imageItemsArray);
        }
    }

    //ActivelySavingContent = [];
    SaveAllContents(contentsToSave, imageItemsArray) {
        var me = this;
        //me.ActivelySavingContent = contentsToSave;
        var jq:any = $;
        jq.blockUI({ message: "<h2>Saving " + contentsToSave.length + " objects...</h2>" });
        me.SaveNextActiveUntilNone(contentsToSave, imageItemsArray);
    }

    SaveNextActiveUntilNone(contentsToSave:any[], imageItemsArray:any[]) {
        var me = this;
        var jq:any = $;
        if(contentsToSave.length == 0) {
            if(imageItemsArray.length == 0) {
                jq.blockUI({ message: "<h2>Preparing to reload contents...</h2>" });
                setTimeout(function() {
                    jq.unblockUI();
                    me.ReInitialize();
                }, 3500);
                return;
            }
            console.log("Image saving to check: " + imageItemsArray.length);
            var imageInfo = imageItemsArray.pop();
            var contentObject = imageInfo.ContentObject;
            var objectID = contentObject.ID;
            var etag = contentObject.MasterETag;
            var title = contentObject.Title;
            var relativeLocation = contentObject.RelativeLocation;

            saveData = {};
            me.currOPM.AppendBinaryFileValuesToData(objectID, saveData, function () {
                if($.isEmptyObject(saveData) == false) {
                    jq.blockUI({ message: "<h2>Saving image... " + title + "</h2>" });
                    me.currOPM.SaveIndependentObject(objectID, relativeLocation, etag, saveData, function() {
                        console.log("Saved succesfully: " + title )
                        setTimeout(function() {
                            me.SaveNextActiveUntilNone(contentsToSave, imageItemsArray);
                        }, 10);
                    }, function(jqXhr, textStatus, errorThrown) {
                        var errorObject = JSON.parse(jqXhr.responseText);
                        //var wnd:any = window;
                        //wnd.DisplayErrorDialog("Error", errorObject.ErrorType, errorObject.ErrorText);
                        console.log("Error on save: " + title + " error: " + errorObject.ErrorType + " errortext: " + errorObject.ErrorText);
                        setTimeout(function() {
                            me.SaveNextActiveUntilNone(contentsToSave, imageItemsArray);
                        }, 10);
                    });
                } else {
                    setTimeout(function() {
                        me.SaveNextActiveUntilNone(contentsToSave, imageItemsArray);
                    }, 10);
                }
            });


        } else {
            console.log("Saving todo: " + contentsToSave.length);
            var currentToSave = contentsToSave.pop();
            var contentObject = currentToSave.ContentObject;
            var saveData = currentToSave.SaveData;
            var objectID = contentObject.ID;
            var etag = contentObject.MasterETag;
            var title = contentObject.Title;
            var relativeLocation = contentObject.RelativeLocation;

            jq.blockUI({ message: "<h2>Saving " + contentObject.Title + " </h2>" });
            me.currOPM.SaveIndependentObject(objectID, relativeLocation, etag, saveData, function() {
                console.log("Saved succesfully: " + title )
                setTimeout(function() {
                    me.SaveNextActiveUntilNone(contentsToSave, imageItemsArray);
                }, 10);
            }, function(jqXhr, textStatus, errorThrown) {
                var errorObject = JSON.parse(jqXhr.responseText);
                //var wnd:any = window;
                //wnd.DisplayErrorDialog("Error", errorObject.ErrorType, errorObject.ErrorText);
                console.log("Error on save: " + title + " error: " + errorObject.ErrorType + " errortext: " + errorObject.ErrorText);
                setTimeout(function() {
                    me.SaveNextActiveUntilNone(contentsToSave, imageItemsArray);
                }, 10);
            });
        }

    }



}

export = DynamicContentViewController;