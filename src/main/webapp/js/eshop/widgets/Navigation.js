/*global define, $, window */

define( "eshop/widgets/Navigation", [ "jquery", "framework/Clazz", "framework/Widget" ], function($, Clazz, Widget) {

    function Navigation() {
    }
    
    Navigation.prototype = new Clazz();    
    Navigation.prototype = new Widget(); 

    Navigation.prototype.mainNode = undefined;
    Navigation.prototype.mainContent = undefined;
    Navigation.prototype.hideItems = undefined;
    Navigation.prototype.phrescoapi = undefined;
    Navigation.prototype.listener = undefined;
    Navigation.prototype.api = undefined;
   
    Navigation.prototype.initialize = function(container, listener, phrescoapi, api) {
        listener.subscribe("Navigation", this, "onHashChange");
        this.listener = listener; 
        this.mainNode = container;
        this.phrescoapi = phrescoapi;
        this.api = api; 
    };

    Navigation.prototype.setMainContent = function() {
        var self = this, mainContent, headerTabInner, headerTabUL, headerTabLIBrowse, headerTabLISpecial, headerTabLICart;
        
        mainContent = $('<div class="header_tabinner">');
        headerTabUL = $('<ul>');

        headerTabLIBrowse = $('<li id="browse-tab" class="browse"><a href="#">Browse</a></li>');
        
        $(headerTabLIBrowse).bind('click', {} , function(event){
            self.hideItems = ['Menu','Login', 'Products', 'ProductDetails', 'Register', 'MyCart', 'ShoppingCart','LoginSuccess', 'Review', 'PostReview', 'OrderForm', 'OrderFormView', 'OrderSuccess'];
            self.phrescoapi.hideWidget(self.hideItems);
            self.listener.publish(event,"Category",[event.data]);
            self.listener.publish(event,"Header",[event.data]);
            self.listener.publish(event,"Navigation",[event.data]);
            self.listener.publish(event,"Footer",[event.data]);
            self.removeStyle();
            $("#browse-tab").addClass("active");
            $("#browse").addClass("browse_active");
        });

        headerTabLISpecial = $('<li id="special-tab" class="special"><a href="#">Special Offers</a></li>');
		$(headerTabLISpecial).bind('click', {} , function(event){
            self.hideItems = ['Menu','Login', 'ProductDetails', 'Register', 'Category', 'MyCart', 'ShoppingCart', 'LoginSuccess', 'Review', 'PostReview', 'OrderForm', 'OrderFormView', 'OrderSuccess'];
            self.phrescoapi.hideWidget(self.hideItems);
            self.listener.publish(event,"Products",[event.data]);
            self.listener.publish(event,"Header",[event.data]);
            self.listener.publish(event,"Navigation",[event.data]);
            self.listener.publish(event,"Footer",[event.data]);
            self.removeStyle();
            $("#special-tab").addClass("active");
            $("#spl_offer").addClass("spl_offer_active");
        });

        headerTabLICart = $('<li id="cart-tab" class="cart"><a href="#">My Cart</a></li>');
        $(headerTabLICart).bind('click', {}, function(event){
            if(self.phrescoapi.productArray.length !== 0){
                var data;
                self.hideItems = ['Login', 'LoginSuccess', 'Menu', 'Products', 'MyCart', 'OrderForm', 'OrderFormView', 'OrderHistory', 'OrderSuccess', 'PostReview', 'ProductDetails', 'Category', 'Register', 'RegisterSuccess', 'ShoppingCart', 'LoginSuccess', 'Review','PostReview'];
                self.phrescoapi.hideWidget(self.hideItems);
                data = {productArray : self.phrescoapi.productArray, categoryID : null, productID : event.data.productId};
                self.listener.publish(event,"ShoppingCart",data);
                self.removeStyle();
                $("#cart-tab").addClass("active");
                $("#mycart").addClass("mycart_active");
            }
        });

        headerTabUL.append(headerTabLIBrowse);
        headerTabUL.append(headerTabLISpecial);
        headerTabUL.append(headerTabLICart);
        mainContent.append(headerTabUL);

        this.mainContent = mainContent;
   }; 

    Navigation.prototype.renderUI = function() {
        this.setMainContent();
        return this.mainContent;
    };
    
    Navigation.prototype.onHashChange = function(data) {
        this.render(this.mainNode);
        this.mainNode.show();
    };

    Navigation.prototype.hideWidget = function(){
        this.mainNode.hide();
    };

    Navigation.prototype.removeStyle = function(){
        this.hideItems = ['browse-tab', 'special-tab', 'cart-tab'];

        $.each(this.hideItems,function(){
            $("#" + this).removeClass("active");
        });
    };

    Navigation.prototype.commonItemsToShow = function(event){

        this.hideItems = ['slider','wrapper'];

        this.phrescoapi.sliderWrapperShowHide(true,this.hideItems);

        this.hideItems = ['Login','Register','ProductDetails','ShoppingCart'];
        this.phrescoapi.hideWidget(this.hideItems);

        if(event.currentTarget.id === "productsLI"){
            this.listener.publish(event,"Products",{categoryId:'All Products',searchCriteria:null});
        }else if(event.currentTarget.id === "specialsLI"){
            this.listener.publish(event,"Products",{categoryId:'Special Products',searchCriteria:null});
        }else{
            this.listener.publish(event,"Products",{categoryId:1,searchCriteria:null});
        }

        this.listener.publish(event,"NewProducts",[event.data]);
        this.listener.publish(event,"MyCart",[event.data]);
    };

    return Navigation;
});