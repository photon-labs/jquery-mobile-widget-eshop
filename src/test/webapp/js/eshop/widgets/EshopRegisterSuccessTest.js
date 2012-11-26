/*global require */

require(  [ "jquery", "eshop/widgets/RegisterSuccess", "eshop/widgets/EShopAPI", "eshop/widgets/Phresco"], function($, RegisterSuccess, EShopAPI, Phresco) {

	//var equal = QUnit.equal, notEqual =  QUnit.notEqual, expect = QUnit.expect, testForRegisterSuccess = QUnit.test, testForRegisterFailure = QUnit.test;

	/**
	 * Test that the setMainContent method sets the text in the RegisterSuccess-widget
	 */
	  module("RegisterSuccess.js;RegisterSuccess");
	test("Testing RegisterSuccess-widget unite test case for  RegisterSuccess.", function() {
		var api, phrescoapi, registerSuccess, output1, register, resgisterresponse, output2, mainContent, contactus,
		selection, divleft, contactdescrip, myCart, log_div, log_innerdiv, log_innerdiv1,  registrationStatus, 
		statusMsg, userStatus, userstatusMsg, log_txtfname, log_txt_lftfname, log_txt_rhtfname, log_txtEmail,
		log_txt_lftEmail, log_txt_rhtEmail, cleardiv, register1 = {}, resgisterresponse1 = {}, log_heading, log_txt_div;
		
		
		registerSuccess = new RegisterSuccess();
		api = new EShopAPI();
		phrescoapi = new Phresco();
		
		registerSuccess.api = api;
		registerSuccess.phrescoapi = phrescoapi;
		
		register = {email:"sur@gmail.com", firstName:"suresh", lastName:"kumar", password:"suresh1506", phoneNumber:"9566083860"};
		resgisterresponse = {message:"Inserted", successMessage:"Success", userId:21};
		
		registerSuccess.api.resgisterresponse = resgisterresponse;
		registerSuccess.phrescoapi.register = register;
		output1 = registerSuccess.renderUI();
		
		register1 = {email:"sur@gmail.com", firstName:"suresh", lastName:"kumar", password:"suresh1506", phoneNumber:"9566083860"};
		resgisterresponse1 = {message:"Inserted", successMessage:	"Success", userId:21};
		
		mainContent = $('<div></div>');
        contactus = $('<div id="maincontact">');
        selection = $('<section id="contact">');
        divleft = $('<div id="">');
        contactdescrip = $('<div class="contactdescrip">');
        myCart = $('<div class="mycart_div"></div>');
        log_div = $('<div class="log_div"></div>');
        log_innerdiv = $('<div class="log_innerdiv"></div>');
        log_innerdiv1 = $('<div class="log_innerdiv1"></div>');
        log_heading = $('<div class="log_heading">Register</div>');
        log_txt_div = $('<div class="log_txt_div"></div>');
        registrationStatus = $('<div class="log_txt"></div>');
        statusMsg = $('<div class="log_txt_lft">Registration Status :' + resgisterresponse1.successMessage+ '</div>');
        userStatus = $('<div class="log_txt"></div>');
        userstatusMsg = $('<div class="log_txt_lft">User Status :' + resgisterresponse1.message+ ' </div>');
        log_txtfname = $('<div class="log_txt">');
        log_txt_lftfname = $('<div class="log_txt_lft">Name : </div>');
        log_txt_rhtfname = $('<div class="log_txt_lft">' + register1.firstName + register1.lastName + '</div>');
        log_txtEmail = $('<div class="log_txt">');
        log_txt_lftEmail = $('<div class="log_txt_lft">Email : </div>');
        log_txt_rhtEmail = $('<div class="log_txt_lft">' + register1.email + '</div>');
        cleardiv = $('<div class="clear"></div>');     
        registrationStatus.append(statusMsg);
        userStatus.append(userstatusMsg);
        log_txtfname.append(log_txt_lftfname);
        log_txtfname.append(log_txt_rhtfname);
        log_txtEmail.append(log_txt_lftEmail);
        log_txtEmail.append(log_txt_rhtEmail);
        log_txt_div.append(registrationStatus);
        log_txt_div.append(userStatus);
        log_txt_div.append(log_txtfname);
        log_txt_div.append(log_txtEmail);
        log_innerdiv1.append(log_heading);
        log_innerdiv1.append(log_txt_div);
        log_innerdiv.append(log_innerdiv1);
        log_div.append(log_innerdiv);
        myCart.append(log_div);
        contactdescrip.append(myCart);
        divleft.append(contactdescrip);    
        divleft.append(cleardiv);
        selection.append(divleft);
        contactus.append(selection);
        mainContent.append(contactus);
		output2 = mainContent;
		equal(output1.html() , output2.html() , "success case for RegisterSuccess-widget");
	});
 
	 test("Testing RegisterSuccess-widget unite test case for same RegisterFailure.", function() {
			
			var api, phrescoapi, registerSuccess, output1, register, resgisterresponse, output2, 
			mainContent, contactus, selection, divleft, contactdescrip, myCart, log_div, log_innerdiv, log_innerdiv1,  
			registrationStatus, statusMsg, userStatus, userstatusMsg, log_txtfname, log_txt_lftfname, log_txt_rhtfname, 
			log_txtEmail, log_txt_lftEmail, log_txt_rhtEmail, cleardiv, register1 = {}, resgisterresponse1 = {}, log_heading, log_txt_div;
			
			registerSuccess = new RegisterSuccess();
			api = new EShopAPI();
			phrescoapi = new Phresco();
			
			registerSuccess.api = api;
			registerSuccess.phrescoapi = phrescoapi;
			
			register = {email:"sur@gmail.com", firstName:"suresh", lastName:"kumar", password:"suresh1506", phoneNumber:"9566083860"};
			resgisterresponse = {message:"Already exist", successMessage:"Failed", userId:0};
			
			registerSuccess.api.resgisterresponse = resgisterresponse;
			registerSuccess.phrescoapi.register = register;
			
			output1 = registerSuccess.renderUI();
			
			register1 = {email:"sur@gmail.com", firstName:"suresh", lastName:"kumar", password:"suresh1506", phoneNumber:"9566083860"};
			resgisterresponse1 = {message:"Already exist", successMessage:	"Failed", userId:0};
			
			mainContent = $('<div></div>');
			contactus = $('<div id="maincontact">');
			selection = $('<section id="contact">');
			divleft = $('<div id="">');
			contactdescrip = $('<div class="contactdescrip">');
			myCart = $('<div class="mycart_div"></div>');
			log_div = $('<div class="log_div"></div>');
			log_innerdiv = $('<div class="log_innerdiv"></div>');
			log_innerdiv1 = $('<div class="log_innerdiv1"></div>');
			log_heading = $('<div class="log_heading">Register</div>');
			log_txt_div = $('<div class="log_txt_div"></div>');
			registrationStatus = $('<div class="log_txt"></div>');
			statusMsg = $('<div class="log_txt_lft">Registration Status :' + resgisterresponse1.successMessage+ '</div>');
			userStatus = $('<div class="log_txt"></div>');
			userstatusMsg = $('<div class="log_txt_lft">User Status :' + resgisterresponse1.message+ ' </div>');
			log_txtfname = $('<div class="log_txt">');
			log_txt_lftfname = $('<div class="log_txt_lft">Name : </div>');
			log_txt_rhtfname = $('<div class="log_txt_lft">' + register1.firstName + register1.lastName + '</div>');
			log_txtEmail = $('<div class="log_txt">');
			log_txt_lftEmail = $('<div class="log_txt_lft">Email : </div>');
			log_txt_rhtEmail = $('<div class="log_txt_lft">' + register1.email + '</div>');
			cleardiv = $('<div class="clear"></div>');     
			registrationStatus.append(statusMsg);
			userStatus.append(userstatusMsg);
			log_txtfname.append(log_txt_lftfname);
			log_txtfname.append(log_txt_rhtfname);
			log_txtEmail.append(log_txt_lftEmail);
			log_txtEmail.append(log_txt_rhtEmail);
			log_txt_div.append(registrationStatus);
			log_txt_div.append(userStatus);
			log_txt_div.append(log_txtfname);
			log_txt_div.append(log_txtEmail);
			log_innerdiv1.append(log_heading);
			log_innerdiv1.append(log_txt_div);
			log_innerdiv.append(log_innerdiv1);
			log_div.append(log_innerdiv);
			myCart.append(log_div);
			contactdescrip.append(myCart);
			divleft.append(contactdescrip);    
			divleft.append(cleardiv);
			selection.append(divleft);
			contactus.append(selection);
			mainContent.append(contactus);
			output2 = mainContent;
			equal(output1.html() , output2.html() , "failure case for RegisterSuccess-widget");
	});
});