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
/*global define, $ window */

define( "eshop/widgets/Category", [ "jquery", "framework/Clazz", "framework/Widget" ], function($, Clazz, Widget) {

    function Category() {
    }

    Category.prototype = new Clazz();    
    Category.prototype = new Widget(); 

    Category.prototype.mainNode = undefined;
    Category.prototype.mainContent = undefined;
    Category.prototype.hideItems = undefined;
    Category.prototype.listener = undefined;
    Category.prototype.phrescoapi = undefined;
    Category.prototype.api = undefined;

    Category.prototype.initialize = function(container, listener, api, phrescoapi) {
        listener.subscribe("Category", this, "onHashChange");
		listener.subscribe("ShowCategory", this, "showWidget");
        this.mainNode = container;
        this.listener = listener;
        this.phrescoapi = phrescoapi;
        this.hideItms = [];
        this.api = api; 
    };

    Category.prototype.setMainContent = function() {
                var self = this, url, 
                mainContent = $('<div class="cat_lister">'),
                navUL = $('<ul>'), i, category, imageURL, navLI, navLIA, currentName = 'name', currentID = 'id',
                image;
                url = this.api.wsURL;
                imageURL = url + '/' + self.api.configresponse.imagePath.mobile;
                self.api.getCategories(function(jsonObject){
                for (i = 0; i < jsonObject.category.length; i++) {
                    category = jsonObject.category[i];
                    image = imageURL + '/' + category.image;
                    navLI = $('<li><a><span class="listicon"><img src="' + image + '" title="image" border="0"  /></span><span class="listicontext">' + category[currentName] + '<span> (' + category.productCount + ')</span></span></a></li>');
                    self.addFunction(navLI, category[currentID], self);
                    navUL.append(navLI);
                }
            });

                mainContent.append(navUL);
              
            /* for highlighting purpose */
            $('#special-tab').removeClass("active");
            $('#cart-tab').removeClass("active");
            $('#browse-tab').addClass("active");
            
            $('.footer li.browse').addClass("browse_active");
            $('.footer li.spl_offer').removeClass("spl_offer_active");
            $('.footer li.mycart').removeClass("mycart_active");

            this.mainContent = mainContent;
    };

    Category.prototype.renderUI = function() {
        this.setMainContent();
		this.phrescoapi.navigateToPath( "#Category" );
        return this.mainContent;
    };
	
	// For Test
	Category.prototype.testRenderUI = function() {
        this.setMainContent();
        return this.mainContent;
    };
    
    Category.prototype.onHashChange = function(event,data) {
        this.render(this.mainNode);
		this.showWidget();
    };

    Category.prototype.hideWidget = function() {
        this.mainNode.hide();
    };
	
	Category.prototype.showWidget = function() {
        this.mainNode.show();
		$('#eshop').show();
    };


    Category.prototype.addFunction = function(lis, category, self){
        $(lis).bind('click', {categoryId : category, searchCriteria : null} , function(event){
            self.hideItems = ['ProductDetails', 'Category', 'Menu','ShoppingCart','OrderFormView','OrderForm','Login','OrderSuccess','Contactus','Aboutus','Register','OrderHistory','LoginSuccess','RegisterSuccess'];
            self.phrescoapi.hideWidget(self.hideItems);
            self.hideItems = ['slider','wrapper'];
            self.phrescoapi.sliderWrapperShowHide(true, self.hideItems);
            self.listener.publish(event,"Products",[event.data]);
        });
    };

    return Category;
});

