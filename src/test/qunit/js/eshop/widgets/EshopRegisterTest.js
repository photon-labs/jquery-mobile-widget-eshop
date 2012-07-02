/*global require */

require(  [ "jquery", "./Register", "./EShopAPI", "qunit", "./WSConfig"], function($, Register, EShopAPI, QUnit, WSConfig) {

	var wsconfig, equal = QUnit.equal, notEqual = QUnit.notEqual, expect = QUnit.expect, testNewUserRegister = QUnit.test, testExistingUserRegister = QUnit.test,
	registerData,register, registerdata, firstName, lastName, email, password, phoneNumber, listener, api, output1, output2;
	/**
	 * 
	 */
	 
	/* testNewUserRegister("New User Registration Test", function() {

		// Setup view and call method under test
		registerData = new Register();
		api = new EShopAPI();
		wsconfig = new WSConfig();
        api.wsURL = wsconfig.WSConfigurl;
		//api.getWsConfig();
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
        output2 = 'Success';

		// Expect that the text was set on the expected element
		equal(output1, output2,	"New User Register Success");
	}); */
	
	testExistingUserRegister("Existing User Registration Test", function() {

		// Setup view and call method under test
		registerData = new Register();
		api = new EShopAPI();
        wsconfig = new WSConfig();
        api.wsURL = wsconfig.WSConfigurl;
		//api.getWsConfig();
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
        output2 = 'Failed';

		// Expect that the text was set on the expected element
		equal(output1, output2,	"Already Existing User - Registration Failed");
	});
});