/*global define, $, window */
   
define( "eshop/widgets/MyCartBootstrap", [ "jquery", "eshop/widgets/MyCart" ], function($, MyCart ) {

    function MyCartBootstrap() {
    }

    MyCartBootstrap.prototype.container = undefined;
    MyCartBootstrap.prototype.myCartWidget = undefined;

    MyCartBootstrap.prototype.init = function(listener, api, phrescoapi) {
        this.container = $("eshop\\:mycart-widget");

        if(this.container !== null ) {
            this.myCartWidget = new MyCart();
            this.myCartWidget.initialize(this.container, listener, phrescoapi);
            this.myCartWidget.render(this.container);
        }
    };

    return MyCartBootstrap;
});