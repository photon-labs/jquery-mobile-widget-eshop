/*global define, $, window */
   
define( "eshop/widgets/OrderFormBootstrap", [ "jquery", "eshop/widgets/OrderForm" ], function($, OrderForm) {

    function OrderFormBootstrap() {
    }

    OrderFormBootstrap.prototype.container = undefined;
    OrderFormBootstrap.prototype.OrderFormWidget = undefined;

    OrderFormBootstrap.prototype.init = function(listener, api, phrescoapi) {
        this.container = $("eshop\\:orderform-widget");

        if(this.container !== null ) {
            this.OrderFormWidget = new OrderForm();
            this.OrderFormWidget.initialize(this.container, listener, phrescoapi);
            this.OrderFormWidget.render(this.container);
        }
    };

    return OrderFormBootstrap;
});