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

require(  [ "jquery", "eshop/widgets/Login", "eshop/widgets/EShopAPI", "eshop/widgets/WSConfig"], function($, Login, EShopAPI, WSConfig) {

	//var wsconfig, equal = QUnit.equal, expect = QUnit.expect, validUsernameAndPassword = QUnit.test, invalidUsernameAndValidPassword = QUnit.test, validUsernameAndInvalidPassword = QUnit.test, invalidUsernameAndPassword = QUnit.test;

	/**
	 * Test that the setMainContent method sets the text in the Login-widget
	 */
	 module("Login.js;Login");
	asyncTest ("Testing Login-widget with ValidUsername And Password", function() {

		var self=this, loginData, login, loginEmail, listener, api, password, logindata, output1, output2, wsconfig, wsURL;

		// Setup view and call method under test
		loginData = new Login();
		api = new EShopAPI();
		wsconfig = new WSConfig();
		wsconfig.getEnvironment(function(wsURL){
			api = new EShopAPI();
			api.initialize(wsURL); 

			loginData.api = api;
			
			login = {};
			login.loginEmail = 'john@phresco.com';
			login.password = 'john';
			logindata = {};
			logindata.login = login;

			output1 = loginData.loginTest(logindata);
		
		});
		
		setTimeout(function() {
			start();
			output2 = "success";

			// Expect that the text was set on the expected element
			equal(output1, output2,	"Valid username and password : Success");
		}, 1000);
		// self.api.doLogin(logindata);
 
	});
	
	asyncTest("Testing Login-widget With InvalidUsername And ValidPassword", function() {

		var self=this, loginData, login, loginEmail, listener, api, password, logindata, output1, output2, wsconfig, wsURL;

		// Setup view and call method under test
		loginData = new Login();
		api = new EShopAPI();
		wsconfig = new WSConfig();
		wsconfig.getEnvironment(function(wsURL){
			api = new EShopAPI();
			api.initialize(wsURL); 

			loginData.api = api;
			
			login = {};
			login.loginEmail = 'john123@phresco.com';
			login.password = 'john';
			logindata = {};
			logindata.login = login;

			output1 = loginData.loginTest(logindata);
		});
		
		setTimeout(function() {
			start();
			output2 = "failure";

			// Expect that the text was set on the expected element
			equal(output1, output2,	"Valid username and password : Success");
		}, 1000);
	}); 
	
	asyncTest("Testing Login-widget With ValidUsername And InValidPassword", function() {

		var self=this, loginData, login, loginEmail, listener, api, password, logindata, output1, output2, wsconfig, wsURL;

		// Setup view and call method under test
		loginData = new Login();
		api = new EShopAPI();
		wsconfig = new WSConfig();
		wsconfig.getEnvironment(function(wsURL){
			api = new EShopAPI();
			api.initialize(wsURL); 

			loginData.api = api;
			
			login = {};
			login.loginEmail = 'john@phresco.com';
			login.password = 'suresh';
			logindata = {};
			logindata.login = login;

			output1 = loginData.loginTest(logindata);
		
		});
		
		setTimeout(function() {
			start();
			output2 = "failure";

			// Expect that the text was set on the expected element
			equal(output1, output2,	"Valid username and password : Success");
		}, 1000);
	}); 
 
	asyncTest ("Testing Login-widget With InvalidUsername And Password", function() {

		var self=this, loginData, login, loginEmail, listener, api, password, logindata, output1, output2, wsconfig, wsURL;

		// Setup view and call method under test
		loginData = new Login();
		api = new EShopAPI();
		wsconfig = new WSConfig();
		wsconfig.getEnvironment(function(wsURL){
			api = new EShopAPI();
			api.initialize(wsURL); 

			loginData.api = api;
			
			login = {};
			login.loginEmail = 'john111@phresco.com';
			login.password = 'suresh111';
			logindata = {};
			logindata.login = login;

			output1 = loginData.loginTest(logindata);
		});
		
		setTimeout(function() {
			start();
			output2 = "failure";

			// Expect that the text was set on the expected element
			equal(output1, output2,	"Valid username and password : Success");
		}, 1000);
	});
});