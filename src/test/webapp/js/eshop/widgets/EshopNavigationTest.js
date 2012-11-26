/*global require */

require(  [ "jquery", "eshop/widgets/Navigation"], function($, Navigation) {

	//var equal = QUnit.equal, notEqual =  QUnit.notEqual, expect = QUnit.expect, testWithSameNavigation = QUnit.test, testWithMismatchNavigation = QUnit.test;

	/**
	 * Test that the setMainContent method sets the text in the Navigation-widget
	 */
	  module("Navigation.js;Navigation");
	test("Testing Navigation-widget for Navigation items.", function() {

		var navigation, api, listener, mainContent, headerTabInner, headerTabUL, headerTabLIBrowse, headerTabLISpecial, headerTabLICart, output1, output2;

		navigation = new Navigation();
		navigation.api = api;
		navigation.listener = undefined;
		navigation.phrescoapi = undefined;
		output1 = navigation.renderUI();
		mainContent = $('<div class="header_tabinner">');
        headerTabUL = $('<ul>');
        headerTabLIBrowse = $('<li id="browse-tab" class="browse"><a href="#">Browse</a></li>');
        headerTabLISpecial = $('<li id="special-tab" class="special"><a href="#">Special Offers</a></li>');
        headerTabLICart = $('<li id="cart-tab" class="cart"><a href="#">My Cart</a></li>');
        headerTabUL.append(headerTabLIBrowse);
        headerTabUL.append(headerTabLISpecial);
        headerTabUL.append(headerTabLICart);
        mainContent.append(headerTabUL);
		output2 = mainContent;
		equal(output1.html() , output2.html(),	"Success - TestCase for Navigation-widget Passed");
	});
	
	test("Testing Navigation-widget for Mismatch Navigation items.", function() {

		var navigation, api, listener, mainContent, headerTabInner, headerTabUL, headerTabLIBrowse, headerTabLISpecial, headerTabLICart, output1, output2;

		navigation = new Navigation();
		navigation.api = api;
		navigation.listener = undefined;
		navigation.phrescoapi = undefined;
		output1 = navigation.renderUI();
		mainContent = $('<div class="header_tabinner">');
        headerTabUL = $('<ul>');
        headerTabLIBrowse = $('<li id="browse-tab" class="browse"><a href="#">Browse</a></li>');
        headerTabLISpecial = $('<li id="special-tab" class="special"><a href="#">Special Offers</a></li>');
        headerTabLICart = $('<li id="cart-tab" class="cart"><a href="#">My Cart</a></li>');
        headerTabUL.append(headerTabLIBrowse);
        headerTabUL.append(headerTabLISpecial);
        mainContent.append(headerTabUL);
		output2 = mainContent;
		notEqual(output1.html() , output2.html(), "Failure case - Mismatch in Navigation Item");
	});
});