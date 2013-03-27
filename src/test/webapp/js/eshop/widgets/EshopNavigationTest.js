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