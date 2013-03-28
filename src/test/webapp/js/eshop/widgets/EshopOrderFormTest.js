/*global require */

require(  [ "jquery", "eshop/widgets/OrderForm", "eshop/widgets/Phresco"], function($, OrderForm, Phresco) {

	//var equal = QUnit.equal, notEqual = QUnit.notEqual, expect = QUnit.expect, testwithsamedata = QUnit.test, testwithdiffdata = QUnit.test, testwithemptydata = QUnit.test, testwithspecialcharacter = QUnit.test;

	/**
	 * Test that the setMainContent method sets the text in the OrderForm-widget
	 */
	  module("OrderForm.js;OrderForm");
	test("Testing order form with Different user details", function() {
		var orderForm, phrescoapi, output1, totalItemprice, item, amount, output2, orderDetail = {}, pricequantity = {}, orderDetail1 = {}, 
		emailbk, dfirstNamebk, dlastNamebk, dcompanybk, daddress1bk, daddress2bk, dcitybk, dstatebk, dcountrybk, 
		dpostcodebk, dphonenumberbk, bfirstNamebk, blastNamebk, bcompanybk, baddress1bk, baddress2bk, bcitybk, bstatebk, commentsbk, 
		topH3, bcountrybk, bpostcodebk, bphonenumberbk, productcontainer, form, h5, fieldholder1, fieldset, billh5, fieldholder2, firstname, lastname, 
		company, address1, address2, city, state, country, postcode, phonenumber, fieldholder3, 
		fieldsetpaymentoption, h6, paymentpos, visacard1, visacard2, visacard3, carddetails, fieldsetpayment, 
		payment1, payment2, payment3, pricetag, priceblock, pricecount, subtotal, ordertotal, hint, ordercomments, 
		fieldholder4, textarea, buttons, button1, button2, productContainer,
		self, mainContent, mycart, checkout_tab, emailblock, emailblocksub, emailblocksubul, emailblocksubLi1, emailblocksubLi2, labelemail, emailblocksubspan1, emailblocksubspan2, deliveryinfo, deliveryinfodetails, deliveryinfolabel, addressblock, addressblocksub, addressblocksubul, firstnameli, labelfirstname, firstnamespan1, firstnamespan2, lastnameli, lastnamelispan1, lastnamelispan2, companyli, companylispan1, companylispan2, addressli1, labeladdress1, addressli1span1, addressli1span2, addressli2, addressli2span1, addressli2span2, cityli, labelcity, citylispan1, citylispan2, stateli, labelstateli, statelispan1, 
		statelispan2, countryli, countrylispan1, countryArray, countryselect, selected, countryvalue1, postcodeli, labelpostcode, postcodelispan1, postcodelispan2, phonenumberli, labelphonenumber, phonenumberlispan1, phonenumberlispan2, billinginfo, billinginfodetails, billinginfolabel, billaddressblock, billinginfosame, billcheckbox, billaddressblocksub, billaddressblocksubul, billfirstnameli, label_billfirstname, billfirstnamespan1, billfirstnamespan2, billlastnameli, billlastnamelispan1, billlastnamelispan2, billcompanyli, billcompanylispan1, billcompanylispan2, billaddressli1, label_billaddress1, billaddressli1span1, billaddressli1span2, billaddressli2, billaddressli2span1, billaddressli2span2, billcityli, label_billcity, billcitylispan1, billcitylispan2, billstateli, label_billstate, billstatelispan1, billstatelispan2, billcountryli, billcountrylispan1, bcountryArray, bcountryselect, bselected, bcountryvalue1, billpostcodeli, label_billpost, billpostcodelispan1, billpostcodelispan2, billphonenumberli, label_billphone, billphonenumberlispan1, billphonenumberlispan2, paymentmethod, selectpayment, 
		selectpaymentlabel, method, methodul, methodli1, methodli2, subtotalspan1, subtotalspan2, 
		subtotalspan3, ordertotalspan1, ordertotalspan2, ordertotalspan3, comments, mycart_head, i,
		ordercmdblock, buttonblock, revieworder, cancel, apiRef, validated, clear, totalItem, cartTotal, 
		commnettext, commnethead, commentbox;
		
		orderForm = new OrderForm();
		phrescoapi = new Phresco();
		orderForm.phrescoapi = phrescoapi;
		
		orderDetail = {email:"oaibr@ymail.com", deliveryfirstname:"Mohd", deliverylastname:"Ibrahim", deliverycompany:"DHL", deliveryaddress1:"Chennai", deliveryaddress2:"Chennai", deliverycity:"Chennai", deliverystate:"Tamilnadu", deliverycountry:"India", deliverypostcode:627811, deliveryphonenumber:11111, billingfirstname:"Mohd", billinglastname:"Ibr", billingcompany:"DHL", billingaddress1:"chn", billingaddress2:"chn", billingcity:"TSI", billingstate:"TN", billingcountry:"IND", billingpostcode:111, billingphonenumber:111, comments:"comments"};
		
		pricequantity = { itemCount:1, totalPrice:600 };
		
		orderForm.phrescoapi.orderDetail = orderDetail;
		orderForm.phrescoapi.pricequantity = pricequantity;
		output1 = orderForm.testRenderUI();
		
		
		orderDetail1 = {email:"oabr@ymail.com", deliveryfirstname:"suresh", deliverylastname:"kumar",deliverycompany:"DHL", deliveryaddress1:"Chennai", deliveryaddress2:"Chennai", deliverycity:"Chenni", deliverystate:"Tamilnadu", deliverycountry:"India", deliverypostcode:627811, deliveryphonenumber:1111, billingfirstname:"Mhd", billinglastname:"Ir", billingcompany:"DHL", billingaddress1:"chn", billingaddress2:"chn", billingcity:"TSI", billingstate:"TN", billingcountry:"IND", billingpostcode:111, billingphonenumber:111, comments:"comments"};
		
		pricequantity = { itemCount:1, totalPrice:600 };
		
		if(!$.isEmptyObject(orderDetail1)){
			
			emailbk = orderDetail1.email;
			dfirstNamebk = orderDetail1.deliveryfirstname;
			dlastNamebk  =  orderDetail1.deliverylastname;
			dcompanybk =  orderDetail1.deliverycompany;
			daddress1bk =  orderDetail1.deliveryaddress1;
			daddress2bk =  orderDetail1.deliveryaddress2;
			dcitybk =  orderDetail1.deliverycity;
			dstatebk =  orderDetail1.deliverystate;
			dcountrybk =  orderDetail1.deliverycountry;
			dpostcodebk =  orderDetail1.deliverypostcode;
			dphonenumberbk =  orderDetail1.deliveryphonenumber;
			
			bfirstNamebk = orderDetail1.billingfirstname;
			blastNamebk  =  orderDetail1.billinglastname;
			bcompanybk =  orderDetail1.billingcompany;
			baddress1bk =  orderDetail1.billingaddress1;
			baddress2bk =  orderDetail1.billingaddress2;
			bcitybk =  orderDetail1.billingcity;
			bstatebk =  orderDetail1.billingstate;
			bcountrybk =  orderDetail1.billingcountry;
			bpostcodebk =  orderDetail1.billingpostcode;
			bphonenumberbk =  orderDetail1.billingphonenumber;
			commentsbk =  orderDetail1.comments;
		}
		
		emailbk = (emailbk !== undefined)?orderDetail1.email : "";
		dfirstNamebk = (dfirstNamebk !== undefined)?orderDetail1.deliveryfirstname : "";
		dlastNamebk = (dlastNamebk !== undefined)?orderDetail1.deliverylastname : "";
		dcompanybk = (dcompanybk !== undefined)?orderDetail1.deliverycompany : "";
		daddress1bk = (daddress1bk !== undefined)?orderDetail1.deliveryaddress1 : "";
		daddress2bk = (daddress2bk !== undefined)?orderDetail1.deliveryaddress2 : "";
		dcitybk = (dcitybk !== undefined)?orderDetail1.deliverycity : "";
		dstatebk = (dstatebk !== undefined)?orderDetail1.deliverystate : "";
		dcountrybk = (dcountrybk !== undefined)?orderDetail1.deliverycountry : "";
		dpostcodebk = (dpostcodebk !== undefined)?orderDetail1.deliverypostcode : "";
		dphonenumberbk = (dphonenumberbk !== undefined)?orderDetail1.deliveryphonenumber : "";
		
		bfirstNamebk = (bfirstNamebk !== undefined)?orderDetail1.billingfirstname : "";
		blastNamebk = (blastNamebk !== undefined)?orderDetail1.billinglastname : "";
		bcompanybk = (bcompanybk !== undefined)?orderDetail1.billingcompany : "";
		baddress1bk = (baddress1bk !== undefined)?orderDetail1.billingaddress1 : "";
		baddress2bk = (baddress2bk !== undefined)?orderDetail1.billingaddress2 : "";
		bcitybk = (bcitybk !== undefined)?orderDetail1.billingcity : "";
		bstatebk = (bstatebk !== undefined)?orderDetail1.billingstate : "";
		bcountrybk = (bcountrybk !== undefined)?orderDetail1.billingcountry : "";
		bpostcodebk = (bpostcodebk !== undefined)?orderDetail1.billingpostcode : "";
		bphonenumberbk = (bphonenumberbk !== undefined)?orderDetail1.billingphonenumber : "";
		commentsbk = (commentsbk !== undefined)?orderDetail1.comments : "";

		totalItemprice = {};
		totalItemprice.item = pricequantity.itemCount;
		totalItemprice.amount = pricequantity.totalPrice;
		
		mainContent = $('<div></div>');
		mycart = $('<div class="mycart_div" >');
		mycart_head = $('<div class="mycart_head">Checkout</div>');
		checkout_tab = $('<div class="checkout_tab"><a >Customer Information</a></div>');
		emailblock = $('<div class="bill_div"  id="checkoutblock_1" style="display:block;">');
		emailblocksub = $('<div class="checkout_2_txt">');
		emailblocksubul = $('<ul>');
		emailblocksubLi1 = $('<li>Order Information will be sent to your A/C email list below.</li>');
		emailblocksubLi2 = $('<li class="bld">');
		labelemail = $('<label id="email_err_div">');
		emailblocksubspan1 = $('<span class="bill_details_lft">Email address *</span>');
		emailblocksubspan2 = $('<span class="bill_details_rht" id="email_err_div"><input name="email" id="email" type="text" autofocus="autofocus" value="'+ emailbk +'" /><br><span id="email_err" class="errtext"></span></span>');
		emailblocksubspan2.data = 'email';
		labelemail.append(emailblocksubspan1);
		labelemail.append(emailblocksubspan2);
		emailblocksubLi2.append(labelemail);
		emailblocksubul.append(emailblocksubLi1);  
		emailblocksubul.append(emailblocksubLi2);              
		emailblocksub.append(emailblocksubul);
		emailblock.append(emailblocksub);  

		deliveryinfo = $('<div class="checkout_tab"><a >Delivery Information</a></div>');
		deliveryinfodetails = $('<div class="bill_div"  id="checkoutblock_2" style="display:none;">');
		deliveryinfolabel= $('<div class="bill_head">Enter your delivery address and information here</div>');
		addressblock = $('<div class="bill_text_div">');
		addressblocksub = $('<div class="bill_details">');
		addressblocksubul = $('<ul>');
		
		firstnameli = $('<li class="">');
		labelfirstname = $('<label  id="deliveryfirstname_err_div">');
		firstnamespan1 = $('<span class="bill_details_lft">First name *</span>');
		firstnamespan2 = $('<span class="bill_details_rht"><input name="deliveryfirstName" id="deliveryfirstname" type="text" value="'+ dfirstNamebk +'"  /><br><span id="deliveryfirstname_err" class="errtext"></span></span>');
		firstnamespan2.data = 'deliveryfirstname';
		
		labelfirstname.append(firstnamespan1);
		labelfirstname.append(firstnamespan2);
		firstnameli.append(labelfirstname);
		
		lastnameli = $('<li class="">');				
		lastnamelispan1 = $('<span class="bill_details_lft">Last name</span>');
		lastnamelispan2 = $('<span class="bill_details_rht"><input name="deliverylastname" id="deliverylastname" type="text" value="'+ dlastNamebk +'" /></span>');
		lastnameli.append(lastnamelispan1);
		lastnameli.append(lastnamelispan2);
		
		lastnamelispan2.data = 'deliverylastname';
		
		companyli = $('<li class="">');
		companylispan1 = $('<span class="bill_details_lft">Company</span>');
		companylispan2 = $('<span class="bill_details_rht"><input name="deliverycompany" id="deliverycompany" type="text" value="'+ dcompanybk +'" /></span>');
		companyli.append(companylispan1);
		companyli.append(companylispan2);
		companylispan2.data = 'deliverycompany';
		
		addressli1 = $('<li class="">');
		labeladdress1 = $('<label  id="deliveryaddress1_err_div">');
		addressli1span1 = $('<span class="bill_details_lft">Address 1 *</span>');
		addressli1span2 = $('<span class="bill_details_rht" ><input name="deliveryaddress1" id="deliveryaddress1" type="text" value="'+ daddress1bk +'" /><br><span id="deliveryaddress1_err"></span></span>');
		labeladdress1.append(addressli1span1);
		labeladdress1.append(addressli1span2);
		addressli1.append(labeladdress1);
		addressli1span2.data = 'deliveryaddress1';
		
		addressli2 = $('<li class="">');
		addressli2span1 = $('<span class="bill_details_lft">Address 2</span>');
		addressli2span2 = $('<span class="bill_details_rht"><input name="deliveryaddress2" id="deliveryaddress2" type="text" value="'+ daddress2bk +'" /></span>');
		addressli2.append(addressli2span1);
		addressli2.append(addressli2span2);
		addressli2span2.data = 'deliveryaddress2';
		
		cityli = $('<li class="">');
		labelcity = $('<label  id="deliverycity_err_div">');
		citylispan1 = $('<span class="bill_details_lft">City *</span>');
		citylispan2 = $('<span class="bill_details_rht" ><input name="deliverycity" id="deliverycity" type="text" value="'+ dcitybk +'" /><br><span id="deliverycity_err"></span></span>');
		labelcity.append(citylispan1);
		labelcity.append(citylispan2);
		cityli.append(labelcity);
		citylispan2.data = 'deliverycity';
		
		stateli = $('<li class="">');
		labelstateli = $('<label  id="deliverystate_err_div">');
		statelispan1 = $('<span class="bill_details_lft">State/Province *</span>');
		statelispan2 = $('<span class="bill_details_rht" ><input name="deliverystate" id="deliverystate" type="text" value="'+ dstatebk +'" /><br><span id="deliverystate_err"></span></span>');
		labelstateli.append(statelispan1);
		labelstateli.append(statelispan2);
		stateli.append(labelstateli);
		statelispan2.data = 'deliverystate';
		
		countryli = $('<li class="">');
		countrylispan1 = $('<span class="bill_details_lft">Country *</span>');  
		countryArray = [ "USA", "India", "Australia", "Canada", "Bangladesh" ];	
		
		countryselect = $('<select name="deliverycountry" id="deliverycountry">');
		for(i= 0; i < countryArray.length; i++) {
			countryvalue1 = $('<option value="'+ countryArray[i] +'" '+selected+'>'+ countryArray[i] +'</option>');
			countryselect.append(countryvalue1);
		}
		countryli.append(countrylispan1);
		countryli.append(countryselect);
		countryselect.data = 'deliverycountry';
		
		postcodeli = $('<li class="">');
		labelpostcode = $('<label  id="deliverypostcode_err_div">');
		postcodelispan1 = $('<span class="bill_details_lft">Postcode *</span>');
		postcodelispan2 = $('<span class="bill_details_rht" ><input name="deliverypostcode" id="deliverypostcode"  type="text"  value="'+ dpostcodebk +'" /><br><span id="deliverypostcode_err"></span></span>');
		labelpostcode.append(postcodelispan1);
		labelpostcode.append(postcodelispan2);
		postcodeli.append(labelpostcode);
		postcodelispan2.data = 'deliverypostcode';

		phonenumberli = $('<li class="">');
		labelphonenumber = $('<label  id="deliveryphonenumber_err_div">');
		phonenumberlispan1 = $('<span class="bill_details_lft">Phone Number *</span>');
		phonenumberlispan2 = $('<span class="bill_details_rht" ><input name="deliveryphonenumber" id="deliveryphonenumber" type="text" value="'+ dphonenumberbk +'" /><br><span id="deliveryphonenumber_err"></span></span>');
		labelphonenumber.append(phonenumberlispan1);
		labelphonenumber.append(phonenumberlispan2);
		phonenumberli.append(labelphonenumber);

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
		
		billinginfo = $('<div class="checkout_tab"><a >billing Information</a></div>');
		billinginfodetails = $('<div class="bill_div" id="checkoutblock_3" style="display:none;">');
		billinginfolabel= $('<div class="bill_head">Enter your billing address and information here</div>');				
		billaddressblock = $('<div class="bill_text_div">');
		billinginfosame= $('<div class="bill_text">My billing information is the same as my delivery information</div>');
		billcheckbox = $('<input type="checkbox" id="checkaddress" name="checkaddress">');           
		billaddressblocksub = $('<div class="bill_details">');
		billaddressblocksubul = $('<ul>');
		
		billfirstnameli = $('<li class="">');
		label_billfirstname = $('<label  id="billingfirstname_err_div">');
		billfirstnamespan1 = $('<span class="bill_details_lft">First name *</span>');
		billfirstnamespan2 = $('<span class="bill_details_rht" ><input name="billingfirstname" id="billingfirstname" type="text" value="'+ bfirstNamebk +'" /><br><span id="billingfirstname_err"></span></span');
		label_billfirstname.append(billfirstnamespan1);
		label_billfirstname.append(billfirstnamespan2);
		billfirstnameli.append(label_billfirstname);
		
		billfirstnamespan2.data = 'billingfirstname';
		
		billlastnameli = $('<li>');
		billlastnamelispan1 = $('<span class="bill_details_lft">Last name</span>');
		billlastnamelispan2 = $('<span class="bill_details_rht"><input name="billinglastname" id="billinglastname" type="text" value="'+ blastNamebk +'" /></span>');
		billlastnameli.append(billlastnamelispan1);
		billlastnameli.append(billlastnamelispan2);
		
		billlastnamelispan2.data = 'billinglastname';
		
		billcompanyli = $('<li >');
		billcompanylispan1 = $('<span class="bill_details_lft">Company</span>');
		billcompanylispan2 = $('<span class="bill_details_rht"><input name="billingcompany" id="billingcompany" type="text" value="'+ bcompanybk +'" /></span>');
		billcompanyli.append(billcompanylispan1);
		billcompanyli.append(billcompanylispan2);
		billcompanylispan2.data = 'billingcompany';
		
		billaddressli1 = $('<li class="">');
		label_billaddress1 = $('<label  id="billingaddress1_err_div">');
		billaddressli1span1 = $('<span class="bill_details_lft">Address 1 *</span>');
		billaddressli1span2 = $('<span class="bill_details_rht" ><input name="billingaddress1" id="billingaddress1" type="text" value="'+ baddress1bk +'" /><br><span id="billingaddress1_err"></span></span');
		label_billaddress1.append(billaddressli1span1);
		label_billaddress1.append(billaddressli1span2);
		billaddressli1.append(label_billaddress1);
		billaddressli1span2.data = 'billingaddress1';
		
		billaddressli2 = $('<li>');
		billaddressli2span1 = $('<span class="bill_details_lft">Address 2</span>');
		billaddressli2span2 = $('<span class="bill_details_rht"><input name="billingaddress2" id="billingaddress2" type="text" value="'+ baddress2bk +'" /></span>');
		billaddressli2.append(billaddressli2span1);
		billaddressli2.append(billaddressli2span2);
		billaddressli2span2.data = 'billingaddress2';
		
		billcityli = $('<li>');
		label_billcity = $('<label id="billingcity_err_div">');
		billcitylispan1 = $('<span class="bill_details_lft">City *</span>');
		billcitylispan2 = $('<span class="bill_details_rht" ><input name="billingcity" id="billingcity" type="text" value="'+ bcitybk +'" /><br><span id="billingcity_err"></span></span>');
		label_billcity.append(billcitylispan1);
		label_billcity.append(billcitylispan2);
		billcityli.append(label_billcity);
		billcitylispan2.data = 'billingcity';

		billstateli = $('<li>');
		label_billstate = $('<label id="billingstate_err_div">');
		billstatelispan1 = $('<span class="bill_details_lft">State/Province *</span>');                                      
		billstatelispan2 = $('<span class="bill_details_rht"><input type="text" name="billingstate" id="billingstate" value="'+ bstatebk +'" ><br><span id="billingstate_err"></span></span>');
		label_billstate.append(billstatelispan1);
		label_billstate.append(billstatelispan2);
		billstateli.append(label_billstate);
		billstatelispan2.data = 'billingstate';
		
		billcountryli = $('<li class="">');
		billcountrylispan1 = $('<span class="bill_details_lft">Country *</span>');  
		bcountryArray = [ "USA", "India", "Australia", "Canada", "Bangladesh" ];	
		
		bcountryselect = $('<select name="billingcountry" id="billingcountry">');
		
		for(i= 0; i < bcountryArray.length; i++) {
			bcountryvalue1 = $('<option value="'+ bcountryArray[i] +'" '+ bselected +'>'+ bcountryArray[i] +'</option>');
			bcountryselect.append(bcountryvalue1);
		}

		billcountryli.append(billcountrylispan1);
		billcountryli.append(bcountryselect);
		bcountryselect.data = 'billingcountry';
		
		billpostcodeli = $('<li>');
		label_billpost = $('<label id="billingpostcode_err_div">');
		billpostcodelispan1 = $('<span class="bill_details_lft">Postcode *</span>');
		billpostcodelispan2 = $('<span class="bill_details_rht" ><input name="billingpostcode" id="billingpostcode" type="text" value="'+ bpostcodebk +'" /><br><span id="billingpostcode_err"></span></span>');
		label_billpost.append(billpostcodelispan1);
		label_billpost.append(billpostcodelispan2);
		billpostcodeli.append(label_billpost);
		billpostcodelispan2.data = 'billingpostcode';

		billphonenumberli = $('<li>');
		label_billphone = $('<label id="billingphonenumber_err_div">');
		billphonenumberlispan1 = $('<span class="bill_details_lft">Phone Number *</span>');
		billphonenumberlispan2 = $('<span class="bill_details_rht" ><input name="billingphonenumber" id="billingphonenumber" type="text" value="'+ bphonenumberbk +'" /><br><span id="billingphonenumber_err"></span></span>');
		label_billphone.append(billphonenumberlispan1);
		label_billphone.append(billphonenumberlispan2);
		billphonenumberli.append(label_billphone);
		billphonenumberlispan2.data = 'billingphonenumber';

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
		billaddressblock.append(billinginfosame);
		billaddressblock.append(billcheckbox);
		billaddressblock.append(billaddressblocksub);				
		billinginfodetails.append(billinginfolabel);
		billinginfodetails.append(billaddressblock);
		
		paymentmethod = $('<div class="checkout_tab"><a>Payment Methods</a></div>');
		selectpayment = $('<div class="bill_div" id="checkoutblock_4" style="display:none;">');
		selectpaymentlabel = $('<div class="comments_text">Select a payment method from the following options</div>');
		method = $('<div class="methods_div">');
		methodul = $('<ul>');  
		methodli1 = $('<li><span class="radio"><input name="payment" type="radio" value="" /></span><span class="method_text">Cheque or money order</span></li>');
		methodli2 = $('<li><span class="radio"><input name="payment" type="radio" value="" checked="checked" /></span><span class="method_text">Cash on delivery</span></li>');                             
		methodul.append(methodli1);
		methodul.append(methodli2);            
		method.append(methodul);                      
		 
		subtotal = $('<div class="prod_check_div">');
		subtotalspan1 = $('<span class="prod_check_lft">Total Items</span>');
		subtotalspan2 = $('<span class="prod_check_rht1">'+ pricequantity.itemCount +'</span>');
		subtotalspan3 = $('<span class="prod_check_mid">:</span>');
		subtotal.append(subtotalspan1);
		subtotal.append(subtotalspan2);
		subtotal.append(subtotalspan3);
		
		ordertotal = $('<div class="prod_check_div">');
		ordertotalspan1 = $('<span class="prod_check_lft">ordertotal</span>');
		ordertotalspan2 = $('<span class="prod_check_rht1">'+  pricequantity.totalPrice +'</span>');
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
		
		ordercomments = $('<div class="checkout_tab"><a >Order Comments</a></div>');
		ordercmdblock = $('<div class="bill_div" id="checkoutblock_5" style="display:none;">'); 
		
		commnettext = $('<div class="comments_text">Use this area for special instructions or question regards your order</div>'); 
		commnethead = $('<div class="comments_head">Order Comments</div>');
		commentbox = $('<div class="com_commentbox"><textarea name="comments" id="comments" cols="" rows="" value="'+ commentsbk +'" ></textarea></div>');
		ordercmdblock.append(commnettext);
		ordercmdblock.append(commnethead);
		ordercmdblock.append(commentbox);
		commentbox.data = 'comments';
		
		buttons = $('<div class="checkout_btn">');
		buttonblock = $('<div class="mycart_btn_mid">');
		revieworder = $('<div class="mycart_mid_bu" id="revieworder"><a >Review Order</a></div>');

		cancel = $('<div class="mycart_mid_bu"><a >Cancel</a></div>');    
		buttonblock.append(revieworder);
		buttonblock.append(cancel);                  
		clear = $('<div style="clear:both"></div>');
		buttons.append(buttonblock); 
		buttons.append(clear); 
		mycart.append(mycart_head);        
		mycart.append(checkout_tab);       
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
		output2 = mainContent.append(mycart);
		
		notEqual(output1.html(),output2.html(), "Failure - Mismatch in User Details");
	});
	
	test("Testing order form with User Details", function() {
	
		var orderForm, phrescoapi, output1, item, amount, output2, orderDetail = {}, pricequantity = {}, orderDetail1 = {}, 
		emailbk, dfirstNamebk, dlastNamebk, dcompanybk, daddress1bk, daddress2bk, dcitybk, dstatebk, dcountrybk, 
		dpostcodebk, dphonenumberbk, bfirstNamebk, blastNamebk, bcompanybk, baddress1bk, baddress2bk, bcitybk, bstatebk, commentsbk, 
		topH3, bcountrybk, bpostcodebk, bphonenumberbk, productcontainer, form, h5, fieldholder1, fieldset, billh5, fieldholder2, firstname, lastname, 
		company, address1, address2, city, state, country, postcode, phonenumber, fieldholder3, 
		fieldsetpaymentoption, h6, paymentpos, visacard1, visacard2, visacard3, carddetails, fieldsetpayment, 
		payment1, payment2, payment3, pricetag, priceblock, pricecount, subtotal, ordertotal, hint, ordercomments, 
		fieldholder4, textarea, buttons, button1, button2, productContainer,
		self, mainContent, mycart, checkout_tab, emailblock, emailblocksub, emailblocksubul, emailblocksubLi1, emailblocksubLi2, labelemail, emailblocksubspan1, emailblocksubspan2, deliveryinfo, deliveryinfodetails, deliveryinfolabel, addressblock, addressblocksub, addressblocksubul, firstnameli, labelfirstname, firstnamespan1, firstnamespan2, lastnameli, lastnamelispan1, lastnamelispan2, companyli, companylispan1, companylispan2, addressli1, labeladdress1, addressli1span1, addressli1span2, addressli2, addressli2span1, addressli2span2, cityli, labelcity, citylispan1, citylispan2, stateli, labelstateli, statelispan1, 
		statelispan2, countryli, countrylispan1, countryArray, countryselect, selected, countryvalue1, postcodeli, labelpostcode, postcodelispan1, postcodelispan2, phonenumberli, labelphonenumber, phonenumberlispan1, phonenumberlispan2, billinginfo, billinginfodetails, billinginfolabel, billaddressblock, billinginfosame, billcheckbox, billaddressblocksub, billaddressblocksubul, billfirstnameli, label_billfirstname, billfirstnamespan1, billfirstnamespan2, billlastnameli, billlastnamelispan1, billlastnamelispan2, billcompanyli, billcompanylispan1, billcompanylispan2, billaddressli1, label_billaddress1, billaddressli1span1, billaddressli1span2, billaddressli2, billaddressli2span1, billaddressli2span2, billcityli, label_billcity, billcitylispan1, billcitylispan2, billstateli, label_billstate, billstatelispan1, billstatelispan2, billcountryli, billcountrylispan1, bcountryArray, bcountryselect, bselected, bcountryvalue1, billpostcodeli, label_billpost, billpostcodelispan1, billpostcodelispan2, billphonenumberli, label_billphone, billphonenumberlispan1, billphonenumberlispan2, paymentmethod, selectpayment, 
		selectpaymentlabel, method, methodul, methodli1, methodli2, subtotalspan1, subtotalspan2, 
		subtotalspan3, ordertotalspan1, ordertotalspan2, ordertotalspan3, comments, mycart_head, i,
		ordercmdblock, buttonblock, revieworder, cancel, apiRef, validated, clear, totalItem, cartTotal, totalItemprice,
		commnettext, commnethead, commentbox;
		
		
		orderForm = new OrderForm();
		phrescoapi = new Phresco();
		orderForm.phrescoapi = phrescoapi;
		
		orderDetail = {email:"oaibr@ymail.com", deliveryfirstname:"Mohd", deliverylastname:"Ibrahim", deliverycompany:"DHL", deliveryaddress1:"Chennai", deliveryaddress2:"Chennai", deliverycity:"Chennai", deliverystate:"Tamilnadu", deliverycountry:"India", deliverypostcode:627811, deliveryphonenumber:11111, billingfirstname:"Mohd", billinglastname:"Ibr", billingcompany:"DHL", billingaddress1:"chn", billingaddress2:"chn", billingcity:"TSI", billingstate:"TN", billingcountry:"IND", billingpostcode:111, billingphonenumber:111, comments:"comments"};
		
		pricequantity = { itemCount:1, totalPrice:600 };
		
		orderForm.phrescoapi.orderDetail = orderDetail;
		orderForm.phrescoapi.pricequantity = pricequantity;
		output1 = orderForm.testRenderUI();
		
		orderDetail1 = {email:"oaibr@ymail.com", deliveryfirstname:"Mohd", deliverylastname:"Ibrahim",deliverycompany:"DHL", deliveryaddress1:"Chennai", deliveryaddress2:"Chennai", deliverycity:"Chennai", deliverystate:"Tamilnadu", deliverycountry:"India", deliverypostcode:627811, deliveryphonenumber:11111, billingfirstname:"Mohd", billinglastname:"Ibr", billingcompany:"DHL", billingaddress1:"chn", billingaddress2:"chn", billingcity:"TSI", billingstate:"TN", billingcountry:"IND", billingpostcode:111, billingphonenumber:111, comments:"comments"};
		
		pricequantity = { itemCount:1, totalPrice:600 };
		
		if(!$.isEmptyObject(orderDetail1)){
			
			emailbk = orderDetail1.email;
			dfirstNamebk = orderDetail1.deliveryfirstname;
			dlastNamebk  =  orderDetail1.deliverylastname;
			dcompanybk =  orderDetail1.deliverycompany;
			daddress1bk =  orderDetail1.deliveryaddress1;
			daddress2bk =  orderDetail1.deliveryaddress2;
			dcitybk =  orderDetail1.deliverycity;
			dstatebk =  orderDetail1.deliverystate;
			dcountrybk =  orderDetail1.deliverycountry;
			dpostcodebk =  orderDetail1.deliverypostcode;
			dphonenumberbk =  orderDetail1.deliveryphonenumber;
			
			bfirstNamebk = orderDetail1.billingfirstname;
			blastNamebk  =  orderDetail1.billinglastname;
			bcompanybk =  orderDetail1.billingcompany;
			baddress1bk =  orderDetail1.billingaddress1;
			baddress2bk =  orderDetail1.billingaddress2;
			bcitybk =  orderDetail1.billingcity;
			bstatebk =  orderDetail1.billingstate;
			bcountrybk =  orderDetail1.billingcountry;
			bpostcodebk =  orderDetail1.billingpostcode;
			bphonenumberbk =  orderDetail1.billingphonenumber;
			commentsbk =  orderDetail1.comments;
		}
		
		emailbk = (emailbk !== undefined)?orderDetail1.email : "";
		dfirstNamebk = (dfirstNamebk !== undefined)?orderDetail1.deliveryfirstname : "";
		dlastNamebk = (dlastNamebk !== undefined)?orderDetail1.deliverylastname : "";
		dcompanybk = (dcompanybk !== undefined)?orderDetail1.deliverycompany : "";
		daddress1bk = (daddress1bk !== undefined)?orderDetail1.deliveryaddress1 : "";
		daddress2bk = (daddress2bk !== undefined)?orderDetail1.deliveryaddress2 : "";
		dcitybk = (dcitybk !== undefined)?orderDetail1.deliverycity : "";
		dstatebk = (dstatebk !== undefined)?orderDetail1.deliverystate : "";
		dcountrybk = (dcountrybk !== undefined)?orderDetail1.deliverycountry : "";
		dpostcodebk = (dpostcodebk !== undefined)?orderDetail1.deliverypostcode : "";
		dphonenumberbk = (dphonenumberbk !== undefined)?orderDetail1.deliveryphonenumber : "";
		
		bfirstNamebk = (bfirstNamebk !== undefined)?orderDetail1.billingfirstname : "";
		blastNamebk = (blastNamebk !== undefined)?orderDetail1.billinglastname : "";
		bcompanybk = (bcompanybk !== undefined)?orderDetail1.billingcompany : "";
		baddress1bk = (baddress1bk !== undefined)?orderDetail1.billingaddress1 : "";
		baddress2bk = (baddress2bk !== undefined)?orderDetail1.billingaddress2 : "";
		bcitybk = (bcitybk !== undefined)?orderDetail1.billingcity : "";
		bstatebk = (bstatebk !== undefined)?orderDetail1.billingstate : "";
		bcountrybk = (bcountrybk !== undefined)?orderDetail1.billingcountry : "";
		bpostcodebk = (bpostcodebk !== undefined)?orderDetail1.billingpostcode : "";
		bphonenumberbk = (bphonenumberbk !== undefined)?orderDetail1.billingphonenumber : "";
		commentsbk = (commentsbk !== undefined)?orderDetail1.comments : "";

		totalItemprice = {};
		totalItemprice.item = pricequantity.itemCount;
		totalItemprice.amount = pricequantity.totalPrice;
		
		mainContent = $('<div></div>');
		mycart = $('<div class="mycart_div" >');
		mycart_head = $('<div class="mycart_head">Checkout</div>');
		checkout_tab = $('<div class="checkout_tab"><a >Customer Information</a></div>');
		emailblock = $('<div class="bill_div"  id="checkoutblock_1" style="display:block;">');
		emailblocksub = $('<div class="checkout_2_txt">');
		emailblocksubul = $('<ul>');
		emailblocksubLi1 = $('<li>Order Information will be sent to your A/C email list below.</li>');
		emailblocksubLi2 = $('<li class="bld">');
		labelemail = $('<label id="email_err_div">');
		emailblocksubspan1 = $('<span class="bill_details_lft">Email address *</span>');
		emailblocksubspan2 = $('<span class="bill_details_rht" id="email_err_div"><input name="email" id="email" type="text" autofocus="autofocus" value="'+ emailbk +'" /><br><span id="email_err" class="errtext"></span></span>');
		emailblocksubspan2.data = 'email';
		labelemail.append(emailblocksubspan1);
		labelemail.append(emailblocksubspan2);
		emailblocksubLi2.append(labelemail);
		emailblocksubul.append(emailblocksubLi1);  
		emailblocksubul.append(emailblocksubLi2);              
		emailblocksub.append(emailblocksubul);
		emailblock.append(emailblocksub);  

		deliveryinfo = $('<div class="checkout_tab"><a >Delivery Information</a></div>');
		deliveryinfodetails = $('<div class="bill_div"  id="checkoutblock_2" style="display:none;">');
		deliveryinfolabel= $('<div class="bill_head">Enter your delivery address and information here</div>');
		addressblock = $('<div class="bill_text_div">');
		addressblocksub = $('<div class="bill_details">');
		addressblocksubul = $('<ul>');
		
		firstnameli = $('<li class="">');
		labelfirstname = $('<label  id="deliveryfirstname_err_div">');
		firstnamespan1 = $('<span class="bill_details_lft">First name *</span>');
		firstnamespan2 = $('<span class="bill_details_rht"><input name="deliveryfirstName" id="deliveryfirstname" type="text" value="'+ dfirstNamebk +'"  /><br><span id="deliveryfirstname_err" class="errtext"></span></span>');
		firstnamespan2.data = 'deliveryfirstname';
		
		labelfirstname.append(firstnamespan1);
		labelfirstname.append(firstnamespan2);
		firstnameli.append(labelfirstname);
		
		lastnameli = $('<li class="">');				
		lastnamelispan1 = $('<span class="bill_details_lft">Last name</span>');
		lastnamelispan2 = $('<span class="bill_details_rht"><input name="deliverylastname" id="deliverylastname" type="text" value="'+ dlastNamebk +'" /></span>');
		lastnameli.append(lastnamelispan1);
		lastnameli.append(lastnamelispan2);
		
		lastnamelispan2.data = 'deliverylastname';
		
		companyli = $('<li class="">');
		companylispan1 = $('<span class="bill_details_lft">Company</span>');
		companylispan2 = $('<span class="bill_details_rht"><input name="deliverycompany" id="deliverycompany" type="text" value="'+ dcompanybk +'" /></span>');
		companyli.append(companylispan1);
		companyli.append(companylispan2);
		companylispan2.data = 'deliverycompany';
		
		addressli1 = $('<li class="">');
		labeladdress1 = $('<label  id="deliveryaddress1_err_div">');
		addressli1span1 = $('<span class="bill_details_lft">Address 1 *</span>');
		addressli1span2 = $('<span class="bill_details_rht" ><input name="deliveryaddress1" id="deliveryaddress1" type="text" value="'+ daddress1bk +'" /><br><span id="deliveryaddress1_err"></span></span>');
		labeladdress1.append(addressli1span1);
		labeladdress1.append(addressli1span2);
		addressli1.append(labeladdress1);
		addressli1span2.data = 'deliveryaddress1';
		
		addressli2 = $('<li class="">');
		addressli2span1 = $('<span class="bill_details_lft">Address 2</span>');
		addressli2span2 = $('<span class="bill_details_rht"><input name="deliveryaddress2" id="deliveryaddress2" type="text" value="'+ daddress2bk +'" /></span>');
		addressli2.append(addressli2span1);
		addressli2.append(addressli2span2);
		addressli2span2.data = 'deliveryaddress2';
		
		cityli = $('<li class="">');
		labelcity = $('<label  id="deliverycity_err_div">');
		citylispan1 = $('<span class="bill_details_lft">City *</span>');
		citylispan2 = $('<span class="bill_details_rht" ><input name="deliverycity" id="deliverycity" type="text" value="'+ dcitybk +'" /><br><span id="deliverycity_err"></span></span>');
		labelcity.append(citylispan1);
		labelcity.append(citylispan2);
		cityli.append(labelcity);
		citylispan2.data = 'deliverycity';
		
		stateli = $('<li class="">');
		labelstateli = $('<label  id="deliverystate_err_div">');
		statelispan1 = $('<span class="bill_details_lft">State/Province *</span>');
		statelispan2 = $('<span class="bill_details_rht" ><input name="deliverystate" id="deliverystate" type="text" value="'+ dstatebk +'" /><br><span id="deliverystate_err"></span></span>');
		labelstateli.append(statelispan1);
		labelstateli.append(statelispan2);
		stateli.append(labelstateli);
		statelispan2.data = 'deliverystate';
		
		countryli = $('<li class="">');
		countrylispan1 = $('<span class="bill_details_lft">Country *</span>');  
		countryArray = [ "USA", "India", "Australia", "Canada", "Bangladesh" ];	
		
		countryselect = $('<select name="deliverycountry" id="deliverycountry">');
		for(i= 0; i < countryArray.length; i++) {
			countryvalue1 = $('<option value="'+ countryArray[i] +'" '+selected+'>'+ countryArray[i] +'</option>');
			countryselect.append(countryvalue1);
		}
		countryli.append(countrylispan1);
		countryli.append(countryselect);
		countryselect.data = 'deliverycountry';
		
		postcodeli = $('<li class="">');
		labelpostcode = $('<label  id="deliverypostcode_err_div">');
		postcodelispan1 = $('<span class="bill_details_lft">Postcode *</span>');
		postcodelispan2 = $('<span class="bill_details_rht" ><input name="deliverypostcode" id="deliverypostcode"  type="text"  value="'+ dpostcodebk +'" /><br><span id="deliverypostcode_err"></span></span>');
		labelpostcode.append(postcodelispan1);
		labelpostcode.append(postcodelispan2);
		postcodeli.append(labelpostcode);
		postcodelispan2.data = 'deliverypostcode';

		phonenumberli = $('<li class="">');
		labelphonenumber = $('<label  id="deliveryphonenumber_err_div">');
		phonenumberlispan1 = $('<span class="bill_details_lft">Phone Number *</span>');
		phonenumberlispan2 = $('<span class="bill_details_rht" ><input name="deliveryphonenumber" id="deliveryphonenumber" type="text" value="'+ dphonenumberbk +'" /><br><span id="deliveryphonenumber_err"></span></span>');
		labelphonenumber.append(phonenumberlispan1);
		labelphonenumber.append(phonenumberlispan2);
		phonenumberli.append(labelphonenumber);

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
		
		billinginfo = $('<div class="checkout_tab"><a >billing Information</a></div>');
		billinginfodetails = $('<div class="bill_div" id="checkoutblock_3" style="display:none;">');
		billinginfolabel= $('<div class="bill_head">Enter your billing address and information here</div>');				
		billaddressblock = $('<div class="bill_text_div">');
		billinginfosame= $('<div class="bill_text">My billing information is the same as my delivery information</div>');
		billcheckbox = $('<input type="checkbox" id="checkaddress" name="checkaddress">');           
		billaddressblocksub = $('<div class="bill_details">');
		billaddressblocksubul = $('<ul>');
		
		billfirstnameli = $('<li class="">');
		label_billfirstname = $('<label  id="billingfirstname_err_div">');
		billfirstnamespan1 = $('<span class="bill_details_lft">First name *</span>');
		billfirstnamespan2 = $('<span class="bill_details_rht" ><input name="billingfirstname" id="billingfirstname" type="text" value="'+ bfirstNamebk +'" /><br><span id="billingfirstname_err"></span></span');
		label_billfirstname.append(billfirstnamespan1);
		label_billfirstname.append(billfirstnamespan2);
		billfirstnameli.append(label_billfirstname);
		
		billfirstnamespan2.data = 'billingfirstname';
		
		billlastnameli = $('<li>');
		billlastnamelispan1 = $('<span class="bill_details_lft">Last name</span>');
		billlastnamelispan2 = $('<span class="bill_details_rht"><input name="billinglastname" id="billinglastname" type="text" value="'+ blastNamebk +'" /></span>');
		billlastnameli.append(billlastnamelispan1);
		billlastnameli.append(billlastnamelispan2);
		
		billlastnamelispan2.data = 'billinglastname';
		
		billcompanyli = $('<li >');
		billcompanylispan1 = $('<span class="bill_details_lft">Company</span>');
		billcompanylispan2 = $('<span class="bill_details_rht"><input name="billingcompany" id="billingcompany" type="text" value="'+ bcompanybk +'" /></span>');
		billcompanyli.append(billcompanylispan1);
		billcompanyli.append(billcompanylispan2);
		billcompanylispan2.data = 'billingcompany';
		
		billaddressli1 = $('<li class="">');
		label_billaddress1 = $('<label  id="billingaddress1_err_div">');
		billaddressli1span1 = $('<span class="bill_details_lft">Address 1 *</span>');
		billaddressli1span2 = $('<span class="bill_details_rht" ><input name="billingaddress1" id="billingaddress1" type="text" value="'+ baddress1bk +'" /><br><span id="billingaddress1_err"></span></span');
		label_billaddress1.append(billaddressli1span1);
		label_billaddress1.append(billaddressli1span2);
		billaddressli1.append(label_billaddress1);
		billaddressli1span2.data = 'billingaddress1';
		
		billaddressli2 = $('<li>');
		billaddressli2span1 = $('<span class="bill_details_lft">Address 2</span>');
		billaddressli2span2 = $('<span class="bill_details_rht"><input name="billingaddress2" id="billingaddress2" type="text" value="'+ baddress2bk +'" /></span>');
		billaddressli2.append(billaddressli2span1);
		billaddressli2.append(billaddressli2span2);
		billaddressli2span2.data = 'billingaddress2';
		
		billcityli = $('<li>');
		label_billcity = $('<label id="billingcity_err_div">');
		billcitylispan1 = $('<span class="bill_details_lft">City *</span>');
		billcitylispan2 = $('<span class="bill_details_rht" ><input name="billingcity" id="billingcity" type="text" value="'+ bcitybk +'" /><br><span id="billingcity_err"></span></span>');
		label_billcity.append(billcitylispan1);
		label_billcity.append(billcitylispan2);
		billcityli.append(label_billcity);
		billcitylispan2.data = 'billingcity';

		billstateli = $('<li>');
		label_billstate = $('<label id="billingstate_err_div">');
		billstatelispan1 = $('<span class="bill_details_lft">State/Province *</span>');                                      
		billstatelispan2 = $('<span class="bill_details_rht"><input type="text" name="billingstate" id="billingstate" value="'+ bstatebk +'" ><br><span id="billingstate_err"></span></span>');
		label_billstate.append(billstatelispan1);
		label_billstate.append(billstatelispan2);
		billstateli.append(label_billstate);
		billstatelispan2.data = 'billingstate';
		
		billcountryli = $('<li class="">');
		billcountrylispan1 = $('<span class="bill_details_lft">Country *</span>');  
		bcountryArray = [ "USA", "India", "Australia", "Canada", "Bangladesh" ];	
		
		bcountryselect = $('<select name="billingcountry" id="billingcountry">');
		
		for(i= 0; i < bcountryArray.length; i++) {
			bcountryvalue1 = $('<option value="'+ bcountryArray[i] +'" '+ bselected +'>'+ bcountryArray[i] +'</option>');
			bcountryselect.append(bcountryvalue1);
		}

		billcountryli.append(billcountrylispan1);
		billcountryli.append(bcountryselect);
		bcountryselect.data = 'billingcountry';
		
		billpostcodeli = $('<li>');
		label_billpost = $('<label id="billingpostcode_err_div">');
		billpostcodelispan1 = $('<span class="bill_details_lft">Postcode *</span>');
		billpostcodelispan2 = $('<span class="bill_details_rht" ><input name="billingpostcode" id="billingpostcode" type="text" value="'+ bpostcodebk +'" /><br><span id="billingpostcode_err"></span></span>');
		label_billpost.append(billpostcodelispan1);
		label_billpost.append(billpostcodelispan2);
		billpostcodeli.append(label_billpost);
		billpostcodelispan2.data = 'billingpostcode';

		billphonenumberli = $('<li>');
		label_billphone = $('<label id="billingphonenumber_err_div">');
		billphonenumberlispan1 = $('<span class="bill_details_lft">Phone Number *</span>');
		billphonenumberlispan2 = $('<span class="bill_details_rht" ><input name="billingphonenumber" id="billingphonenumber" type="text" value="'+ bphonenumberbk +'" /><br><span id="billingphonenumber_err"></span></span>');
		label_billphone.append(billphonenumberlispan1);
		label_billphone.append(billphonenumberlispan2);
		billphonenumberli.append(label_billphone);
		billphonenumberlispan2.data = 'billingphonenumber';

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
		billaddressblock.append(billinginfosame);
		billaddressblock.append(billcheckbox);
		billaddressblock.append(billaddressblocksub);				
		billinginfodetails.append(billinginfolabel);
		billinginfodetails.append(billaddressblock);
		
		paymentmethod = $('<div class="checkout_tab"><a>Payment Methods</a></div>');
		selectpayment = $('<div class="bill_div" id="checkoutblock_4" style="display:none;">');
		selectpaymentlabel = $('<div class="comments_text">Select a payment method from the following options</div>');
		method = $('<div class="methods_div">');
		methodul = $('<ul>');  
		methodli1 = $('<li><span class="radio"><input name="payment" type="radio" value="" /></span><span class="method_text">Cheque or money order</span></li>');
		methodli2 = $('<li><span class="radio"><input name="payment" type="radio" value="" checked="checked" /></span><span class="method_text">Cash on delivery</span></li>');                             
		methodul.append(methodli1);
		methodul.append(methodli2);            
		method.append(methodul);                      
		 
		subtotal = $('<div class="prod_check_div">');
		subtotalspan1 = $('<span class="prod_check_lft">Total Items</span>');
		subtotalspan2 = $('<span class="prod_check_rht1">'+ pricequantity.itemCount +'</span>');
		subtotalspan3 = $('<span class="prod_check_mid">:</span>');
		subtotal.append(subtotalspan1);
		subtotal.append(subtotalspan2);
		subtotal.append(subtotalspan3);
		
		ordertotal = $('<div class="prod_check_div">');
		ordertotalspan1 = $('<span class="prod_check_lft">ordertotal</span>');
		ordertotalspan2 = $('<span class="prod_check_rht1">'+  pricequantity.totalPrice +'</span>');
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
		
		ordercomments = $('<div class="checkout_tab"><a >Order Comments</a></div>');
		ordercmdblock = $('<div class="bill_div" id="checkoutblock_5" style="display:none;">'); 
		
		commnettext = $('<div class="comments_text">Use this area for special instructions or question regards your order</div>'); 
		commnethead = $('<div class="comments_head">Order Comments</div>');
		commentbox = $('<div class="com_commentbox"><textarea name="comments" id="comments" cols="" rows="" value="'+ commentsbk +'" ></textarea></div>');
		ordercmdblock.append(commnettext);
		ordercmdblock.append(commnethead);
		ordercmdblock.append(commentbox);
		commentbox.data = 'comments';
		
		buttons = $('<div class="checkout_btn">');
		buttonblock = $('<div class="mycart_btn_mid">');
		revieworder = $('<div class="mycart_mid_bu" id="revieworder"><a >Review Order</a></div>');

		cancel = $('<div class="mycart_mid_bu"><a >Cancel</a></div>');    
		buttonblock.append(revieworder);
		buttonblock.append(cancel);                  
		clear = $('<div style="clear:both"></div>');
		buttons.append(buttonblock); 
		buttons.append(clear); 
		mycart.append(mycart_head);        
		mycart.append(checkout_tab);       
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
		output2 = mainContent.append(mycart);
		equal(output1.html(),output2.html(), "Success - TestCase For order success passed");
	});
	
	test("Testing order form with empty details", function() {
	
		var orderForm, phrescoapi, output1, totalItemprice, item, amount, output2, orderDetail = {}, pricequantity = {}, orderDetail1 = {}, 
		emailbk, dfirstNamebk, dlastNamebk, dcompanybk, daddress1bk, daddress2bk, dcitybk, dstatebk, dcountrybk, 
		dpostcodebk, dphonenumberbk, bfirstNamebk, blastNamebk, bcompanybk, baddress1bk, baddress2bk, bcitybk, bstatebk, commentsbk, 
		topH3, bcountrybk, bpostcodebk, bphonenumberbk, productcontainer, form, h5, fieldholder1, fieldset, billh5, fieldholder2, firstname, lastname, 
		company, address1, address2, city, state, country, postcode, phonenumber, fieldholder3, 
		fieldsetpaymentoption, h6, paymentpos, visacard1, visacard2, visacard3, carddetails, fieldsetpayment, 
		payment1, payment2, payment3, pricetag, priceblock, pricecount, subtotal, ordertotal, hint, ordercomments, 
		fieldholder4, textarea, buttons, button1, button2, productContainer,
		self, mainContent, mycart, checkout_tab, emailblock, emailblocksub, emailblocksubul, emailblocksubLi1, emailblocksubLi2, labelemail, emailblocksubspan1, emailblocksubspan2, deliveryinfo, deliveryinfodetails, deliveryinfolabel, addressblock, addressblocksub, addressblocksubul, firstnameli, labelfirstname, firstnamespan1, firstnamespan2, lastnameli, lastnamelispan1, lastnamelispan2, companyli, companylispan1, companylispan2, addressli1, labeladdress1, addressli1span1, addressli1span2, addressli2, addressli2span1, addressli2span2, cityli, labelcity, citylispan1, citylispan2, stateli, labelstateli, statelispan1, 
		statelispan2, countryli, countrylispan1, countryArray, countryselect, selected, countryvalue1, postcodeli, labelpostcode, postcodelispan1, postcodelispan2, phonenumberli, labelphonenumber, phonenumberlispan1, phonenumberlispan2, billinginfo, billinginfodetails, billinginfolabel, billaddressblock, billinginfosame, billcheckbox, billaddressblocksub, billaddressblocksubul, billfirstnameli, label_billfirstname, billfirstnamespan1, billfirstnamespan2, billlastnameli, billlastnamelispan1, billlastnamelispan2, billcompanyli, billcompanylispan1, billcompanylispan2, billaddressli1, label_billaddress1, billaddressli1span1, billaddressli1span2, billaddressli2, billaddressli2span1, billaddressli2span2, billcityli, label_billcity, billcitylispan1, billcitylispan2, billstateli, label_billstate, billstatelispan1, billstatelispan2, billcountryli, billcountrylispan1, bcountryArray, bcountryselect, bselected, bcountryvalue1, billpostcodeli, label_billpost, billpostcodelispan1, billpostcodelispan2, billphonenumberli, label_billphone, billphonenumberlispan1, billphonenumberlispan2, paymentmethod, selectpayment, 
		selectpaymentlabel, method, methodul, methodli1, methodli2, subtotalspan1, subtotalspan2, 
		subtotalspan3, ordertotalspan1, ordertotalspan2, ordertotalspan3, comments, mycart_head, i,
		ordercmdblock, buttonblock, revieworder, cancel, apiRef, validated, clear, totalItem, cartTotal, 
		commnettext, commnethead, commentbox;
		
		orderForm = new OrderForm();
		phrescoapi = new Phresco();
		orderForm.phrescoapi = phrescoapi;
		
		orderDetail = {email:"oaibr@ymail.com", deliveryfirstname:"Mohd", deliverylastname:"Ibrahim", deliverycompany:"DHL", deliveryaddress1:"Chennai", deliveryaddress2:"Chennai", deliverycity:"Chennai", deliverystate:"Tamilnadu", deliverycountry:"India", deliverypostcode:627811, deliveryphonenumber:11111, billingfirstname:"Mohd", billinglastname:"Ibr", billingcompany:"DHL", billingaddress1:"chn", billingaddress2:"chn", billingcity:"TSI", billingstate:"TN", billingcountry:"IND", billingpostcode:111, billingphonenumber:111, comments:"comments"};
		
		pricequantity = { itemCount:1, totalPrice:600 };
		
		orderForm.phrescoapi.orderDetail = orderDetail;
		orderForm.phrescoapi.pricequantity = pricequantity;
		output1 = orderForm.testRenderUI();
		
		
		orderDetail1 = {email:"", deliveryfirstname:"Mohd", deliverylastname:"",deliverycompany:"DHL", deliveryaddress1:"", deliveryaddress2:"", deliverycity:"", deliverystate:"", deliverycountry:"Chennai", deliverypostcode:627811, deliveryphonenumber:1111, billingfirstname:"", billinglastname:"", billingcompany:"", billingaddress1:"", billingaddress2:"", billingcity:"", billingstate:"", billingcountry:"", billingpostcode:111, billingphonenumber:111, comments:""};
		
		pricequantity = { itemCount:1, totalPrice:600 };
		
		if(!$.isEmptyObject(orderDetail1)){
			
			emailbk = orderDetail1.email;
			dfirstNamebk = orderDetail1.deliveryfirstname;
			dlastNamebk  =  orderDetail1.deliverylastname;
			dcompanybk =  orderDetail1.deliverycompany;
			daddress1bk =  orderDetail1.deliveryaddress1;
			daddress2bk =  orderDetail1.deliveryaddress2;
			dcitybk =  orderDetail1.deliverycity;
			dstatebk =  orderDetail1.deliverystate;
			dcountrybk =  orderDetail1.deliverycountry;
			dpostcodebk =  orderDetail1.deliverypostcode;
			dphonenumberbk =  orderDetail1.deliveryphonenumber;
			
			bfirstNamebk = orderDetail1.billingfirstname;
			blastNamebk  =  orderDetail1.billinglastname;
			bcompanybk =  orderDetail1.billingcompany;
			baddress1bk =  orderDetail1.billingaddress1;
			baddress2bk =  orderDetail1.billingaddress2;
			bcitybk =  orderDetail1.billingcity;
			bstatebk =  orderDetail1.billingstate;
			bcountrybk =  orderDetail1.billingcountry;
			bpostcodebk =  orderDetail1.billingpostcode;
			bphonenumberbk =  orderDetail1.billingphonenumber;
			commentsbk =  orderDetail1.comments;
		}
		
		emailbk = (emailbk !== undefined)?orderDetail1.email : "";
		dfirstNamebk = (dfirstNamebk !== undefined)?orderDetail1.deliveryfirstname : "";
		dlastNamebk = (dlastNamebk !== undefined)?orderDetail1.deliverylastname : "";
		dcompanybk = (dcompanybk !== undefined)?orderDetail1.deliverycompany : "";
		daddress1bk = (daddress1bk !== undefined)?orderDetail1.deliveryaddress1 : "";
		daddress2bk = (daddress2bk !== undefined)?orderDetail1.deliveryaddress2 : "";
		dcitybk = (dcitybk !== undefined)?orderDetail1.deliverycity : "";
		dstatebk = (dstatebk !== undefined)?orderDetail1.deliverystate : "";
		dcountrybk = (dcountrybk !== undefined)?orderDetail1.deliverycountry : "";
		dpostcodebk = (dpostcodebk !== undefined)?orderDetail1.deliverypostcode : "";
		dphonenumberbk = (dphonenumberbk !== undefined)?orderDetail1.deliveryphonenumber : "";
		
		bfirstNamebk = (bfirstNamebk !== undefined)?orderDetail1.billingfirstname : "";
		blastNamebk = (blastNamebk !== undefined)?orderDetail1.billinglastname : "";
		bcompanybk = (bcompanybk !== undefined)?orderDetail1.billingcompany : "";
		baddress1bk = (baddress1bk !== undefined)?orderDetail1.billingaddress1 : "";
		baddress2bk = (baddress2bk !== undefined)?orderDetail1.billingaddress2 : "";
		bcitybk = (bcitybk !== undefined)?orderDetail1.billingcity : "";
		bstatebk = (bstatebk !== undefined)?orderDetail1.billingstate : "";
		bcountrybk = (bcountrybk !== undefined)?orderDetail1.billingcountry : "";
		bpostcodebk = (bpostcodebk !== undefined)?orderDetail1.billingpostcode : "";
		bphonenumberbk = (bphonenumberbk !== undefined)?orderDetail1.billingphonenumber : "";
		commentsbk = (commentsbk !== undefined)?orderDetail1.comments : "";

		totalItemprice = {};
		totalItemprice.item = pricequantity.itemCount;
		totalItemprice.amount = pricequantity.totalPrice;
		
		mainContent = $('<div></div>');
		mycart = $('<div class="mycart_div" >');
		mycart_head = $('<div class="mycart_head">Checkout</div>');
		checkout_tab = $('<div class="checkout_tab"><a href="#">Customer Information</a></div>');

		emailblock = $('<div class="bill_div"  id="checkoutblock_1" style="display:block;">');
		emailblocksub = $('<div class="checkout_2_txt">');
		emailblocksubul = $('<ul>');
		emailblocksubLi1 = $('<li>Order Information will be sent to your A/C email list below.</li>');
		emailblocksubLi2 = $('<li class="bld">');
		labelemail = $('<label id="email_err_div">');
		emailblocksubspan1 = $('<span class="bill_details_lft">Email address *</span>');
		emailblocksubspan2 = $('<span class="bill_details_rht" id="email_err_div"><input name="email" id="email" type="text" autofocus="autofocus" value="'+ emailbk +'" /><br><span id="email_err" class="errtext"></span></span>');
		emailblocksubspan2.data = 'email';
		labelemail.append(emailblocksubspan1);
		labelemail.append(emailblocksubspan2);
		emailblocksubLi2.append(labelemail);
		emailblocksubul.append(emailblocksubLi1);  
		emailblocksubul.append(emailblocksubLi2);              
		emailblocksub.append(emailblocksubul);
		emailblock.append(emailblocksub);  

		deliveryinfo = $('<div class="checkout_tab"><a href="#">Delivery Information</a></div>');
	   
		deliveryinfodetails = $('<div class="bill_div"  id="checkoutblock_2" style="display:none;">');
		deliveryinfolabel= $('<div class="bill_head">Enter your delivery address and information here</div>');
		addressblock = $('<div class="bill_text_div">');
		addressblocksub = $('<div class="bill_details">');
		addressblocksubul = $('<ul>');
		
		firstnameli = $('<li class="">');
		labelfirstname = $('<label  id="deliveryfirstname_err_div">');
		firstnamespan1 = $('<span class="bill_details_lft">First name *</span>');
		firstnamespan2 = $('<span class="bill_details_rht"><input name="deliveryfirstName" id="deliveryfirstname" type="text" value="'+ dfirstNamebk +'"  /><br><span id="deliveryfirstname_err" class="errtext"></span></span>');
		firstnamespan2.data = 'deliveryfirstname';
		
		labelfirstname.append(firstnamespan1);
		labelfirstname.append(firstnamespan2);
		firstnameli.append(labelfirstname);
		
		lastnameli = $('<li class="">');				
		lastnamelispan1 = $('<span class="bill_details_lft">Last name</span>');
		lastnamelispan2 = $('<span class="bill_details_rht"><input name="deliverylastname" id="deliverylastname" type="text" value="'+ dlastNamebk +'" /></span>');
		lastnameli.append(lastnamelispan1);
		lastnameli.append(lastnamelispan2);
		
		lastnamelispan2.data = 'deliverylastname';
		
		companyli = $('<li class="">');
		companylispan1 = $('<span class="bill_details_lft">Company</span>');
		companylispan2 = $('<span class="bill_details_rht"><input name="deliverycompany" id="deliverycompany" type="text" value="'+ dcompanybk +'" /></span>');
		companyli.append(companylispan1);
		companyli.append(companylispan2);
		companylispan2.data = 'deliverycompany';
		
		addressli1 = $('<li class="">');
		labeladdress1 = $('<label  id="deliveryaddress1_err_div">');
		addressli1span1 = $('<span class="bill_details_lft">Address 1 *</span>');
		addressli1span2 = $('<span class="bill_details_rht" ><input name="deliveryaddress1" id="deliveryaddress1" type="text" value="'+ daddress1bk +'" /><br><span id="deliveryaddress1_err"></span></span>');
		labeladdress1.append(addressli1span1);
		labeladdress1.append(addressli1span2);
		addressli1.append(labeladdress1);
		addressli1span2.data = 'deliveryaddress1';
		
		addressli2 = $('<li class="">');
		addressli2span1 = $('<span class="bill_details_lft">Address 2</span>');
		addressli2span2 = $('<span class="bill_details_rht"><input name="deliveryaddress2" id="deliveryaddress2" type="text" value="'+ daddress2bk +'" /></span>');
		addressli2.append(addressli2span1);
		addressli2.append(addressli2span2);
		addressli2span2.data = 'deliveryaddress2';
		
		cityli = $('<li class="">');
		labelcity = $('<label  id="deliverycity_err_div">');
		citylispan1 = $('<span class="bill_details_lft">City *</span>');
		citylispan2 = $('<span class="bill_details_rht" ><input name="deliverycity" id="deliverycity" type="text" value="'+ dcitybk +'" /><br><span id="deliverycity_err"></span></span>');
		labelcity.append(citylispan1);
		labelcity.append(citylispan2);
		cityli.append(labelcity);
		citylispan2.data = 'deliverycity';
		
		stateli = $('<li class="">');
		labelstateli = $('<label  id="deliverystate_err_div">');
		statelispan1 = $('<span class="bill_details_lft">State/Province *</span>');
		statelispan2 = $('<span class="bill_details_rht" ><input name="deliverystate" id="deliverystate" type="text" value="'+ dstatebk +'" /><br><span id="deliverystate_err"></span></span>');
		labelstateli.append(statelispan1);
		labelstateli.append(statelispan2);
		stateli.append(labelstateli);
		statelispan2.data = 'deliverystate';
		
		countryli = $('<li class="">');
		countrylispan1 = $('<span class="bill_details_lft">Country *</span>');  
		countryArray = [ "USA", "India", "Australia", "Canada", "Bangladesh" ];	
		
		countryselect = $('<select name="deliverycountry" id="deliverycountry">');
		for(i= 0; i < countryArray.length; i++) {
			countryvalue1 = $('<option value="'+ countryArray[i] +'" '+selected+'>'+ countryArray[i] +'</option>');
			countryselect.append(countryvalue1);
		}
		countryli.append(countrylispan1);
		countryli.append(countryselect);
		countryselect.data = 'deliverycountry';
		
		postcodeli = $('<li class="">');
		labelpostcode = $('<label  id="deliverypostcode_err_div">');
		postcodelispan1 = $('<span class="bill_details_lft">Postcode *</span>');
		postcodelispan2 = $('<span class="bill_details_rht" ><input name="deliverypostcode" id="deliverypostcode"  type="text"  value="'+ dpostcodebk +'" /><br><span id="deliverypostcode_err"></span></span>');
		labelpostcode.append(postcodelispan1);
		labelpostcode.append(postcodelispan2);
		postcodeli.append(labelpostcode);
		postcodelispan2.data = 'deliverypostcode';

		phonenumberli = $('<li class="">');
		labelphonenumber = $('<label  id="deliveryphonenumber_err_div">');
		phonenumberlispan1 = $('<span class="bill_details_lft">Phone Number *</span>');
		phonenumberlispan2 = $('<span class="bill_details_rht" ><input name="deliveryphonenumber" id="deliveryphonenumber" type="text" value="'+ dphonenumberbk +'" /><br><span id="deliveryphonenumber_err"></span></span>');
		labelphonenumber.append(phonenumberlispan1);
		labelphonenumber.append(phonenumberlispan2);
		phonenumberli.append(labelphonenumber);
		phonenumberlispan2.data = 'deliveryphonenumber';

		
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
		
		billinginfo = $('<div class="checkout_tab"><a href="#">billing Information</a></div>');

		billinginfodetails = $('<div class="bill_div" id="checkoutblock_3" style="display:none;">');
		billinginfolabel= $('<div class="bill_head">Enter your billing address and information here</div>');				
		billaddressblock = $('<div class="bill_text_div">');
		billinginfosame= $('<div class="bill_text">My billing information is the same as my delivery information</div>');
		billcheckbox = $('<input type="checkbox" id="checkaddress" name="checkaddress">');           
		
		
		billaddressblocksub = $('<div class="bill_details">');
		billaddressblocksubul = $('<ul>');
		
		billfirstnameli = $('<li class="">');
		label_billfirstname = $('<label  id="billingfirstname_err_div">');
		billfirstnamespan1 = $('<span class="bill_details_lft">First name *</span>');
		billfirstnamespan2 = $('<span class="bill_details_rht" ><input name="billingfirstname" id="billingfirstname" type="text" value="'+ bfirstNamebk +'" /><br><span id="billingfirstname_err"></span></span');
		label_billfirstname.append(billfirstnamespan1);
		label_billfirstname.append(billfirstnamespan2);
		billfirstnameli.append(label_billfirstname);
		
		billfirstnamespan2.data = 'billingfirstname';
		
		billlastnameli = $('<li>');
		billlastnamelispan1 = $('<span class="bill_details_lft">Last name</span>');
		billlastnamelispan2 = $('<span class="bill_details_rht"><input name="billinglastname" id="billinglastname" type="text" value="'+ blastNamebk +'" /></span>');
		billlastnameli.append(billlastnamelispan1);
		billlastnameli.append(billlastnamelispan2);
		
		billlastnamelispan2.data = 'billinglastname';
		
		billcompanyli = $('<li >');
		billcompanylispan1 = $('<span class="bill_details_lft">Company</span>');
		billcompanylispan2 = $('<span class="bill_details_rht"><input name="billingcompany" id="billingcompany" type="text" value="'+ bcompanybk +'" /></span>');
		billcompanyli.append(billcompanylispan1);
		billcompanyli.append(billcompanylispan2);
		billcompanylispan2.data = 'billingcompany';
		
		billaddressli1 = $('<li class="">');
		label_billaddress1 = $('<label  id="billingaddress1_err_div">');
		billaddressli1span1 = $('<span class="bill_details_lft">Address 1 *</span>');
		billaddressli1span2 = $('<span class="bill_details_rht" ><input name="billingaddress1" id="billingaddress1" type="text" value="'+ baddress1bk +'" /><br><span id="billingaddress1_err"></span></span');
		label_billaddress1.append(billaddressli1span1);
		label_billaddress1.append(billaddressli1span2);
		billaddressli1.append(label_billaddress1);
		billaddressli1span2.data = 'billingaddress1';
		
		billaddressli2 = $('<li>');
		billaddressli2span1 = $('<span class="bill_details_lft">Address 2</span>');
		billaddressli2span2 = $('<span class="bill_details_rht"><input name="billingaddress2" id="billingaddress2" type="text" value="'+ baddress2bk +'" /></span>');
		billaddressli2.append(billaddressli2span1);
		billaddressli2.append(billaddressli2span2);
		billaddressli2span2.data = 'billingaddress2';
		
		billcityli = $('<li>');
		label_billcity = $('<label id="billingcity_err_div">');
		billcitylispan1 = $('<span class="bill_details_lft">City *</span>');
		billcitylispan2 = $('<span class="bill_details_rht" ><input name="billingcity" id="billingcity" type="text" value="'+ bcitybk +'" /><br><span id="billingcity_err"></span></span>');
		label_billcity.append(billcitylispan1);
		label_billcity.append(billcitylispan2);
		billcityli.append(label_billcity);
		billcitylispan2.data = 'billingcity';

		billstateli = $('<li>');
		label_billstate = $('<label id="billingstate_err_div">');
		billstatelispan1 = $('<span class="bill_details_lft">State/Province *</span>');                                      
		billstatelispan2 = $('<span class="bill_details_rht"><input type="text" name="billingstate" id="billingstate" value="'+ bstatebk +'" ><br><span id="billingstate_err"></span></span>');
		label_billstate.append(billstatelispan1);
		label_billstate.append(billstatelispan2);
		billstateli.append(label_billstate);
		billstatelispan2.data = 'billingstate';
		
		billcountryli = $('<li class="">');
		billcountrylispan1 = $('<span class="bill_details_lft">Country *</span>');  
		bcountryArray = [ "USA", "India", "Australia", "Canada", "Bangladesh" ];	
		
		bcountryselect = $('<select name="billingcountry" id="billingcountry">');
		
		for(i= 0; i < bcountryArray.length; i++) {
			bcountryvalue1 = $('<option value="'+ bcountryArray[i] +'" '+ bselected +'>'+ bcountryArray[i] +'</option>');
			bcountryselect.append(bcountryvalue1);
		}

		billcountryli.append(billcountrylispan1);
		billcountryli.append(bcountryselect);
		bcountryselect.data = 'billingcountry';
		
		billpostcodeli = $('<li>');
		label_billpost = $('<label id="billingpostcode_err_div">');
		billpostcodelispan1 = $('<span class="bill_details_lft">Postcode *</span>');
		billpostcodelispan2 = $('<span class="bill_details_rht" ><input name="billingpostcode" id="billingpostcode" type="text" value="'+ bpostcodebk +'" /><br><span id="billingpostcode_err"></span></span>');
		label_billpost.append(billpostcodelispan1);
		label_billpost.append(billpostcodelispan2);
		billpostcodeli.append(label_billpost);
		billpostcodelispan2.data = 'billingpostcode';

		billphonenumberli = $('<li>');
		label_billphone = $('<label id="billingphonenumber_err_div">');
		billphonenumberlispan1 = $('<span class="bill_details_lft">Phone Number *</span>');
		billphonenumberlispan2 = $('<span class="bill_details_rht" ><input name="billingphonenumber" id="billingphonenumber" type="text" value="'+ bphonenumberbk +'" /><br><span id="billingphonenumber_err"></span></span>');
		label_billphone.append(billphonenumberlispan1);
		label_billphone.append(billphonenumberlispan2);
		billphonenumberli.append(label_billphone);
		billphonenumberlispan2.data = 'billingphonenumber';

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
		billaddressblock.append(billinginfosame);
		billaddressblock.append(billcheckbox);
		billaddressblock.append(billaddressblocksub);				
		billinginfodetails.append(billinginfolabel);
		billinginfodetails.append(billaddressblock);
		
		paymentmethod = $('<div class="checkout_tab"><a href="#">Payment Methods</a></div>');
		
		selectpayment = $('<div class="bill_div" id="checkoutblock_4" style="display:none;">');
		selectpaymentlabel = $('<div class="comments_text">Select a payment method from the following options</div>');
		method = $('<div class="methods_div">');
		methodul = $('<ul>');  
		methodli1 = $('<li><span class="radio"><input name="payment" type="radio" value="" /></span><span class="method_text">Cheque or money order</span></li>');
		methodli2 = $('<li><span class="radio"><input name="payment" type="radio" value="" checked="checked" /></span><span class="method_text">Cash on delivery</span></li>');                             
		methodul.append(methodli1);
		methodul.append(methodli2);            
		method.append(methodul);                      
		 
		subtotal = $('<div class="prod_check_div">');
		subtotalspan1 = $('<span class="prod_check_lft">Total Items</span>');
		subtotalspan2 = $('<span class="prod_check_rht1">'+ pricequantity.itemCount +'</span>');
		subtotalspan3 = $('<span class="prod_check_mid">:</span>');
		subtotal.append(subtotalspan1);
		subtotal.append(subtotalspan2);
		subtotal.append(subtotalspan3);
		
		ordertotal = $('<div class="prod_check_div">');
		ordertotalspan1 = $('<span class="prod_check_lft">ordertotal</span>');
		ordertotalspan2 = $('<span class="prod_check_rht1">'+  pricequantity.totalPrice +'</span>');
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
		
		ordercmdblock = $('<div class="bill_div" id="checkoutblock_5" style="display:none;">'); 
		
		commnettext = $('<div class="comments_text">Use this area for special instructions or question regards your order</div>'); 
		commnethead = $('<div class="comments_head">Order Comments</div>');
		commentbox = $('<div class="com_commentbox"><textarea name="comments" id="comments" cols="" rows="" value="'+ commentsbk +'" ></textarea></div>');
		ordercmdblock.append(commnettext);
		ordercmdblock.append(commnethead);
		ordercmdblock.append(commentbox);
		commentbox.data = 'comments';
		
		buttons = $('<div class="checkout_btn">');
		buttonblock = $('<div class="mycart_btn_mid">');
		revieworder = $('<div class="mycart_mid_bu" id="revieworder"><a href="#">Review Order</a></div>');
		revieworder.obj = this;
		cancel = $('<div class="mycart_mid_bu"><a href="#">Cancel</a></div>');    
		buttonblock.append(revieworder);
		buttonblock.append(cancel);                  
		clear = $('<div style="clear:both"></div>');
		buttons.append(buttonblock); 
		buttons.append(clear); 
		mycart.append(mycart_head);        
		mycart.append(checkout_tab);       
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
		
		notEqual(output1.html(),output2.html(), "Failure - User Details cannot be left empty");
	});
	
	test("Testing order form with Special Characters in User Details", function() {
	
		var orderForm, phrescoapi, output1, totalItemprice, item, amount, output2, orderDetail = {}, pricequantity = {}, orderDetail1 = {}, 
		emailbk, dfirstNamebk, dlastNamebk, dcompanybk, daddress1bk, daddress2bk, dcitybk, dstatebk, dcountrybk, 
		dpostcodebk, dphonenumberbk, bfirstNamebk, blastNamebk, bcompanybk, baddress1bk, baddress2bk, bcitybk, bstatebk, commentsbk, 
		topH3, bcountrybk, bpostcodebk, bphonenumberbk, productcontainer, form, h5, fieldholder1, fieldset, billh5, fieldholder2, firstname, lastname, 
		company, address1, address2, city, state, country, postcode, phonenumber, fieldholder3, 
		fieldsetpaymentoption, h6, paymentpos, visacard1, visacard2, visacard3, carddetails, fieldsetpayment, 
		payment1, payment2, payment3, pricetag, priceblock, pricecount, subtotal, ordertotal, hint, ordercomments, 
		fieldholder4, textarea, buttons, button1, button2, productContainer,
		self, mainContent, mycart, checkout_tab, emailblock, emailblocksub, emailblocksubul, emailblocksubLi1, emailblocksubLi2, labelemail, emailblocksubspan1, emailblocksubspan2, deliveryinfo, deliveryinfodetails, deliveryinfolabel, addressblock, addressblocksub, addressblocksubul, firstnameli, labelfirstname, firstnamespan1, firstnamespan2, lastnameli, lastnamelispan1, lastnamelispan2, companyli, companylispan1, companylispan2, addressli1, labeladdress1, addressli1span1, addressli1span2, addressli2, addressli2span1, addressli2span2, cityli, labelcity, citylispan1, citylispan2, stateli, labelstateli, statelispan1, 
		statelispan2, countryli, countrylispan1, countryArray, countryselect, selected, countryvalue1, postcodeli, labelpostcode, postcodelispan1, postcodelispan2, phonenumberli, labelphonenumber, phonenumberlispan1, phonenumberlispan2, billinginfo, billinginfodetails, billinginfolabel, billaddressblock, billinginfosame, billcheckbox, billaddressblocksub, billaddressblocksubul, billfirstnameli, label_billfirstname, billfirstnamespan1, billfirstnamespan2, billlastnameli, billlastnamelispan1, billlastnamelispan2, billcompanyli, billcompanylispan1, billcompanylispan2, billaddressli1, label_billaddress1, billaddressli1span1, billaddressli1span2, billaddressli2, billaddressli2span1, billaddressli2span2, billcityli, label_billcity, billcitylispan1, billcitylispan2, billstateli, label_billstate, billstatelispan1, billstatelispan2, billcountryli, billcountrylispan1, bcountryArray, bcountryselect, bselected, bcountryvalue1, billpostcodeli, label_billpost, billpostcodelispan1, billpostcodelispan2, billphonenumberli, label_billphone, billphonenumberlispan1, billphonenumberlispan2, paymentmethod, selectpayment, 
		selectpaymentlabel, method, methodul, methodli1, methodli2, subtotalspan1, subtotalspan2, 
		subtotalspan3, ordertotalspan1, ordertotalspan2, ordertotalspan3, comments, mycart_head, i,
		ordercmdblock, buttonblock, revieworder, cancel, apiRef, validated, clear, totalItem, cartTotal, 
		commnettext, commnethead, commentbox;
		
		orderForm = new OrderForm();
		phrescoapi = new Phresco();
		orderForm.phrescoapi = phrescoapi;
		
		orderDetail = {email:"oaibr@ymail.com", deliveryfirstname:"Mohd", deliverylastname:"Ibrahim", deliverycompany:"DHL", deliveryaddress1:"Chennai", deliveryaddress2:"Chennai", deliverycity:"Chennai", deliverystate:"Tamilnadu", deliverycountry:"India", deliverypostcode:627811, deliveryphonenumber:11111, billingfirstname:"Mohd", billinglastname:"Ibr", billingcompany:"DHL", billingaddress1:"chn", billingaddress2:"chn", billingcity:"TSI", billingstate:"TN", billingcountry:"IND", billingpostcode:111, billingphonenumber:111, comments:"comments"};
		
		pricequantity = { itemCount:1, totalPrice:600 };
		
		orderForm.phrescoapi.orderDetail = orderDetail;
		orderForm.phrescoapi.pricequantity = pricequantity;
		output1 = orderForm.testRenderUI();
		
		orderDetail1 = {email:"oabr@ymail.com", deliveryfirstname:"suresh@@@", deliverylastname:"kumar__@",deliverycompany:"DHL@@@@", deliveryaddress1:"Chennai@@@@", deliveryaddress2:"Chennai///", deliverycity:"Chenni....", deliverystate:"Tamilnadu@@@@", deliverycountry:"India@@@@@@", deliverypostcode:627811, deliveryphonenumber:1111, billingfirstname:"Mhd", billinglastname:"Ir", billingcompany:"DHL", billingaddress1:"chn", billingaddress2:"chn", billingcity:"TSI", billingstate:"TN", billingcountry:"IND", billingpostcode:111, billingphonenumber:111, comments:"comments"};
		
		pricequantity = { itemCount:1, totalPrice:600 };
		
		if(!$.isEmptyObject(orderDetail1)){
			
			emailbk = orderDetail1.email;
			dfirstNamebk = orderDetail1.deliveryfirstname;
			dlastNamebk  =  orderDetail1.deliverylastname;
			dcompanybk =  orderDetail1.deliverycompany;
			daddress1bk =  orderDetail1.deliveryaddress1;
			daddress2bk =  orderDetail1.deliveryaddress2;
			dcitybk =  orderDetail1.deliverycity;
			dstatebk =  orderDetail1.deliverystate;
			dcountrybk =  orderDetail1.deliverycountry;
			dpostcodebk =  orderDetail1.deliverypostcode;
			dphonenumberbk =  orderDetail1.deliveryphonenumber;
			
			bfirstNamebk = orderDetail1.billingfirstname;
			blastNamebk  =  orderDetail1.billinglastname;
			bcompanybk =  orderDetail1.billingcompany;
			baddress1bk =  orderDetail1.billingaddress1;
			baddress2bk =  orderDetail1.billingaddress2;
			bcitybk =  orderDetail1.billingcity;
			bstatebk =  orderDetail1.billingstate;
			bcountrybk =  orderDetail1.billingcountry;
			bpostcodebk =  orderDetail1.billingpostcode;
			bphonenumberbk =  orderDetail1.billingphonenumber;
			commentsbk =  orderDetail1.comments;
		}
		
		emailbk = (emailbk !== undefined)?orderDetail1.email : "";
		dfirstNamebk = (dfirstNamebk !== undefined)?orderDetail1.deliveryfirstname : "";
		dlastNamebk = (dlastNamebk !== undefined)?orderDetail1.deliverylastname : "";
		dcompanybk = (dcompanybk !== undefined)?orderDetail1.deliverycompany : "";
		daddress1bk = (daddress1bk !== undefined)?orderDetail1.deliveryaddress1 : "";
		daddress2bk = (daddress2bk !== undefined)?orderDetail1.deliveryaddress2 : "";
		dcitybk = (dcitybk !== undefined)?orderDetail1.deliverycity : "";
		dstatebk = (dstatebk !== undefined)?orderDetail1.deliverystate : "";
		dcountrybk = (dcountrybk !== undefined)?orderDetail1.deliverycountry : "";
		dpostcodebk = (dpostcodebk !== undefined)?orderDetail1.deliverypostcode : "";
		dphonenumberbk = (dphonenumberbk !== undefined)?orderDetail1.deliveryphonenumber : "";
		
		bfirstNamebk = (bfirstNamebk !== undefined)?orderDetail1.billingfirstname : "";
		blastNamebk = (blastNamebk !== undefined)?orderDetail1.billinglastname : "";
		bcompanybk = (bcompanybk !== undefined)?orderDetail1.billingcompany : "";
		baddress1bk = (baddress1bk !== undefined)?orderDetail1.billingaddress1 : "";
		baddress2bk = (baddress2bk !== undefined)?orderDetail1.billingaddress2 : "";
		bcitybk = (bcitybk !== undefined)?orderDetail1.billingcity : "";
		bstatebk = (bstatebk !== undefined)?orderDetail1.billingstate : "";
		bcountrybk = (bcountrybk !== undefined)?orderDetail1.billingcountry : "";
		bpostcodebk = (bpostcodebk !== undefined)?orderDetail1.billingpostcode : "";
		bphonenumberbk = (bphonenumberbk !== undefined)?orderDetail1.billingphonenumber : "";
		commentsbk = (commentsbk !== undefined)?orderDetail1.comments : "";

		totalItemprice = {};
		totalItemprice.item = pricequantity.itemCount;
		totalItemprice.amount = pricequantity.totalPrice;
		
		mainContent = $('<div></div>');
		mycart = $('<div class="mycart_div" >');
		mycart_head = $('<div class="mycart_head">Checkout</div>');
		checkout_tab = $('<div class="checkout_tab"><a href="#">Customer Information</a></div>');

		emailblock = $('<div class="bill_div"  id="checkoutblock_1" style="display:block;">');
		emailblocksub = $('<div class="checkout_2_txt">');
		emailblocksubul = $('<ul>');
		emailblocksubLi1 = $('<li>Order Information will be sent to your A/C email list below.</li>');
		emailblocksubLi2 = $('<li class="bld">');
		labelemail = $('<label id="email_err_div">');
		emailblocksubspan1 = $('<span class="bill_details_lft">Email address *</span>');
		emailblocksubspan2 = $('<span class="bill_details_rht" id="email_err_div"><input name="email" id="email" type="text" autofocus="autofocus" value="'+ emailbk +'" /><br><span id="email_err" class="errtext"></span></span>');
		emailblocksubspan2.data = 'email';
		labelemail.append(emailblocksubspan1);
		labelemail.append(emailblocksubspan2);
		emailblocksubLi2.append(labelemail);
		emailblocksubul.append(emailblocksubLi1);  
		emailblocksubul.append(emailblocksubLi2);              
		emailblocksub.append(emailblocksubul);
		emailblock.append(emailblocksub);  

		deliveryinfo = $('<div class="checkout_tab"><a href="#">Delivery Information</a></div>');
	   
		deliveryinfodetails = $('<div class="bill_div"  id="checkoutblock_2" style="display:none;">');
		deliveryinfolabel= $('<div class="bill_head">Enter your delivery address and information here</div>');
		addressblock = $('<div class="bill_text_div">');
		addressblocksub = $('<div class="bill_details">');
		addressblocksubul = $('<ul>');
		
		firstnameli = $('<li class="">');
		labelfirstname = $('<label  id="deliveryfirstname_err_div">');
		firstnamespan1 = $('<span class="bill_details_lft">First name *</span>');
		firstnamespan2 = $('<span class="bill_details_rht"><input name="deliveryfirstName" id="deliveryfirstname" type="text" value="'+ dfirstNamebk +'"  /><br><span id="deliveryfirstname_err" class="errtext"></span></span>');
		firstnamespan2.data = 'deliveryfirstname';
		
		labelfirstname.append(firstnamespan1);
		labelfirstname.append(firstnamespan2);
		firstnameli.append(labelfirstname);
		
		lastnameli = $('<li class="">');				
		lastnamelispan1 = $('<span class="bill_details_lft">Last name</span>');
		lastnamelispan2 = $('<span class="bill_details_rht"><input name="deliverylastname" id="deliverylastname" type="text" value="'+ dlastNamebk +'" /></span>');
		lastnameli.append(lastnamelispan1);
		lastnameli.append(lastnamelispan2);
		
		lastnamelispan2.data = 'deliverylastname';
		
		companyli = $('<li class="">');
		companylispan1 = $('<span class="bill_details_lft">Company</span>');
		companylispan2 = $('<span class="bill_details_rht"><input name="deliverycompany" id="deliverycompany" type="text" value="'+ dcompanybk +'" /></span>');
		companyli.append(companylispan1);
		companyli.append(companylispan2);
		companylispan2.data = 'deliverycompany';
		
		addressli1 = $('<li class="">');
		labeladdress1 = $('<label  id="deliveryaddress1_err_div">');
		addressli1span1 = $('<span class="bill_details_lft">Address 1 *</span>');
		addressli1span2 = $('<span class="bill_details_rht" ><input name="deliveryaddress1" id="deliveryaddress1" type="text" value="'+ daddress1bk +'" /><br><span id="deliveryaddress1_err"></span></span>');
		labeladdress1.append(addressli1span1);
		labeladdress1.append(addressli1span2);
		addressli1.append(labeladdress1);
		addressli1span2.data = 'deliveryaddress1';
		
		addressli2 = $('<li class="">');
		addressli2span1 = $('<span class="bill_details_lft">Address 2</span>');
		addressli2span2 = $('<span class="bill_details_rht"><input name="deliveryaddress2" id="deliveryaddress2" type="text" value="'+ daddress2bk +'" /></span>');
		addressli2.append(addressli2span1);
		addressli2.append(addressli2span2);
		addressli2span2.data = 'deliveryaddress2';
		
		cityli = $('<li class="">');
		labelcity = $('<label  id="deliverycity_err_div">');
		citylispan1 = $('<span class="bill_details_lft">City *</span>');
		citylispan2 = $('<span class="bill_details_rht" ><input name="deliverycity" id="deliverycity" type="text" value="'+ dcitybk +'" /><br><span id="deliverycity_err"></span></span>');
		labelcity.append(citylispan1);
		labelcity.append(citylispan2);
		cityli.append(labelcity);
		citylispan2.data = 'deliverycity';
		
		stateli = $('<li class="">');
		labelstateli = $('<label  id="deliverystate_err_div">');
		statelispan1 = $('<span class="bill_details_lft">State/Province *</span>');
		statelispan2 = $('<span class="bill_details_rht" ><input name="deliverystate" id="deliverystate" type="text" value="'+ dstatebk +'" /><br><span id="deliverystate_err"></span></span>');
		labelstateli.append(statelispan1);
		labelstateli.append(statelispan2);
		stateli.append(labelstateli);
		statelispan2.data = 'deliverystate';
		
		countryli = $('<li class="">');
		countrylispan1 = $('<span class="bill_details_lft">Country *</span>');  
		countryArray = [ "USA", "India", "Australia", "Canada", "Bangladesh" ];	
		
		countryselect = $('<select name="deliverycountry" id="deliverycountry">');
		for(i= 0; i < countryArray.length; i++) {
			countryvalue1 = $('<option value="'+ countryArray[i] +'" '+selected+'>'+ countryArray[i] +'</option>');
			countryselect.append(countryvalue1);
		}
		countryli.append(countrylispan1);
		countryli.append(countryselect);
		countryselect.data = 'deliverycountry';
		
		postcodeli = $('<li class="">');
		labelpostcode = $('<label  id="deliverypostcode_err_div">');
		postcodelispan1 = $('<span class="bill_details_lft">Postcode *</span>');
		postcodelispan2 = $('<span class="bill_details_rht" ><input name="deliverypostcode" id="deliverypostcode"  type="text"  value="'+ dpostcodebk +'" /><br><span id="deliverypostcode_err"></span></span>');
		labelpostcode.append(postcodelispan1);
		labelpostcode.append(postcodelispan2);
		postcodeli.append(labelpostcode);
		postcodelispan2.data = 'deliverypostcode';

		phonenumberli = $('<li class="">');
		labelphonenumber = $('<label  id="deliveryphonenumber_err_div">');
		phonenumberlispan1 = $('<span class="bill_details_lft">Phone Number *</span>');
		phonenumberlispan2 = $('<span class="bill_details_rht" ><input name="deliveryphonenumber" id="deliveryphonenumber" type="text" value="'+ dphonenumberbk +'" /><br><span id="deliveryphonenumber_err"></span></span>');
		labelphonenumber.append(phonenumberlispan1);
		labelphonenumber.append(phonenumberlispan2);
		phonenumberli.append(labelphonenumber);
		phonenumberlispan2.data = 'deliveryphonenumber';

		
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
		
		billinginfo = $('<div class="checkout_tab"><a href="#">billing Information</a></div>');

		billinginfodetails = $('<div class="bill_div" id="checkoutblock_3" style="display:none;">');
		billinginfolabel= $('<div class="bill_head">Enter your billing address and information here</div>');				
		billaddressblock = $('<div class="bill_text_div">');
		billinginfosame= $('<div class="bill_text">My billing information is the same as my delivery information</div>');
		billcheckbox = $('<input type="checkbox" id="checkaddress" name="checkaddress">');           
		
		
		billaddressblocksub = $('<div class="bill_details">');
		billaddressblocksubul = $('<ul>');
		
		billfirstnameli = $('<li class="">');
		label_billfirstname = $('<label  id="billingfirstname_err_div">');
		billfirstnamespan1 = $('<span class="bill_details_lft">First name *</span>');
		billfirstnamespan2 = $('<span class="bill_details_rht" ><input name="billingfirstname" id="billingfirstname" type="text" value="'+ bfirstNamebk +'" /><br><span id="billingfirstname_err"></span></span');
		label_billfirstname.append(billfirstnamespan1);
		label_billfirstname.append(billfirstnamespan2);
		billfirstnameli.append(label_billfirstname);
		
		billfirstnamespan2.data = 'billingfirstname';
		
		billlastnameli = $('<li>');
		billlastnamelispan1 = $('<span class="bill_details_lft">Last name</span>');
		billlastnamelispan2 = $('<span class="bill_details_rht"><input name="billinglastname" id="billinglastname" type="text" value="'+ blastNamebk +'" /></span>');
		billlastnameli.append(billlastnamelispan1);
		billlastnameli.append(billlastnamelispan2);
		
		billlastnamelispan2.data = 'billinglastname';
		
		billcompanyli = $('<li >');
		billcompanylispan1 = $('<span class="bill_details_lft">Company</span>');
		billcompanylispan2 = $('<span class="bill_details_rht"><input name="billingcompany" id="billingcompany" type="text" value="'+ bcompanybk +'" /></span>');
		billcompanyli.append(billcompanylispan1);
		billcompanyli.append(billcompanylispan2);
		billcompanylispan2.data = 'billingcompany';
		
		billaddressli1 = $('<li class="">');
		label_billaddress1 = $('<label  id="billingaddress1_err_div">');
		billaddressli1span1 = $('<span class="bill_details_lft">Address 1 *</span>');
		billaddressli1span2 = $('<span class="bill_details_rht" ><input name="billingaddress1" id="billingaddress1" type="text" value="'+ baddress1bk +'" /><br><span id="billingaddress1_err"></span></span');
		label_billaddress1.append(billaddressli1span1);
		label_billaddress1.append(billaddressli1span2);
		billaddressli1.append(label_billaddress1);
		billaddressli1span2.data = 'billingaddress1';
		
		billaddressli2 = $('<li>');
		billaddressli2span1 = $('<span class="bill_details_lft">Address 2</span>');
		billaddressli2span2 = $('<span class="bill_details_rht"><input name="billingaddress2" id="billingaddress2" type="text" value="'+ baddress2bk +'" /></span>');
		billaddressli2.append(billaddressli2span1);
		billaddressli2.append(billaddressli2span2);
		billaddressli2span2.data = 'billingaddress2';
		
		billcityli = $('<li>');
		label_billcity = $('<label id="billingcity_err_div">');
		billcitylispan1 = $('<span class="bill_details_lft">City *</span>');
		billcitylispan2 = $('<span class="bill_details_rht" ><input name="billingcity" id="billingcity" type="text" value="'+ bcitybk +'" /><br><span id="billingcity_err"></span></span>');
		label_billcity.append(billcitylispan1);
		label_billcity.append(billcitylispan2);
		billcityli.append(label_billcity);
		billcitylispan2.data = 'billingcity';

		billstateli = $('<li>');
		label_billstate = $('<label id="billingstate_err_div">');
		billstatelispan1 = $('<span class="bill_details_lft">State/Province *</span>');                                      
		billstatelispan2 = $('<span class="bill_details_rht"><input type="text" name="billingstate" id="billingstate" value="'+ bstatebk +'" ><br><span id="billingstate_err"></span></span>');
		label_billstate.append(billstatelispan1);
		label_billstate.append(billstatelispan2);
		billstateli.append(label_billstate);
		billstatelispan2.data = 'billingstate';
		
		billcountryli = $('<li class="">');
		billcountrylispan1 = $('<span class="bill_details_lft">Country *</span>');  
		bcountryArray = [ "USA", "India", "Australia", "Canada", "Bangladesh" ];	
		
		bcountryselect = $('<select name="billingcountry" id="billingcountry">');
		
		for(i= 0; i < bcountryArray.length; i++) {
			bcountryvalue1 = $('<option value="'+ bcountryArray[i] +'" '+ bselected +'>'+ bcountryArray[i] +'</option>');
			bcountryselect.append(bcountryvalue1);
		}

		billcountryli.append(billcountrylispan1);
		billcountryli.append(bcountryselect);
		bcountryselect.data = 'billingcountry';
		
		billpostcodeli = $('<li>');
		label_billpost = $('<label id="billingpostcode_err_div">');
		billpostcodelispan1 = $('<span class="bill_details_lft">Postcode *</span>');
		billpostcodelispan2 = $('<span class="bill_details_rht" ><input name="billingpostcode" id="billingpostcode" type="text" value="'+ bpostcodebk +'" /><br><span id="billingpostcode_err"></span></span>');
		label_billpost.append(billpostcodelispan1);
		label_billpost.append(billpostcodelispan2);
		billpostcodeli.append(label_billpost);
		billpostcodelispan2.data = 'billingpostcode';

		billphonenumberli = $('<li>');
		label_billphone = $('<label id="billingphonenumber_err_div">');
		billphonenumberlispan1 = $('<span class="bill_details_lft">Phone Number *</span>');
		billphonenumberlispan2 = $('<span class="bill_details_rht" ><input name="billingphonenumber" id="billingphonenumber" type="text" value="'+ bphonenumberbk +'" /><br><span id="billingphonenumber_err"></span></span>');
		label_billphone.append(billphonenumberlispan1);
		label_billphone.append(billphonenumberlispan2);
		billphonenumberli.append(label_billphone);
		billphonenumberlispan2.data = 'billingphonenumber';

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
		billaddressblock.append(billinginfosame);
		billaddressblock.append(billcheckbox);
		billaddressblock.append(billaddressblocksub);				
		billinginfodetails.append(billinginfolabel);
		billinginfodetails.append(billaddressblock);
		
		paymentmethod = $('<div class="checkout_tab"><a href="#">Payment Methods</a></div>');
		
		selectpayment = $('<div class="bill_div" id="checkoutblock_4" style="display:none;">');
		selectpaymentlabel = $('<div class="comments_text">Select a payment method from the following options</div>');
		method = $('<div class="methods_div">');
		methodul = $('<ul>');  
		methodli1 = $('<li><span class="radio"><input name="payment" type="radio" value="" /></span><span class="method_text">Cheque or money order</span></li>');
		methodli2 = $('<li><span class="radio"><input name="payment" type="radio" value="" checked="checked" /></span><span class="method_text">Cash on delivery</span></li>');                             
		methodul.append(methodli1);
		methodul.append(methodli2);            
		method.append(methodul);                      
		 
		subtotal = $('<div class="prod_check_div">');
		subtotalspan1 = $('<span class="prod_check_lft">Total Items</span>');
		subtotalspan2 = $('<span class="prod_check_rht1">'+ pricequantity.itemCount +'</span>');
		subtotalspan3 = $('<span class="prod_check_mid">:</span>');
		subtotal.append(subtotalspan1);
		subtotal.append(subtotalspan2);
		subtotal.append(subtotalspan3);
		
		ordertotal = $('<div class="prod_check_div">');
		ordertotalspan1 = $('<span class="prod_check_lft">ordertotal</span>');
		ordertotalspan2 = $('<span class="prod_check_rht1">'+  pricequantity.totalPrice +'</span>');
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
		
		ordercmdblock = $('<div class="bill_div" id="checkoutblock_5" style="display:none;">'); 
		
		commnettext = $('<div class="comments_text">Use this area for special instructions or question regards your order</div>'); 
		commnethead = $('<div class="comments_head">Order Comments</div>');
		commentbox = $('<div class="com_commentbox"><textarea name="comments" id="comments" cols="" rows="" value="'+ commentsbk +'" ></textarea></div>');
		ordercmdblock.append(commnettext);
		ordercmdblock.append(commnethead);
		ordercmdblock.append(commentbox);
		commentbox.data = 'comments';
		
		buttons = $('<div class="checkout_btn">');
		buttonblock = $('<div class="mycart_btn_mid">');
		revieworder = $('<div class="mycart_mid_bu" id="revieworder"><a href="#">Review Order</a></div>');
		revieworder.obj = this;
		cancel = $('<div class="mycart_mid_bu"><a href="#">Cancel</a></div>');    
		buttonblock.append(revieworder);
		buttonblock.append(cancel);                  
		clear = $('<div style="clear:both"></div>');
		buttons.append(buttonblock); 
		buttons.append(clear); 
		mycart.append(mycart_head);        
		mycart.append(checkout_tab);       
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
		
		notEqual(output1.html(),output2.html(), "Failure - Enter only characters in user details");
	});
});