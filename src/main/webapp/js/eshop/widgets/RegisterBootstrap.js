/*global define, $, window */
   
define( "eshop/widgets/RegisterBootstrap", [ "jquery", "eshop/widgets/Register" ], function($, Register) {

    function RegisterBootstrap() {
    }

    RegisterBootstrap.prototype.container = undefined;
    RegisterBootstrap.prototype.registerWidget = undefined;

    RegisterBootstrap.prototype.init = function(listener, api, phrescoapi) {
        this.container = $("eshop\\:register-widget");

        if(this.container !== null ) {
            this.registerWidget = new Register();
            this.registerWidget.initialize(this.container, listener, api, phrescoapi);
            //this.registerWidget.render(this.container);
        }
    };

    return RegisterBootstrap;
});