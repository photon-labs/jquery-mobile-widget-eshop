/*global define, $, window */

define( "eshop/widgets/FooterBootstrap", [ "jquery", "eshop/widgets/Footer" ], function($, Footer) {

    function FooterBootstrap() {
    }

    FooterBootstrap.prototype.container = undefined;
    FooterBootstrap.prototype.footerWidget = undefined;

    FooterBootstrap.prototype.init = function(listener, api, phrescoapi) {
        this.container = $("eshop\\:footer-widget");

        if(this.container !== null ) {
            this.footerWidget = new Footer();
            this.footerWidget.initialize(this.container, listener, api, phrescoapi);
        }
    };

    return FooterBootstrap;
});