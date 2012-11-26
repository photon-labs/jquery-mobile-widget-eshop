/*global define, $, window */
   
define( "eshop/widgets/HeaderBootstrap", [ "jquery", "eshop/widgets/Header" ], function($, Header) {

    function HeaderBootstrap() {
    }

    HeaderBootstrap.prototype.container = undefined;
    HeaderBootstrap.prototype.headerWidget = undefined;

    HeaderBootstrap.prototype.init = function(listener, api, phrescoapi) {
        this.container = $("eshop\\:header-widget"); 

        if(this.container !== null ) {
            this.headerWidget = new Header();
            this.headerWidget.initialize(this.container, listener, api, phrescoapi);
        }
    };

    return HeaderBootstrap;
});