/*global require */

require(  [ "jquery", "eshop/widgets/Products", "eshop/widgets/EShopAPI" , "eshop/widgets/WSConfig" ], function($, Products, EShopAPI, WSConfig) {

	//var wsconfig, equal = QUnit.equal, expect = QUnit.expect, testwithsameproductId = QUnit.test, testwithdiffproductId = QUnit.test;

	/**
	 * Test that the setMainContent method sets the text in the Products-widget
	 */
	 module("Products.js;Products");
	asyncTest("Testing Products-widget With CategoryID", function() {
		var products, api, mainContent, navUL, output1, output2, categoryid, wsURL, wsconfig;
		// Setup view and call method under test
		products = new Products();
		wsconfig = new WSConfig();
		wsconfig.getEnvironment(function(wsURL){
			api = new EShopAPI();
			api.initialize(wsURL); 
			products.api = api;
			products.listener = undefined;
			products.phrescoapi = undefined;
			products.categoryid = 1;
		});
		
		
		setTimeout(function() {
			 start();
			output1 = products.testRenderUI();
			mainContent = $('<div class="cat_listerDetail"></div>');
			categoryid = 1;
			api.getAllProducts(categoryid, function(jsonObject){
				var productList = jsonObject, 
				navUL = $('<ul></ul>'),
				newProductsUL = $('<ul>'), productsHolder, productImage, productName, reviewDiv, reviewHolder, 
				reviewContent, price, starImage, j, star, reviewButtonDiv, reviewButton, ratingDone, 
				i, product, innerLi, innerDiv1, innerDiv2, productNamelink,url, imageURL, image, 
				productPriceDiv, productButtonDiv, ahref1, ahref2, data,
				newproducts = productList.product.lengths;
				url = api.wsURL;
				api.configService();
				imageURL = url + '/' + api.configresponse.imagePath.web;
				for (i = 0; i < newproducts; i++) {
					product = jsonObject.product[i];
					innerLi = $('<li></li>');
					image = imageURL + '/' + product.image;
					productsHolder = $('<div class="cat_listerDetail_bg">');
					productImage = $('<div class="cat_listerDetail_image"><a href="javascript:void(0);"><img src="'+image+'" width="78" alt=""></a></div>');
					productName = $('<div class="cat_listerDetail_imagetxt"><h3><a href="javascript:void(0);">' + product.name + '</a></h3>');
					reviewDiv = $('<div class="cat_listerDetail_imagetxt">');
					reviewHolder = $('<div class="review_cont">');
					reviewContent = $('<div class="review_contleft">');
					price = $('<p>$'+product.sellPrice+'</p>');
					reviewContent.append(price);
					ratingDone = false;
					for (j = 0; j < 5; j++) {
						starImage = 'start.png';
						if (product.rating === j) {
							ratingDone = true;
						}
						if (ratingDone === true) {
							starImage = 'start_dis.png';
						}
						star = $('<span ><img src="images/eshop/' + starImage + '" border="0" title="image" /></span>');
						reviewContent.append(star);
					}
					reviewButtonDiv = $('<div class="review_contright">');
					reviewButton = $('<a href="#"><img src="images/eshop/review.png" border="0" title="image" /></a></div>');
					data = {};
					data.productId = product.id;
					reviewButtonDiv.append(reviewButton);
					reviewHolder.append(reviewContent);
					reviewHolder.append(reviewButtonDiv);
					reviewDiv.append(reviewHolder);
					productsHolder.append(productImage);
					productsHolder.append(productName);
					productsHolder.append(reviewDiv);
					innerLi.append(productsHolder);
					navUL.append(innerLi);
				}
				mainContent.append(navUL);
			});	
			output2 = mainContent;
			equal(output1.html(), output2.html(),"Success - TestCase For product-widget passed");
		}, 1000);
	});
	
	 asyncTest("Testing Products-widget With Different CategoryID", function() {
		var products, api, mainContent, navUL, output1, output2, categoryid, wsURL, wsconfig;
		// Setup view and call method under test
		products = new Products();
		wsconfig = new WSConfig();
		wsconfig.getEnvironment(function(wsURL){
			api = new EShopAPI();
			api.initialize(wsURL);
			products.api = api;
			products.listener = undefined;
			products.phrescoapi = undefined;
			products.categoryid = 2;
		});
		
		setTimeout(function() {
			 start();
			output1 = products.testRenderUI();
			mainContent = $('<div class="cat_listerDetail"></div>');
			categoryid = 1;
			api.getAllProducts(categoryid, function(jsonObject){
				var productList = jsonObject, 
				navUL = $('<ul></ul>'),
				newProductsUL = $('<ul>'), productsHolder, productImage, productName, reviewDiv, reviewHolder, 
				reviewContent, price, starImage, j, star, reviewButtonDiv, reviewButton, ratingDone, 
				i, product, innerLi, innerDiv1, innerDiv2, productNamelink,url, imageURL, image, 
				productPriceDiv, productButtonDiv, ahref1, ahref2, data,
				newproducts = productList.product.length, self = this;
				url = api.wsURL;
				api.configService();
				imageURL = url + '/' + api.configresponse.imagePath.web;
				for (i = 0; i < newproducts; i++) {
					product = jsonObject.product[i];
					innerLi = $('<li></li>');
					image = imageURL + '/' + product.image;
					productsHolder = $('<div class="cat_listerDetail_bg">');
					productImage = $('<div class="cat_listerDetail_image"><a href="javascript:void(0);"><img src="'+image+'" width="78" alt=""></a></div>');
					productName = $('<div class="cat_listerDetail_imagetxt"><h3><a href="javascript:void(0);">' + product.name + '</a></h3>');
					reviewDiv = $('<div class="cat_listerDetail_imagetxt">');
					reviewHolder = $('<div class="review_cont">');
					reviewContent = $('<div class="review_contleft">');
					price = $('<p>$'+product.sellPrice+'</p>');
					reviewContent.append(price);
					ratingDone = false;
					for (j = 0; j < 5; j++) {
						starImage = 'start.png';
						if (product.rating === j) {
							ratingDone = true;
						}
						if (ratingDone === true) {
							starImage = 'start_dis.png';
						}
						star = $('<span ><img src="images/eshop/' + starImage + '" border="0" title="image" /></span>');
						reviewContent.append(star);
					}
					reviewButtonDiv = $('<div class="review_contright">');
					reviewButton = $('<a href="#"><img src="images/eshop/review.png" border="0" title="image" /></a></div>');
					data = {};
					data.productId = product.id;
					reviewButtonDiv.append(reviewButton);
					reviewHolder.append(reviewContent);
					reviewHolder.append(reviewButtonDiv);
					reviewDiv.append(reviewHolder);
					productsHolder.append(productImage);
					productsHolder.append(productName);
					productsHolder.append(reviewDiv);
					innerLi.append(productsHolder);
					navUL.append(innerLi);
				}
				mainContent.append(navUL);
			});	
				output2 = mainContent;
				equal(output1.html(), output2.html(),"Failure - Mismatch CategoryID");
		}, 1000);
	}); 
});