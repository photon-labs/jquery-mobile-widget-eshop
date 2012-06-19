/*global define, $, window */
   
define( "eshop/widgets/OrderHistoryBootstrap", [ "jquery", "eshop/widgets/OrderHistory" ], function($, OrderHistory) {

    function OrderHistoryBootstrap() {
    }

    OrderHistoryBootstrap.prototype.container = undefined;
    OrderHistoryBootstrap.prototype.OrderHistoryWidget = undefined;

    OrderHistoryBootstrap.prototype.init = function(listener, api, phrescoapi) {
        this.container = $("eshop\\:orderhistory-widget");

        if(this.container !== null ) {
            this.OrderHistoryWidget = new OrderHistory();
            this.OrderHistoryWidget.initialize(this.container, listener, phrescoapi);
            this.OrderHistoryWidget.render(this.container);
        }
    };

    return OrderHistoryBootstrap;
});