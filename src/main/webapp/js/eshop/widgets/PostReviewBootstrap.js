/*global define, $, window */
   
define( "eshop/widgets/PostReviewBootstrap", [ "jquery", "eshop/widgets/PostReview" ], function($, PostReview) {

    function PostReviewBootstrap() {
    }

    PostReviewBootstrap.prototype.container = undefined;
    PostReviewBootstrap.prototype.postReviewWidget = undefined;

    PostReviewBootstrap.prototype.init = function(listener, api, phrescoapi) {
        this.container = $("eshop\\:postReview-widget"); 

        if(this.container !== null ) {
            this.postReviewWidget = new PostReview();
            this.postReviewWidget.initialize(this.container, listener, phrescoapi, api);
        }
    };

    return PostReviewBootstrap;
});