(function(){dust.register("category_rankitem.dust",body_0);function body_0(chk,ctx){return chk.section(ctx.get("RankItems"),ctx,{"block":body_1},null);}function body_1(chk,ctx){return chk.write("<li class=\"dd-item dd3-item\" data-id=\"").reference(ctx.get("ID"),ctx,"h").write("\"><div class=\"dd-handle dd3-handle\"></div><div class=\"dd3-content\">").reference(ctx.get("Title"),ctx,"h").write("</div></li>");}return body_0;})();