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

require(  [ "jquery", "eshop/widgets/Header"], function($, Header) {

	//var equal = QUnit.equal, notEqual =  QUnit.notEqual, expect = QUnit.expect, testWithSameHeader = QUnit.test, testWithMismatchHeader = QUnit.test;

	/**
	 * Test that the setMainContent method sets the text in the Header-widget
	 */
	 module("Header.js;Header");
	("Testing Header-widget for same header items", function() {
	
		var header, api, listener, phrescoapi, mainContent = $('<div></div>'), headerInner, btnContainer, backBtn, logo, btnContainer1, output1, backBtn1, userId, output2;
		
		header = new Header();
		header.api = api;
		header.listener = undefined;
		header.phrescoapi = undefined;
		output1 = header.renderUI();
		headerInner = $('<div class="headerInner headerTop">');
        btnContainer = $('<div class="btn_container">');
        backBtn = $('<a href="javascript:void(0);"><div class="btn"><div><span></span></div><p>Back</p></div></a>');
        btnContainer.append(backBtn);
        logo = $('<div class="logo"><img src="images/eshop/logo.png" alt="image" />');
        headerInner.append(btnContainer);
        headerInner.append(logo);
        if(userId > 0){
            btnContainer1 = $('<div class="btn_container1">');
            backBtn1 = $('<a href="javascript:void(0);"><div class="btn"><div><span></span></div><p>Logout</p></div></a>');
            btnContainer1.append(backBtn1);
            headerInner.append(btnContainer1);
        }

        mainContent.append(headerInner);
		output2 = mainContent;
		equal(output1.html(), output2.html(), "Success - Testcase for Header-widget Passed");
	});
	
	test(" Testing Header-widget for mismatch header items", function() {
	
		var header, api, listener, phrescoapi, mainContent = $('<div></div>'), headerInner, btnContainer, backBtn, logo, btnContainer1, output1, backBtn1, userId, output2;
        
		header = new Header();
		header.api = api;
		header.listener = undefined;
		header.phrescoapi = undefined;
		
		output1 = header.renderUI();
		headerInner = $('<div class="headerInner headerTop">');
        btnContainer = $('<div class="btn_container">');
        backBtn = $('<a href="javascript:void(0);"><div class="btn"><div><span></span></div><p>Back</p></div></a>');
        btnContainer.append(backBtn);
        logo = $('<div class="logo"><img src="images/eshop/logo.png" alt="image" />');
        headerInner.append(logo);
        if(userId > 0){
            btnContainer1 = $('<div class="btn_container1">');
            backBtn1 = $('<a href="javascript:void(0);"><div class="btn"><div><span></span></div><p>Logout</p></div></a>');
            btnContainer1.append(backBtn1);
            headerInner.append(btnContainer1);
        }
        mainContent.append(headerInner);
		output2 = mainContent;
		notEqual(output1.html(), output2.html(), "Failure - Mismatch In Tags");
	});
});