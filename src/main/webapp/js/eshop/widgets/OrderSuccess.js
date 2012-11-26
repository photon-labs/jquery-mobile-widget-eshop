/*global define, $, window */

define( "eshop/widgets/OrderSuccess", [ "jquery", "framework/Clazz", "framework/Widget" ], function($, Clazz, Widget) {

    function OrderSuccess() {
    }

    OrderSuccess.prototype = new Clazz();    
    OrderSuccess.prototype = new Widget(); 

    OrderSuccess.prototype.mainNode = undefined;
    OrderSuccess.prototype.mainContent = undefined;
    OrderSuccess.prototype.listener = undefined;
    OrderSuccess.prototype.api = undefined;
    OrderSuccess.prototype.phrescoapi = undefined;

    OrderSuccess.prototype.initialize = function(container, listener, api, phrescoapi) {
        listener.subscribe("OrderSuccess", this, "onHashChange");
		listener.subscribe("ShowOrderSuccess",this,"showWidget");
        this.mainNode = container;
        this.listener = listener;
        this.api = api;
        this.phrescoapi = phrescoapi;
    };

    OrderSuccess.prototype.setMainContent = function() {
	    var mainContent,mycart, mycart_head, emailblock, emailblocksub, emailblocksubp1, emailblocksubp2, emailblocksubp3, emailblocksubp4;
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
		this.mainContent = mainContent;
    };

    OrderSuccess.prototype.renderUI = function() {
        this.setMainContent();
        //this.phrescoapi.navigateToPath( "OrderSuccess" );
        return this.mainContent;
    };
    
    OrderSuccess.prototype.onHashChange = function(event,data) {
        this.render(this.mainNode);
        this.showWidget();
    };

    OrderSuccess.prototype.hideWidget = function() {
        this.mainNode.hide();
    };
    
    
    OrderSuccess.prototype.showWidget = function() {
        this.mainNode.show();
        $('#eshop').show();
    };

    return OrderSuccess;
});
