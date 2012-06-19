/*global define, $, window */
   
define( "eshop/widgets/LoginBootstrap", [ "jquery", "eshop/widgets/Login" ], function($, Login) {

    function LoginBootstrap() {
    }

    LoginBootstrap.prototype.container = undefined;
    LoginBootstrap.prototype.loginWidget = undefined;

    LoginBootstrap.prototype.init = function(listener, api, phrescoapi) {
        this.container = $("eshop\\:login-widget");

        if(this.container !== null ) {
            this.loginWidget = new Login();
            this.loginWidget.initialize(this.container, listener, api, phrescoapi);
            this.loginWidget.render(this.container);
        }
    };

    return LoginBootstrap;
});