/*global define, $, window */
   
define( "eshop/widgets/CategoryBootstrap", [ "jquery", "eshop/widgets/Category" ], function($, Category) {

    function CategoryBootstrap() {
    }

    CategoryBootstrap.prototype.container = undefined;
    CategoryBootstrap.prototype.categoryWidget = undefined;

    CategoryBootstrap.prototype.init = function(listener, api, phrescoapi) {
        this.container = $("eshop\\:category-widget"); 

        if(this.container !== null ) {
            this.categoryWidget = new Category();
            this.categoryWidget.initialize(this.container, listener, api, phrescoapi);
            this.categoryWidget.render(this.container);
        }
    };

    return CategoryBootstrap;
});