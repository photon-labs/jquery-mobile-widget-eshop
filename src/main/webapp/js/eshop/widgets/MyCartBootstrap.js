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
   
define( "eshop/widgets/MyCartBootstrap", [ "jquery", "eshop/widgets/MyCart" ], function($, MyCart ) {

    function MyCartBootstrap() {
    }

    MyCartBootstrap.prototype.container = undefined;
    MyCartBootstrap.prototype.myCartWidget = undefined;

    MyCartBootstrap.prototype.init = function(listener, api, phrescoapi) {
        this.container = $("eshop\\:mycart-widget");

        if(this.container !== null ) {
            this.myCartWidget = new MyCart();
            this.myCartWidget.initialize(this.container, listener, phrescoapi);
        }
    };

    return MyCartBootstrap;
});