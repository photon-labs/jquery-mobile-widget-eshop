/*global require */

require(  [ "jquery", "eshop/widgets/ShoppingCart", "eshop/widgets/EShopAPI", "eshop/widgets/Phresco", "eshop/widgets/WSConfig"], function($, ShoppingCart, EShopAPI, Phresco, WSConfig) {

	//var wsconfig, equal = QUnit.equal, notEqual = QUnit.notEqual, expect = QUnit.expect, testShoppingCartwithsamecount = QUnit.test, testShoppingCartwithdiffcount = QUnit.test, testShoppingCartwithdiffItem = QUnit.test, testShoppingCartwithdiffnoofproducts = QUnit.test;

	/**
	 * Test that the setMainContent method sets the text in the shoppingcart-widget
	 */
	module("ShoppingCart.js;ShoppingCart");
	asyncTest("Testing ShoppingCart with No Of Item", function() {
		
		var shoppingcart, api, phrescoapi, output1, output2, shoppingcard_data = {}, productArray = [], detailImageURL, checkoutvaluecol2, checkoutvaluecol4, subtotal, myCart, myCartHead, j, 
		mycart_quality_div, mycart_qua_div, mycart_borderline, cartImage, data, product_left_div, product_head, review_cont, product_contleft, quality_div, mycart_remove_bu, 
		mycart_remove, mycart_quality, mycart_size, mycart_price_div, mycart_price, mycart_subtotal, mycart_btn, mycart_update_view_bu, mycart_mid_bu, mycart_update_view_bu1, 
		mycart_mid_bu1, clearDiv, productTotal = 0, subTotal = 0, mainContent = $('<div></div>'), shoppingItemLength = 2, subtotalAmount = "", totalAmount = 0, i, wsconfig, wsURL;
		
		shoppingcard_data = [{image : "product/lg_tv_1.png",name:"LG Electronics 42PW350 3D Plasma HDTV", productId : 1, quantity : 1, price: 600},{image : "product/apple_comp_13.png", name:"Apple 11.6 MacBook Air Notebook Computer", productId : 13, quantity : 1, price: 1300}];
		productArray = [{image : "product/lg_tv_1.png",name:"LG Electronics 42PW350 3D Plasma HDTV", productId : 1, quantity : 1, price: 600},{image : "product/apple_comp_13.png", name:"Apple 11.6 MacBook Air Notebook Computer", productId : 13, quantity : 1, price: 1300}];
		
		
		shoppingcart = new  ShoppingCart();
		phrescoapi = new Phresco();
		wsconfig = new WSConfig();
		wsconfig.getEnvironment(function(wsURL){
			api = new EShopAPI();
			api.initialize(wsURL); 
			
			shoppingcart.api = api;
			phrescoapi.productArray = productArray;
			shoppingcart.phrescoapi = phrescoapi;
			shoppingcart.dataItem = shoppingcard_data;
			
			output1 = shoppingcart.testRenderUI();
			
			myCart = $('<div class="mycart_div">');
			myCartHead = $('<div class="product_name">My Shopping Cart</div>');
			myCart.append(myCartHead);
			 if(shoppingcard_data !== "undefined"){
				for (j = 0; j < shoppingItemLength; j++) {
					detailImageURL = api.wsURLWithoutContext + '/images/web/' + productArray[j].image;
					mycart_quality_div = $('<div class="mycart_quality_div">');
					mycart_quality_div.productId = productArray[j].productId;
					mycart_qua_div = $('<div class="mycart_qua_div">');
					mycart_borderline = $('<div class="mycart_borderline">');
					cartImage = $('<div class="cat_listerDetail_image"><img src="'+ detailImageURL +'" border="0" alt="image" /></div>');
					product_left_div = $('<div class="product_left_div">');
					product_head = $('<div class="product_head">');
					review_cont = $('<div class="review_cont">');
					product_contleft =  $('<div class="product_contleft"><p><b>' + productArray[j].name + '</b></p></div>');
					quality_div =  $('<div class="quality_div">');
					mycart_remove_bu =  $('<div class="mycart_remove_bu">');
					mycart_remove =  $('<div class="mycart_remove"><a>Remove</a></div>');
					data = {};
					data.productId = productArray[j].productId;
					data.singlePrice = productArray[j].price;
	
					mycart_remove_bu.append(mycart_remove);
	
					mycart_quality =  $('<span class="mycart_quality">Quantity :  </span>');
					mycart_size =  $('<input type="text" size="2" value="'+ productArray[j].quantity +'" name="productQuantity" autofocus="autofocus" id="productQuantity" />');
					quality_div.append(mycart_quality);
					quality_div.append(mycart_size);
					quality_div.append(mycart_remove_bu);
					mycart_price_div =  $('<div class="mycart_price_div">');
					mycart_price =  $('<span class="mycart_price">Price: $'+ productArray[j].price +' </span>');
					mycart_price_div.append(mycart_price);
	
					review_cont.append(product_contleft);
					review_cont.append(quality_div);
					review_cont.append(mycart_price_div);
					product_head.append(review_cont);  
					product_left_div.append(product_head); 
	
					mycart_borderline.append(cartImage);
					mycart_borderline.append(product_left_div);
					mycart_qua_div.append(mycart_borderline);
				
					mycart_quality_div.append(mycart_qua_div);
					myCart.append(mycart_quality_div);
					subTotal = (Number(subTotal) + (Number(productArray[j].quantity) * Number(productArray[j].price)));
				}
			}
			
	        mycart_subtotal =  $('<div class="mycart_subtotal">Subtotal: $ <span id="subTotal">'+ shoppingcart.totalCalc(shoppingcard_data,productArray) +'</span></div>');
			subtotalAmount = mycart_subtotal;
	        
			shoppingcart.totalCalc = function(shoppingcard_data,productArray_calc){
				for (i = 0; i < shoppingcard_data.length; i++) {
					 totalAmount += Number(productArray[i].quantity * productArray[i].price);
				}
				return totalAmount;
			};
			
			mycart_btn =  $('<div class="mycart_btn">');
	        mycart_update_view_bu1 =  $('<div class="mycart_update_view_bu">');
	        mycart_update_view_bu1.append(mycart_mid_bu1);
			if(productArray.length !== 0){
				mycart_mid_bu1 =  $('<div id="checkoutid" class="mycart_mid_bu"><a>Check Out</a></div>');
			} 
			mycart_update_view_bu1.append(mycart_mid_bu1);
	        clearDiv =  $('<div style="clear:both"></div>');
	        
			mycart_btn.append(mycart_update_view_bu1);
	
			mycart_btn.append(clearDiv);
			myCart.append(mycart_subtotal);
			myCart.append(mycart_btn); 
	
			mainContent.append(myCart); 
			output2 = mainContent; 
		});
		setTimeout(function(){
			start();
			equal(output1.html(), output2.html(), "Success - TestCase For Shopping Cart Passed"); 
		},1000);
		
	});
	
	asyncTest("Testing shoppingcart-widget With No Of Item", function() {
		
		var shoppingcart, api, phrescoapi, output1, output2, shoppingcard_data = {}, productArray = [], detailImageURL, checkoutvaluecol2, checkoutvaluecol4, subtotal, myCart, myCartHead, j, 
		mycart_quality_div, mycart_qua_div, mycart_borderline, cartImage, data, product_left_div, product_head, review_cont, product_contleft, quality_div, mycart_remove_bu, 
		mycart_remove, mycart_quality, mycart_size, mycart_price_div, mycart_price, mycart_subtotal, mycart_btn, mycart_update_view_bu, mycart_mid_bu, mycart_update_view_bu1, 
		mycart_mid_bu1, clearDiv, productTotal = 0, subTotal = 0, mainContent = $('<div></div>'), shoppingItemLength = 1, subtotalAmount = "", totalAmount = 0, i, wsconfig, wsURL;
		
		shoppingcard_data = [{image : "product/lg_tv_1.png",name:"LG Electronics 42PW350 3D Plasma HDTV", productId : 1, quantity : 1, price: 600},{image : "product/apple_comp_13.png", name:"Apple 11.6 MacBook Air Notebook Computer", productId : 13, quantity : 1, price: 1300}];
		productArray = [{image : "product/lg_tv_1.png",name:"LG Electronics 42PW350 3D Plasma HDTV", productId : 1, quantity : 1, price: 600},{image : "product/apple_comp_13.png", name:"Apple 11.6 MacBook Air Notebook Computer", productId : 13, quantity : 1, price: 1300}];
		
		
		shoppingcart = new  ShoppingCart();
		phrescoapi = new Phresco();
		wsconfig = new WSConfig();
		wsconfig.getEnvironment(function(wsURL){
			api = new EShopAPI();
			api.initialize(wsURL); 
			
			shoppingcart.api = api;
			phrescoapi.productArray = productArray;
			shoppingcart.phrescoapi = phrescoapi;
			shoppingcart.dataItem = shoppingcard_data;
			
			output1 = shoppingcart.testRenderUI();
			
			myCart = $('<div class="mycart_div">');
			myCartHead = $('<div class="product_name">My Shopping Cart</div>');
			myCart.append(myCartHead);
			 if(shoppingcard_data !== "undefined"){
				for (j = 0; j < shoppingItemLength; j++) {
					detailImageURL = api.wsURLWithoutContext + '/images/web/' + productArray[j].image;
					mycart_quality_div = $('<div class="mycart_quality_div">');
					mycart_quality_div.productId = productArray[j].productId;
					mycart_qua_div = $('<div class="mycart_qua_div">');
					mycart_borderline = $('<div class="mycart_borderline">');
					cartImage = $('<div class="cat_listerDetail_image"><img src="'+ detailImageURL +'" border="0" alt="image" /></div>');
					product_left_div = $('<div class="product_left_div">');
					product_head = $('<div class="product_head">');
					review_cont = $('<div class="review_cont">');
					product_contleft =  $('<div class="product_contleft"><p><b>' + productArray[j].name + '</b></p></div>');
					quality_div =  $('<div class="quality_div">');
					mycart_remove_bu =  $('<div class="mycart_remove_bu">');
					mycart_remove =  $('<div class="mycart_remove"><a>Remove</a></div>');
					data = {};
					data.productId = productArray[j].productId;
					data.singlePrice = productArray[j].price;
	
					mycart_remove_bu.append(mycart_remove);
	
					mycart_quality =  $('<span class="mycart_quality">Quantity :  </span>');
					mycart_size =  $('<input type="text" size="2" value="'+ productArray[j].quantity +'" name="productQuantity" autofocus="autofocus" id="productQuantity" />');
					quality_div.append(mycart_quality);
					quality_div.append(mycart_size);
					quality_div.append(mycart_remove_bu);
					mycart_price_div =  $('<div class="mycart_price_div">');
					mycart_price =  $('<span class="mycart_price">Price: $'+ productArray[j].price +' </span>');
					mycart_price_div.append(mycart_price);
	
					review_cont.append(product_contleft);
					review_cont.append(quality_div);
					review_cont.append(mycart_price_div);
					product_head.append(review_cont);  
					product_left_div.append(product_head); 
	
					mycart_borderline.append(cartImage);
					mycart_borderline.append(product_left_div);
					mycart_qua_div.append(mycart_borderline);
				
					mycart_quality_div.append(mycart_qua_div);
					myCart.append(mycart_quality_div);
					subTotal = (Number(subTotal) + (Number(productArray[j].quantity) * Number(productArray[j].price)));
				}
			}
			
	        mycart_subtotal =  $('<div class="mycart_subtotal">Subtotal: $ <span id="subTotal">'+ shoppingcart.totalCalc(shoppingcard_data,productArray) +'</span></div>');
			subtotalAmount = mycart_subtotal;
	        
			shoppingcart.totalCalc = function(shoppingcard_data,productArray_calc){
				for (i = 0; i < shoppingcard_data.length; i++) {
					 totalAmount += Number(productArray[i].quantity * productArray[i].price);
				}
				return totalAmount;
			};
			
			mycart_btn =  $('<div class="mycart_btn">');
	        mycart_update_view_bu1 =  $('<div class="mycart_update_view_bu">');
	        mycart_update_view_bu1.append(mycart_mid_bu1);
			if(productArray.length !== 0){
				mycart_mid_bu1 =  $('<div class="mycart_mid_bu"><a>Check Out</a></div>');
			} 
			mycart_update_view_bu1.append(mycart_mid_bu1);
	        clearDiv =  $('<div style="clear:both"></div>');
	        
			mycart_btn.append(mycart_update_view_bu1);
	
			mycart_btn.append(clearDiv);
			myCart.append(mycart_subtotal);
			myCart.append(mycart_btn); 
	
			mainContent.append(myCart); 
			output2 = mainContent; 
		});
	
		setTimeout(function(){
			start();
			notEqual(output1.html(), output2.html(), "Failure - Mismatch in Item Count"); 
		},1000);
		
	});

	asyncTest("Tesing ShoppingCart with Different Item", function() {
		
		var shoppingcart, api, phrescoapi, output1, output2, shoppingcard_data = {}, productArray = [], detailImageURL, checkoutvaluecol2, checkoutvaluecol4, subtotal, myCart, myCartHead, j, 
		mycart_quality_div, mycart_qua_div, mycart_borderline, cartImage, data, product_left_div, product_head, review_cont, product_contleft, quality_div, mycart_remove_bu, 
		mycart_remove, mycart_quality, mycart_size, mycart_price_div, mycart_price, mycart_subtotal, mycart_btn, mycart_update_view_bu, mycart_mid_bu, mycart_update_view_bu1, 
		mycart_mid_bu1, clearDiv, productTotal = 0, subTotal = 0, mainContent = $('<div></div>'), shoppingItemLength = 1, subtotalAmount = "", totalAmount = 0, i, wsconfig, wsURL;
		
		shoppingcard_data = [{image : "product/lg_tv_1.png",name:"LG Electronics 42PW350 3D Plasma HDTV", productId : 1, quantity : 1, price: 600},{image : "product/apple_comp_13.png", name:"Apple 11.6 MacBook Air Notebook Computer", productId : 13, quantity : 1, price: 1300}];
		productArray = [{image : "product/apple_mobile_21.png",name:"Apple iPhone 4", productId : 21, quantity : 1, price: 685},{image : "product/acer_tablet_51.png", name:"Acer 16GB Iconia Tab A500 10.1` Multi-Touch Screen Tablet", productId : 51, quantity : 1, price: 349.99}];
		
		
		shoppingcart = new  ShoppingCart();
		phrescoapi = new Phresco();
		wsconfig = new WSConfig();
		wsconfig.getEnvironment(function(wsURL){
			api = new EShopAPI();
			api.initialize(wsURL); 
			
			shoppingcart.api = api;
			phrescoapi.productArray = productArray;
			shoppingcart.phrescoapi = phrescoapi;
			shoppingcart.dataItem = shoppingcard_data;
			
			output1 = shoppingcart.testRenderUI();
			
			myCart = $('<div class="mycart_div">');
			myCartHead = $('<div class="product_name">My Shopping Cart</div>');
			myCart.append(myCartHead);
			 if(shoppingcard_data !== "undefined"){
				for (j = 0; j < shoppingItemLength; j++) {
					detailImageURL = api.wsURLWithoutContext + '/images/web/' + productArray[j].image;
					mycart_quality_div = $('<div class="mycart_quality_div">');
					mycart_quality_div.productId = productArray[j].productId;
					mycart_qua_div = $('<div class="mycart_qua_div">');
					mycart_borderline = $('<div class="mycart_borderline">');
					cartImage = $('<div class="cat_listerDetail_image"><img src="'+ detailImageURL +'" border="0" alt="image" /></div>');
					product_left_div = $('<div class="product_left_div">');
					product_head = $('<div class="product_head">');
					review_cont = $('<div class="review_cont">');
					product_contleft =  $('<div class="product_contleft"><p><b>' + productArray[j].name + '</b></p></div>');
					quality_div =  $('<div class="quality_div">');
					mycart_remove_bu =  $('<div class="mycart_remove_bu">');
					mycart_remove =  $('<div class="mycart_remove"><a href="#">Remove</a></div>');
					data = {};
					data.productId = productArray[j].productId;
					data.singlePrice = productArray[j].price;
	
					mycart_remove_bu.append(mycart_remove);
	
					mycart_quality =  $('<span class="mycart_quality">Quantity :  </span>');
					mycart_size =  $('<input type="text" size="2" value="'+ productArray[j].quantity +'" name="productQuantity" autofocus="autofocus" id="productQuantity" />');
					quality_div.append(mycart_quality);
					quality_div.append(mycart_size);
					quality_div.append(mycart_remove_bu);
					mycart_price_div =  $('<div class="mycart_price_div">');
					mycart_price =  $('<span class="mycart_price">Price: $'+ productArray[j].price +' </span>');
					mycart_price_div.append(mycart_price);
	
					review_cont.append(product_contleft);
					review_cont.append(quality_div);
					review_cont.append(mycart_price_div);
					product_head.append(review_cont);  
					product_left_div.append(product_head); 
	
					mycart_borderline.append(cartImage);
					mycart_borderline.append(product_left_div);
					mycart_qua_div.append(mycart_borderline);
				
					mycart_quality_div.append(mycart_qua_div);
					myCart.append(mycart_quality_div);
					subTotal = (Number(subTotal) + (Number(productArray[j].quantity) * Number(productArray[j].price)));
				}
			}
			
	        mycart_subtotal =  $('<div class="mycart_subtotal">Subtotal: $ <span id="subTotal">'+ shoppingcart.totalCalc(shoppingcard_data,productArray) +'</span></div>');
			subtotalAmount = mycart_subtotal;
	        
			shoppingcart.totalCalc = function(shoppingcard_data,productArray_calc){
				for (i = 0; i < shoppingcard_data.length; i++) {
					 totalAmount += Number(productArray[i].quantity * productArray[i].price);
				}
				return totalAmount;
			};
			
			mycart_btn =  $('<div class="mycart_btn">');
	        mycart_update_view_bu1 =  $('<div class="mycart_update_view_bu">');
	        mycart_update_view_bu1.append(mycart_mid_bu1);
			if(productArray.length !== 0){
				mycart_mid_bu1 =  $('<div class="mycart_mid_bu"><a href="#">Check Out</a></div>');
			} 
			mycart_update_view_bu1.append(mycart_mid_bu1);
	        clearDiv =  $('<div style="clear:both"></div>');
	        
			mycart_btn.append(mycart_update_view_bu1);
	
			mycart_btn.append(clearDiv);
			myCart.append(mycart_subtotal);
			myCart.append(mycart_btn); 
	
			mainContent.append(myCart); 
			output2 = mainContent; 
		});
		setTimeout(function(){
			start();
			notEqual(output1.html(), output2.html(), "Failure - Invalid Product"); 
		},1000);
	});

	asyncTest("Testing ShoppingCart with Different No Of Products", function() {
		
		var shoppingcart, api, phrescoapi, output1, output2, shoppingcard_data = {}, productArray = [], detailImageURL, checkoutvaluecol2, checkoutvaluecol4, subtotal, myCart, myCartHead, j, 
		mycart_quality_div, mycart_qua_div, mycart_borderline, cartImage, data, product_left_div, product_head, review_cont, product_contleft, quality_div, mycart_remove_bu, 
		mycart_remove, mycart_quality, mycart_size, mycart_price_div, mycart_price, mycart_subtotal, mycart_btn, mycart_update_view_bu, mycart_mid_bu, mycart_update_view_bu1, 
		mycart_mid_bu1, clearDiv, productTotal = 0, subTotal = 0, mainContent = $('<div></div>'), shoppingItemLength = 1, subtotalAmount = "", totalAmount = 0, i, wsconfig, wsURL;
		
		shoppingcard_data = [{image : "product/lg_tv_1.png",name:"LG Electronics 42PW350 3D Plasma HDTV", productId : 1, quantity : 1, price: 600},{image : "product/apple_comp_13.png", name:"Apple 11.6 MacBook Air Notebook Computer", productId : 13, quantity : 1, price: 1300}];
		productArray = [{image : "product/lg_tv_1.png",name:"LG Electronics 42PW350 3D Plasma HDTV", productId : 1, quantity : 1, price: 600},{image : "product/apple_comp_13.png", name:"Apple 11.6 MacBook Air Notebook Computer", productId : 13, quantity : 1, price: 1300}, {image : "product/apple_mobile_21.png",name:"Apple iPhone 4", productId : 21, quantity : 1, price: 685}];
		
		
		shoppingcart = new  ShoppingCart();
		phrescoapi = new Phresco();
		wsconfig = new WSConfig();
		wsconfig.getEnvironment(function(wsURL){
			api = new EShopAPI();
			api.initialize(wsURL); 
			
			shoppingcart.api = api;
			phrescoapi.productArray = productArray;
			shoppingcart.phrescoapi = phrescoapi;
			shoppingcart.dataItem = shoppingcard_data;
			
			output1 = shoppingcart.testRenderUI();
			
			myCart = $('<div class="mycart_div">');
			myCartHead = $('<div class="product_name">My Shopping Cart</div>');
			myCart.append(myCartHead);
			 if(shoppingcard_data !== "undefined"){
				for (j = 0; j < shoppingItemLength; j++) {
					detailImageURL = api.wsURLWithoutContext + '/images/web/' + productArray[j].image;
					mycart_quality_div = $('<div class="mycart_quality_div">');
					mycart_quality_div.productId = productArray[j].productId;
					mycart_qua_div = $('<div class="mycart_qua_div">');
					mycart_borderline = $('<div class="mycart_borderline">');
					cartImage = $('<div class="cat_listerDetail_image"><img src="'+ detailImageURL +'" border="0" alt="image" /></div>');
					product_left_div = $('<div class="product_left_div">');
					product_head = $('<div class="product_head">');
					review_cont = $('<div class="review_cont">');
					product_contleft =  $('<div class="product_contleft"><p><b>' + productArray[j].name + '</b></p></div>');
					quality_div =  $('<div class="quality_div">');
					mycart_remove_bu =  $('<div class="mycart_remove_bu">');
					mycart_remove =  $('<div class="mycart_remove"><a href="#">Remove</a></div>');
					data = {};
					data.productId = productArray[j].productId;
					data.singlePrice = productArray[j].price;
	
					mycart_remove_bu.append(mycart_remove);
	
					mycart_quality =  $('<span class="mycart_quality">Quantity :  </span>');
					mycart_size =  $('<input type="text" size="2" value="'+ productArray[j].quantity +'" name="productQuantity" autofocus="autofocus" id="productQuantity" />');
					quality_div.append(mycart_quality);
					quality_div.append(mycart_size);
					quality_div.append(mycart_remove_bu);
					mycart_price_div =  $('<div class="mycart_price_div">');
					mycart_price =  $('<span class="mycart_price">Price: $'+ productArray[j].price +' </span>');
					mycart_price_div.append(mycart_price);
	
					review_cont.append(product_contleft);
					review_cont.append(quality_div);
					review_cont.append(mycart_price_div);
					product_head.append(review_cont);  
					product_left_div.append(product_head); 
	
					mycart_borderline.append(cartImage);
					mycart_borderline.append(product_left_div);
					mycart_qua_div.append(mycart_borderline);
				
					mycart_quality_div.append(mycart_qua_div);
					myCart.append(mycart_quality_div);
					subTotal = (Number(subTotal) + (Number(productArray[j].quantity) * Number(productArray[j].price)));
				}
			}
			
	        mycart_subtotal =  $('<div class="mycart_subtotal">Subtotal: $ <span id="subTotal">'+ shoppingcart.totalCalc(shoppingcard_data,productArray) +'</span></div>');
			subtotalAmount = mycart_subtotal;
	        
			shoppingcart.totalCalc = function(shoppingcard_data,productArray_calc){
				for (i = 0; i < shoppingcard_data.length; i++) {
					 totalAmount += Number(productArray[i].quantity * productArray[i].price);
				}
				return totalAmount;
			};
			
			mycart_btn =  $('<div class="mycart_btn">');
	        mycart_update_view_bu1 =  $('<div class="mycart_update_view_bu">');
	        mycart_update_view_bu1.append(mycart_mid_bu1);
			if(productArray.length !== 0){
				mycart_mid_bu1 =  $('<div class="mycart_mid_bu"><a href="#">Check Out</a></div>');
			} 
			mycart_update_view_bu1.append(mycart_mid_bu1);
	        clearDiv =  $('<div style="clear:both"></div>');
	        
			mycart_btn.append(mycart_update_view_bu1);
	
			mycart_btn.append(clearDiv);
			myCart.append(mycart_subtotal);
			myCart.append(mycart_btn); 
	
			mainContent.append(myCart); 
			output2 = mainContent; 
		
		});
		setTimeout(function(){
			start();
			notEqual(output1.html(), output2.html(), "Failure - Invalid No of Products"); 
		},1000);
	}); 
});