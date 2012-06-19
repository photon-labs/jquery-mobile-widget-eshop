/*global define, $, window */
   
define( "eshop/widgets/RegisterSuccessBootstrap", [ "jquery", "eshop/widgets/RegisterSuccess" ], function($, RegisterSuccess) {

    function RegisterSuccessBootstrap() {
    }

    RegisterSuccessBootstrap.prototype.container = undefined;
    RegisterSuccessBootstrap.prototype.registerSuccessWidget = undefined;

    RegisterSuccessBootstrap.prototype.init = function(listener, api, phrescoapi) {
        this.container = $("eshop\\:registersuccess-widget");

        if(this.container !== null ) {
            this.registerSuccessWidget = new RegisterSuccess();
            this.registerSuccessWidget.initialize(this.container, listener, api, phrescoapi);
            this.registerSuccessWidget.render(this.container);
        }
    };

    return RegisterSuccessBootstrap;
});