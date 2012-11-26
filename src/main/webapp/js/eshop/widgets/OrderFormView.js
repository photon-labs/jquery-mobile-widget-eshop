/*global define, $, window */

define( "eshop/widgets/OrderFormView", [ "jquery", "framework/Clazz", "framework/Widget" ], function($, Clazz, Widget) {

        function OrderFormView() {
        }

        OrderFormView.prototype = new Clazz();    
        OrderFormView.prototype = new Widget(); 

        OrderFormView.prototype.mainNode = undefined;
        OrderFormView.prototype.mainContent = undefined;
        OrderFormView.prototype.hideItems = undefined;
        OrderFormView.prototype.listener = undefined;
        OrderFormView.prototype.api = undefined;
        OrderFormView.prototype.phrescoapi = undefined;

        OrderFormView.prototype.initialize = function(container, listener, api, phrescoapi) {
                listener.subscribe("OrderFormView", this, "onHashChange");
				listener.subscribe("ShowOrderFormView",this,"showWidget");
                this.mainNode = container;
                this.hideItems = [];
                this.listener = listener;
                this.api = api;
                this.phrescoapi = phrescoapi;
        };

        OrderFormView.prototype.setMainContent = function() {
                var orderDetail = this.phrescoapi.orderDetail,
                pricequantity = this.phrescoapi.pricequantity, methodul, comments, 
                self = this, mainContent, mycart, mycart_head, customer, emailblock, emailblocksub, emailblocksubul, emailblocksubLi1, emailblocksubLi2,
                emailblocksubspan1, emailblocksubspan2, deliveryinfo, deliveryinfodetails, deliveryinfolabel, addressblock, addressblocksub, addressblocksubul,
                firstnameli, firstnamespan1,  firstnamespan2, lastnameli, lastnamelispan1, lastnamelispan2, companyli, companylispan1, addressli1, addressli1span1,
                addressli1span2, addressli2, addressli2span1, addressli2span2, cityli, citylispan1, citylispan2, stateli, statelispan1, statelispan2,
                countryli, countrylispan1, countrylispan2, postcodeli, postcodelispan1, phonenumberlispan2, billinginfo, billinginfodetails, billinginfolabel,
                billaddressblock, billaddressblocksub, billaddressblocksubul, billfirstnameli, billfirstnamespan1, billfirstnamespan2, billlastnameli, billlastnamelispan1,
                billlastnamelispan2, billcompanyli, billcompanylispan1, billcompanylispan2, billaddressli1, billaddressli1span1, billaddressli1span2, billphonenumberli, billphonenumberlispan1,
                billaddressli2, billaddressli2span1, billaddressli2span2, billcityli, billcitylispan1, billcitylispan2, billstateli, billstatelispan1, billstatelispan2,
                billcountryli, billcountrylispan1, billcountrylispan2, billpostcodeli, billpostcodelispan1, billpostcodelispan2, phonenumberli, phonenumberlispan1,
                billphonenumberlispan2, paymentmethod, selectpayment, selectpaymentlabel, method, methodli1, methodli2, subtotal, subtotalspan1, subtotalspan2, subtotalspan3,
                ordertotal, ordertotalspan1, ordertotalspan2, ordertotalspan3, ordercomments, ordercmdblock, commnettext, commnethead, commentbox, buttons, buttonblock, postcodelispan2,
                revieworder, cancel, clear, i, orderdetailBilling, totalItemprice, orderdetailDelivery, companylispan2;

                orderdetailDelivery = {};
                orderdetailDelivery.firstname = orderDetail.deliveryfirstname;
                orderdetailDelivery.lastname  =  orderDetail.deliverylastname;
                orderdetailDelivery.company =  orderDetail.deliverycompany;
                orderdetailDelivery.address1 =  orderDetail.deliveryaddress1;
                orderdetailDelivery.address2 =  orderDetail.deliveryaddress2;
                orderdetailDelivery.city = orderDetail.deliverycity;
                orderdetailDelivery.state =  orderDetail.deliverystate;
                orderdetailDelivery.country =  orderDetail.deliverycountry;
                orderdetailDelivery.postcode =  orderDetail.deliverypostcode;
                orderdetailDelivery.deliveryphonenumber =  orderDetail.deliveryphonenumber;

                orderdetailBilling = {};
                orderdetailBilling.firstName = orderDetail.billingfirstname;
                orderdetailBilling.lastName  =  orderDetail.billinglastname;
                orderdetailBilling.company =  orderDetail.billingcompany;
                orderdetailBilling.address1 =  orderDetail.billingaddress1;
                orderdetailBilling.address2 =  orderDetail.billingaddress2;
                orderdetailBilling.city = orderDetail.billingcity;
                orderdetailBilling.state =  orderDetail.billingstate;
                orderdetailBilling.country =  orderDetail.billingcountry;
                orderdetailBilling.postcode =  orderDetail.billingpostcode;
                orderdetailBilling.phonenumber =  orderDetail.billingphonenumber;

                totalItemprice = {};
                totalItemprice.item = pricequantity.itemCount;
                totalItemprice.amount = pricequantity.totalPrice;

                mainContent = $('<div></div>');
                mycart = $('<div class="mycart_div">');
                mycart_head = $('<div class="mycart_head">Checkout</div>');
                customer = $('<div class="checkout_tab"><a href="#">Customer Information</a></div>');
                customer.openDiv = "1";

                $(customer).bind('click', {} , function(event){
                        self.accordionView(customer.openDiv);
                });

                emailblock = $('<div class="bill_div" id="checkout_1" style="display:block;">');
                emailblocksub = $('<div class="checkout_2_txt" >');
                emailblocksubul = $('<ul>');
                emailblocksubLi1 = $('<li>Order Information will be sent to your A/C email list below.</li>');
                emailblocksubLi2 = $('<li class="bld">');
                emailblocksubspan1 = $('<span class="bill_details_lft">Email address</span>');
                emailblocksubspan2 = $('<span class="bill_details_rht">'+ orderDetail.email +'</span>');
                emailblocksubLi2.append(emailblocksubspan1);
                emailblocksubLi2.append(emailblocksubspan2);
                emailblocksubul.append(emailblocksubLi1);  
                emailblocksubul.append(emailblocksubLi2);              
                emailblocksub.append(emailblocksubul);
                emailblock.append(emailblocksub);  

                deliveryinfo = $('<div class="checkout_tab" ><a href="#">Delivery Information</a></div>');
                deliveryinfo.openDiv = "2";


                $(deliveryinfo).bind('click', {} , function(event){
                        self.accordionView(deliveryinfo.openDiv);
                });

                deliveryinfodetails = $('<div class="bill_div" id="checkout_2" style="display:none;">');
                deliveryinfolabel= $('<div class="bill_head">Delivery address and information here</div>');
                addressblock = $('<div class="bill_text_div">');
                addressblocksub = $('<div class="bill_details">');
                addressblocksubul = $('<ul>');

                firstnameli = $('<li>');
                firstnamespan1 = $('<span class="bill_details_lft">First name</span>');
                firstnamespan2 = $('<span class="bill_details_rht">'+ orderDetail.deliveryfirstname +'</span>');
                firstnameli.append(firstnamespan1);
                firstnameli.append(firstnamespan2);

                lastnameli = $('<li>');
                lastnamelispan1 = $('<span class="bill_details_lft">Last name</span>');
                lastnamelispan2 = $('<span class="bill_details_rht">'+ orderDetail.deliverylastname +'</span>');
                lastnameli.append(lastnamelispan1);
                lastnameli.append(lastnamelispan2);

                companyli = $('<li>');
                companylispan1 = $('<span class="bill_details_lft">Company</span>');
                companylispan2 = $('<span class="bill_details_rht">'+ orderDetail.deliverycompany +'</span>');
                companyli.append(companylispan1);
                companyli.append(companylispan2);

                addressli1 = $('<li>');
                addressli1span1 = $('<span class="bill_details_lft">Address 1</span>');
                addressli1span2 = $('<span class="bill_details_rht">'+ orderDetail.deliveryaddress1 +'</span>');
                addressli1.append(addressli1span1);
                addressli1.append(addressli1span2);

                addressli2 = $('<li>');
                addressli2span1 = $('<span class="bill_details_lft">Address 2</span>');
                addressli2span2 = $('<span class="bill_details_rht">'+ orderDetail.deliveryaddress2 +'</span>');
                addressli2.append(addressli2span1);
                addressli2.append(addressli2span2);

                cityli = $('<li>');
                citylispan1 = $('<span class="bill_details_lft">City</span>');
                citylispan2 = $('<span class="bill_details_rht">'+ orderDetail.deliverycity +'</span>');
                cityli.append(citylispan1);
                cityli.append(citylispan2);

                stateli = $('<li>');
                statelispan1 = $('<span class="bill_details_lft">State/Province</span>');                                      
                statelispan2 = $('<span class="bill_details_rht">'+ orderDetail.deliverystate +'</span>');
                stateli.append(statelispan1);
                stateli.append(statelispan2);

                countryli = $('<li>');
                countrylispan1 = $('<span class="bill_details_lft">Country</span>');                                   
                countrylispan2 = $('<span class="bill_details_rht">'+ orderDetail.deliverycountry +'</span>');
                countryli.append(countrylispan1);
                countryli.append(countrylispan2);

                postcodeli = $('<li>');
                postcodelispan1 = $('<span class="bill_details_lft">Postcode</span>');
                postcodelispan2 = $('<span class="bill_details_rht">'+ orderDetail.deliverypostcode +'</span>');
                postcodeli.append(postcodelispan1);
                postcodeli.append(postcodelispan2);

                phonenumberli = $('<li>');
                phonenumberlispan1 = $('<span class="bill_details_lft">Phone Number</span>');
                phonenumberlispan2 = $('<span class="bill_details_rht">'+ orderDetail.deliveryphonenumber +'</span>');
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
                billinginfo.openDiv = "3";

                $(billinginfo).bind('click', {} , function(event){
                        self.accordionView(billinginfo.openDiv);
                });

                billinginfodetails = $('<div class="bill_div" id="checkout_3" style="display:none;">');
                billinginfolabel= $('<div class="bill_head">Billing address and information here</div>');
                billaddressblock = $('<div class="bill_text_div">');
                billaddressblocksub = $('<div class="bill_details">');
                billaddressblocksubul = $('<ul>');

                billfirstnameli = $('<li>');
                billfirstnamespan1 = $('<span class="bill_details_lft">First name</span>');
                billfirstnamespan2 = $('<span class="bill_details_rht">'+ orderDetail.billingfirstname +'</span>');
                billfirstnameli.append(billfirstnamespan1);
                billfirstnameli.append(billfirstnamespan2);

                billlastnameli = $('<li>');
                billlastnamelispan1 = $('<span class="bill_details_lft">Last name</span>');
                billlastnamelispan2 = $('<span class="bill_details_rht">'+ orderDetail.billinglastname +'</span>');
                billlastnameli.append(billlastnamelispan1);
                billlastnameli.append(billlastnamelispan2);

                billcompanyli = $('<li>');
                billcompanylispan1 = $('<span class="bill_details_lft">Company</span>');
                billcompanylispan2 = $('<span class="bill_details_rht">'+ orderDetail.billingcompany +'</span>');
                billcompanyli.append(billcompanylispan1);
                billcompanyli.append(billcompanylispan2);

                billaddressli1 = $('<li>');
                billaddressli1span1 = $('<span class="bill_details_lft">Address 1</span>');
                billaddressli1span2 = $('<span class="bill_details_rht">'+ orderDetail.billingaddress1 +'</span>');
                billaddressli1.append(billaddressli1span1);
                billaddressli1.append(billaddressli1span2);

                billaddressli2 = $('<li>');
                billaddressli2span1 = $('<span class="bill_details_lft">Address 2</span>');
                billaddressli2span2 = $('<span class="bill_details_rht">'+ orderDetail.billingaddress2 +'</span>');
                billaddressli2.append(billaddressli2span1);
                billaddressli2.append(billaddressli2span2);

                billcityli = $('<li>');
                billcitylispan1 = $('<span class="bill_details_lft">City</span>');
                billcitylispan2 = $('<span class="bill_details_rht">'+ orderDetail.billingcity +'</span>');
                billcityli.append(billcitylispan1);
                billcityli.append(billcitylispan2);

                billstateli = $('<li>');
                billstatelispan1 = $('<span class="bill_details_lft">State/Province</span>');                                      
                billstatelispan2 = $('<span class="bill_details_rht">'+ orderDetail.billingstate +'</span>');
                billstateli.append(billstatelispan1);
                billstateli.append(billstatelispan2);

                billcountryli = $('<li>');
                billcountrylispan1 = $('<span class="bill_details_lft">Country</span>');                                   
                billcountrylispan2 = $('<span class="bill_details_rht">'+ orderDetail.billingcountry +'</span>');
                billcountryli.append(billcountrylispan1);
                billcountryli.append(billcountrylispan2);

                billpostcodeli = $('<li>');
                billpostcodelispan1 = $('<span class="bill_details_lft">Postcode</span>');
                billpostcodelispan2 = $('<span class="bill_details_rht">'+ orderDetail.billingpostcode +'</span>');
                billpostcodeli.append(billpostcodelispan1);
                billpostcodeli.append(billpostcodelispan2);

                billphonenumberli = $('<li>');
                billphonenumberlispan1 = $('<span class="bill_details_lft">Phone Number</span>');
                billphonenumberlispan2 = $('<span class="bill_details_rht">'+ orderDetail.billingphonenumber +'</span>');
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
                paymentmethod.openDiv = "4";

                $(paymentmethod).bind('click', {} , function(event){
                        self.accordionView(paymentmethod.openDiv);
                });

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
                subtotalspan2 = $('<span class="prod_check_rht1">'+ pricequantity.itemCount +'</span>');
                subtotalspan3 = $('<span class="prod_check_mid">:</span>');
                subtotal.append(subtotalspan1);
                subtotal.append(subtotalspan2);
                subtotal.append(subtotalspan3);

                ordertotal = $('<div class="prod_check_div">');
                ordertotalspan1 = $('<span class="prod_check_lft">ordertotal</span>');
                ordertotalspan2 = $('<span class="prod_check_rht1">'+ pricequantity.totalPrice +'</span>');
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
                ordercomments.openDiv = "5";

                $(ordercomments).bind('click', {} , function(event){
                        self.accordionView(ordercomments.openDiv);
                });

                ordercmdblock = $('<div class="bill_div" id="checkout_5" style="display:none;">'); 
                commnettext = $('<div class="comments_text">Use this area for special instructions or question regards your order</div>'); 
                commnethead = $('<div class="comments_head">Order Comments</div>');
                commentbox = $('<div class="com_commentbox">'+ orderDetail.comments +'</div>');
                ordercmdblock.append(commnettext);
                ordercmdblock.append(commnethead);
                ordercmdblock.append(commentbox);

                buttons = $('<div class="checkout_btn">');
                buttonblock = $('<div class="mycart_btn_mid">');
                revieworder = $('<div class="mycart_mid_bu"><a href="#">Submit Order</a></div>');

                $(revieworder).bind('click', {} , function(event){
                        self.hideItems = ['OrderFormView'];
                        self.phrescoapi.hideWidget(self.hideItems);
                        self.listener.publish(event,"OrderSuccess",[event.data]);
                });  
	
                cancel = $('<div class="mycart_mid_bu"><a href="#">Back</a></div>');
                cancel.data = 2;

                $(cancel).bind('click', {} , function(event){
                        self.hideItems = ['OrderFormView'];
                        self.phrescoapi.hideWidget(self.hideItems);
                        self.listener.publish(event,"OrderForm",[event.data]);
                });

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
                this.mainContent = mainContent;
        };

        OrderFormView.prototype.renderUI = function() {
			this.setMainContent();
			this.phrescoapi.navigateToPath( "#OrderFormView" );
			return this.mainContent;
		};
		
		// For Test
		OrderFormView.prototype.testRenderUI = function() {
			this.setMainContent();
			return this.mainContent;
		};
		
		OrderFormView.prototype.onHashChange = function(event,data) {
			this.render(this.mainNode);
			this.showWidget();
		};
	
		OrderFormView.prototype.hideWidget = function() {
			this.mainNode.hide();
		};
		
		OrderFormView.prototype.showWidget = function() {
			this.mainNode.show();
			$('#eshop').show();
		};
    
        OrderFormView.prototype.accordionView = function(openDiv) {
                var i;
                for(i = 1; i <=5; i++){
                        $("#checkout_"+i).hide();
                }
                $("#checkout_"+openDiv).show();
        };

    return OrderFormView;

});
