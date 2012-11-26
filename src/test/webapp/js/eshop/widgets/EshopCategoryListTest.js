/*global require */

require(  [ "jquery", "eshop/widgets/WSConfig", "eshop/widgets/EShopAPI",  "eshop/widgets/Category", "eshop/widgets/Phresco"], function($, WSConfig, EShopAPI, Category, Phresco) {

	//var wsconfig, equal = QUnit.equal, notEqual = QUnit.notEqual, expect = QUnit.expect, testwithsamecount = QUnit.test, testwithdiffcount = QUnit.test;

	/**
	 * Test that the setMainContent method sets the text in the category-widget
	 */
	module("Category.js;Category");
	asyncTest("Testing category-widget with Item Count", function() {
			var category, api, mainContent, output1, output2, url,
			 navUL = $('<ul>'), i, imageURL, navLI, currentName = 'name', currentID = 'id', image, categorylength = 10, wsURL, wsconfig;

			// Setup view and call method under test
			category = new Category();
			wsconfig = new WSConfig();
			wsURL = wsconfig.WSConfigurl;
			api = new EShopAPI();
			api.initialize(wsURL); 
			category.api = api;

		setTimeout(function() {
			 start();
			output1 = category.testRenderUI();

			mainContent = $('<div class="cat_lister">');
			url = api.wsURL;
			imageURL = url + '/' + api.configresponse.imagePath.mobile;
			api.getCategories(function(jsonObject){
				for (i = 0; i < categorylength; i++) {
					 category = jsonObject.category[i];
                    image = imageURL + '/' + category.image;
                    navLI = $('<li><a><span class="listicon"><img src="' + image + '" title="image" border="0"  /></span><span class="listicontext">' + category[currentName] + '<span> (' + category.productCount + ')</span></span></a></li>');
                    navUL.append(navLI);
				}
			}); 

			output2 = mainContent.append(navUL);
		
			// Expect that the text was set on the expected element
			equal(output1.html(), output2.html(),"Success - Testcase for category-widget passed");
		}, 1000);
			
	}); 

	asyncTest("Testing category-widget with Item different Count", function() {
			var category, api, mainContent, output1, output2, url,
			 navUL = $('<ul>'), i, imageURL, navLI, currentName = 'name', currentID = 'id', image, categorylength = 9, wsURL, wsconfig;

			// Setup view and call method under test
			category = new Category();
			wsconfig = new WSConfig();
			wsURL = wsconfig.WSConfigurl;
			api = new EShopAPI();
			api.initialize(wsURL); 
			category.api = api;

		setTimeout(function() {
			 start();
			output1 = category.testRenderUI();

			mainContent = $('<div class="cat_lister">');
			url = api.wsURL;
			imageURL = url + '/' + api.configresponse.imagePath.mobile;
			api.getCategories(function(jsonObject){
				for (i = 0; i < categorylength; i++) {
					 category = jsonObject.category[i];
                    image = imageURL + '/' + category.image;
                    navLI = $('<li><a><span class="listicon"><img src="' + image + '" title="image" border="0"  /></span><span class="listicontext">' + category[currentName] + '<span> (' + category.productCount + ')</span></span></a></li>');
                    navUL.append(navLI);
				}
		}); 

		output2 = mainContent.append(navUL);
		
		// Expect that the text was set on the expected element
		equal(output1.html(), output2.html(),"Success - Testcase for category-widget passed");
		}, 1000);
			
	}); 
});