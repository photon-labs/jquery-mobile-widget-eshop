/*global define, $ window */

define( "eshop/widgets/MyCart", [ "jquery", "framework/Clazz", "framework/Widget" ], function($, Clazz, Widget) {

    function MyCart() {
    }

    MyCart.prototype = new Clazz();    
    MyCart.prototype = new Widget(); 

    MyCart.prototype.mainNode = undefined;
    MyCart.prototype.mainContent = undefined;
    MyCart.prototype.hideItems = undefined;
    MyCart.prototype.listener = undefined;
    MyCart.prototype.phrescoapi = undefined;

    MyCart.prototype.initialize = function(container, listener, phrescoapi) {
        listener.subscribe("MyCart",this,"onHashChange");
		listener.subscribe("ShowMyCart",this,"onHashChange");
        this.mainNode = container;
        this.listener = listener;
        this.phrescoapi = phrescoapi;
        this.hideItms = [];
    };

    MyCart.prototype.setMainContent = function() {
        var mainContent = $('<div></div>'),
        self = this,
        myCart = $('<div class="mycart_div"></div>'),
        detailImageURL, myCartHead, j, subTotal, myCartQuantity,
        myCartQuantitySub, myCartUL,  myCartLIQuantity, myCartLIProduct, 
        myCartLIPrice, myCartSubTotal, myCartButton, myCartButtonMid, myCartCheckOut, myCartClearBoth;

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
        
        $(myCartCheckOut).bind('click', {} , function(event){
			self.hideItems = ['Menu','Login', 'ProductDetails', 'Register', 'Category', 'LoginSuccess','OrderFormView','OrderSuccess','MyCart'];
			self.phrescoapi.hideWidget(self.hideItems);
			self.listener.publish(event,"OrderForm",[event.data]);
			self.listener.publish(event,"Header",[event.data]);
			self.listener.publish(event,"Navigation",[event.data]);
		});                
    
        myCartButtonMid.append(myCartCheckOut);
        myCartButton.append(myCartButtonMid);

        myCartClearBoth = $('<div style="clear:both"></div>');
        myCartButton.append(myCartClearBoth);
       
        myCart.append(myCartSubTotal);
        myCart.append(myCartButton);

        mainContent.append(myCart);
        this.mainContent = mainContent;
    };

    MyCart.prototype.renderUI = function() {
        this.setMainContent();
		this.phrescoapi.navigateToPath( "#MyCart" );
        return this.mainContent;
    };
	
	// For Test
	MyCart.prototype.testRenderUI = function() {
        this.setMainContent();
        return this.mainContent;
    };
    
    MyCart.prototype.onHashChange = function(event,data) {
        this.render(this.mainNode);
		this.showWidget();
    };

    MyCart.prototype.hideWidget = function() {
        this.mainNode.hide();
    };
	
	MyCart.prototype.showWidget = function() {
        this.mainNode.show();
    };

    return MyCart;
});
