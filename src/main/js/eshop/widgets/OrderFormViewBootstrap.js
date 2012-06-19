/*global define, $, window */
   
define( "eshop/widgets/OrderFormViewBootstrap", [ "jquery", "eshop/widgets/OrderFormView" ], function($, OrderFormView) {

    function OrderFormViewBootstrap() {
    }

    OrderFormViewBootstrap.prototype.container = undefined;
    OrderFormViewBootstrap.prototype.orderFormViewWidget = undefined;

    OrderFormViewBootstrap.prototype.init = function(listener, api, phrescoapi) {
        this.container = $("eshop\\:orderformview-widget");

        if(this.container !== null ) {
            this.orderFormViewWidget = new OrderFormView();
            this.orderFormViewWidget.initialize(this.container, listener, api, phrescoapi);
            this.orderFormViewWidget.render(this.container);
        }
    };

    return OrderFormViewBootstrap;
});