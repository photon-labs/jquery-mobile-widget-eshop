/*global require */

require(  [ "jquery", "eshop/widgets/OrderFormView", "eshop/widgets/Phresco"], function($, OrderFormView, Phresco) {

	//var equal = QUnit.equal, notEqual = QUnit.notEqual, expect = QUnit.expect, testwithsamedata = QUnit.test, testwithdiffdata = QUnit.test, testwithemptydata = QUnit.test, testwithspecialcharacter = QUnit.test;

	/**
	 * Test that the setMainContent method sets the text in the orderformview-widget
	 */
	 module("OrderFormView.js;OrderFormView");
	test("Testing orderformview-widget with User Details", function() {

				var orderformview, orderDetail = {}, orderDetail_test = {} , pricequantity = {}, pricequantity_test = {}, output1, output2, phrescoapi, methodul, comments, mainContent, mycart, mycart_head, customer, emailblock, emailblocksub, emailblocksubul, emailblocksubLi1, emailblocksubLi2,
                emailblocksubspan1, emailblocksubspan2, deliveryinfo, deliveryinfodetails, deliveryinfolabel, addressblock, addressblocksub, addressblocksubul, firstnameli, firstnamespan1,  firstnamespan2, lastnameli, lastnamelispan1, lastnamelispan2, companyli, companylispan1, addressli1, addressli1span1,
                addressli1span2, addressli2, addressli2span1, addressli2span2, cityli, citylispan1, citylispan2, stateli, statelispan1, statelispan2, countryli, countrylispan1, countrylispan2, postcodeli, postcodelispan1, phonenumberlispan2, billinginfo, billinginfodetails, billinginfolabel,
                billaddressblock, billaddressblocksub, billaddressblocksubul, billfirstnameli, billfirstnamespan1, billfirstnamespan2, billlastnameli, billlastnamelispan1,
                billlastnamelispan2, billcompanyli, billcompanylispan1, billcompanylispan2, billaddressli1, billaddressli1span1, billaddressli1span2, billphonenumberli, billphonenumberlispan1,
                billaddressli2, billaddressli2span1, billaddressli2span2, billcityli, billcitylispan1, billcitylispan2, billstateli, billstatelispan1, billstatelispan2, 
				billcountryli, billcountrylispan1, billcountrylispan2, billpostcodeli, billpostcodelispan1, billpostcodelispan2, phonenumberli, phonenumberlispan1, billphonenumberlispan2, paymentmethod, selectpayment, selectpaymentlabel, method, methodli1, methodli2, subtotal, subtotalspan1, subtotalspan2, subtotalspan3,
                ordertotal, ordertotalspan1, ordertotalspan2, ordertotalspan3, ordercomments, ordercmdblock, commnettext, commnethead, commentbox, buttons, buttonblock, postcodelispan2,
                revieworder, cancel, clear, i, orderdetailBilling, totalItemprice, orderdetailDelivery, companylispan2;

				// Setup view and call method under test
				orderformview = new OrderFormView();
				
				pricequantity = { itemCount:1, totalPrice:600 };
				pricequantity_test = { itemCount:1, totalPrice:600 };
				orderDetail = {email:"oaibr@ymail.com", deliveryfirstname:"Mohd", deliverylastname:"Ibrahim", deliverycompany:"DHL", deliveryaddress1:"Chennai", deliveryaddress2:"Chennai", deliverycity:"Chennai", deliverystate:"Tamilnadu", deliverycountry:"India", deliverypostcode:627811, deliveryphonenumber:11111, billingfirstname:"Mohd", billinglastname:"Ibr", billingcompany:"DHL", billingaddress1:"chn", billingaddress2:"chn", billingcity:"TSI", billingstate:"TN", billingcountry:"IND", billingpostcode:111, billingphonenumber:111, comments:"comments"};
				orderDetail_test = {email:"oaibr@ymail.com", deliveryfirstname:"Mohd", deliverylastname:"Ibrahim", deliverycompany:"DHL", deliveryaddress1:"Chennai", deliveryaddress2:"Chennai", deliverycity:"Chennai", deliverystate:"Tamilnadu", deliverycountry:"India", deliverypostcode:627811, deliveryphonenumber:11111, billingfirstname:"Mohd", billinglastname:"Ibr", billingcompany:"DHL", billingaddress1:"chn", billingaddress2:"chn", billingcity:"TSI", billingstate:"TN", billingcountry:"IND", billingpostcode:111, billingphonenumber:111, comments:"comments"};
				
				phrescoapi = new Phresco();
				orderformview.phrescoapi = phrescoapi;
				orderformview.phrescoapi.orderDetail = orderDetail;
				orderformview.phrescoapi.pricequantity = pricequantity;
				
				output1 = orderformview.testRenderUI();
				
				orderdetailDelivery = {};
                orderdetailDelivery.firstname = orderDetail_test.deliveryfirstname;
                orderdetailDelivery.lastname  =  orderDetail_test.deliverylastname;
                orderdetailDelivery.company =  orderDetail_test.deliverycompany;
                orderdetailDelivery.address1 =  orderDetail_test.deliveryaddress1;
                orderdetailDelivery.address2 =  orderDetail_test.deliveryaddress2;
                orderdetailDelivery.city = orderDetail_test.deliverycity;
                orderdetailDelivery.state =  orderDetail_test.deliverystate;
                orderdetailDelivery.country =  orderDetail_test.deliverycountry;
                orderdetailDelivery.postcode =  orderDetail_test.deliverypostcode;
                orderdetailDelivery.deliveryphonenumber =  orderDetail_test.deliveryphonenumber;

                orderdetailBilling = {};
                orderdetailBilling.firstName = orderDetail_test.billingfirstname;
                orderdetailBilling.lastName  =  orderDetail_test.billinglastname;
                orderdetailBilling.company =  orderDetail_test.billingcompany;
                orderdetailBilling.address1 =  orderDetail_test.billingaddress1;
                orderdetailBilling.address2 =  orderDetail_test.billingaddress2;
                orderdetailBilling.city = orderDetail_test.billingcity;
                orderdetailBilling.state =  orderDetail_test.billingstate;
                orderdetailBilling.country =  orderDetail_test.billingcountry;
                orderdetailBilling.postcode =  orderDetail_test.billingpostcode;
                orderdetailBilling.phonenumber =  orderDetail_test.billingphonenumber;

                totalItemprice = {};
                totalItemprice.item = pricequantity_test.itemCount;
                totalItemprice.amount = pricequantity_test.totalPrice;

                mainContent = $('<div></div>');
                mycart = $('<div class="mycart_div">');
                mycart_head = $('<div class="mycart_head">Checkout</div>');
                customer = $('<div class="checkout_tab"><a href="#">Customer Information</a></div>');

                emailblock = $('<div class="bill_div" id="checkout_1" style="display:block;">');
                emailblocksub = $('<div class="checkout_2_txt" >');
                emailblocksubul = $('<ul>');
                emailblocksubLi1 = $('<li>Order Information will be sent to your A/C email list below.</li>');
                emailblocksubLi2 = $('<li class="bld">');
                emailblocksubspan1 = $('<span class="bill_details_lft">Email address</span>');
                emailblocksubspan2 = $('<span class="bill_details_rht">'+ orderDetail_test.email +'</span>');
                emailblocksubLi2.append(emailblocksubspan1);
                emailblocksubLi2.append(emailblocksubspan2);
                emailblocksubul.append(emailblocksubLi1);  
                emailblocksubul.append(emailblocksubLi2);              
                emailblocksub.append(emailblocksubul);
                emailblock.append(emailblocksub);  

                deliveryinfo = $('<div class="checkout_tab" ><a href="#">Delivery Information</a></div>');

                deliveryinfodetails = $('<div class="bill_div" id="checkout_2" style="display:none;">');
                deliveryinfolabel= $('<div class="bill_head">Delivery address and information here</div>');
                addressblock = $('<div class="bill_text_div">');
                addressblocksub = $('<div class="bill_details">');
                addressblocksubul = $('<ul>');

                firstnameli = $('<li>');
                firstnamespan1 = $('<span class="bill_details_lft">First name</span>');
                firstnamespan2 = $('<span class="bill_details_rht">'+ orderdetailDelivery.firstname +'</span>');
                firstnameli.append(firstnamespan1);
                firstnameli.append(firstnamespan2);

                lastnameli = $('<li>');
                lastnamelispan1 = $('<span class="bill_details_lft">Last name</span>');
                lastnamelispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliverylastname +'</span>');
                lastnameli.append(lastnamelispan1);
                lastnameli.append(lastnamelispan2);

                companyli = $('<li>');
                companylispan1 = $('<span class="bill_details_lft">Company</span>');
                companylispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliverycompany +'</span>');
                companyli.append(companylispan1);
                companyli.append(companylispan2);

                addressli1 = $('<li>');
                addressli1span1 = $('<span class="bill_details_lft">Address 1</span>');
                addressli1span2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliveryaddress1 +'</span>');
                addressli1.append(addressli1span1);
                addressli1.append(addressli1span2);

                addressli2 = $('<li>');
                addressli2span1 = $('<span class="bill_details_lft">Address 2</span>');
                addressli2span2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliveryaddress2 +'</span>');
                addressli2.append(addressli2span1);
                addressli2.append(addressli2span2);

                cityli = $('<li>');
                citylispan1 = $('<span class="bill_details_lft">City</span>');
                citylispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliverycity +'</span>');
                cityli.append(citylispan1);
                cityli.append(citylispan2);

                stateli = $('<li>');
                statelispan1 = $('<span class="bill_details_lft">State/Province</span>');                                      
                statelispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliverystate +'</span>');
                stateli.append(statelispan1);
                stateli.append(statelispan2);

                countryli = $('<li>');
                countrylispan1 = $('<span class="bill_details_lft">Country</span>');                                   
                countrylispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliverycountry +'</span>');
                countryli.append(countrylispan1);
                countryli.append(countrylispan2);

                postcodeli = $('<li>');
                postcodelispan1 = $('<span class="bill_details_lft">Postcode</span>');
                postcodelispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliverypostcode +'</span>');
                postcodeli.append(postcodelispan1);
                postcodeli.append(postcodelispan2);

                phonenumberli = $('<li>');
                phonenumberlispan1 = $('<span class="bill_details_lft">Phone Number</span>');
                phonenumberlispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliveryphonenumber +'</span>');
                phonenumberli.append(phonenumberlispan1);
                phonenumberli.append(phonenumberlispan2);

                addressblocksubul.append(firstnameli);
                addressblocksubul.append(lastnameli);
                addressblocksubul.append(companyli);
                addressblocksubul.append(addressli1);
                addressblocksubul.append(addressli2);
                addressblocksubul.append(cityli);
                addressblocksubul.append(stateli);
                addressblocksubul.append(countryli);
                addressblocksubul.append(postcodeli);
                addressblocksubul.append(phonenumberli);
                addressblocksub.append(addressblocksubul); 
                addressblock.append(addressblocksub);
                deliveryinfodetails.append(deliveryinfolabel);
                deliveryinfodetails.append(addressblock);	

                billinginfo = $('<div class="checkout_tab" ><a href="#">billing Information</a></div>');

                billinginfodetails = $('<div class="bill_div" id="checkout_3" style="display:none;">');
                billinginfolabel= $('<div class="bill_head">Billing address and information here</div>');
                billaddressblock = $('<div class="bill_text_div">');
                billaddressblocksub = $('<div class="bill_details">');
                billaddressblocksubul = $('<ul>');

                billfirstnameli = $('<li>');
                billfirstnamespan1 = $('<span class="bill_details_lft">First name</span>');
                billfirstnamespan2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingfirstname +'</span>');
                billfirstnameli.append(billfirstnamespan1);
                billfirstnameli.append(billfirstnamespan2);

                billlastnameli = $('<li>');
                billlastnamelispan1 = $('<span class="bill_details_lft">Last name</span>');
                billlastnamelispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.billinglastname +'</span>');
                billlastnameli.append(billlastnamelispan1);
                billlastnameli.append(billlastnamelispan2);

                billcompanyli = $('<li>');
                billcompanylispan1 = $('<span class="bill_details_lft">Company</span>');
                billcompanylispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingcompany +'</span>');
                billcompanyli.append(billcompanylispan1);
                billcompanyli.append(billcompanylispan2);

                billaddressli1 = $('<li>');
                billaddressli1span1 = $('<span class="bill_details_lft">Address 1</span>');
                billaddressli1span2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingaddress1 +'</span>');
                billaddressli1.append(billaddressli1span1);
                billaddressli1.append(billaddressli1span2);

                billaddressli2 = $('<li>');
                billaddressli2span1 = $('<span class="bill_details_lft">Address 2</span>');
                billaddressli2span2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingaddress2 +'</span>');
                billaddressli2.append(billaddressli2span1);
                billaddressli2.append(billaddressli2span2);

                billcityli = $('<li>');
                billcitylispan1 = $('<span class="bill_details_lft">City</span>');
                billcitylispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingcity +'</span>');
                billcityli.append(billcitylispan1);
                billcityli.append(billcitylispan2);

                billstateli = $('<li>');
                billstatelispan1 = $('<span class="bill_details_lft">State/Province</span>');                                      
                billstatelispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingstate +'</span>');
                billstateli.append(billstatelispan1);
                billstateli.append(billstatelispan2);

                billcountryli = $('<li>');
                billcountrylispan1 = $('<span class="bill_details_lft">Country</span>');                                   
                billcountrylispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingcountry +'</span>');
                billcountryli.append(billcountrylispan1);
                billcountryli.append(billcountrylispan2);

                billpostcodeli = $('<li>');
                billpostcodelispan1 = $('<span class="bill_details_lft">Postcode</span>');
                billpostcodelispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingpostcode +'</span>');
                billpostcodeli.append(billpostcodelispan1);
                billpostcodeli.append(billpostcodelispan2);

                billphonenumberli = $('<li>');
                billphonenumberlispan1 = $('<span class="bill_details_lft">Phone Number</span>');
                billphonenumberlispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingphonenumber +'</span>');
                billphonenumberli.append(billphonenumberlispan1);
                billphonenumberli.append(billphonenumberlispan2);

                billaddressblocksubul.append(billfirstnameli);
                billaddressblocksubul.append(billlastnameli);
                billaddressblocksubul.append(billcompanyli);
                billaddressblocksubul.append(billaddressli1);
                billaddressblocksubul.append(billaddressli2);
                billaddressblocksubul.append(billcityli);
                billaddressblocksubul.append(billstateli);
                billaddressblocksubul.append(billcountryli);
                billaddressblocksubul.append(billpostcodeli);
                billaddressblocksubul.append(billphonenumberli);
                billaddressblocksub.append(billaddressblocksubul); 
                billaddressblock.append(billaddressblocksub);
                billinginfodetails.append(billinginfolabel);
                billinginfodetails.append(billaddressblock);

                paymentmethod = $('<div class="checkout_tab"><a href="#">Payment Methods</a></div>');

                selectpayment = $('<div class="bill_div" id="checkout_4" style="display:none;">');
                selectpaymentlabel = $('<div class="comments_text">Select a payment method from the following options</div>');
                method = $('<div class="methods_div">');
                methodul = $('<ul>');  
                methodli1 = $('<li><span class="radio"><input name="" type="radio" value="" /></span><span class="method_text">Cheque or money order</span></li>');
                methodli2 = $('<li><span class="radio"><input name="" type="radio" value="" checked="checked"/></span><span class="method_text">Cash on delivery</span></li>');                             
                methodul.append(methodli1);
                methodul.append(methodli2);            
                method.append(methodul);                      
                 
                subtotal = $('<div class="prod_check_div">');
                subtotalspan1 = $('<span class="prod_check_lft">Total Item</span>');
                subtotalspan2 = $('<span class="prod_check_rht1">'+ pricequantity_test.itemCount +'</span>');
                subtotalspan3 = $('<span class="prod_check_mid">:</span>');
                subtotal.append(subtotalspan1);
                subtotal.append(subtotalspan2);
                subtotal.append(subtotalspan3);

                ordertotal = $('<div class="prod_check_div">');
                ordertotalspan1 = $('<span class="prod_check_lft">ordertotal</span>');
                ordertotalspan2 = $('<span class="prod_check_rht1">'+ pricequantity_test.totalPrice +'</span>');
                ordertotalspan3 = $('<span class="prod_check_mid">:</span>');
                ordertotal.append(ordertotalspan1);
                ordertotal.append(ordertotalspan2);
                ordertotal.append(ordertotalspan3);
                comments = $('<div class="comments_text">Cheque should be made out to Phresco</div>');
                selectpayment.append(selectpaymentlabel);
                selectpayment.append(method);
                selectpayment.append(subtotal);
                selectpayment.append(ordertotal);  
                selectpayment.append(comments);                    

                ordercomments = $('<div class="checkout_tab"><a href="#">Order Comments</a></div>');

                ordercmdblock = $('<div class="bill_div" id="checkout_5" style="display:none;">'); 
                commnettext = $('<div class="comments_text">Use this area for special instructions or question regards your order</div>'); 
                commnethead = $('<div class="comments_head">Order Comments</div>');
                commentbox = $('<div class="com_commentbox">'+ orderDetail_test.comments +'</div>');
                ordercmdblock.append(commnettext);
                ordercmdblock.append(commnethead);
                ordercmdblock.append(commentbox);

                buttons = $('<div class="checkout_btn">');
                buttonblock = $('<div class="mycart_btn_mid">');
                revieworder = $('<div class="mycart_mid_bu"><a href="#">Submit Order</a></div>');

                cancel = $('<div class="mycart_mid_bu"><a href="#">Back</a></div>');

                buttonblock.append(revieworder);
                buttonblock.append(cancel);                  
                clear = $('<div style="clear:both"></div>');
                buttons.append(buttonblock); 
                buttons.append(clear); 

                mycart.append(mycart_head);        
                mycart.append(customer);       
                mycart.append(emailblock);     
                mycart.append(deliveryinfo);
                mycart.append(deliveryinfodetails);    
                mycart.append(billinginfo);    
                mycart.append(billinginfodetails); 
                mycart.append(paymentmethod);
                mycart.append(selectpayment);  
                mycart.append(ordercomments);
                mycart.append(ordercmdblock);
                mycart.append(buttons);
                mainContent.append(mycart);		
				
				output2 = mainContent;
				// Expect that the text was set on the expected element
				equal(output1.html(), output2.html(), "Success - Testcase for orderformview-widget passed");
	});
	
	test("Testing orderformview-widget with Different User Details", function() {

				var orderformview, orderDetail = {}, orderDetail_test = {} , pricequantity = {}, pricequantity_test = {}, output1, output2, phrescoapi, methodul, comments, mainContent, mycart, mycart_head, customer, emailblock, emailblocksub, emailblocksubul, emailblocksubLi1, emailblocksubLi2,
                emailblocksubspan1, emailblocksubspan2, deliveryinfo, deliveryinfodetails, deliveryinfolabel, addressblock, addressblocksub, addressblocksubul, firstnameli, firstnamespan1,  firstnamespan2, lastnameli, lastnamelispan1, lastnamelispan2, companyli, companylispan1, addressli1, addressli1span1,
                addressli1span2, addressli2, addressli2span1, addressli2span2, cityli, citylispan1, citylispan2, stateli, statelispan1, statelispan2, countryli, countrylispan1, countrylispan2, postcodeli, postcodelispan1, phonenumberlispan2, billinginfo, billinginfodetails, billinginfolabel,
                billaddressblock, billaddressblocksub, billaddressblocksubul, billfirstnameli, billfirstnamespan1, billfirstnamespan2, billlastnameli, billlastnamelispan1,
                billlastnamelispan2, billcompanyli, billcompanylispan1, billcompanylispan2, billaddressli1, billaddressli1span1, billaddressli1span2, billphonenumberli, billphonenumberlispan1,
                billaddressli2, billaddressli2span1, billaddressli2span2, billcityli, billcitylispan1, billcitylispan2, billstateli, billstatelispan1, billstatelispan2, 
				billcountryli, billcountrylispan1, billcountrylispan2, billpostcodeli, billpostcodelispan1, billpostcodelispan2, phonenumberli, phonenumberlispan1, billphonenumberlispan2, paymentmethod, selectpayment, selectpaymentlabel, method, methodli1, methodli2, subtotal, subtotalspan1, subtotalspan2, subtotalspan3,
                ordertotal, ordertotalspan1, ordertotalspan2, ordertotalspan3, ordercomments, ordercmdblock, commnettext, commnethead, commentbox, buttons, buttonblock, postcodelispan2,
                revieworder, cancel, clear, i, orderdetailBilling, totalItemprice, orderdetailDelivery, companylispan2;

				// Setup view and call method under test
				orderformview = new OrderFormView();
				
				pricequantity = { item:1, amount:600 };
				pricequantity_test = { item:2, amount:800 };
				orderDetail = {email:"oaibr@ymail.com", deliveryfirstname:"Mohd", deliverylastname:"Ibrahim", deliverycompany:"DHL", deliveryaddress1:"Chennai", deliveryaddress2:"Chennai", deliverycity:"Chennai", deliverystate:"Tamilnadu", deliverycountry:"India", deliverypostcode:627811, deliveryphonenumber:11111, billingfirstname:"Mohd", billinglastname:"Ibr", billingcompany:"DHL", billingaddress1:"chn", billingaddress2:"chn", billingcity:"TSI", billingstate:"TN", billingcountry:"IND", billingpostcode:111, billingphonenumber:111, comments:"comments"};
				orderDetail_test = {email:"oa@asd.asd", deliveryfirstname:"Mohd1", deliverylastname:"Ibrahim1", deliverycompany:"DHL", deliveryaddress1:"Chennai", deliveryaddress2:"Chennaitn", deliverycity:"Chennaitn", deliverystate:"Tamilnaduu", deliverycountry:"Indiaa", deliverypostcode:627811, deliveryphonenumber:11111, billingfirstname:"Mohd1", billinglastname:"Ibrh", billingcompany:"DHL", billingaddress1:"chni", billingaddress2:"chni", billingcity:"TSI", billingstate:"TN", billingcountry:"INDIA", billingpostcode:1121, billingphonenumber:1121, comments:"cmts"};
				
				phrescoapi = new Phresco();
				orderformview.phrescoapi = phrescoapi;
				orderformview.phrescoapi.orderDetail = orderDetail;
				orderformview.phrescoapi.pricequantity = pricequantity;
				
				output1 = orderformview.testRenderUI();
				
				orderdetailDelivery = {};
                orderdetailDelivery.firstname = orderDetail_test.deliveryfirstname;
                orderdetailDelivery.lastname  =  orderDetail_test.deliverylastname;
                orderdetailDelivery.company =  orderDetail_test.deliverycompany;
                orderdetailDelivery.address1 =  orderDetail_test.deliveryaddress1;
                orderdetailDelivery.address2 =  orderDetail_test.deliveryaddress2;
                orderdetailDelivery.city = orderDetail_test.deliverycity;
                orderdetailDelivery.state =  orderDetail_test.deliverystate;
                orderdetailDelivery.country =  orderDetail_test.deliverycountry;
                orderdetailDelivery.postcode =  orderDetail_test.deliverypostcode;
                orderdetailDelivery.deliveryphonenumber =  orderDetail_test.deliveryphonenumber;

                orderdetailBilling = {};
                orderdetailBilling.firstName = orderDetail_test.billingfirstname;
                orderdetailBilling.lastName  =  orderDetail_test.billinglastname;
                orderdetailBilling.company =  orderDetail_test.billingcompany;
                orderdetailBilling.address1 =  orderDetail_test.billingaddress1;
                orderdetailBilling.address2 =  orderDetail_test.billingaddress2;
                orderdetailBilling.city = orderDetail_test.billingcity;
                orderdetailBilling.state =  orderDetail_test.billingstate;
                orderdetailBilling.country =  orderDetail_test.billingcountry;
                orderdetailBilling.postcode =  orderDetail_test.billingpostcode;
                orderdetailBilling.phonenumber =  orderDetail_test.billingphonenumber;

                totalItemprice = {};
                totalItemprice.item = pricequantity_test.itemCount;
                totalItemprice.amount = pricequantity_test.totalPrice;

                mainContent = $('<div></div>');
                mycart = $('<div class="mycart_div">');
                mycart_head = $('<div class="mycart_head">Checkout</div>');
                customer = $('<div class="checkout_tab"><a href="#">Customer Information</a></div>');

                emailblock = $('<div class="bill_div" id="checkout_1" style="display:block;">');
                emailblocksub = $('<div class="checkout_2_txt" >');
                emailblocksubul = $('<ul>');
                emailblocksubLi1 = $('<li>Order Information will be sent to your A/C email list below.</li>');
                emailblocksubLi2 = $('<li class="bld">');
                emailblocksubspan1 = $('<span class="bill_details_lft">Email address</span>');
                emailblocksubspan2 = $('<span class="bill_details_rht">'+ orderDetail_test.email +'</span>');
                emailblocksubLi2.append(emailblocksubspan1);
                emailblocksubLi2.append(emailblocksubspan2);
                emailblocksubul.append(emailblocksubLi1);  
                emailblocksubul.append(emailblocksubLi2);              
                emailblocksub.append(emailblocksubul);
                emailblock.append(emailblocksub);  

                deliveryinfo = $('<div class="checkout_tab" ><a href="#">Delivery Information</a></div>');

                deliveryinfodetails = $('<div class="bill_div" id="checkout_2" style="display:none;">');
                deliveryinfolabel= $('<div class="bill_head">Delivery address and information here</div>');
                addressblock = $('<div class="bill_text_div">');
                addressblocksub = $('<div class="bill_details">');
                addressblocksubul = $('<ul>');

                firstnameli = $('<li>');
                firstnamespan1 = $('<span class="bill_details_lft">First name</span>');
                firstnamespan2 = $('<span class="bill_details_rht">'+ orderdetailDelivery.firstname +'</span>');
                firstnameli.append(firstnamespan1);
                firstnameli.append(firstnamespan2);

                lastnameli = $('<li>');
                lastnamelispan1 = $('<span class="bill_details_lft">Last name</span>');
                lastnamelispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliverylastname +'</span>');
                lastnameli.append(lastnamelispan1);
                lastnameli.append(lastnamelispan2);

                companyli = $('<li>');
                companylispan1 = $('<span class="bill_details_lft">Company</span>');
                companylispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliverycompany +'</span>');
                companyli.append(companylispan1);
                companyli.append(companylispan2);

                addressli1 = $('<li>');
                addressli1span1 = $('<span class="bill_details_lft">Address 1</span>');
                addressli1span2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliveryaddress1 +'</span>');
                addressli1.append(addressli1span1);
                addressli1.append(addressli1span2);

                addressli2 = $('<li>');
                addressli2span1 = $('<span class="bill_details_lft">Address 2</span>');
                addressli2span2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliveryaddress2 +'</span>');
                addressli2.append(addressli2span1);
                addressli2.append(addressli2span2);

                cityli = $('<li>');
                citylispan1 = $('<span class="bill_details_lft">City</span>');
                citylispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliverycity +'</span>');
                cityli.append(citylispan1);
                cityli.append(citylispan2);

                stateli = $('<li>');
                statelispan1 = $('<span class="bill_details_lft">State/Province</span>');                                      
                statelispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliverystate +'</span>');
                stateli.append(statelispan1);
                stateli.append(statelispan2);

                countryli = $('<li>');
                countrylispan1 = $('<span class="bill_details_lft">Country</span>');                                   
                countrylispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliverycountry +'</span>');
                countryli.append(countrylispan1);
                countryli.append(countrylispan2);

                postcodeli = $('<li>');
                postcodelispan1 = $('<span class="bill_details_lft">Postcode</span>');
                postcodelispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliverypostcode +'</span>');
                postcodeli.append(postcodelispan1);
                postcodeli.append(postcodelispan2);

                phonenumberli = $('<li>');
                phonenumberlispan1 = $('<span class="bill_details_lft">Phone Number</span>');
                phonenumberlispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliveryphonenumber +'</span>');
                phonenumberli.append(phonenumberlispan1);
                phonenumberli.append(phonenumberlispan2);

                addressblocksubul.append(firstnameli);
                addressblocksubul.append(lastnameli);
                addressblocksubul.append(companyli);
                addressblocksubul.append(addressli1);
                addressblocksubul.append(addressli2);
                addressblocksubul.append(cityli);
                addressblocksubul.append(stateli);
                addressblocksubul.append(countryli);
                addressblocksubul.append(postcodeli);
                addressblocksubul.append(phonenumberli);
                addressblocksub.append(addressblocksubul); 
                addressblock.append(addressblocksub);
                deliveryinfodetails.append(deliveryinfolabel);
                deliveryinfodetails.append(addressblock);	

                billinginfo = $('<div class="checkout_tab" ><a href="#">billing Information</a></div>');

                billinginfodetails = $('<div class="bill_div" id="checkout_3" style="display:none;">');
                billinginfolabel= $('<div class="bill_head">Billing address and information here</div>');
                billaddressblock = $('<div class="bill_text_div">');
                billaddressblocksub = $('<div class="bill_details">');
                billaddressblocksubul = $('<ul>');

                billfirstnameli = $('<li>');
                billfirstnamespan1 = $('<span class="bill_details_lft">First name</span>');
                billfirstnamespan2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingfirstname +'</span>');
                billfirstnameli.append(billfirstnamespan1);
                billfirstnameli.append(billfirstnamespan2);

                billlastnameli = $('<li>');
                billlastnamelispan1 = $('<span class="bill_details_lft">Last name</span>');
                billlastnamelispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.billinglastname +'</span>');
                billlastnameli.append(billlastnamelispan1);
                billlastnameli.append(billlastnamelispan2);

                billcompanyli = $('<li>');
                billcompanylispan1 = $('<span class="bill_details_lft">Company</span>');
                billcompanylispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingcompany +'</span>');
                billcompanyli.append(billcompanylispan1);
                billcompanyli.append(billcompanylispan2);

                billaddressli1 = $('<li>');
                billaddressli1span1 = $('<span class="bill_details_lft">Address 1</span>');
                billaddressli1span2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingaddress1 +'</span>');
                billaddressli1.append(billaddressli1span1);
                billaddressli1.append(billaddressli1span2);

                billaddressli2 = $('<li>');
                billaddressli2span1 = $('<span class="bill_details_lft">Address 2</span>');
                billaddressli2span2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingaddress2 +'</span>');
                billaddressli2.append(billaddressli2span1);
                billaddressli2.append(billaddressli2span2);

                billcityli = $('<li>');
                billcitylispan1 = $('<span class="bill_details_lft">City</span>');
                billcitylispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingcity +'</span>');
                billcityli.append(billcitylispan1);
                billcityli.append(billcitylispan2);

                billstateli = $('<li>');
                billstatelispan1 = $('<span class="bill_details_lft">State/Province</span>');                                      
                billstatelispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingstate +'</span>');
                billstateli.append(billstatelispan1);
                billstateli.append(billstatelispan2);

                billcountryli = $('<li>');
                billcountrylispan1 = $('<span class="bill_details_lft">Country</span>');                                   
                billcountrylispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingcountry +'</span>');
                billcountryli.append(billcountrylispan1);
                billcountryli.append(billcountrylispan2);

                billpostcodeli = $('<li>');
                billpostcodelispan1 = $('<span class="bill_details_lft">Postcode</span>');
                billpostcodelispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingpostcode +'</span>');
                billpostcodeli.append(billpostcodelispan1);
                billpostcodeli.append(billpostcodelispan2);

                billphonenumberli = $('<li>');
                billphonenumberlispan1 = $('<span class="bill_details_lft">Phone Number</span>');
                billphonenumberlispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingphonenumber +'</span>');
                billphonenumberli.append(billphonenumberlispan1);
                billphonenumberli.append(billphonenumberlispan2);

                billaddressblocksubul.append(billfirstnameli);
                billaddressblocksubul.append(billlastnameli);
                billaddressblocksubul.append(billcompanyli);
                billaddressblocksubul.append(billaddressli1);
                billaddressblocksubul.append(billaddressli2);
                billaddressblocksubul.append(billcityli);
                billaddressblocksubul.append(billstateli);
                billaddressblocksubul.append(billcountryli);
                billaddressblocksubul.append(billpostcodeli);
                billaddressblocksubul.append(billphonenumberli);
                billaddressblocksub.append(billaddressblocksubul); 
                billaddressblock.append(billaddressblocksub);
                billinginfodetails.append(billinginfolabel);
                billinginfodetails.append(billaddressblock);

                paymentmethod = $('<div class="checkout_tab"><a href="#">Payment Methods</a></div>');

                selectpayment = $('<div class="bill_div" id="checkout_4" style="display:none;">');
                selectpaymentlabel = $('<div class="comments_text">Select a payment method from the following options</div>');
                method = $('<div class="methods_div">');
                methodul = $('<ul>');  
                methodli1 = $('<li><span class="radio"><input name="" type="radio" value="" /></span><span class="method_text">Cheque or money order</span></li>');
                methodli2 = $('<li><span class="radio"><input name="" type="radio" value="" checked="checked"/></span><span class="method_text">Cash on delivery</span></li>');                             
                methodul.append(methodli1);
                methodul.append(methodli2);            
                method.append(methodul);                      
                 
                subtotal = $('<div class="prod_check_div">');
                subtotalspan1 = $('<span class="prod_check_lft">Total Item</span>');
                subtotalspan2 = $('<span class="prod_check_rht1">'+ pricequantity_test.itemCount +'</span>');
                subtotalspan3 = $('<span class="prod_check_mid">:</span>');
                subtotal.append(subtotalspan1);
                subtotal.append(subtotalspan2);
                subtotal.append(subtotalspan3);

                ordertotal = $('<div class="prod_check_div">');
                ordertotalspan1 = $('<span class="prod_check_lft">ordertotal</span>');
                ordertotalspan2 = $('<span class="prod_check_rht1">'+ pricequantity_test.totalPrice +'</span>');
                ordertotalspan3 = $('<span class="prod_check_mid">:</span>');
                ordertotal.append(ordertotalspan1);
                ordertotal.append(ordertotalspan2);
                ordertotal.append(ordertotalspan3);
                comments = $('<div class="comments_text">Cheque should be made out to Phresco</div>');
                selectpayment.append(selectpaymentlabel);
                selectpayment.append(method);
                selectpayment.append(subtotal);
                selectpayment.append(ordertotal);  
                selectpayment.append(comments);                    

                ordercomments = $('<div class="checkout_tab"><a href="#">Order Comments</a></div>');

                ordercmdblock = $('<div class="bill_div" id="checkout_5" style="display:none;">'); 
                commnettext = $('<div class="comments_text">Use this area for special instructions or question regards your order</div>'); 
                commnethead = $('<div class="comments_head">Order Comments</div>');
                commentbox = $('<div class="com_commentbox">'+ orderDetail_test.comments +'</div>');
                ordercmdblock.append(commnettext);
                ordercmdblock.append(commnethead);
                ordercmdblock.append(commentbox);

                buttons = $('<div class="checkout_btn">');
                buttonblock = $('<div class="mycart_btn_mid">');
                revieworder = $('<div class="mycart_mid_bu"><a href="#">Submit Order</a></div>');

                cancel = $('<div class="mycart_mid_bu"><a href="#">Back</a></div>');

                buttonblock.append(revieworder);
                buttonblock.append(cancel);                  
                clear = $('<div style="clear:both"></div>');
                buttons.append(buttonblock); 
                buttons.append(clear); 

                mycart.append(mycart_head);        
                mycart.append(customer);       
                mycart.append(emailblock);     
                mycart.append(deliveryinfo);
                mycart.append(deliveryinfodetails);    
                mycart.append(billinginfo);    
                mycart.append(billinginfodetails); 
                mycart.append(paymentmethod);
                mycart.append(selectpayment);  
                mycart.append(ordercomments);
                mycart.append(ordercmdblock);
                mycart.append(buttons);
                mainContent.append(mycart);		
				
				output2 = mainContent;
				// Expect that the text was set on the expected element
				notEqual(output1.html(), output2.html(), "Failure - Invalid User Details");
	});

	test("Testing orderformview-widget with Empty Details in User Details", function() {

				var orderformview, orderDetail = {}, orderDetail_test = {} , pricequantity = {}, pricequantity_test = {}, output1, output2, phrescoapi, methodul, comments, mainContent, mycart, mycart_head, customer, emailblock, emailblocksub, emailblocksubul, emailblocksubLi1, emailblocksubLi2,
                emailblocksubspan1, emailblocksubspan2, deliveryinfo, deliveryinfodetails, deliveryinfolabel, addressblock, addressblocksub, addressblocksubul, firstnameli, firstnamespan1,  firstnamespan2, lastnameli, lastnamelispan1, lastnamelispan2, companyli, companylispan1, addressli1, addressli1span1,
                addressli1span2, addressli2, addressli2span1, addressli2span2, cityli, citylispan1, citylispan2, stateli, statelispan1, statelispan2, countryli, countrylispan1, countrylispan2, postcodeli, postcodelispan1, phonenumberlispan2, billinginfo, billinginfodetails, billinginfolabel,
                billaddressblock, billaddressblocksub, billaddressblocksubul, billfirstnameli, billfirstnamespan1, billfirstnamespan2, billlastnameli, billlastnamelispan1,
                billlastnamelispan2, billcompanyli, billcompanylispan1, billcompanylispan2, billaddressli1, billaddressli1span1, billaddressli1span2, billphonenumberli, billphonenumberlispan1,
                billaddressli2, billaddressli2span1, billaddressli2span2, billcityli, billcitylispan1, billcitylispan2, billstateli, billstatelispan1, billstatelispan2, 
				billcountryli, billcountrylispan1, billcountrylispan2, billpostcodeli, billpostcodelispan1, billpostcodelispan2, phonenumberli, phonenumberlispan1, billphonenumberlispan2, paymentmethod, selectpayment, selectpaymentlabel, method, methodli1, methodli2, subtotal, subtotalspan1, subtotalspan2, subtotalspan3,
                ordertotal, ordertotalspan1, ordertotalspan2, ordertotalspan3, ordercomments, ordercmdblock, commnettext, commnethead, commentbox, buttons, buttonblock, postcodelispan2,
                revieworder, cancel, clear, i, orderdetailBilling, totalItemprice, orderdetailDelivery, companylispan2;

				// Setup view and call method under test
				orderformview = new OrderFormView();
				
				pricequantity = { item:1, amount:600 };
				pricequantity_test = { item:2, amount:800 };
				orderDetail = {email:"oaibr@ymail.com", deliveryfirstname:"Mohd", deliverylastname:"Ibrahim", deliverycompany:"DHL", deliveryaddress1:"Chennai", deliveryaddress2:"Chennai", deliverycity:"Chennai", deliverystate:"Tamilnadu", deliverycountry:"India", deliverypostcode:627811, deliveryphonenumber:11111, billingfirstname:"Mohd", billinglastname:"Ibr", billingcompany:"DHL", billingaddress1:"chn", billingaddress2:"chn", billingcity:"TSI", billingstate:"TN", billingcountry:"IND", billingpostcode:111, billingphonenumber:111, comments:"comments"};
				orderDetail_test = {email:"", deliveryfirstname:"", deliverylastname:"", deliverycompany:"", deliveryaddress1:"", deliveryaddress2:"", deliverycity:"", deliverystate:"", deliverycountry:"", deliverypostcode:627811, deliveryphonenumber:11111, billingfirstname:"", billinglastname:"", billingcompany:"", billingaddress1:"", billingaddress2:"", billingcity:"", billingstate:"", billingcountry:"", billingpostcode:1121, billingphonenumber:1121, comments:""};
				
				phrescoapi = new Phresco();
				orderformview.phrescoapi = phrescoapi;
				orderformview.phrescoapi.orderDetail = orderDetail;
				orderformview.phrescoapi.pricequantity = pricequantity;
				
				output1 = orderformview.testRenderUI();
				
				orderdetailDelivery = {};
                orderdetailDelivery.firstname = orderDetail_test.deliveryfirstname;
                orderdetailDelivery.lastname  =  orderDetail_test.deliverylastname;
                orderdetailDelivery.company =  orderDetail_test.deliverycompany;
                orderdetailDelivery.address1 =  orderDetail_test.deliveryaddress1;
                orderdetailDelivery.address2 =  orderDetail_test.deliveryaddress2;
                orderdetailDelivery.city = orderDetail_test.deliverycity;
                orderdetailDelivery.state =  orderDetail_test.deliverystate;
                orderdetailDelivery.country =  orderDetail_test.deliverycountry;
                orderdetailDelivery.postcode =  orderDetail_test.deliverypostcode;
                orderdetailDelivery.deliveryphonenumber =  orderDetail_test.deliveryphonenumber;

                orderdetailBilling = {};
                orderdetailBilling.firstName = orderDetail_test.billingfirstname;
                orderdetailBilling.lastName  =  orderDetail_test.billinglastname;
                orderdetailBilling.company =  orderDetail_test.billingcompany;
                orderdetailBilling.address1 =  orderDetail_test.billingaddress1;
                orderdetailBilling.address2 =  orderDetail_test.billingaddress2;
                orderdetailBilling.city = orderDetail_test.billingcity;
                orderdetailBilling.state =  orderDetail_test.billingstate;
                orderdetailBilling.country =  orderDetail_test.billingcountry;
                orderdetailBilling.postcode =  orderDetail_test.billingpostcode;
                orderdetailBilling.phonenumber =  orderDetail_test.billingphonenumber;

                totalItemprice = {};
                totalItemprice.item = pricequantity_test.itemCount;
                totalItemprice.amount = pricequantity_test.totalPrice;

                mainContent = $('<div></div>');
                mycart = $('<div class="mycart_div">');
                mycart_head = $('<div class="mycart_head">Checkout</div>');
                customer = $('<div class="checkout_tab"><a href="#">Customer Information</a></div>');

                emailblock = $('<div class="bill_div" id="checkout_1" style="display:block;">');
                emailblocksub = $('<div class="checkout_2_txt" >');
                emailblocksubul = $('<ul>');
                emailblocksubLi1 = $('<li>Order Information will be sent to your A/C email list below.</li>');
                emailblocksubLi2 = $('<li class="bld">');
                emailblocksubspan1 = $('<span class="bill_details_lft">Email address</span>');
                emailblocksubspan2 = $('<span class="bill_details_rht">'+ orderDetail_test.email +'</span>');
                emailblocksubLi2.append(emailblocksubspan1);
                emailblocksubLi2.append(emailblocksubspan2);
                emailblocksubul.append(emailblocksubLi1);  
                emailblocksubul.append(emailblocksubLi2);              
                emailblocksub.append(emailblocksubul);
                emailblock.append(emailblocksub);  

                deliveryinfo = $('<div class="checkout_tab" ><a href="#">Delivery Information</a></div>');

                deliveryinfodetails = $('<div class="bill_div" id="checkout_2" style="display:none;">');
                deliveryinfolabel= $('<div class="bill_head">Delivery address and information here</div>');
                addressblock = $('<div class="bill_text_div">');
                addressblocksub = $('<div class="bill_details">');
                addressblocksubul = $('<ul>');

                firstnameli = $('<li>');
                firstnamespan1 = $('<span class="bill_details_lft">First name</span>');
                firstnamespan2 = $('<span class="bill_details_rht">'+ orderdetailDelivery.firstname +'</span>');
                firstnameli.append(firstnamespan1);
                firstnameli.append(firstnamespan2);

                lastnameli = $('<li>');
                lastnamelispan1 = $('<span class="bill_details_lft">Last name</span>');
                lastnamelispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliverylastname +'</span>');
                lastnameli.append(lastnamelispan1);
                lastnameli.append(lastnamelispan2);

                companyli = $('<li>');
                companylispan1 = $('<span class="bill_details_lft">Company</span>');
                companylispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliverycompany +'</span>');
                companyli.append(companylispan1);
                companyli.append(companylispan2);

                addressli1 = $('<li>');
                addressli1span1 = $('<span class="bill_details_lft">Address 1</span>');
                addressli1span2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliveryaddress1 +'</span>');
                addressli1.append(addressli1span1);
                addressli1.append(addressli1span2);

                addressli2 = $('<li>');
                addressli2span1 = $('<span class="bill_details_lft">Address 2</span>');
                addressli2span2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliveryaddress2 +'</span>');
                addressli2.append(addressli2span1);
                addressli2.append(addressli2span2);

                cityli = $('<li>');
                citylispan1 = $('<span class="bill_details_lft">City</span>');
                citylispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliverycity +'</span>');
                cityli.append(citylispan1);
                cityli.append(citylispan2);

                stateli = $('<li>');
                statelispan1 = $('<span class="bill_details_lft">State/Province</span>');                                      
                statelispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliverystate +'</span>');
                stateli.append(statelispan1);
                stateli.append(statelispan2);

                countryli = $('<li>');
                countrylispan1 = $('<span class="bill_details_lft">Country</span>');                                   
                countrylispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliverycountry +'</span>');
                countryli.append(countrylispan1);
                countryli.append(countrylispan2);

                postcodeli = $('<li>');
                postcodelispan1 = $('<span class="bill_details_lft">Postcode</span>');
                postcodelispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliverypostcode +'</span>');
                postcodeli.append(postcodelispan1);
                postcodeli.append(postcodelispan2);

                phonenumberli = $('<li>');
                phonenumberlispan1 = $('<span class="bill_details_lft">Phone Number</span>');
                phonenumberlispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliveryphonenumber +'</span>');
                phonenumberli.append(phonenumberlispan1);
                phonenumberli.append(phonenumberlispan2);

                addressblocksubul.append(firstnameli);
                addressblocksubul.append(lastnameli);
                addressblocksubul.append(companyli);
                addressblocksubul.append(addressli1);
                addressblocksubul.append(addressli2);
                addressblocksubul.append(cityli);
                addressblocksubul.append(stateli);
                addressblocksubul.append(countryli);
                addressblocksubul.append(postcodeli);
                addressblocksubul.append(phonenumberli);
                addressblocksub.append(addressblocksubul); 
                addressblock.append(addressblocksub);
                deliveryinfodetails.append(deliveryinfolabel);
                deliveryinfodetails.append(addressblock);	

                billinginfo = $('<div class="checkout_tab" ><a href="#">billing Information</a></div>');

                billinginfodetails = $('<div class="bill_div" id="checkout_3" style="display:none;">');
                billinginfolabel= $('<div class="bill_head">Billing address and information here</div>');
                billaddressblock = $('<div class="bill_text_div">');
                billaddressblocksub = $('<div class="bill_details">');
                billaddressblocksubul = $('<ul>');

                billfirstnameli = $('<li>');
                billfirstnamespan1 = $('<span class="bill_details_lft">First name</span>');
                billfirstnamespan2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingfirstname +'</span>');
                billfirstnameli.append(billfirstnamespan1);
                billfirstnameli.append(billfirstnamespan2);

                billlastnameli = $('<li>');
                billlastnamelispan1 = $('<span class="bill_details_lft">Last name</span>');
                billlastnamelispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.billinglastname +'</span>');
                billlastnameli.append(billlastnamelispan1);
                billlastnameli.append(billlastnamelispan2);

                billcompanyli = $('<li>');
                billcompanylispan1 = $('<span class="bill_details_lft">Company</span>');
                billcompanylispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingcompany +'</span>');
                billcompanyli.append(billcompanylispan1);
                billcompanyli.append(billcompanylispan2);

                billaddressli1 = $('<li>');
                billaddressli1span1 = $('<span class="bill_details_lft">Address 1</span>');
                billaddressli1span2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingaddress1 +'</span>');
                billaddressli1.append(billaddressli1span1);
                billaddressli1.append(billaddressli1span2);

                billaddressli2 = $('<li>');
                billaddressli2span1 = $('<span class="bill_details_lft">Address 2</span>');
                billaddressli2span2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingaddress2 +'</span>');
                billaddressli2.append(billaddressli2span1);
                billaddressli2.append(billaddressli2span2);

                billcityli = $('<li>');
                billcitylispan1 = $('<span class="bill_details_lft">City</span>');
                billcitylispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingcity +'</span>');
                billcityli.append(billcitylispan1);
                billcityli.append(billcitylispan2);

                billstateli = $('<li>');
                billstatelispan1 = $('<span class="bill_details_lft">State/Province</span>');                                      
                billstatelispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingstate +'</span>');
                billstateli.append(billstatelispan1);
                billstateli.append(billstatelispan2);

                billcountryli = $('<li>');
                billcountrylispan1 = $('<span class="bill_details_lft">Country</span>');                                   
                billcountrylispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingcountry +'</span>');
                billcountryli.append(billcountrylispan1);
                billcountryli.append(billcountrylispan2);

                billpostcodeli = $('<li>');
                billpostcodelispan1 = $('<span class="bill_details_lft">Postcode</span>');
                billpostcodelispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingpostcode +'</span>');
                billpostcodeli.append(billpostcodelispan1);
                billpostcodeli.append(billpostcodelispan2);

                billphonenumberli = $('<li>');
                billphonenumberlispan1 = $('<span class="bill_details_lft">Phone Number</span>');
                billphonenumberlispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingphonenumber +'</span>');
                billphonenumberli.append(billphonenumberlispan1);
                billphonenumberli.append(billphonenumberlispan2);

                billaddressblocksubul.append(billfirstnameli);
                billaddressblocksubul.append(billlastnameli);
                billaddressblocksubul.append(billcompanyli);
                billaddressblocksubul.append(billaddressli1);
                billaddressblocksubul.append(billaddressli2);
                billaddressblocksubul.append(billcityli);
                billaddressblocksubul.append(billstateli);
                billaddressblocksubul.append(billcountryli);
                billaddressblocksubul.append(billpostcodeli);
                billaddressblocksubul.append(billphonenumberli);
                billaddressblocksub.append(billaddressblocksubul); 
                billaddressblock.append(billaddressblocksub);
                billinginfodetails.append(billinginfolabel);
                billinginfodetails.append(billaddressblock);

                paymentmethod = $('<div class="checkout_tab"><a href="#">Payment Methods</a></div>');

                selectpayment = $('<div class="bill_div" id="checkout_4" style="display:none;">');
                selectpaymentlabel = $('<div class="comments_text">Select a payment method from the following options</div>');
                method = $('<div class="methods_div">');
                methodul = $('<ul>');  
                methodli1 = $('<li><span class="radio"><input name="" type="radio" value="" /></span><span class="method_text">Cheque or money order</span></li>');
                methodli2 = $('<li><span class="radio"><input name="" type="radio" value="" checked="checked"/></span><span class="method_text">Cash on delivery</span></li>');                             
                methodul.append(methodli1);
                methodul.append(methodli2);            
                method.append(methodul);                      
                 
                subtotal = $('<div class="prod_check_div">');
                subtotalspan1 = $('<span class="prod_check_lft">Total Item</span>');
                subtotalspan2 = $('<span class="prod_check_rht1">'+ pricequantity_test.itemCount +'</span>');
                subtotalspan3 = $('<span class="prod_check_mid">:</span>');
                subtotal.append(subtotalspan1);
                subtotal.append(subtotalspan2);
                subtotal.append(subtotalspan3);

                ordertotal = $('<div class="prod_check_div">');
                ordertotalspan1 = $('<span class="prod_check_lft">ordertotal</span>');
                ordertotalspan2 = $('<span class="prod_check_rht1">'+ pricequantity_test.totalPrice +'</span>');
                ordertotalspan3 = $('<span class="prod_check_mid">:</span>');
                ordertotal.append(ordertotalspan1);
                ordertotal.append(ordertotalspan2);
                ordertotal.append(ordertotalspan3);
                comments = $('<div class="comments_text">Cheque should be made out to Phresco</div>');
                selectpayment.append(selectpaymentlabel);
                selectpayment.append(method);
                selectpayment.append(subtotal);
                selectpayment.append(ordertotal);  
                selectpayment.append(comments);                    

                ordercomments = $('<div class="checkout_tab"><a href="#">Order Comments</a></div>');

                ordercmdblock = $('<div class="bill_div" id="checkout_5" style="display:none;">'); 
                commnettext = $('<div class="comments_text">Use this area for special instructions or question regards your order</div>'); 
                commnethead = $('<div class="comments_head">Order Comments</div>');
                commentbox = $('<div class="com_commentbox">'+ orderDetail_test.comments +'</div>');
                ordercmdblock.append(commnettext);
                ordercmdblock.append(commnethead);
                ordercmdblock.append(commentbox);

                buttons = $('<div class="checkout_btn">');
                buttonblock = $('<div class="mycart_btn_mid">');
                revieworder = $('<div class="mycart_mid_bu"><a href="#">Submit Order</a></div>');

                cancel = $('<div class="mycart_mid_bu"><a href="#">Back</a></div>');

                buttonblock.append(revieworder);
                buttonblock.append(cancel);                  
                clear = $('<div style="clear:both"></div>');
                buttons.append(buttonblock); 
                buttons.append(clear); 

                mycart.append(mycart_head);        
                mycart.append(customer);       
                mycart.append(emailblock);     
                mycart.append(deliveryinfo);
                mycart.append(deliveryinfodetails);    
                mycart.append(billinginfo);    
                mycart.append(billinginfodetails); 
                mycart.append(paymentmethod);
                mycart.append(selectpayment);  
                mycart.append(ordercomments);
                mycart.append(ordercmdblock);
                mycart.append(buttons);
                mainContent.append(mycart);		
				
				output2 = mainContent;
				// Expect that the text was set on the expected element
				notEqual(output1.html(), output2.html(), "Failure - UserName Cannot be left Empty");
	});
	
	test("Testing orderformview-widget with Special Characters in User Details", function() {

				var orderformview, orderDetail = {}, orderDetail_test = {} , pricequantity = {}, pricequantity_test = {}, output1, output2, phrescoapi, methodul, comments, mainContent, mycart, mycart_head, customer, emailblock, emailblocksub, emailblocksubul, emailblocksubLi1, emailblocksubLi2,
                emailblocksubspan1, emailblocksubspan2, deliveryinfo, deliveryinfodetails, deliveryinfolabel, addressblock, addressblocksub, addressblocksubul, firstnameli, firstnamespan1,  firstnamespan2, lastnameli, lastnamelispan1, lastnamelispan2, companyli, companylispan1, addressli1, addressli1span1,
                addressli1span2, addressli2, addressli2span1, addressli2span2, cityli, citylispan1, citylispan2, stateli, statelispan1, statelispan2, countryli, countrylispan1, countrylispan2, postcodeli, postcodelispan1, phonenumberlispan2, billinginfo, billinginfodetails, billinginfolabel,
                billaddressblock, billaddressblocksub, billaddressblocksubul, billfirstnameli, billfirstnamespan1, billfirstnamespan2, billlastnameli, billlastnamelispan1,
                billlastnamelispan2, billcompanyli, billcompanylispan1, billcompanylispan2, billaddressli1, billaddressli1span1, billaddressli1span2, billphonenumberli, billphonenumberlispan1,
                billaddressli2, billaddressli2span1, billaddressli2span2, billcityli, billcitylispan1, billcitylispan2, billstateli, billstatelispan1, billstatelispan2, 
				billcountryli, billcountrylispan1, billcountrylispan2, billpostcodeli, billpostcodelispan1, billpostcodelispan2, phonenumberli, phonenumberlispan1, billphonenumberlispan2, paymentmethod, selectpayment, selectpaymentlabel, method, methodli1, methodli2, subtotal, subtotalspan1, subtotalspan2, subtotalspan3,
                ordertotal, ordertotalspan1, ordertotalspan2, ordertotalspan3, ordercomments, ordercmdblock, commnettext, commnethead, commentbox, buttons, buttonblock, postcodelispan2,
                revieworder, cancel, clear, i, orderdetailBilling, totalItemprice, orderdetailDelivery, companylispan2;

				// Setup view and call method under test
				orderformview = new OrderFormView();
				
				pricequantity = { item:1, amount:600 };
				pricequantity_test = { item:2, amount:800 };
				orderDetail = {email:"oaibr@ymail.com@@@", deliveryfirstname:"Mohd@@", deliverylastname:"Ibrahim@@@", deliverycompany:"DHL@@@", deliveryaddress1:"Chennai@@@@", deliveryaddress2:"Chennai@@@", deliverycity:"Chennai@", deliverystate:"Tamilnadu@#", deliverycountry:"India__", deliverypostcode:627811, deliveryphonenumber:11111, billingfirstname:"Mohd", billinglastname:"Ibr", billingcompany:"DHL", billingaddress1:"chn", billingaddress2:"chn", billingcity:"TSI", billingstate:"TN", billingcountry:"IND", billingpostcode:111, billingphonenumber:111, comments:"comments"};
				orderDetail_test = {email:"", deliveryfirstname:"", deliverylastname:"", deliverycompany:"", deliveryaddress1:"", deliveryaddress2:"", deliverycity:"", deliverystate:"", deliverycountry:"", deliverypostcode:627811, deliveryphonenumber:11111, billingfirstname:"", billinglastname:"", billingcompany:"", billingaddress1:"", billingaddress2:"", billingcity:"", billingstate:"", billingcountry:"", billingpostcode:1121, billingphonenumber:1121, comments:""};
				
				phrescoapi = new Phresco();
				orderformview.phrescoapi = phrescoapi;
				orderformview.phrescoapi.orderDetail = orderDetail;
				orderformview.phrescoapi.pricequantity = pricequantity;
				
				output1 = orderformview.testRenderUI();
				
				orderdetailDelivery = {};
                orderdetailDelivery.firstname = orderDetail_test.deliveryfirstname;
                orderdetailDelivery.lastname  =  orderDetail_test.deliverylastname;
                orderdetailDelivery.company =  orderDetail_test.deliverycompany;
                orderdetailDelivery.address1 =  orderDetail_test.deliveryaddress1;
                orderdetailDelivery.address2 =  orderDetail_test.deliveryaddress2;
                orderdetailDelivery.city = orderDetail_test.deliverycity;
                orderdetailDelivery.state =  orderDetail_test.deliverystate;
                orderdetailDelivery.country =  orderDetail_test.deliverycountry;
                orderdetailDelivery.postcode =  orderDetail_test.deliverypostcode;
                orderdetailDelivery.deliveryphonenumber =  orderDetail_test.deliveryphonenumber;

                orderdetailBilling = {};
                orderdetailBilling.firstName = orderDetail_test.billingfirstname;
                orderdetailBilling.lastName  =  orderDetail_test.billinglastname;
                orderdetailBilling.company =  orderDetail_test.billingcompany;
                orderdetailBilling.address1 =  orderDetail_test.billingaddress1;
                orderdetailBilling.address2 =  orderDetail_test.billingaddress2;
                orderdetailBilling.city = orderDetail_test.billingcity;
                orderdetailBilling.state =  orderDetail_test.billingstate;
                orderdetailBilling.country =  orderDetail_test.billingcountry;
                orderdetailBilling.postcode =  orderDetail_test.billingpostcode;
                orderdetailBilling.phonenumber =  orderDetail_test.billingphonenumber;

                totalItemprice = {};
                totalItemprice.item = pricequantity_test.itemCount;
                totalItemprice.amount = pricequantity_test.totalPrice;

                mainContent = $('<div></div>');
                mycart = $('<div class="mycart_div">');
                mycart_head = $('<div class="mycart_head">Checkout</div>');
                customer = $('<div class="checkout_tab"><a href="#">Customer Information</a></div>');

                emailblock = $('<div class="bill_div" id="checkout_1" style="display:block;">');
                emailblocksub = $('<div class="checkout_2_txt" >');
                emailblocksubul = $('<ul>');
                emailblocksubLi1 = $('<li>Order Information will be sent to your A/C email list below.</li>');
                emailblocksubLi2 = $('<li class="bld">');
                emailblocksubspan1 = $('<span class="bill_details_lft">Email address</span>');
                emailblocksubspan2 = $('<span class="bill_details_rht">'+ orderDetail_test.email +'</span>');
                emailblocksubLi2.append(emailblocksubspan1);
                emailblocksubLi2.append(emailblocksubspan2);
                emailblocksubul.append(emailblocksubLi1);  
                emailblocksubul.append(emailblocksubLi2);              
                emailblocksub.append(emailblocksubul);
                emailblock.append(emailblocksub);  

                deliveryinfo = $('<div class="checkout_tab" ><a href="#">Delivery Information</a></div>');

                deliveryinfodetails = $('<div class="bill_div" id="checkout_2" style="display:none;">');
                deliveryinfolabel= $('<div class="bill_head">Delivery address and information here</div>');
                addressblock = $('<div class="bill_text_div">');
                addressblocksub = $('<div class="bill_details">');
                addressblocksubul = $('<ul>');

                firstnameli = $('<li>');
                firstnamespan1 = $('<span class="bill_details_lft">First name</span>');
                firstnamespan2 = $('<span class="bill_details_rht">'+ orderdetailDelivery.firstname +'</span>');
                firstnameli.append(firstnamespan1);
                firstnameli.append(firstnamespan2);

                lastnameli = $('<li>');
                lastnamelispan1 = $('<span class="bill_details_lft">Last name</span>');
                lastnamelispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliverylastname +'</span>');
                lastnameli.append(lastnamelispan1);
                lastnameli.append(lastnamelispan2);

                companyli = $('<li>');
                companylispan1 = $('<span class="bill_details_lft">Company</span>');
                companylispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliverycompany +'</span>');
                companyli.append(companylispan1);
                companyli.append(companylispan2);

                addressli1 = $('<li>');
                addressli1span1 = $('<span class="bill_details_lft">Address 1</span>');
                addressli1span2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliveryaddress1 +'</span>');
                addressli1.append(addressli1span1);
                addressli1.append(addressli1span2);

                addressli2 = $('<li>');
                addressli2span1 = $('<span class="bill_details_lft">Address 2</span>');
                addressli2span2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliveryaddress2 +'</span>');
                addressli2.append(addressli2span1);
                addressli2.append(addressli2span2);

                cityli = $('<li>');
                citylispan1 = $('<span class="bill_details_lft">City</span>');
                citylispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliverycity +'</span>');
                cityli.append(citylispan1);
                cityli.append(citylispan2);

                stateli = $('<li>');
                statelispan1 = $('<span class="bill_details_lft">State/Province</span>');                                      
                statelispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliverystate +'</span>');
                stateli.append(statelispan1);
                stateli.append(statelispan2);

                countryli = $('<li>');
                countrylispan1 = $('<span class="bill_details_lft">Country</span>');                                   
                countrylispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliverycountry +'</span>');
                countryli.append(countrylispan1);
                countryli.append(countrylispan2);

                postcodeli = $('<li>');
                postcodelispan1 = $('<span class="bill_details_lft">Postcode</span>');
                postcodelispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliverypostcode +'</span>');
                postcodeli.append(postcodelispan1);
                postcodeli.append(postcodelispan2);

                phonenumberli = $('<li>');
                phonenumberlispan1 = $('<span class="bill_details_lft">Phone Number</span>');
                phonenumberlispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.deliveryphonenumber +'</span>');
                phonenumberli.append(phonenumberlispan1);
                phonenumberli.append(phonenumberlispan2);

                addressblocksubul.append(firstnameli);
                addressblocksubul.append(lastnameli);
                addressblocksubul.append(companyli);
                addressblocksubul.append(addressli1);
                addressblocksubul.append(addressli2);
                addressblocksubul.append(cityli);
                addressblocksubul.append(stateli);
                addressblocksubul.append(countryli);
                addressblocksubul.append(postcodeli);
                addressblocksubul.append(phonenumberli);
                addressblocksub.append(addressblocksubul); 
                addressblock.append(addressblocksub);
                deliveryinfodetails.append(deliveryinfolabel);
                deliveryinfodetails.append(addressblock);	

                billinginfo = $('<div class="checkout_tab" ><a href="#">billing Information</a></div>');

                billinginfodetails = $('<div class="bill_div" id="checkout_3" style="display:none;">');
                billinginfolabel= $('<div class="bill_head">Billing address and information here</div>');
                billaddressblock = $('<div class="bill_text_div">');
                billaddressblocksub = $('<div class="bill_details">');
                billaddressblocksubul = $('<ul>');

                billfirstnameli = $('<li>');
                billfirstnamespan1 = $('<span class="bill_details_lft">First name</span>');
                billfirstnamespan2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingfirstname +'</span>');
                billfirstnameli.append(billfirstnamespan1);
                billfirstnameli.append(billfirstnamespan2);

                billlastnameli = $('<li>');
                billlastnamelispan1 = $('<span class="bill_details_lft">Last name</span>');
                billlastnamelispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.billinglastname +'</span>');
                billlastnameli.append(billlastnamelispan1);
                billlastnameli.append(billlastnamelispan2);

                billcompanyli = $('<li>');
                billcompanylispan1 = $('<span class="bill_details_lft">Company</span>');
                billcompanylispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingcompany +'</span>');
                billcompanyli.append(billcompanylispan1);
                billcompanyli.append(billcompanylispan2);

                billaddressli1 = $('<li>');
                billaddressli1span1 = $('<span class="bill_details_lft">Address 1</span>');
                billaddressli1span2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingaddress1 +'</span>');
                billaddressli1.append(billaddressli1span1);
                billaddressli1.append(billaddressli1span2);

                billaddressli2 = $('<li>');
                billaddressli2span1 = $('<span class="bill_details_lft">Address 2</span>');
                billaddressli2span2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingaddress2 +'</span>');
                billaddressli2.append(billaddressli2span1);
                billaddressli2.append(billaddressli2span2);

                billcityli = $('<li>');
                billcitylispan1 = $('<span class="bill_details_lft">City</span>');
                billcitylispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingcity +'</span>');
                billcityli.append(billcitylispan1);
                billcityli.append(billcitylispan2);

                billstateli = $('<li>');
                billstatelispan1 = $('<span class="bill_details_lft">State/Province</span>');                                      
                billstatelispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingstate +'</span>');
                billstateli.append(billstatelispan1);
                billstateli.append(billstatelispan2);

                billcountryli = $('<li>');
                billcountrylispan1 = $('<span class="bill_details_lft">Country</span>');                                   
                billcountrylispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingcountry +'</span>');
                billcountryli.append(billcountrylispan1);
                billcountryli.append(billcountrylispan2);

                billpostcodeli = $('<li>');
                billpostcodelispan1 = $('<span class="bill_details_lft">Postcode</span>');
                billpostcodelispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingpostcode +'</span>');
                billpostcodeli.append(billpostcodelispan1);
                billpostcodeli.append(billpostcodelispan2);

                billphonenumberli = $('<li>');
                billphonenumberlispan1 = $('<span class="bill_details_lft">Phone Number</span>');
                billphonenumberlispan2 = $('<span class="bill_details_rht">'+ orderDetail_test.billingphonenumber +'</span>');
                billphonenumberli.append(billphonenumberlispan1);
                billphonenumberli.append(billphonenumberlispan2);

                billaddressblocksubul.append(billfirstnameli);
                billaddressblocksubul.append(billlastnameli);
                billaddressblocksubul.append(billcompanyli);
                billaddressblocksubul.append(billaddressli1);
                billaddressblocksubul.append(billaddressli2);
                billaddressblocksubul.append(billcityli);
                billaddressblocksubul.append(billstateli);
                billaddressblocksubul.append(billcountryli);
                billaddressblocksubul.append(billpostcodeli);
                billaddressblocksubul.append(billphonenumberli);
                billaddressblocksub.append(billaddressblocksubul); 
                billaddressblock.append(billaddressblocksub);
                billinginfodetails.append(billinginfolabel);
                billinginfodetails.append(billaddressblock);

                paymentmethod = $('<div class="checkout_tab"><a href="#">Payment Methods</a></div>');

                selectpayment = $('<div class="bill_div" id="checkout_4" style="display:none;">');
                selectpaymentlabel = $('<div class="comments_text">Select a payment method from the following options</div>');
                method = $('<div class="methods_div">');
                methodul = $('<ul>');  
                methodli1 = $('<li><span class="radio"><input name="" type="radio" value="" /></span><span class="method_text">Cheque or money order</span></li>');
                methodli2 = $('<li><span class="radio"><input name="" type="radio" value="" checked="checked"/></span><span class="method_text">Cash on delivery</span></li>');                             
                methodul.append(methodli1);
                methodul.append(methodli2);            
                method.append(methodul);                      
                 
                subtotal = $('<div class="prod_check_div">');
                subtotalspan1 = $('<span class="prod_check_lft">Total Item</span>');
                subtotalspan2 = $('<span class="prod_check_rht1">'+ pricequantity_test.itemCount +'</span>');
                subtotalspan3 = $('<span class="prod_check_mid">:</span>');
                subtotal.append(subtotalspan1);
                subtotal.append(subtotalspan2);
                subtotal.append(subtotalspan3);

                ordertotal = $('<div class="prod_check_div">');
                ordertotalspan1 = $('<span class="prod_check_lft">ordertotal</span>');
                ordertotalspan2 = $('<span class="prod_check_rht1">'+ pricequantity_test.totalPrice +'</span>');
                ordertotalspan3 = $('<span class="prod_check_mid">:</span>');
                ordertotal.append(ordertotalspan1);
                ordertotal.append(ordertotalspan2);
                ordertotal.append(ordertotalspan3);
                comments = $('<div class="comments_text">Cheque should be made out to Phresco</div>');
                selectpayment.append(selectpaymentlabel);
                selectpayment.append(method);
                selectpayment.append(subtotal);
                selectpayment.append(ordertotal);  
                selectpayment.append(comments);                    

                ordercomments = $('<div class="checkout_tab"><a href="#">Order Comments</a></div>');

                ordercmdblock = $('<div class="bill_div" id="checkout_5" style="display:none;">'); 
                commnettext = $('<div class="comments_text">Use this area for special instructions or question regards your order</div>'); 
                commnethead = $('<div class="comments_head">Order Comments</div>');
                commentbox = $('<div class="com_commentbox">'+ orderDetail_test.comments +'</div>');
                ordercmdblock.append(commnettext);
                ordercmdblock.append(commnethead);
                ordercmdblock.append(commentbox);

                buttons = $('<div class="checkout_btn">');
                buttonblock = $('<div class="mycart_btn_mid">');
                revieworder = $('<div class="mycart_mid_bu"><a href="#">Submit Order</a></div>');

                cancel = $('<div class="mycart_mid_bu"><a href="#">Back</a></div>');

                buttonblock.append(revieworder);
                buttonblock.append(cancel);                  
                clear = $('<div style="clear:both"></div>');
                buttons.append(buttonblock); 
                buttons.append(clear); 

                mycart.append(mycart_head);        
                mycart.append(customer);       
                mycart.append(emailblock);     
                mycart.append(deliveryinfo);
                mycart.append(deliveryinfodetails);    
                mycart.append(billinginfo);    
                mycart.append(billinginfodetails); 
                mycart.append(paymentmethod);
                mycart.append(selectpayment);  
                mycart.append(ordercomments);
                mycart.append(ordercmdblock);
                mycart.append(buttons);
                mainContent.append(mycart);		
				
				output2 = mainContent;
				// Expect that the text was set on the expected element
				notEqual(output1.html(), output2.html(), "Failure - Enter only Characters");
	});
});