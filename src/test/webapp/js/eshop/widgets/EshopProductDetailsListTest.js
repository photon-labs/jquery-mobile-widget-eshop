/*global require */

require(  [ "jquery", "eshop/widgets/ProductDetails", "eshop/widgets/EShopAPI", "eshop/widgets/WSConfig"], function($, ProductDetails, EShopAPI, WSConfig) {

	//var wsconfig, equal = QUnit.equal, notEqual = QUnit.notEqual, expect = QUnit.expect, testWithSameProduct = QUnit.test, testWithDiffProduct = QUnit.test;

	/**
	 * Test that the setMainContent method sets the text in the category-widget
	 */
	 module("ProductDetails.js;ProductDetails");
	asyncTest("Testing productdetail-widget with Same Product", function() {

		var initeObj, listener, api, phresco, currentName, currentID, navUL, output1, output2, mainContent, jsonData,apiRef,url,config,webImage,productDetails,imageURL,
		detailImageURL ,youSave, productName, pid, pd , pdUL, pdLI, pdHolder, pdImage, pdLeftHolder, pdHead, pdReviewCount, pdPriceHolder, price, sellPrice, ratingDone, j, starImage, star, btnHolder, reviewA, addToCartA, data, pdDescHolder,pdSpec,pdSpecUL,pdSpecLI1,pdSpecLI2,pdAttrHolder,pdTitle,pdSpecDetail,pdSpecDetailUL, 
		pdSpecDetailLI1, pdSpecDetailLI2, pdSpecDetailLI3, pdSpecDetailLI4, pdSpecDetailLI5, pdSpecDetailLI6, pdSpecDetailLI7, pdSpecDetailLI8, topH3, productdetail, wsURL, wsconfig;
		
		// Setup view and call method under test
		
		productdetail = new ProductDetails();
		wsconfig = new WSConfig();
		wsconfig.getEnvironment(function(wsURL){
			api = new EShopAPI();
			api.initialize(wsURL); 
	
			//api.getWsConfig();
	
	        productdetail.api = api;
			productdetail.listener = undefined;
			productdetail.phrescoapi = undefined;
			productdetail.productId = 1 ;
			pid = 1;
			output1 = productdetail.testRenderUI();
	
			mainContent = $('<div></div>');
	        topH3 = $('<h3>Product Details</h3>');
	
			api.getProductDetails(pid, function(jsonObject){
				if(jsonObject.message === 'Product id unavailable'){
					return;
				}
				productDetails = jsonObject.product[0];
				detailImageURL = api.wsURLWithoutContext +'/images/web/' + productDetails.image;
				productName = $('<div class="product_name"> ' + productDetails.name + ' </div>');
				pd = $('<div class="cat_listerDetail">');
				pdUL = $('<ul>');
				pdLI = $('<li>');
				pdHolder = $('<div class="cat_listerDetail_borderline">');
				pdImage = $('<div class="cat_listerDetail_image"><img src=" '+ detailImageURL + '" border="0" title="image" height="57"/></div>');
				pdLeftHolder = $('<div class="product_left_div">');
				pdHead = $('<div class="product_head">');
				pdReviewCount = $('<div class="review_cont">');
				pdPriceHolder = $('<div class="product_contleft">');
				price = $('<p><b>List Price: ' + productDetails.listPrice + ' </b></p>');
				pdPriceHolder.append(price); 
				 
				sellPrice = $('<p><b>Sell Price:  '+ productDetails.sellPrice + ' </b></p>');
				pdPriceHolder.append(sellPrice);
				
				ratingDone = false; 
	
				for (j = 0; j < 5; j++) {
					starImage = 'start.png';
					if (productDetails.rating === j) {
						ratingDone = true;
					}
	
					if (ratingDone === true) {
						starImage = 'start_dis.png';
					}
	
					star = $('<span ><img src="images/eshop/' + starImage + '" border="0" title="image" /></span>');
					pdPriceHolder.append(star);
				} 
	
				pdReviewCount.append(pdPriceHolder);
				pdHead.append(pdReviewCount);
				pdLeftHolder.append(pdHead);
	
				btnHolder = $('<div class="review_contright1">');
				reviewA = $('<a href="#"><img src="images/eshop/review.png" border="0" title="image" /></a>');
	
	
				ddToCartA = $('<a ><img src="images/eshop/add_cart.png" border="0" title="image" /></a>');
				btnHolder.append(reviewA);
				btnHolder.append(addToCartA);
				pdLeftHolder.append(btnHolder);
	
				pdHolder.append(pdImage);
				pdHolder.append(pdLeftHolder);
	
				pdLI.append(pdHolder);
				pdUL.append(pdLI);
				pd.append(pdUL); 
	
				pdDescHolder = $('<div class="product_details">');
				pdSpec = $('<div class="product_spec">');
				pdSpecUL = $('<ul>');
				pdSpecLI1 = $('<li class="head">Description</li>');
				pdSpecLI2 = $('<li class="text">' + productDetails.description + '</li>');
				pdSpecUL.append(pdSpecLI1);
				pdSpecUL.append(pdSpecLI2);
				pdSpec.append(pdSpecUL);
				pdDescHolder.append(pdSpec);
	
				pdAttrHolder = $('<div class="pro_detail">');
				pdTitle = $('<div class="pro_detail_head">Details</div>');
				pdSpecDetail = $('<div class="pro_spec_detail">');
				pdSpecDetailUL = $('<ul>');
				pdSpecDetailLI1 = $('<li class="left">TV Type</li>');
				pdSpecDetailLI2 = $('<li class="right">: ' +productDetails.details['TV Type']+ '</li>');
				pdSpecDetailLI3 = $('<li class="left">Screen Size</li>');
				pdSpecDetailLI4 = $('<li class="right">: '+productDetails.details['Screen Size']+'</li>');
				pdSpecDetailLI5 = $('<li class="left">Screen Ratio </li>');
				pdSpecDetailLI6 = $('<li class="right">: '+productDetails.details['Screen Ratio']+'</li>');
				pdSpecDetailLI7 = $('<li class="left">TV definition</li>');
				pdSpecDetailLI8 = $('<li class="right">: '+productDetails.details['TV Definition']+ '</li>');
				pdSpecDetailUL.append(pdSpecDetailLI1);
				pdSpecDetailUL.append(pdSpecDetailLI2);
				pdSpecDetailUL.append(pdSpecDetailLI3);
				pdSpecDetailUL.append(pdSpecDetailLI4);
				pdSpecDetailUL.append(pdSpecDetailLI5);
				pdSpecDetailUL.append(pdSpecDetailLI6);
				pdSpecDetailUL.append(pdSpecDetailLI7);
				pdSpecDetailUL.append(pdSpecDetailLI8);
				pdSpecDetail.append(pdSpecDetailUL);
				pdAttrHolder.append(pdTitle);
				pdAttrHolder.append(pdSpecDetail);
				pdDescHolder.append(pdAttrHolder);  
				mainContent.append(productName);
				mainContent.append(pd);
				mainContent.append(pdDescHolder);
			});
	
	        output2 = mainContent;
		});
		setTimeout(function() {
			 start();
			// Expect that the text was set on the expected element
			notEqual(output1.html(),output2.html(),"Success - TestCase for ProductDetails passed");
		}, 1000);
	});
	
	asyncTest("Testing productdetail-widget For Different Product", function() {

		var initeObj, listener, api, phresco, currentName, currentID, navUL, output1, output2, mainContent, jsonData,apiRef,url,config,webImage,productDetails,imageURL,
		detailImageURL ,youSave, productName, pid, pd , pdUL, pdLI, pdHolder, pdImage, pdLeftHolder, pdHead, pdReviewCount, pdPriceHolder, price, sellPrice, ratingDone, j, starImage, star, btnHolder, reviewA, addToCartA, data, pdDescHolder,pdSpec,pdSpecUL,pdSpecLI1,pdSpecLI2,pdAttrHolder,pdTitle,pdSpecDetail,pdSpecDetailUL, 
		pdSpecDetailLI1, pdSpecDetailLI2, pdSpecDetailLI3, pdSpecDetailLI4, pdSpecDetailLI5, pdSpecDetailLI6, pdSpecDetailLI7, pdSpecDetailLI8, topH3, productdetail, wsURL, wsconfig;
		
		// Setup view and call method under test
		
		productdetail = new ProductDetails();
		wsconfig = new WSConfig();
		wsconfig.getEnvironment(function(wsURL){
			api = new EShopAPI();
			api.initialize(wsURL); 
			//api.getWsConfig();
	
	        productdetail.api = api;
			productdetail.listener = undefined;
			productdetail.phrescoapi = undefined;
			productdetail.productId = 1 ;
			pid = 2;
			output1 = productdetail.testRenderUI();
	
			mainContent = $('<div></div>');
	        topH3 = $('<h3>Product Details</h3>');
	
			api.getProductDetails(pid, function(jsonObject){
				if(jsonObject.message === 'Product id unavailable'){
					return;
				}
				productDetails = jsonObject.product[0];
				detailImageURL = api.wsURLWithoutContext +'/images/web/' + productDetails.image;
				productName = $('<div class="product_name"> ' + productDetails.name + ' </div>');
				pd = $('<div class="cat_listerDetail">');
				pdUL = $('<ul>');
				pdLI = $('<li>');
				pdHolder = $('<div class="cat_listerDetail_borderline">');
				pdImage = $('<div class="cat_listerDetail_image"><img src=" '+ detailImageURL + '" border="0" title="image" height="57"/></div>');
				pdLeftHolder = $('<div class="product_left_div">');
				pdHead = $('<div class="product_head">');
				pdReviewCount = $('<div class="review_cont">');
				pdPriceHolder = $('<div class="product_contleft">');
				price = $('<p><b>List Price: ' + productDetails.listPrice + ' </b></p>');
				pdPriceHolder.append(price); 
				 
				sellPrice = $('<p><b>Sell Price:  '+ productDetails.sellPrice + ' </b></p>');
				pdPriceHolder.append(sellPrice);
				
				ratingDone = false; 
	
				for (j = 0; j < 5; j++) {
					starImage = 'start.png';
					if (productDetails.rating === j) {
						ratingDone = true;
					}
	
					if (ratingDone === true) {
						starImage = 'start_dis.png';
					}
	
					star = $('<span ><img src="images/eshop/' + starImage + '" border="0" title="image" /></span>');
					pdPriceHolder.append(star);
				} 
	
				pdReviewCount.append(pdPriceHolder);
				pdHead.append(pdReviewCount);
				pdLeftHolder.append(pdHead);
	
				btnHolder = $('<div class="review_contright1">');
				reviewA = $('<a href="#"><img src="images/eshop/review.png" border="0" title="image" /></a>');
	
	
				addToCartA = $('<a href="#"><img src="images/eshop/add_cart.png" border="0" title="image" /></a>');
				btnHolder.append(reviewA);
				btnHolder.append(addToCartA);
				pdLeftHolder.append(btnHolder);
	
				pdHolder.append(pdImage);
				pdHolder.append(pdLeftHolder);
	
				pdLI.append(pdHolder);
				pdUL.append(pdLI);
				pd.append(pdUL); 
	
				pdDescHolder = $('<div class="product_details">');
				pdSpec = $('<div class="product_spec">');
				pdSpecUL = $('<ul>');
				pdSpecLI1 = $('<li class="head">Description</li>');
				pdSpecLI2 = $('<li class="text">' + productDetails.description + '</li>');
				pdSpecUL.append(pdSpecLI1);
				pdSpecUL.append(pdSpecLI2);
				pdSpec.append(pdSpecUL);
				pdDescHolder.append(pdSpec);
	
				pdAttrHolder = $('<div class="pro_detail">');
				pdTitle = $('<div class="pro_detail_head">Details</div>');
				pdSpecDetail = $('<div class="pro_spec_detail">');
				pdSpecDetailUL = $('<ul>');
				pdSpecDetailLI1 = $('<li class="left">TV Type</li>');
				pdSpecDetailLI2 = $('<li class="right">: ' +productDetails.details['TV Type']+ '</li>');
				pdSpecDetailLI3 = $('<li class="left">Screen Size</li>');
				pdSpecDetailLI4 = $('<li class="right">: '+productDetails.details['Screen Size']+'</li>');
				pdSpecDetailLI5 = $('<li class="left">Screen Ratio </li>');
				pdSpecDetailLI6 = $('<li class="right">: '+productDetails.details['Screen Ratio']+'</li>');
				pdSpecDetailLI7 = $('<li class="left">TV definition</li>');
				pdSpecDetailLI8 = $('<li class="right">: '+productDetails.details['TV Definition']+ '</li>');
				pdSpecDetailUL.append(pdSpecDetailLI1);
				pdSpecDetailUL.append(pdSpecDetailLI2);
				pdSpecDetailUL.append(pdSpecDetailLI3);
				pdSpecDetailUL.append(pdSpecDetailLI4);
				pdSpecDetailUL.append(pdSpecDetailLI5);
				pdSpecDetailUL.append(pdSpecDetailLI6);
				pdSpecDetailUL.append(pdSpecDetailLI7);
				pdSpecDetailUL.append(pdSpecDetailLI8);
				pdSpecDetail.append(pdSpecDetailUL);
				pdAttrHolder.append(pdTitle);
				pdAttrHolder.append(pdSpecDetail);
				pdDescHolder.append(pdAttrHolder);
				mainContent.append(productName);
				mainContent.append(pd);
				mainContent.append(pdDescHolder);
			});
	
	        output2 = mainContent;
		});
		setTimeout(function() {
			 start();
			// Expect that the text was set on the expected element
			notEqual(output1.html(),output2.html(),"Success - TestCase for ProductDetails passed");
		}, 1000);
	});
});