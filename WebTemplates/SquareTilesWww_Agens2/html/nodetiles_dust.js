(function(){dust.register("nodetiles.dust",body_0);function body_0(chk,ctx){return chk.write("<div class=\"text-center\" id=\"isotope_content_row\"><div class=\"filter-box\"><!--<div class=\"isotope-sort categories\"><a href=\"#\" class=\"isotope-sort-filter filter button\" data-filter-value=\".ROOTCATEGORY\"><i class=\"icon-home\"></i></a>").section(ctx.get("RootCategories"),ctx,{"block":body_1},null).write("</div>--></div><div id=\"tilecontainer\">").section(ctx.get("Nodes"),ctx,{"block":body_2},null).write("</div></div>");}function body_1(chk,ctx){return chk.write("<a href=\"#\"  class=\"isotope-sort-filter filter button\"data-categoryid=\"").reference(ctx.get("ID"),ctx,"h").write("\" data-filter-value=\".cat").reference(ctx.get("ID"),ctx,"h").write("\">").reference(ctx.get("Title"),ctx,"h").write("</a>");}function body_2(chk,ctx){return chk.write("<div class=\"\"><!-- three_col four_col two_col -->").section(ctx.get("CollectionContent"),ctx,{"block":body_3},null).write("</div>");}function body_3(chk,ctx){return chk.write("<div data-title=\"").reference(ctx.get("Title"),ctx,"h").write("\" class=\"nodetile ").exists(ctx.get("Categories"),ctx,{"else":body_4,"block":body_5},null).write(" \">").exists(ctx.get("ImageBaseUrl"),ctx,{"else":body_7,"block":body_9},null).write("<div class=\"entry-summary tiletextarea\"><h4>").exists(ctx.get("IsCategoryFilteringNode"),ctx,{"else":body_16,"block":body_21},null).write("</h4><div class=\"excerpt\">").reference(ctx.get("ExcerptRendered"),ctx,"h",["s"]).write("</div>").exists(ctx.get("IsCategoryFilteringNode"),ctx,{"else":body_22,"block":body_23},null).write("</div></div>");}function body_4(chk,ctx){return chk.write("ROOTCATEGORY");}function body_5(chk,ctx){return chk.section(ctx.get("Categories"),ctx,{"block":body_6},null);}function body_6(chk,ctx){return chk.write("cat").reference(ctx.get("ID"),ctx,"h").write(" ").reference(ctx.get("CategoryName"),ctx,"h").write(" ");}function body_7(chk,ctx){return chk.helper("eq",ctx,{"block":body_8},{"key":ctx.get("TechnicalSource"),"value":"EMBEDDEDCONTENT"});}function body_8(chk,ctx){return chk.write("<a style=\"max-height: 150px\" href=\"#\" class=\"oipclicktoview\" data-original-content-id=\"").reference(ctx.get("OriginalContentID"),ctx,"h").write("\"><iframe style=\"width: 100%;height: 100%\" ").reference(ctx.get("ActualContentUrl"),ctx,"h",["s"]).write("></iframe></a>");}function body_9(chk,ctx){return chk.write("<div class=\"tileimagecontainer\">").exists(ctx.get("IsCategoryFilteringNode"),ctx,{"else":body_10,"block":body_15},null).write("</div>");}function body_10(chk,ctx){return chk.helper("eq",ctx,{"else":body_11,"block":body_14},{"key":ctx.get("TechnicalSource"),"value":"LINKTOCONTENT"});}function body_11(chk,ctx){return chk.helper("eq",ctx,{"else":body_12,"block":body_13},{"key":ctx.get("TechnicalSource"),"value":"IMAGE"});}function body_12(chk,ctx){return chk.write("<a class=\"hover\" href=\"#con&type=").reference(ctx.get("TechnicalSource"),ctx,"h").write("&contentID=").reference(ctx.get("OriginalContentID"),ctx,"h").write("\" data-original-content-id=\"").reference(ctx.get("OriginalContentID"),ctx,"h").write("\"><img class=\"tileimage\" src=\"").reference(ctx.get("ImageBaseUrl"),ctx,"h").write("_320x240_crop").reference(ctx.get("ImageExt"),ctx,"h").write("\" alt=\"\" /><span class=\"plus\"></span></a>");}function body_13(chk,ctx){return chk.write("<img class=\"tileimage\" src=\"").reference(ctx.get("ImageBaseUrl"),ctx,"h").write("_320x240_crop").reference(ctx.get("ImageExt"),ctx,"h").write("\" alt=\"\" /><span class=\"plus\"></span>");}function body_14(chk,ctx){return chk.write("<a class=\"hover\" href=\"").reference(ctx.get("ActualContentUrl"),ctx,"h").write("\"><img class=\"tileimage\" src=\"").reference(ctx.get("ImageBaseUrl"),ctx,"h").write("_320x240_crop").reference(ctx.get("ImageExt"),ctx,"h").write("\" alt=\"\" /><span class=\"plus\"></span></a>");}function body_15(chk,ctx){return chk.write("<a class=\"hover filter\" href=\"#cat&categoryID=").reference(ctx.get("OriginalContentID"),ctx,"h").write("\" data-filter-value=\".cat").reference(ctx.get("OriginalContentID"),ctx,"h").write("\" data-categoryid=\"").reference(ctx.get("OriginalContentID"),ctx,"h").write("\"><img class=\"tileimage\" src=\"").reference(ctx.get("ImageBaseUrl"),ctx,"h").write("_320x240_crop").reference(ctx.get("ImageExt"),ctx,"h").write("\" alt=\"\" /><span class=\"plus\"></span></a>");}function body_16(chk,ctx){return chk.helper("eq",ctx,{"else":body_17,"block":body_20},{"key":ctx.get("TechnicalSource"),"value":"LINKTOCONTENT"});}function body_17(chk,ctx){return chk.helper("eq",ctx,{"else":body_18,"block":body_19},{"key":ctx.get("TechnicalSource"),"value":"IMAGE"});}function body_18(chk,ctx){return chk.write("<a class=\"stylelink tiletitle\" href=\"#con&type=").reference(ctx.get("TechnicalSource"),ctx,"h").write("&contentID=").reference(ctx.get("OriginalContentID"),ctx,"h").write("\" data-original-content-id=\"").reference(ctx.get("OriginalContentID"),ctx,"h").write("\">").reference(ctx.get("Title"),ctx,"h").write("</a><div class=\"tiletitlebottombar\"></div>");}function body_19(chk,ctx){return chk.write("<div>").reference(ctx.get("Title"),ctx,"h").write("</div>");}function body_20(chk,ctx){return chk.write("<a href=\"").reference(ctx.get("ActualContentUrl"),ctx,"h").write("\">").reference(ctx.get("Title"),ctx,"h").write("</a>");}function body_21(chk,ctx){return chk.write("<a class=\"filter button categorytiletitle\" href=\"#cat&categoryID=").reference(ctx.get("OriginalContentID"),ctx,"h").write("\"data-filter-value=\".cat").reference(ctx.get("OriginalContentID"),ctx,"h").write("\" data-categoryid=\"").reference(ctx.get("OriginalContentID"),ctx,"h").write("\">").reference(ctx.get("Title"),ctx,"h").write("</a>");}function body_22(chk,ctx){return chk.write("<a class=\"pricetag button\" href=\"#con&type=").reference(ctx.get("TechnicalSource"),ctx,"h").write("&contentID=").reference(ctx.get("OriginalContentID"),ctx,"h").write("\" data-original-content-id=\"").reference(ctx.get("OriginalContentID"),ctx,"h").write("\">").reference(ctx.get("OpenNodeTitle"),ctx,"h").write("</a>");}function body_23(chk,ctx){return chk;}return body_0;})();