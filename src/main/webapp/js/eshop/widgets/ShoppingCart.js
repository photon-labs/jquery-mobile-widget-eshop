/*global define, $ window */

define( "eshop/widgets/ShoppingCart", [ "jquery", "framework/Clazz", "framework/Widget" ], function($, Clazz, Widget) {

    function ShoppingCart() {
    }

    ShoppingCart.prototype = new Clazz();    
    ShoppingCart.prototype = new Widget(); 

    ShoppingCart.prototype.mainNode = undefined;
    ShoppingCart.prototype.mainContent = undefined;
    ShoppingCart.prototype.hideItems = undefined;
    ShoppingCart.prototype.listener = undefined;
    ShoppingCart.prototype.phrescoapi = undefined;
    ShoppingCart.prototype.api = undefined;
    ShoppingCart.prototype.dataItem = undefined;
    ShoppingCart.prototype.categoryId = undefined;
    ShoppingCart.prototype.productId = undefined;
	ShoppingCart.prototype.subtotalAmount = undefined;

    ShoppingCart.prototype.initialize = function(container, listener, phrescoapi, api) {
		listener.subscribe("ShoppingCart",this,"onHashChange");
		listener.subscribe("ShowShoppingCart",this,"showWidget");
		this.mainNode = container;
		this.listener = listener;
        this.phrescoapi = phrescoapi;
        this.hideItms = [];
		this.dataItem = {};
        this.api = api; 
    };

    ShoppingCart.prototype.setMainContent = function() {
		var detailImageURL, checkoutvaluecol2, checkoutvaluecol4, subtotal, mainContent, myCart, myCartHead, j, 
		mycart_quality_div, mycart_qua_div, mycart_borderline, cartImage, data,
		product_left_div, product_head, review_cont, product_contleft, quality_div, mycart_remove_bu, 
		mycart_remove, mycart_quality, mycart_size, mycart_price_div, mycart_price, mycart_subtotal, 
		mycart_btn, mycart_update_view_bu, mycart_mid_bu, mycart_update_view_bu1, mycart_mid_bu1, clearDiv, self = this, shoppingcard_data = self.dataItem, productTotal = 0, subTotal = 0;
		mainContent = $('<div></div>');
		myCart = $('<div class="mycart_div">');
		myCartHead = $('<div class="product_name">My Shopping Cart</div>');
		myCart.append(myCartHead);
		if(shoppingcard_data !== "undefined"){
			for (j = 0; j < shoppingcard_data.length; j++) {
				detailImageURL = self.api.wsURLWithoutContext + '/images/web/' + shoppingcard_data[j].image;
				mycart_quality_div = $('<div class="mycart_quality_div">');
				mycart_quality_div.productId = shoppingcard_data[j].productId;
				mycart_qua_div = $('<div class="mycart_qua_div">');
				mycart_borderline = $('<div class="mycart_borderline">');
				cartImage = $('<div class="cat_listerDetail_image"><img src="'+ detailImageURL +'" border="0" alt="image" /></div>');
				product_left_div = $('<div class="product_left_div">');
				product_head = $('<div class="product_head">');
				review_cont = $('<div class="review_cont">');
				product_contleft =  $('<div class="product_contleft"><p><b>' + shoppingcard_data[j].name + '</b></p></div>');
				quality_div =  $('<div class="quality_div">');
				mycart_remove_bu =  $('<div class="mycart_remove_bu">');
				mycart_remove =  $('<div class="mycart_remove"><a>Remove</a></div>');
				data = {};
				data.productId = shoppingcard_data[j].productId;
				data.singlePrice = shoppingcard_data[j].price;

				mycart_remove_bu.append(mycart_remove);

				mycart_quality =  $('<span class="mycart_quality">Quantity :  </span>');
				mycart_size =  $('<input type="text" size="2" value="'+ shoppingcard_data[j].quantity +'" name="productQuantity" autofocus="autofocus" id="productQuantity" />');
				quality_div.append(mycart_quality);
				quality_div.append(mycart_size);
				quality_div.append(mycart_remove_bu);
				mycart_price_div =  $('<div class="mycart_price_div">');
				mycart_price =  $('<span class="mycart_price">Price: $'+ shoppingcard_data[j].price +' </span>');
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
				subTotal = (Number(subTotal) + (Number(shoppingcard_data[j].quantity) * Number(shoppingcard_data[j].price)));
				self.addFunction(shoppingcard_data, subtotal, mycart_size, checkoutvaluecol4, mycart_remove, data, self);
			}
		}

        mycart_subtotal =  $('<div class="mycart_subtotal">Subtotal: $ <span id="subTotal">'+ self.totalCalc(shoppingcard_data) +'</span></div>');
		self.subtotalAmount = mycart_subtotal;
        mycart_btn =  $('<div class="mycart_btn">');
        mycart_update_view_bu1 =  $('<div class="mycart_update_view_bu">');
		if(self.phrescoapi.productArray.length !== 0){
			mycart_mid_bu1 =  $('<div id="checkoutid" class="mycart_mid_bu"><a >Check Out</a></div>');
			$(mycart_mid_bu1).bind('click', {} , function(event){
				self.phrescoapi.priceCount();
				self.hideItems = ['ShoppingCart'];
				self.phrescoapi.hideWidget(self.hideItems);
				self.listener.publish(event,"OrderForm",[event.data]);
			}); 
		}

        mycart_update_view_bu1.append(mycart_mid_bu1);
        clearDiv =  $('<div style="clear:both"></div>');
        
		mycart_btn.append(mycart_update_view_bu);
		mycart_btn.append(mycart_update_view_bu1);

		mycart_btn.append(clearDiv);

		myCart.append(mycart_subtotal);
		myCart.append(mycart_btn);

		mainContent.append(myCart);
		this.mainContent = mainContent;

		$('#special-tab').removeClass("active");
		$('#cart-tab').addClass("active");
		$('#browse-tab').removeClass("active");

		$('.footer li.browse').removeClass("browse_active");
		$('.footer li.spl_offer').removeClass("spl_offer_active");
		$('.footer li.mycart').addClass("mycart_active");
    };  

   ShoppingCart.prototype.renderUI = function() {
        this.setMainContent();
		this.phrescoapi.navigateToPath( "#ShoppingCart" );
        return this.mainContent;
    };
	
	// For Test
	ShoppingCart.prototype.testRenderUI = function() {
        this.setMainContent();
        return this.mainContent;
    };
    
    ShoppingCart.prototype.onHashChange = function(event,data) {
		this.dataItem = data.productArray;
		this.categoryId = data.categoryID;
		this.productId = data.productID;
        this.render(this.mainNode);
		this.showWidget();
    };

	ShoppingCart.prototype.hideWidget = function(){
        this.mainNode.hide();
    };
	
	ShoppingCart.prototype.showWidget = function() {
        this.mainNode.show();
        $('#eshop').show();
    };

    ShoppingCart.prototype.addFunction = function(shoppingcard_data, subtotal, mycart_size, checkoutvaluecol4, mycart_remove, data, self){
		var i;
		$(checkoutvaluecol4).bind('click', data, function(event){
			self.phrescoapi.removeShoppingCart(event.data.productId);
			data = {productArray : self.phrescoapi.productArray,categoryID : null,productID : null};
			self.listener.publish(event,"ShoppingCart",data);
		});

		$(mycart_size).bind('focusout',data, function(event){
			$("#totalAmount_" + event.data.productId).text(event.target.value * event.data.singlePrice);
			for (i = 0; i < shoppingcard_data.length; i++) {
				if(shoppingcard_data[i].productId === event.data.productId){
					shoppingcard_data[i].quantity = event.target.value;
					break;
				}
			} 
			self.subtotalAmount.text("SubTotal: $" + self.totalCalc(shoppingcard_data));   
		});
		
		$(mycart_remove).bind('click', data, function(event){
			self.phrescoapi.removeShoppingCart(event.data.productId);
			data = {productArray : self.phrescoapi.productArray,categoryID : null,productID : null};
			self.listener.publish(event,"ShoppingCart",data);
		});
    };

    ShoppingCart.prototype.totalCalc = function(shoppingcard_data){
		var totalAmount =0, i;
		for (i = 0; i < shoppingcard_data.length; i++) {
			 totalAmount += Number(this.phrescoapi.productArray[i].quantity * this.phrescoapi.productArray[i].price);
		}
		return totalAmount;
    };

    return ShoppingCart;
});
