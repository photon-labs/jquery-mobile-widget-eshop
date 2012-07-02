/*global require */

require([ "jquery", "./Category", "./EShopAPI", "qunit", "./WSConfig" ], function($, Category, EShopAPI, QUnit, WSConfig) {

	var wsconfig, equal = QUnit.equal, notEqual = QUnit.notEqual, expect = QUnit.expect, testwithsamecount = QUnit.test, testwithdiffcount = QUnit.test;

	/**
	 * Test that the setMainContent method sets the text in the category-widget
	 */
	 
	testwithsamecount("Testing category-widget with Item Count", function() {

			var category, api, mainContent, output1, output2, url,
			 navUL = $('<ul>'), i, imageURL, navLI, currentName = 'name', currentID = 'id', image, categorylength = 10;

			// Setup view and call method under test
			category = new Category();
			api = new EShopAPI();
			wsconfig = new WSConfig();

			api.wsURL = wsconfig.WSConfigurl;
			api.configService();

			category.api = api;

			output1 = category.renderUI();

			mainContent = $('<div class="cat_lister">');
			url = api.wsURL;
			imageURL = url + '/' + api.configresponse.imagePath.mobile;
			api.getCategories(function(jsonObject){
				for (i = 0; i < categorylength; i++) {
					category = jsonObject.category[i];
					image = imageURL + '/' + category.image;
					navLI = $('<li><a href="#"><span class="listicon"><img src="' + image + '" title="image" border="0"  /></span><span class="listicontext">' + category[currentName] + '<span> (' + category.productCount + ')</span></span></a></li>');
					navUL.append(navLI);
				}
		});

		output2 = mainContent.append(navUL);
		
		// Expect that the text was set on the expected element
		equal(output1.html(), output2.html(),"Success - Testcase for category-widget passed");
	}); 

	testwithdiffcount("Testing category-widget with Different Item Count", function() {

		 var category,  api, mainContent , output1, output2, url,
         navUL = $('<ul>'), i, imageURL, navLI, currentName = 'name', currentID = 'id', image, categorylength = 9; 

		// Setup view and call method under test
		
		category = new Category();
		api = new EShopAPI();
		wsconfig = new WSConfig();

		api.wsURL = wsconfig.WSConfigurl;
		api.configService();
		
		category.api = api;
        
		output1 = category.renderUI();
		
			mainContent = $('<div class="cat_lister">');
			url = api.wsURL;
			imageURL = url + '/' + api.configresponse.imagePath.mobile;
			api.getCategories(function(jsonObject){
				for (i = 0; i < categorylength; i++) {
					category = jsonObject.category[i];
					image = imageURL + '/' + category.image;
					navLI = $('<li><a href="#"><span class="listicon"><img src="' + image + '" title="image" border="0"  /></span><span class="listicontext">' + category[currentName] + '<span> (' + category.productCount + ')</span></span></a></li>');
					navUL.append(navLI);
				}
			}); 

        output2 = mainContent.append(navUL);  

		// Expect that the text was set on the expected element
		notEqual(output1.html(), output2.html(), "Failure case - Mismatch In Item Count");
	}); 
});