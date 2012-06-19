/*global define, $, window */
   
define( "eshop/widgets/ProductBootstrap", [ "jquery", "eshop/widgets/Products" ], function($, Product) {

    function ProductBootstrap() {
    }

    ProductBootstrap.prototype.container = undefined;
    ProductBootstrap.prototype.productWidget = undefined;

    ProductBootstrap.prototype.init = function(listener, api, phrescoapi) {
        this.container =  $("eshop\\:products-widget");

        if(this.container !== null ) {
            this.productWidget = new Product();
            this.productWidget.initialize(this.container, listener, phrescoapi, api);
            this.productWidget.render(this.container);
        }
    };

    return ProductBootstrap;
});

