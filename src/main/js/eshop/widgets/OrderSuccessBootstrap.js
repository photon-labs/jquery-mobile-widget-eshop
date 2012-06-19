/*global define, $, window */
   
define( "eshop/widgets/OrderSuccessBootstrap", [ "jquery", "eshop/widgets/OrderSuccess" ], function($, OrderSuccess) {

    function OrderSuccessBootstrap() {
    }

    OrderSuccessBootstrap.prototype.container = undefined;
    OrderSuccessBootstrap.prototype.OrderSuccessWidget = undefined;

    OrderSuccessBootstrap.prototype.init = function(listener, api, phrescoapi) {
        this.container = $("eshop\\:ordersuccess-widget");

        if(this.container !== null ) {
            this.OrderSuccessWidget = new OrderSuccess();
            this.OrderSuccessWidget.initialize(this.container, listener, phrescoapi);
            this.OrderSuccessWidget.render(this.container);
        }
    };

    return OrderSuccessBootstrap;
});