/*global require */

require(  ["jquery", "./Login", "./EShopAPI", "./WSConfig", "qunit" ], function($, Login, EShopAPI, WSConfig, QUnit) {

	var wsconfig, equal = QUnit.equal, expect = QUnit.expect, validUsernameAndPassword = QUnit.test, invalidUsernameAndValidPassword = QUnit.test, validUsernameAndInvalidPassword = QUnit.test, invalidUsernameAndPassword = QUnit.test;

	/**
	 * Test that the setMainContent method sets the text in the Login-widget
	 */
	validUsernameAndPassword ("Testing Login-widget with ValidUsername And Password", function() {

		var self=this, loginData, login, loginEmail, listener, api, password, logindata, output1, output2;

		// Setup view and call method under test
		loginData = new Login();
		api = new EShopAPI();
		wsconfig = new WSConfig();
		
        api.wsURL = wsconfig.WSConfigurl;

        loginData.api = api;
		
        login = {};
        login.loginEmail = 'john@phresco.com';
        login.password = 'john';
        logindata = {};
        logindata.login = login;

		output1 = loginData.loginTest(logindata);

		// self.api.doLogin(logindata);

        output2 = "success";

		// Expect that the text was set on the expected element
		equal(output1, output2,	"Valid username and password : Success");
	});
	
	 invalidUsernameAndValidPassword("Testing Login-widget With InvalidUsername And ValidPassword", function() {

		var self=this, loginData, login, loginEmail, listener, api, password, logindata, output1, output2;

		// Setup view and call method under test
		loginData = new Login();
		api = new EShopAPI();
		wsconfig = new WSConfig();
		
        api.wsURL = wsconfig.WSConfigurl;

		// api.getWsConfig();

        loginData.api = api;

        login = {};
        login.loginEmail = 'john987@phresco.com';
        login.password = 'john';
        logindata = {};
        logindata.login = login;

		output1 = loginData.loginTest(logindata);
		// self.api.doLogin(logindata);

        output2 = "failure";

		// Expect that the text was set on the expected element
		equal(output1, output2,	"Invalid username and valid password : failure");
	}); 
	
	 validUsernameAndInvalidPassword("Testing Login-widget With ValidUsername And InValidPassword", function() {

		var self=this, loginData, login, loginEmail, listener, api, password, logindata, output1, output2;

		// Setup view and call method under test
		loginData = new Login();
		api = new EShopAPI();
		wsconfig = new WSConfig();
		
        api.wsURL = wsconfig.WSConfigurl;

		// api.getWsConfig();

        loginData.api = api;

        login = {};
        login.loginEmail = 'john@phresco.com';
        login.password = 'suresh';
        logindata = {};
        logindata.login = login;

		output1 = loginData.loginTest(logindata);
		// self.api.doLogin(logindata);

        output2 = "failure";

		// Expect that the text was set on the expected element
		equal(output1, output2,	"Valid username and invalid password : failure");
	}); 
 
	 invalidUsernameAndPassword ("Testing Login-widget With InvalidUsername And Password", function() {

		var self=this, loginData, login, loginEmail, listener, api, password, logindata, output1, output2;

		// Setup view and call method under test
		loginData = new Login();
		api = new EShopAPI();
		wsconfig = new WSConfig();
		
        api.wsURL = wsconfig.WSConfigurl;

		// api.getWsConfig();

        loginData.api = api;

        login = {};
        login.loginEmail = 'john123@phresco.com';
        login.password = 'suresh123';
        logindata = {};
        logindata.login = login;

		output1 = loginData.loginTest(logindata);
		// self.api.doLogin(logindata);

        output2 = "failure";

		// Expect that the text was set on the expected element
		equal(output1, output2,	"Invalid username and password : failure");
	}); 
});