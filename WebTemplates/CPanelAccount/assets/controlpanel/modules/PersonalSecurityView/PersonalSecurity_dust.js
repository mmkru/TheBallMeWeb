(function(){dust.register("PersonalSecurity.dust",body_0);function body_0(chk,ctx){return chk.write("<div name=\"EmailRegistrationNotification\" style=\"visibility: hidden\"><h1 style=\"color:green\">Please register at least one email :-)!</h1><p>Registering at least one email is required for the other collaborators to reach you.</p><p><h3 style=\"color:green\">The registration process goes as following:</h3><ul><li>Click on Register New Email</li><li>Enter your desired email to field</li><li>Click \"Send Validation Email\"</li><li>Go to your email inbox and click through the validation link to verify the email address.</li></ul></p></div>").exists(ctx.getPath(false,["EmailCollection","CollectionContent"]),ctx,{"block":body_1},null).partial("command_button.dust",ctx,{"command":"OpenRegisterNewEmailModal","button_label":"Register New Email","style":"float:right !important;"}).partial("modal_begin.dust",ctx,{"modal_name":"RegisterNewEmailModal"}).write("<h3>Register New Email or Merge Accounts</h3><div class=\"row\"><div class=\"large-12 columns\"><label>Email to Register or Merge Accounts with</label><input name=\"EmailAddress\" style=\"width: 200px\" /></div></div><div class=\"row\" style=\"margin-top: 20px;\"><div class=\"large-12 columns\">").partial("insidemodal_button.dust",ctx,{"command":"Common_CloseOpenModal","button_label":"Cancel","style":"float: right;"}).write("<div style=\"width: 10px;float: right;\">&nbsp;</div>").partial("insidemodal_button.dust",ctx,{"command":"MergeAccountsByEmail","button_label":"Merge Accounts","style":"float:right;"}).write("<div style=\"width: 10px;float: right;\">&nbsp;</div>").partial("insidemodal_button.dust",ctx,{"command":"RegisterNewEmail","button_label":"Register!","style":"float:right;"}).write("</div></div>").partial("modal_end.dust",ctx,null);}function body_1(chk,ctx){return chk.write("<h3>Your Registered Emails</h3><table><tr><th>Email Address</th><th>Remove</th></tr>").section(ctx.getPath(false,["EmailCollection","CollectionContent"]),ctx,{"block":body_2},null).write("</table>");}function body_2(chk,ctx){return chk.write("<tr><td>").reference(ctx.get("EmailAddress"),ctx,"h").write("</td><td>").partial("command_icon.dust",ctx,{"command":"UnRegisterEmail","command_args":body_3,"icon_class_name":"icon-remove-sign"}).write("</td></tr>");}function body_3(chk,ctx){return chk.reference(ctx.get("EmailAddress"),ctx,"h");}return body_0;})();