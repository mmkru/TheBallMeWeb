(function(){dust.register("nodetiles.dust",body_0);function body_0(chk,ctx){return chk.write("<div class=\"row-fluid filter option-set clearfix \" data-filter-group=\"DynCat\"><div class=\"filter-box\"><button type=\"button\" class=\"btn btn-filter\" data-toggle=\"collapse\" data-target=\".isotope-sort\">Filter</button><ul class=\"isotope-sort categories\"><li class=\"isotope-sort-item\"><a href=\"#\" class=\"filter badge active \" style=\"color: black;font-size: large\" data-filter-value=\".ROOTCATEGORY\"><i class=\"icon-home\"></i></a></li>").section(ctx.get("RootCategories"),ctx,{"block":body_1},null).write("</ul></div><style type=\"text/css\">html {overflow-y: auto;overflow-x: hidden;}.nodetile {width: 200px;margin: 9px;border: solid;padding: 5px;border: 1px solid gold;/*border-radius: 7px;*/background-color: #f8fff8;/*background-color: blue;*/box-shadow: 0 0 12px #81674d;-moz-box-shadow: 0 0 12px #81674d;-webkit-box-shadow: 0 0 12px #81674d;}div.excerpt {font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size: 14px;color: #333;line-height: 1.4285;}.tileimagecontainer {}.tileimage {width: 100%;}.embedimage {width: 100%;height:176px;}</style><div id=\"container\">").section(ctx.get("Nodes"),ctx,{"block":body_4},null).write("</div></div><script src='../assets/js/jquery.isotope.min.js'></script><!--filter and masonry script--><script src='../assets/js/jquery.isotope.init.js'></script><!--custom settings--><script>$(function(){var $container = $('#container'),filters = {};$container.isotope({itemSelector : '.nodetile',filter: '.ROOTCATEGORY'});var loaded = 0;var numImages = $(\"img\").length;$(\"img\").load(function() {++loaded;if (loaded === numImages) {$container.isotope('reLayout');}});/* filter buttons */$('a.filter').click(function(){var $this = $(this);/* don't proceed if already selected */if ( $this.hasClass('selected') ) {return false;}/*alert(\"FILTERING!\");*/var $optionSet = $this.parents('.option-set');/* change selected class */$optionSet.find('.selected').removeClass('selected');$this.addClass('selected');/*// store filter value in object// i.e. filters.color = 'red'*/var group = $optionSet.attr('data-filter-group');filters[ group ] = $this.attr('data-filter-value');/* // convert object into array */var isoFilters = [];for ( var prop in filters ) {isoFilters.push( filters[ prop ] )}var selector = isoFilters.join('');$container.isotope({ filter: selector });return false;});if(navigator.appName != 'Microsoft Internet Explorer'){$container.imagesLoaded( function() {$container.isotope({filter : '.ROOTCATEGORY'});});}});$(function() {$(\"#TileDefaultFilter\").trigger('click');var getOIParticleUrl = function (type, id) {var prefix;var suffix = \"_DefaultView.phtml\";switch (type) {case \"textcontent\":return \"../../AaltoGlobalImpact.OIP/TextContent/\" + id + \".json\";case \"news\":prefix = \"AaltoGlobalImpact.OIP.Blog_\";break;case \"activity\":prefix = \"AaltoGlobalImpact.OIP.Activity_\";break;}return prefix + id + suffix;};var getURLParameter = function (name) {return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, \"\"])[1].replace(/\\+/g, '%20')) || null;};var typePar = getURLParameter(\"type\");var idPar = getURLParameter(\"id\");if (typePar != null && idPar != null) {var oipArticleUrl = getOIParticleUrl(typePar, idPar);OipOpenArticle(oipArticleUrl);window.history.pushState(\"string\", \"Schools The Ball\", \"index.html\");}});</script>");}function body_1(chk,ctx){return chk.write("<li class=\"isotope-sort-item\"><a href=\"#\"  class=\"filter badge\" style=\"background-color: ").section(ctx.get("catTagColor"),ctx,{"block":body_2},null).write("; color:").section(ctx.get("catTagTextColor"),ctx,{"block":body_3},null).write("; font-size: large\"data-filter-value=\".").reference(ctx.get("CategoryName"),ctx,"h").write("\">").reference(ctx.get("Title"),ctx,"h").write("</a></li>");}function body_2(chk,ctx){return chk;}function body_3(chk,ctx){return chk;}function body_4(chk,ctx){return chk.write("<div class=\"\"><!-- three_col four_col two_col -->").section(ctx.get("CollectionContent"),ctx,{"block":body_5},null).write("</div>");}function body_5(chk,ctx){return chk.write("<div class=\"nodetile ").exists(ctx.get("Categories"),ctx,{"else":body_6,"block":body_7},null).write(" \">").exists(ctx.get("ImageBaseUrl"),ctx,{"else":body_9,"block":body_11},null).write("<div class=\"entry-summary\"><h4>").exists(ctx.get("IsCategoryFilteringNode"),ctx,{"else":body_19,"block":body_24},null).write("</h4><div class=\"excerpt\">").reference(ctx.get("ExcerptRendered"),ctx,"h",["s"]).write("</div><p class=\"w5\"><i class=\"icon-tag\"></i>").section(ctx.get("Categories"),ctx,{"block":body_29},null).write("<br><span><i class=\"icon-group\"></i></span> ").section(ctx.get("Authors"),ctx,{"block":body_32},null).write("<br><span><i class=\"icon-calendar\"></i></span>").reference(ctx.get("TimestampText"),ctx,"h").write("</p></div></div>");}function body_6(chk,ctx){return chk.write("ROOTCATEGORY");}function body_7(chk,ctx){return chk.section(ctx.get("Categories"),ctx,{"block":body_8},null);}function body_8(chk,ctx){return chk.reference(ctx.get("CategoryName"),ctx,"h").write(" ");}function body_9(chk,ctx){return chk.helper("eq",ctx,{"block":body_10},{"key":ctx.get("TechnicalSource"),"value":"EMBEDDEDCONTENT"});}function body_10(chk,ctx){return chk.write("<iframe style=\"width: 100%;height: 100%\" ").reference(ctx.get("ActualContentUrl"),ctx,"h",["s"]).write("></iframe>");}function body_11(chk,ctx){return chk.write("<div class=\"tileimagecontainer\">").exists(ctx.get("IsCategoryFilteringNode"),ctx,{"else":body_12,"block":body_17},null).write("</div>");}function body_12(chk,ctx){return chk.helper("eq",ctx,{"else":body_13,"block":body_16},{"key":ctx.get("TechnicalSource"),"value":"LINKTOCONTENT"});}function body_13(chk,ctx){return chk.helper("eq",ctx,{"else":body_14,"block":body_15},{"key":ctx.get("TechnicalSource"),"value":"IMAGE"});}function body_14(chk,ctx){return chk.write("<a class=\"hover oipclicktoview\" href=\"#\" data-contenturl=\"").reference(ctx.get("ActualContentUrl"),ctx,"h").write(".json\"><img class=\"tileimage\" src=\"").reference(ctx.get("ImageBaseUrl"),ctx,"h").write("_320x240_crop").reference(ctx.get("ImageExt"),ctx,"h").write("\" alt=\"\" /><span class=\"plus\"></span></a>");}function body_15(chk,ctx){return chk.write("<img class=\"tileimage\" src=\"").reference(ctx.get("ImageBaseUrl"),ctx,"h").write("_320x240_crop").reference(ctx.get("ImageExt"),ctx,"h").write("\" alt=\"\" /><span class=\"plus\"></span>");}function body_16(chk,ctx){return chk.write("<a class=\"hover\" href=\"").reference(ctx.get("ActualContentUrl"),ctx,"h").write("\"><img class=\"tileimage\" src=\"").reference(ctx.get("ImageBaseUrl"),ctx,"h").write("_320x240_crop").reference(ctx.get("ImageExt"),ctx,"h").write("\" alt=\"\" /><span class=\"plus\"></span></a>");}function body_17(chk,ctx){return chk.write("<a class=\"hover filter\" href=\"#\" data-filter-value=\"").section(ctx.getPath(false,["CategoryFilters","CollectionContent"]),ctx,{"block":body_18},null).write("\"><img class=\"tileimage\" src=\"").reference(ctx.get("ImageBaseUrl"),ctx,"h").write("_320x240_crop").reference(ctx.get("ImageExt"),ctx,"h").write("\" alt=\"\" /><span class=\"plus\"></span></a>");}function body_18(chk,ctx){return chk.write(".").reference(ctx.get("Content"),ctx,"h");}function body_19(chk,ctx){return chk.helper("eq",ctx,{"else":body_20,"block":body_23},{"key":ctx.get("TechnicalSource"),"value":"LINKTOCONTENT"});}function body_20(chk,ctx){return chk.helper("eq",ctx,{"else":body_21,"block":body_22},{"key":ctx.get("TechnicalSource"),"value":"IMAGE"});}function body_21(chk,ctx){return chk.write("<a class=\"oipclicktoview\" href=\"#\" data-contenturl=\"").reference(ctx.get("ActualContentUrl"),ctx,"h").write(".json\">").reference(ctx.get("Title"),ctx,"h").write("</a>");}function body_22(chk,ctx){return chk.write("<div>").reference(ctx.get("Title"),ctx,"h").write("</div>");}function body_23(chk,ctx){return chk.write("<a href=\"").reference(ctx.get("ActualContentUrl"),ctx,"h").write("\">").reference(ctx.get("Title"),ctx,"h").write("</a>");}function body_24(chk,ctx){return chk.write("<a class=\"filter badge\" href=\"#\"").section(ctx.getPath(false,["CategoryFilters","CollectionContent"]),ctx,{"block":body_25},null).write("data-filter-value=\"").section(ctx.getPath(false,["CategoryFilters","CollectionContent"]),ctx,{"block":body_28},null).write("\">").reference(ctx.get("Title"),ctx,"h").write("</a>");}function body_25(chk,ctx){return chk.write("style=\"background-color: ").section(ctx.get("catFilterTagColor"),ctx,{"block":body_26},null).write("; color:").section(ctx.get("catFilterTagTextColor"),ctx,{"block":body_27},null).write("\"");}function body_26(chk,ctx){return chk;}function body_27(chk,ctx){return chk;}function body_28(chk,ctx){return chk.write(".").reference(ctx.get("Content"),ctx,"h");}function body_29(chk,ctx){return chk.write("<a href=\"#\" class=\"filter badge\" style=\"background-color: ").section(ctx.get("catTagColor"),ctx,{"block":body_30},null).write("; color:").section(ctx.get("catTagTextColor"),ctx,{"block":body_31},null).write("\" data-filter-value=\".").reference(ctx.get("CategoryName"),ctx,"h").write("\">").reference(ctx.get("Title"),ctx,"h").write("</a>");}function body_30(chk,ctx){return chk;}function body_31(chk,ctx){return chk;}function body_32(chk,ctx){return chk.section(ctx.get("CollectionContent"),ctx,{"block":body_33},null);}function body_33(chk,ctx){return chk.reference(ctx.get("Content"),ctx,"h").write(" ");}return body_0;})();