/*global define, $, window */
   
define( "eshop/widgets/NavigationBootstrap", [ "jquery", "eshop/widgets/Navigation" ], function($, Navigation) {

    function NavigationBootstrap() {
    }

    NavigationBootstrap.prototype.container = undefined;
    NavigationBootstrap.prototype.navigationWidget = undefined;

    NavigationBootstrap.prototype.init = function(listener, api, phrescoapi) {
        this.container =  $("eshop\\:navigation-widget");

        if(this.container !== null ) {
            this.navigationWidget = new Navigation();
            this.navigationWidget.initialize(this.container, listener, phrescoapi, api);
            this.navigationWidget.render(this.container);
        }
    };

    return NavigationBootstrap;
});
