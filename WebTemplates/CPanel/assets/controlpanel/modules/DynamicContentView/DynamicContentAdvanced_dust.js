(function(){dust.register("DynamicContentAdvanced.dust",body_0);function body_0(chk,ctx){return chk.section(ctx.get("DynamicContentGroups"),ctx,{"block":body_1},null).write("<br><canvas class=\"oipdynamiccontentlocationview\" width=\"320\" height=\"240\" style=\"background-color: white; border: solid;border-color: lightslategray;border-width: 1px\"></canvas><br>").section(ctx.get("DynamicContents"),ctx,{"block":body_6},null);}function body_1(chk,ctx){return chk.write("<h3>Content Groups</h3><table><tr><th colspan=\"2\">Act</th><th>Page</th><th>Header</th><th>Sort Value</th><th>Location</th><th>Content Items</th><th>Page Position</th><th>Del</th></tr>").section(ctx.get("CollectionContent"),ctx,{"block":body_2},null).write("</table>").partial("command_button.dust",ctx,{"button_label":"Add New Dynamic Content Group","command":"OpenAddDynamicContentGroupModal"});}function body_2(chk,ctx){return chk.write("<tr class=\"oiphover-showlocation\" data-pagelocation=\"").reference(ctx.get("PageLocation"),ctx,"h").write("\"><td>").partial("command_icon.dust",ctx,{"command":"EditDynamicContentGroup","command_args":body_3,"icon_class_name":"icon-edit"}).write("</td><td>").partial("command_icon.dust",ctx,{"command":"ViewDynamicContentGroup","command_args":body_4,"icon_class_name":"icon-eye-open"}).write("</td><td>").reference(ctx.get("HostName"),ctx,"h").write("</td><td>").reference(ctx.get("GroupHeader"),ctx,"h").write("</td><td>").reference(ctx.get("SortValue"),ctx,"h").write("</td><td>").reference(ctx.get("PageLocation"),ctx,"h").write("</td><td>").reference(ctx.get("ContentItemNames"),ctx,"h").write("</td><td class=\"oipcanvas-showlocation\" data-pagelocation=\"").reference(ctx.get("PageLocation"),ctx,"h").write("\" style=\"border: solid;border-color:lightslategray;padding: 0px\"><canvas width=\"160\" height=\"120\" /></td><td>").partial("objectdeleteicon.dust",ctx,{"object_delete_title":body_5}).write("</td></tr>");}function body_3(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h");}function body_4(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h");}function body_5(chk,ctx){return chk.reference(ctx.get("ContentName"),ctx,"h");}function body_6(chk,ctx){return chk.write("<h3>Dynamic Content Items</h3><table><tr><th colspan=\"2\">Act</th><th>Page</th><th>Name</th><th>Query</th><th>Description</th><th>Del</th></tr>").section(ctx.get("CollectionContent"),ctx,{"block":body_7},null).write("</table>").partial("command_button.dust",ctx,{"button_label":"Add New Dynamic Content","command":"OpenAddDynamicContentModal"});}function body_7(chk,ctx){return chk.write("<tr class=\"oiphover-showlocation\" data-pagelocation=\"").reference(ctx.get("PageLocation"),ctx,"h").write("\"><td>").partial("command_icon.dust",ctx,{"command":"EditDynamicContent","command_args":body_8,"icon_class_name":"icon-edit"}).write("</td><td>").partial("command_icon.dust",ctx,{"command":"ViewDynamicContent","command_args":body_9,"icon_class_name":"icon-eye-open"}).write("</td><td>").reference(ctx.get("HostName"),ctx,"h").write("</td><td>").reference(ctx.get("ContentName"),ctx,"h").write("</td><td>").reference(ctx.get("ElementQuery"),ctx,"h").write("</td><td>").reference(ctx.get("Description"),ctx,"h").write("</td><td>").partial("objectdeleteicon.dust",ctx,{"object_delete_title":body_10}).write("</td></tr>");}function body_8(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h");}function body_9(chk,ctx){return chk.reference(ctx.get("ID"),ctx,"h");}function body_10(chk,ctx){return chk.reference(ctx.get("ContentName"),ctx,"h");}return body_0;})();