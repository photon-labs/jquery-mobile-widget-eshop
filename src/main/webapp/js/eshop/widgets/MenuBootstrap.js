/*global define, $, window */

define( "eshop/widgets/MenuBootstrap", [ "jquery", "eshop/widgets/Menu" ], function($, Menu) {

    function MenuBootstrap() {
    }

    MenuBootstrap.prototype.container = undefined;
    MenuBootstrap.prototype.MenuWidget = undefined;

    MenuBootstrap.prototype.init = function(listener, api, phrescoapi) {
        this.container = $("eshop\\:menu-widget");

        if(this.container !== null ) {
            this.menuWidget = new Menu();
            this.menuWidget.initialize(this.container, listener, api, phrescoapi);
            this.menuWidget.render(this.container);
        }
    };

    return MenuBootstrap;
});