/*global define, $, window */
   
define( "eshop/widgets/ReviewBootstrap", [ "jquery", "eshop/widgets/Review" ], function($, Review) {

    function ReviewBootstrap() {
    }

    ReviewBootstrap.prototype.container = undefined;
    ReviewBootstrap.prototype.reviewWidget = undefined;

    ReviewBootstrap.prototype.init = function(listener, api, phrescoapi) {
        this.container = $("eshop\\:review-widget"); 

        if(this.container !== null ) {
            this.reviewWidget = new Review();
            this.reviewWidget.initialize(this.container, listener, phrescoapi, api);
        }
    };

    return ReviewBootstrap;
});