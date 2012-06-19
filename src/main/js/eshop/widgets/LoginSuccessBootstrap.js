/*global define, $, window */
   
define( "eshop/widgets/LoginSuccessBootstrap", [ "jquery", "eshop/widgets/LoginSuccess" ], function($, LoginSuccess) {

    function LoginSuccessBootstrap() {
    }

    LoginSuccessBootstrap.prototype.container = undefined;
    LoginSuccessBootstrap.prototype.loginSuccessWidget = undefined;

    LoginSuccessBootstrap.prototype.init = function(listener, api, phrescoapi) {
        this.container = $("eshop\\:loginsuccess-widget");

        if(this.container !== null ) {
            this.loginSuccessWidget = new LoginSuccess();
            this.loginSuccessWidget.initialize(this.container, listener, api, phrescoapi);
            this.loginSuccessWidget.render(this.container);
        }
    };

    return LoginSuccessBootstrap;
});