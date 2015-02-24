(function(){dust.register("Groups.dust",body_0);function body_0(chk,ctx){return chk.exists(ctx.get("GroupCreationRequirementMessage"),ctx,{"else":body_1,"block":body_9},null);}function body_1(chk,ctx){return chk.write("<div class=\"row\"><div class=\"small-12 medium-6 large-6 columns\"><h4 class=\"boldieText\">My Groups</h4>").exists(ctx.get("DefaultGroup"),ctx,{"block":body_2},null).write("<div><table id=\"collaborators-table\" style=\"text-align: left;\"><tr><th>View</th><th>Group</th><th>Role</th><th>URL</th><th>Make Default</th></tr>").section(ctx.get("Roles"),ctx,{"block":body_4},null).write("</table></div></div><div class=\"small-12 medium-6 large-6 columns show-for-medium-up\">").partial("command_button.dust",ctx,{"command":"OpenCreateNewGroupModal","button_label":"Create New Group","style":"float:right !important;"}).write("</div></div>").partial("modal_begin.dust",ctx,{"modal_name":"CreateNewGroupModal"}).write("<h3>Create New Group</h3><div class=\"row\"><div class=\"large-12 columns\"><label>Group Name</label><input name=\"GroupName\" style=\"width: 200px\" /></div></div><div class=\"row\" style=\"margin-top: 20px;\"><div class=\"large-12 columns\">").partial("insidemodal_button.dust",ctx,{"command":"Common_CloseOpenModal","button_label":"Cancel","style":"float: right;"}).write("<div style=\"width: 10px;float: right;\">&nbsp;</div>").partial("insidemodal_button.dust",ctx,{"command":"CreateNewGroup","button_label":"Create Group!","style":"float:right;"}).write("</div></div>").partial("modal_end.dust",ctx,null);}function body_2(chk,ctx){return chk.write("<div><table style=\"text-align: left;\"><tr><th style=\"color: green\">Default Group</th><th style=\"color: green\">Role</th><th style=\"color: green\">URL</th><th style=\"color: green\">Clear Default</th></tr>").section(ctx.get("DefaultGroup"),ctx,{"block":body_3},null).write("</table></div>");}function body_3(chk,ctx){return chk.write("<tr><td style=\"text-transform: none !important;\"><a href=\"").reference(ctx.get("URL"),ctx,"h").write("\">").reference(ctx.get("Title"),ctx,"h").write("</a></td><td style=\"text-transform: none !important; font-style: italic;\">Moderator</td><td style=\"text-transform: none !important; font-style: italic;\">").reference(ctx.get("URL"),ctx,"h").write("</td><td>").partial("command_button_begin.dust",ctx,{"nobutton":"true","command":"ClearDefaultGroup"}).partial("command_button_end.dust",ctx,{"icon_class_name":"icon-star"}).write("</td></tr>");}function body_4(chk,ctx){return chk.section(ctx.get("ModeratorInGroups"),ctx,{"block":body_5},null).section(ctx.get("MemberInGroups"),ctx,{"block":body_7},null);}function body_5(chk,ctx){return chk.section(ctx.get("CollectionContent"),ctx,{"block":body_6},null);}function body_6(chk,ctx){return chk.write("<tr><td style=\"width: 400px\"><a href=\"").reference(ctx.get("URL"),ctx,"h").write("\"><iframe height=\"200px\" src=\"").reference(ctx.get("URL"),ctx,"h").write("cpanel/html/statustile_account.html\" frameborder=\"0\" /></a></td><td style=\"text-transform: none !important;\"><a href=\"").reference(ctx.get("URL"),ctx,"h").write("\">").reference(ctx.get("Title"),ctx,"h").write("</a></td><td style=\"text-transform: none !important; font-style: italic;\">Moderator</td><td style=\"text-transform: none !important; font-style: italic;\">").reference(ctx.get("URL"),ctx,"h").write("</td><td>").partial("command_button_begin.dust",ctx,{"nobutton":"true","command":"SetAsDefaultGroup"}).write("data-groupurl=\"").reference(ctx.get("URL"),ctx,"h").write("\"").partial("command_button_end.dust",ctx,{"icon_class_name":"icon-star-empty"}).write("</td></tr>");}function body_7(chk,ctx){return chk.section(ctx.get("CollectionContent"),ctx,{"block":body_8},null);}function body_8(chk,ctx){return chk.write("<tr><td style=\"width: 400px\"><a href=\"").reference(ctx.get("URL"),ctx,"h").write("\"><iframe src=\"").reference(ctx.get("URL"),ctx,"h").write("cpanel/html/statustile_account.html\" frameborder=\"0\" /></a></td><td style=\"text-transform: none !important;\"><a href=\"").reference(ctx.get("URL"),ctx,"h").write("\">").reference(ctx.get("Title"),ctx,"h").write("</a></td><td style=\"text-transform: none !important; font-style: italic;\">Member</td><td style=\"text-transform: none !important; font-style: italic;\">").reference(ctx.get("URL"),ctx,"h").write("</td><td>").partial("command_button_begin.dust",ctx,{"nobutton":"true","command":"SetAsDefaultGroup"}).write("data-groupurl=\"").reference(ctx.get("URL"),ctx,"h").write("\"").partial("command_button_end.dust",ctx,{"icon_class_name":"icon-star-empty"}).write("</td></tr>");}function body_9(chk,ctx){return chk.write("<h4>").reference(ctx.get("GroupCreationRequirementMessage"),ctx,"h").write("</h4>");}return body_0;})();