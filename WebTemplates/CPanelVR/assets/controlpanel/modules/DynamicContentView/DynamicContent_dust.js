(function(){dust.register("DynamicContent.dust",body_0);function body_0(chk,ctx){return chk.write("<div class=\"small-12-5 medium-2-5 large-2-5 columns noPaddingRight\" style=\"float:none !important; display:inline-block !important;\"><button style=\"margin-bottom: 0;!important\" data-dropdown=\"drop-SelectDynamicContentPage\">Select Page...</button><br><ul id=\"drop-SelectDynamicContentPage\" class=\"f-dropdown\" data-dropdown-content>").section(ctx.get("Templates"),ctx,{"block":body_1},null).write("<li><a href=\"#\" style=\"background-color: red\" class=\"button oip-controller-command oip-dropdown-button\" data-oip-command=\"SetActiveSection\" data-templatename=\"AdvancedSection\">Page Template Management</a></li></ul></div><br>").section(ctx.get("Templates"),ctx,{"block":body_3},null).write("<div style=\"display: none\" class=\"oipdynamiccontenteditorsection\" name=\"AdvancedSection\">").partial("DynamicContentAdvanced.dust",ctx,null).write("</div>").partial("DynamicContentView_Modals.dust",ctx,null);}function body_1(chk,ctx){return chk.section(ctx.get("Keys"),ctx,{"block":body_2},null);}function body_2(chk,ctx){return chk.write("<li><a href=\"#\" class=\"button oip-controller-command oip-dropdown-button\" data-oip-command=\"SetActiveSection\" data-templatename=\"").reference(ctx.getPath(true,[]),ctx,"h").write("\">").reference(ctx.getPath(true,[]),ctx,"h").write("</a></li>");}function body_3(chk,ctx){return chk.section(ctx.get("Array"),ctx,{"block":body_4},null);}function body_4(chk,ctx){return chk.partial("DynamicContentPageHost.dust",ctx,null);}return body_0;})();