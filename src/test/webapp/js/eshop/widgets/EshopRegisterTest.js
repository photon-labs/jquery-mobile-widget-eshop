/*
 * PHR_html_jquery_mobileapp
 *
 * Copyright (C) 1999-2013 Photon Infotech Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*global require */

require(  [ "jquery", "eshop/widgets/Register", "eshop/widgets/EShopAPI", "eshop/widgets/WSConfig" ], function($, Register, EShopAPI, WSConfig) {

	//var wsconfig, equal = QUnit.equal, notEqual = QUnit.notEqual, expect = QUnit.expect, testNewUserRegister = QUnit.test, testExistingUserRegister = QUnit.test,
	
	/**
	 * 
	 */
	  module("Register.js;Register");
	/* asyncTest("New User Registration Test", function() {
		var registerData,register, registerdata, firstName, lastName, email, password, phoneNumber, listener, api, output1, output2, wsURL, wsconfig;

		// Setup view and call method under test
		registerData = new Register();
		api = new EShopAPI();
		wsconfig = new WSConfig();
		wsURL = wsconfig.WSConfigurl;
		api = new EShopAPI();
		api.initialize(wsURL); 
        registerData.api = api;

		register = {};
        register.firstName = 'vvvv';
        register.lastName = 'vvv';
        register.email = 'vvvv@phresco.com';
        register.password = 'vw';
        register.phoneNumber = '123789';
        registerdata = {};
        registerdata.register = register;

		output1 = registerData.registerTest(registerdata);
       setTimeout(function() {
			start();
			output2 = "Success";

			// Expect that the text was set on the expected element
			equal(output1, output2,	"Valid username and password : Success");
		}, 1000);
	}); */
	
	asyncTest("Existing User Registration Test", function() {
		var registerData,register, registerdata, firstName, lastName, email, password, phoneNumber, listener, api, output1, output2, wsURL, wsconfig;

		// Setup view and call method under test
		registerData = new Register();
		wsconfig = new WSConfig();
		wsconfig.getEnvironment(function(wsURL){
			api = new EShopAPI();
			api.initialize(wsURL); 
			registerData.api = api;

			register = {};
			register.firstName = 'new';
			register.lastName = 'new';
			register.email = 'john@phresco.com';
			register.password = 'john';
			register.phoneNumber = '123456';
			registerdata = {};
			registerdata.register = register;

			output1 = registerData.registerTest(registerdata);
		});
		
         setTimeout(function() {
			start();
			output2 = "Failed";

			// Expect that the text was set on the expected element
			equal(output1, output2,	"Valid username and password : Success");
		}, 1000);
	});
});