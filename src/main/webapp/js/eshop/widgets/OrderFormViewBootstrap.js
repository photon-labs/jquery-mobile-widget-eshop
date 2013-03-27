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
   
define( "eshop/widgets/OrderFormViewBootstrap", [ "jquery", "eshop/widgets/OrderFormView" ], function($, OrderFormView) {

    function OrderFormViewBootstrap() {
    }

    OrderFormViewBootstrap.prototype.container = undefined;
    OrderFormViewBootstrap.prototype.orderFormViewWidget = undefined;

    OrderFormViewBootstrap.prototype.init = function(listener, api, phrescoapi) {
        this.container = $("eshop\\:orderformview-widget");

        if(this.container !== null ) {
            this.orderFormViewWidget = new OrderFormView();
            this.orderFormViewWidget.initialize(this.container, listener, api, phrescoapi);
        }
    };

    return OrderFormViewBootstrap;
});