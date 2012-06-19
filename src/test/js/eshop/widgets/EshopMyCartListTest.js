/*global require */

require([ "jquery", "./MyCart","qunit" ], function($, MyCart, QUnit) {

	var equal = QUnit.equal, expect = QUnit.expect, test = QUnit.test;

	/**
	 * Test that the setMainContent method sets the text in the MyCart-widget
	 */
	test("MyCart-widget unite test case.", function() {
	var mainContent = $('<div></div>'),mycart, api, output1, output2, self=this, myCart,
	detailImageURL, myCartHead, j, subTotal, myCartQuantity,
	myCartQuantitySub, myCartUL,  myCartLIQuantity, myCartLIProduct, 
	myCartLIPrice, myCartSubTotal, myCartButton, myCartButtonMid, myCartCheckOut, myCartClearBoth;
	
	
		mycart = new MyCart();
		mycart.api = api;
		mycart.listener = undefined;
		mycart.phrescoapi = undefined;

		output1 = mycart.renderUI();

		myCart = $('<div class="mycart_div">');
        myCartHead = $('<div class="product_name">My Cart</div>');
        myCart.append(myCartHead);
        subTotal = 0;
        myCartQuantity = $('<div class="mycart_quantity">');
        myCartQuantitySub = $('<div class="mycart_quan">');
        myCartUL = $('<ul>');
        myCartLIQuantity = $('<li><span class="lft">Quantity  :</span><span class="rht">1</span>');
        myCartLIProduct = $('<li><span class="lft">Product   :</span><span class="rht">LG Electronics 42PW350 3D Plasma HDTV </span>');
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
        myCartCheckOut = $('<div class="mycart_mid_bu"><a href="#">Checkout</a></div>');
                
        myCartButtonMid.append(myCartCheckOut);
        myCartButton.append(myCartButtonMid);

        myCartClearBoth = $('<div style="clear:both"></div>');
        myCartButton.append(myCartClearBoth);
       
        myCart.append(myCartSubTotal);
        myCart.append(myCartButton);

        mainContent.append(myCart);
		  output2 = mainContent;

           // Expect that the text was set on the expected element
         equal(output1.html(), output2.html(),	"Expected text not set in Menu-widget");
	});
});
		
		