/*global require */

require(  [ "jquery", "eshop/widgets/MyCart"], function($, MyCart) {

	//var equal = QUnit.equal, notEqual = QUnit.notEqual ,expect = QUnit.expect, testwithsamedata = QUnit.test, testwithdiffdata = QUnit.test, testwithdiffproducts = QUnit.test;

	/**
	 * Test that the setMainContent method sets the text in the MyCart-widget
	 */
	 module("MyCart.js;MyCart");
	test("Testing MyCart-widget with Product Details", function() {
	
		var mainContent = $('<div></div>'),mycart, api, output1, output2, self=this, myCart,
		detailImageURL, myCartHead, j, subTotal, myCartQuantity,
		myCartQuantitySub, myCartUL,  myCartLIQuantity, myCartLIProduct, 
		myCartLIPrice, myCartSubTotal, myCartButton, myCartButtonMid, myCartCheckOut, myCartClearBoth;
	
	
		mycart = new MyCart();
		mycart.api = api;
		mycart.listener = undefined;
		mycart.phrescoapi = undefined;

		output1 = mycart.testRenderUI();

        myCart = $('<div class="mycart_div">');
        myCartHead = $('<div class="product_name">My Cart</div>');
        myCart.append(myCartHead);
        subTotal = 0;
        myCartQuantity = $('<div class="mycart_quantity">');
        myCartQuantitySub = $('<div class="mycart_quan">');
        myCartUL = $('<ul>');
        myCartLIQuantity = $('<li><span class="lft">Quantity:</span><span class="rht">1</span>');
        myCartLIProduct = $('<li><span class="lft">Product:</span><span class="rht">LG Electronics 42PW350 3D Plasma HDTV </span>');
        myCartLIPrice = $('<li><span class="lft">Price :</span><span class="rht">$200</span>');
        myCartUL.append(myCartLIQuantity);
        myCartUL.append(myCartLIProduct);
        myCartUL.append(myCartLIPrice);
        myCartQuantitySub.append(myCartUL);
        myCartQuantity.append(myCartQuantitySub);
        
        myCart.append(myCartQuantity);
    
        myCartSubTotal = $('<div class="mycart_subtotal">Subtotal: $200</div>');
        myCartButton = $('<div class="mycart_btn">');
        myCartButtonMid = $('<div class="mycart_btn_mid">');
        myCartCheckOut = $('<div id="checkoutid" class="mycart_mid_bu"><a href="#">Checkout</a></div>');
        
        myCartButtonMid.append(myCartCheckOut);
        myCartButton.append(myCartButtonMid);

        myCartClearBoth = $('<div style="clear:both"></div>');
        myCartButton.append(myCartClearBoth);
       
        myCart.append(myCartSubTotal);
        myCart.append(myCartButton);

        mainContent.append(myCart);
		output2 = mainContent;

           // Expect that the text was set on the expected element
         equal(output1.html(), output2.html(),	"Success - Testcase for Mycart-widget passed");
	});
	
	test("Testing MyCart-widget with Same Product With Details", function() {
	
		var mainContent = $('<div></div>'),mycart, api, output1, output2, self=this, myCart,
		detailImageURL, myCartHead, j, subTotal, myCartQuantity,
		myCartQuantitySub, myCartUL,  myCartLIQuantity, myCartLIProduct, 
		myCartSubTotal, myCartButton, myCartButtonMid, myCartCheckOut, myCartClearBoth, myCartLIPrice;
	
	
		mycart = new MyCart();
		mycart.api = api;
		mycart.listener = undefined;
		mycart.phrescoapi = undefined;

		output1 = mycart.testRenderUI();

		myCart = $('<div class="mycart_div">');
        myCartHead = $('<div class="product_name">My Cart</div>');
        myCart.append(myCartHead);
        subTotal = 0;
        myCartQuantity = $('<div class="mycart_quantity">');
        myCartQuantitySub = $('<div class="mycart_quan">');
        myCartUL = $('<ul>');
        myCartLIQuantity = $('<li><span class="lft">Quantity  :</span><span class="rht">1</span>');
        myCartLIProduct = $('<li><span class="lft">Product   :</span><span class="rht">LG Electronics 42PW350 3D Plasma HDTV </span>');
        myCartLIPrice = $('<li><span class="lft">Price :</span><span class="rht"></span>'); 
        myCartUL.append(myCartLIQuantity);
        myCartUL.append(myCartLIProduct);
        myCartUL.append(myCartLIPrice); 
        myCartQuantitySub.append(myCartUL);
        myCartQuantity.append(myCartQuantitySub);
        
        myCart.append(myCartQuantity);
    
        myCartSubTotal = $('<div class="mycart_subtotal">Subtotal: $200</div>');
        myCartButton = $('<div class="mycart_btn">');
        myCartButtonMid = $('<div class="mycart_btn_mid">');
        myCartCheckOut = $('<div id="checkoutid" class="mycart_mid_bu"><a href="#">Checkout</a></div>');
    
        myCartButtonMid.append(myCartCheckOut);
        myCartButton.append(myCartButtonMid);

        myCartClearBoth = $('<div style="clear:both"></div>');
        myCartButton.append(myCartClearBoth);
       
        myCart.append(myCartSubTotal);
        myCart.append(myCartButton);

        mainContent.append(myCart);
		output2 = mainContent;

           // Expect that the text was set on the expected element
         notEqual(output1.html(), output2.html(),	"Failure - Mismatch in User Details");
	});
	
	test("Testing MyCart-widget with Different Products", function() {
	
		var mainContent = $('<div></div>'),mycart, api, output1, output2, self=this, myCart,
		detailImageURL, myCartHead, j, subTotal, myCartQuantity,
		myCartQuantitySub, myCartUL,  myCartLIQuantity, myCartLIProduct, 
		myCartSubTotal, myCartButton, myCartButtonMid, myCartCheckOut, myCartClearBoth, myCartLIPrice;
	
	
		mycart = new MyCart();
		mycart.api = api;
		mycart.listener = undefined;
		mycart.phrescoapi = undefined;

		output1 = mycart.testRenderUI();

		myCart = $('<div class="mycart_div">');
        myCartHead = $('<div class="product_name">My Cart</div>');
        myCart.append(myCartHead);
        subTotal = 0;
        myCartQuantity = $('<div class="mycart_quantity">');
        myCartQuantitySub = $('<div class="mycart_quan">');
        myCartUL = $('<ul>');
        myCartLIQuantity = $('<li><span class="lft">Quantity  :</span><span class="rht">1</span>');
        myCartLIProduct = $('<li><span class="lft">Product   :</span><span class="rht">Apple iPhone 4 </span>');
        myCartLIPrice = $('<li><span class="lft">Price :</span><span class="rht">$200</span>'); 
        myCartUL.append(myCartLIQuantity);
        myCartUL.append(myCartLIProduct);
        myCartUL.append(myCartLIPrice); 
        myCartQuantitySub.append(myCartUL);
        myCartQuantity.append(myCartQuantitySub);
        
        myCart.append(myCartQuantity);
    
        myCartSubTotal = $('<div class="mycart_subtotal">Subtotal: $200</div>');
        myCartButton = $('<div class="mycart_btn">');
        myCartButtonMid = $('<div class="mycart_btn_mid">');
        myCartCheckOut = $('<div id="checkoutid" class="mycart_mid_bu"><a href="#">Checkout</a></div>');
    
        myCartButtonMid.append(myCartCheckOut);
        myCartButton.append(myCartButtonMid);

        myCartClearBoth = $('<div style="clear:both"></div>');
        myCartButton.append(myCartClearBoth);
       
        myCart.append(myCartSubTotal);
        myCart.append(myCartButton);

        mainContent.append(myCart);
		output2 = mainContent;

           // Expect that the text was set on the expected element
         notEqual(output1.html(), output2.html(),	"Failure - Invalid Product");
	});
});
