/*global define, $, window */
   
define( "eshop/widgets/ShoppingCartBootstrap", [ "jquery", "eshop/widgets/ShoppingCart" ], function($, ShoppingCart) {

    function ShoppingCartBootstrap() {
    }

    ShoppingCartBootstrap.prototype.container = undefined;
    ShoppingCartBootstrap.prototype.shoppingCartWidget = undefined;

    ShoppingCartBootstrap.prototype.init = function(listener, api, phrescoapi) {
        this.container =  $("eshop\\:shoppingcart-widget");

        if(this.container !== null ) {
            this.shoppingCartWidget = new ShoppingCart();
            this.shoppingCartWidget.initialize(this.container, listener, phrescoapi, api);
            this.shoppingCartWidget.render(this.container);
        }
    };

    return ShoppingCartBootstrap;
});