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