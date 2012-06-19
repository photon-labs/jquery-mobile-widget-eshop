/*global define, $, window */
   
define( "eshop/widgets/ProductDetailsBootstrap", [ "jquery", "eshop/widgets/ProductDetails" ], function($, ProductDetails) {

    function ProductDetailsBootstrap() {
    }

    ProductDetailsBootstrap.prototype.container = undefined;
    ProductDetailsBootstrap.prototype.productDetailsWidget = undefined;

    ProductDetailsBootstrap.prototype.init = function(listener, api, phrescoapi) {
        this.container = $("eshop\\:productdetails-widget");

        if(this.container !== null ) {
            this.productDetailsWidget = new ProductDetails();
            this.productDetailsWidget.initialize(this.container, listener, phrescoapi, api);
            this.productDetailsWidget.render(this.container);
        }
    };

    return ProductDetailsBootstrap;
});