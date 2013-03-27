/*
 * PHR_html_jquery_mobileapp
 *
 * Copyright (C) 1999-2013 Photon Infotech Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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
        }
    };

    return LoginSuccessBootstrap;
});