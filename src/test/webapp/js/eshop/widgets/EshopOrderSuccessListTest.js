/*global require */

require(  [ "jquery", "eshop/widgets/OrderSuccess"], function($, OrderSuccess) {

	//var equal = QUnit.equal, notEqual = QUnit.notEqual, expect = QUnit.expect, testWithSameCase = QUnit.test, testWithMismatchCase = QUnit.test;

	/**
	 * Test that the setMainContent method sets the text in the ordersuccess-widget
	 */
	  module("OrderSuccess.js;OrderSuccess");
	test("Testing ordersuccess-widget", function() {

			var ordersuccess, output1, output2, mainContent,mycart, mycart_head, emailblock, emailblocksub, emailblocksubp1, emailblocksubp2, emailblocksubp3, emailblocksubp4;
			ordersuccess = new OrderSuccess();
			output1 = ordersuccess.renderUI(); 
			
			mainContent = $('<div></div>');
			mycart = $('<div class="mycart_div">');
			mycart_head = $('<div class="mycart_head">Order Status</div>');                
			emailblock = $('<div class="status_cond">');
			emailblocksub = $('<div class="status_inner_div">');
			emailblocksubp1 = $('<p>Order Status Message</p>');
			emailblocksubp2 = $('<p class="text">Your order is complete!</p>');
			emailblocksubp3 = $('<p class="text">Your order number is XXX.</p>');               
			emailblocksubp4 = $('<p class="text">Thanking you for shopping at Phresco. While logged in. You may continue shopping or view your order status and order.</p>');

			emailblocksub.append(emailblocksubp1);
			emailblocksub.append(emailblocksubp2);
			emailblocksub.append(emailblocksubp3);
			emailblocksub.append(emailblocksubp4);
			emailblock.append(emailblocksub); 
			mycart.append(mycart_head);        
			mycart.append(emailblock); 
			mainContent.append(mycart);		
			
			output2 = mainContent;
			
		// Expect that the text was set on the expected element
		equal(output1.html(), output2.html(), "Success - Testcase for ordersuccess-widget passed");
	}); 
	
	test("Testing ordersuccess-widget with Mismatch Case", function() {

			var ordersuccess, output1, output2, mainContent,mycart, mycart_head, emailblock, emailblocksub, emailblocksubp1, emailblocksubp3, emailblocksubp4;
			ordersuccess = new OrderSuccess();
			output1 = ordersuccess.renderUI(); 
			
			mainContent = $('<div></div>');
			mycart = $('<div class="mycart_div">');
			mycart_head = $('<div class="mycart_head">Order Status</div>');                
			emailblock = $('<div class="status_cond1">');
			emailblocksub = $('<div class="status_inner_div">');
			emailblocksubp1 = $('<p>Order Status Message</p>');
			//emailblocksubp2 = $('<p class="text">Your order is complete!</p>');
			emailblocksubp3 = $('<p class="text">Your order number is XXX.</p>');               
			emailblocksubp4 = $('<p class="text">Thanking you for shopping at Phresco. While logged in. You may continue shopping or view your order status and order.</p>');

			emailblocksub.append(emailblocksubp1);
			//emailblocksub.append(emailblocksubp2);
			emailblocksub.append(emailblocksubp3);
			emailblocksub.append(emailblocksubp4);
			emailblock.append(emailblocksub); 
			mycart.append(mycart_head);        
			mycart.append(emailblock); 
			mainContent.append(mycart);		
			
			output2 = mainContent;
			
		// Expect that the text was set on the expected element
		notEqual(output1.html(), output2.html(), "Failure - Mismatch in Tags");
	}); 
});