/**
* Created by kalle on 2.6.2014.
*/
var AppScripts;
(function (AppScripts) {
    var Common = (function () {
        function Common() {
        }
        Common.repeatStr = function (str, num) {
            return new Array(num + 1).join(str);
        };

        Common.ConvertCategoriesFromParentToChildren = function (categoryArray) {
            var map = {};
            map["-"] = {
                UI_ChildrenCategories: []
            };
            for (var i = 0; i < categoryArray.length; i++) {
                var obj = categoryArray[i];
                obj.UI_ChildrenCategories = [];
                map[obj.ID] = obj;
            }
            for (var i = 0; i < categoryArray.length; i++) {
                var obj = categoryArray[i];
                var parentID = obj.ParentCategoryID ? obj.ParentCategoryID : "-";
                if (!map[parentID]) {
                    /*
                    map[parentID] = {
                    UI_ChildrenCategories: []
                    };*/
                    parentID = "-";
                }
                map[parentID].UI_ChildrenCategories.push(obj);
            }
            if (categoryArray.length == 0)
                return [];
            return map["-"].UI_ChildrenCategories;
        };

        Common.GetCategoryListWithTitleIndentation = function (categoryList, currDept) {
            var resultList = [];
            if (!currDept)
                currDept = 0;
            var currIndentString = Common.repeatStr("&nbsp;", currDept * 3);
            var marginIndentation = currDept * 30;
            for (var i = 0; i < categoryList.length; i++) {
                var currCat = categoryList[i];
                currCat.UI_TitleIndented = currIndentString + currCat.Title;
                currCat.UI_MarginIndented = marginIndentation;
                resultList.push(currCat);
                var children = currCat.UI_ChildrenCategories;
                if (children.length > 0) {
                    var childrenResult = Common.GetCategoryListWithTitleIndentation(children, currDept + 1);
                    resultList = resultList.concat(childrenResult);
                }
            }
            return resultList;
        };
        return Common;
    })();
    AppScripts.Common = Common;
})(AppScripts || (AppScripts = {}));
