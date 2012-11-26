/*global require */

require(  [ "jquery", "eshop/widgets/LoginSuccess", "eshop/widgets/EShopAPI", "eshop/widgets/Phresco"], function($, LoginSuccess, EShopAPI, Phresco) {

	//var equal = QUnit.equal, notEqual = QUnit.notEqual, expect = QUnit.expect, testWithValidUser = QUnit.test, testwithinvaliduser = QUnit.test;
	
	/**
	 * Test that the setMainContent method sets the text in the shoppingcart-widget
	 */
	 module("LoginSuccess.js;LoginSuccess");
	test("Testing Login-Success widget with Valid User Credentials", function() {
		
		var loginsuccess, api, phrescoapi, output1, output2, mainContent = $('<div></div>'), myCart,
        userId = 0, log_div, log_innerdiv, log_innerdiv1, log_heading, log_txt_div, registrationStatus, statusMsg,
		log_txtEmail, log_txt_lftEmail, log_txt_rhtEmail, copydiv1, copyinnerdiv, copyinnerdiv1, copyheading,
        copyRight, privacyPolicy, poweredBy, loginresponse = {}, login = {};
		
		api = new EShopAPI();
		phrescoapi = new Phresco();
		loginsuccess = new LoginSuccess();
		
		api.loginresponse = { message:"success", successMessage:"Login Success", userName:"John Anderson"};
		phrescoapi.login = {loginEmail:"john@phresco.com"};
		
		loginsuccess.api = api;
		loginsuccess.phrescoapi = phrescoapi;
		
		output1 = loginsuccess.renderUI();
		
		loginresponse = { message:"success", successMessage:"Login Success", userName:"John Anderson"};
		login = {loginEmail:"john@phresco.com"};
		
		myCart = $('<div class="mycart_div"></div>');
        log_div = $('<div class="log_div"></div>');
        log_innerdiv = $('<div class="log_innerdiv"></div>');
        log_innerdiv1 = $('<div class="log_innerdiv1"></div>');
        log_heading = $('<div class="log_heading">Login</div>');
        log_txt_div = $('<div class="log_txt_div"></div>');
                            
        registrationStatus = $('<div class="log_txt"></div>');
        statusMsg = $('<div class="logStatus_txt">Status : '+ loginresponse.successMessage +'</div>');
        registrationStatus.append(statusMsg);
                
        log_txtEmail = $('<div class="log_txt">');
		log_txt_lftEmail = $('<div class="logStatus_txt">Email : '+ login.loginEmail +' </div>');
       /*  log_txt_rhtEmail = $('<div class="log_txt_lft"></div>'); */
        log_txtEmail.append(log_txt_lftEmail);
        log_txtEmail.append(log_txt_rhtEmail);
        
        log_txt_div.append(registrationStatus);
        log_txt_div.append(log_txtEmail);

        log_innerdiv1.append(log_heading);
        log_innerdiv1.append(log_txt_div);

        log_innerdiv.append(log_innerdiv1);
        log_div.append(log_innerdiv);
        myCart.append(log_div);
                                        
        copydiv1 = $('<div class="log_div"></div>');
        copyinnerdiv = $('<div class="log_innerdiv">');
        copyinnerdiv1 = $('<div class="log_innerdiv1">');
        copyheading = $('<div class="log_heading">');
        copyRight = $('<strong> E-Shop Phresco &copy; 2011 </strong>');
        privacyPolicy = $('<a class="link" href="#">Privacy Policy</a><br />');
        poweredBy = $('<a class="link" href="#">powered by Photon</a>');
        copyheading.append(copyRight);
        copyheading.append(privacyPolicy);
        copyheading.append(poweredBy);

        copyinnerdiv1.append(copyheading);
        copyinnerdiv.append(copyinnerdiv1);
        copydiv1.append(copyinnerdiv);
		myCart.append(copydiv1); 
                                        
        mainContent.append(myCart);
		
		output2 = mainContent; 
		equal(output1.html(),output2.html(), "Success - TestCase For Login Success Passed"); 
	});
	
	test("Testing Login-Success widget with Invalid User Credentials", function() {
		
		var loginsuccess, api, phrescoapi, output1, output2, mainContent = $('<div></div>'), myCart,
        userId = 0, log_div, log_innerdiv, log_innerdiv1, log_heading, log_txt_div, registrationStatus, statusMsg,
		log_txtEmail, log_txt_lftEmail, log_txt_rhtEmail, copydiv1, copyinnerdiv, copyinnerdiv1, copyheading,
        copyRight, privacyPolicy, poweredBy, loginresponse = {}, login = {};
		
		api = new EShopAPI();
		phrescoapi = new Phresco();
		loginsuccess = new LoginSuccess();
		
		api.loginresponse = { message:"Failed", successMessage:"Login Failed", userName:"oaibr"};
		phrescoapi.login = {loginEmail:"oaibr@phresco.com"};
		
		loginsuccess.api = api;
		loginsuccess.phrescoapi = phrescoapi;
		
		output1 = loginsuccess.renderUI();
		
		loginresponse = { message:"Failed", successMessage:"Login Failed", userName:"oaibr"};
		login = {loginEmail:"oaibr@phresco.com"};
		
		myCart = $('<div class="mycart_div"></div>');
        log_div = $('<div class="log_div"></div>');
        log_innerdiv = $('<div class="log_innerdiv"></div>');
        log_innerdiv1 = $('<div class="log_innerdiv1"></div>');
        log_heading = $('<div class="log_heading">Login</div>');
        log_txt_div = $('<div class="log_txt_div"></div>');
                            
        registrationStatus = $('<div class="log_txt"></div>');
        statusMsg = $('<div class="logStatus_txt">Status : '+ loginresponse.successMessage +'</div>');
        registrationStatus.append(statusMsg);
                
        log_txtEmail = $('<div class="log_txt">');
		log_txt_lftEmail = $('<div class="logStatus_txt">Email : '+ login.loginEmail +' </div>');
        /* log_txt_rhtEmail = $('<div class="log_txt_lft"></div>'); */
        log_txtEmail.append(log_txt_lftEmail);
        log_txtEmail.append(log_txt_rhtEmail);
        
        log_txt_div.append(registrationStatus);
        log_txt_div.append(log_txtEmail);

        log_innerdiv1.append(log_heading);
        log_innerdiv1.append(log_txt_div);

        log_innerdiv.append(log_innerdiv1);
        log_div.append(log_innerdiv);
        myCart.append(log_div);
                                        
        copydiv1 = $('<div class="log_div"></div>');
        copyinnerdiv = $('<div class="log_innerdiv">');
        copyinnerdiv1 = $('<div class="log_innerdiv1">');
        copyheading = $('<div class="log_heading">');
        copyRight = $('<strong> E-Shop Phresco &copy; 2011 </strong>');
        privacyPolicy = $('<a class="link" href="#">Privacy Policy</a><br />');
        poweredBy = $('<a class="link" href="#">powered by Photon</a>');
        copyheading.append(copyRight);
        copyheading.append(privacyPolicy);
        copyheading.append(poweredBy);

        copyinnerdiv1.append(copyheading);
        copyinnerdiv.append(copyinnerdiv1);
        copydiv1.append(copyinnerdiv);
		myCart.append(copydiv1); 
                                        
        mainContent.append(myCart);
		
		output2 = mainContent; 
		equal(output1.html(),output2.html(), "Failure - Invalid Credential"); 
	});
});