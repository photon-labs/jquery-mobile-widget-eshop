/*global define, $, window */

define( "eshop/widgets/Menu", [ "jquery", "framework/Clazz", "framework/Widget" ], function($, Clazz, Widget) {

    function Menu() {
    }

    Menu.prototype = new Clazz();    
    Menu.prototype = new Widget(); 

    Menu.prototype.mainNode = undefined;
    Menu.prototype.mainContent = undefined;
    Menu.prototype.hideItems = undefined;
    Menu.prototype.listener = undefined;
    Menu.prototype.api = undefined;
    Menu.prototype.phrescoapi = undefined;

    Menu.prototype.initialize = function(container, listener, api, phrescoapi) {
        listener.subscribe("Menu", this, "onHashChange");
		listener.subscribe("ShowMenu", this, "onHashChange");
        this.mainNode = container;
        this.hideItems = [];
        this.listener = listener;
        this.api = api;
        this.phrescoapi = phrescoapi;
    };

    Menu.prototype.setMainContent = function() {
        var mainContent, innerWrap, headerLogo, bodyIconRows, firstRowIcons, firstRowUL, homeLI, 
        registerLI, myCartLI, firstRowClearBoth, secondRowIcons, secondRowUL, searchLI, browseLI, 
        loginLI, secondRowClearBoth, thirdRowIcons, thirdRowUL, settingLI, offerLI, eventsLI, 
        thirdRowClearBoth, self=this;

        //mainContent = $('<div></div>');
        mainContent = $('<div class="inner_wrap">');
        headerLogo = $('<div class="header" style="text-align: center;"><img src="images/eshop/logo.png" /></div>');
        bodyIconRows = $('<div class="body_icon_row">');
        firstRowIcons = $('<div class="icons_row">');
        firstRowUL = $('<ul>');
        homeLI = $('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/home_icon.png" /></div><div class="fonts">Home</div></a></li>');
        registerLI = $('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/register_icon.png" /></div><div class="fonts">Register</div></a></li>');
        $(registerLI).bind('click', {} , function(event){
            self.hideItems = ['Menu','Login', 'LoginSuccess', 'MyCart','ShoppingCart','RegisterSuccess','OrderForm','OrderFormView','Products','OrderSuccess', 'Review','PostReview'];
            self.phrescoapi.hideWidget(self.hideItems);
			self.listener.publish(event,"Register",[event.data]);
            self.listener.publish(event,"Header",[event.data]);
            self.listener.publish(event,"Navigation",[event.data]);
            self.listener.publish(event,"Footer",[event.data]);
            $('#eshop').css("display", "block"); 

        });        
		myCartLI = $('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/my_cart_icon.png" /></div><div class="fonts">My Cart</div></a></li>');
        $(myCartLI).bind('click', {} , function(event){
            if(self.phrescoapi.productArray.length !== 0){
                var data;
                self.hideItems = ['Login', 'LoginSuccess', 'Menu', 'MyCart', 'OrderForm', 'OrderFormView', 'OrderHistory', 'OrderSuccess', 'Review','PostReview', 'ProductDetails', 'Category', 'Register', 'RegisterSuccess', 'ShoppingCart'];
                self.phrescoapi.hideWidget(self.hideItems);
                data = {productArray : self.phrescoapi.productArray, categoryID : null, productID : event.data.productId};
                self.listener.publish(event,"Header",[event.data]);
                self.listener.publish(event,"ShoppingCart",data);
				self.listener.publish(event,"Navigation",[event.data]);
				self.listener.publish(event,"Footer",[event.data]);
                $('#eshop').css("display", "block"); 
                $("#cart-tab").addClass("active");
                $("#mycart").addClass("mycart_active");
            }
           
        });       
		firstRowUL.append(homeLI);
        firstRowUL.append(registerLI);
        firstRowUL.append(myCartLI);
        firstRowIcons.append(firstRowUL);
        firstRowClearBoth = $('<div style="clear:both;"></div>');
        firstRowIcons.append(firstRowClearBoth);
        secondRowIcons = $('<div class="icons_row">');
        secondRowUL = $('<ul>');
        searchLI = $('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/search_icon.png" /></div><div class="fonts">Search</div></a></li>');
        browseLI = $('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/browse_icon.png" /></div><div class="fonts">Browse</div></a></li>');
        $(browseLI).bind('click', {} , function(event){
            self.hideItems = ['Menu','Login', 'LoginSuccess', 'MyCart','ShoppingCart','Register','RegisterSuccess','OrderForm','OrderFormView','Products','OrderSuccess', 'Review','PostReview'];
            self.phrescoapi.hideWidget(self.hideItems);
            self.listener.publish(event,"Category",[event.data]);
            self.listener.publish(event,"Header",[event.data]);
            self.listener.publish(event,"Navigation",[event.data]);
            self.listener.publish(event,"Footer",[event.data]);
            $('#eshop').css("display", "block"); 
            $("#browse-tab").addClass("active");
            $("#browse").addClass("browse_active");
        });        
        loginLI = $('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/loginicon.png" /></div><div class="fonts">Login</div></a></li>');
        $(loginLI).bind('click', {} , function(event){
            self.hideItems = ['Menu', 'LoginSuccess', 'MyCart','ShoppingCart','Register','RegisterSuccess','OrderForm','OrderFormView','Products','OrderSuccess','Review','PostReview'];
            self.phrescoapi.hideWidget(self.hideItems);
            self.listener.publish(event,"Login",[event.data]);
            self.listener.publish(event,"Header",[event.data]);
            self.listener.publish(event,"Navigation",[event.data]);
            self.listener.publish(event,"Footer",[event.data]);
            $('#eshop').css("display", "block"); 
        });        
        secondRowUL.append(searchLI);
        secondRowUL.append(browseLI);
        secondRowUL.append(loginLI);
        secondRowIcons.append(secondRowUL);

        secondRowClearBoth = $('<div style="clear:both;"></div>');
        secondRowIcons.append(secondRowClearBoth);

        thirdRowIcons = $('<div class="icons_row">');
        thirdRowUL = $('<ul>');
        settingLI = $('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/setting_icon.png" /></div><div class="fonts">Settings</div></a></li>');
        offerLI = $('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/special_offer_icon.png" /></div><div class="fonts">Special Offers</div></a></li>');
        eventsLI = $('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/events_icon.png" /></div><div class="fonts">Events</div></a></li>');
        thirdRowUL.append(settingLI);
        thirdRowUL.append(offerLI);
        thirdRowUL.append(eventsLI);
        thirdRowIcons.append(thirdRowUL);

        thirdRowClearBoth = $('<div style="clear:both;"></div>');
        thirdRowIcons.append(thirdRowClearBoth);

        bodyIconRows.append(firstRowIcons);
        bodyIconRows.append(secondRowIcons);
        bodyIconRows.append(thirdRowIcons);

        mainContent.append(headerLogo);
        mainContent.append(bodyIconRows);
        this.mainContent = mainContent;
		$('#splash').hide();
    };

    Menu.prototype.renderUI = function() {
        this.setMainContent();
		this.phrescoapi.navigateToPath( "#Menu" );
        return this.mainContent;
    };
	
	// For Test
	Menu.prototype.testRenderUI = function() {
        this.setMainContent();
        return this.mainContent;
    };
    
    Menu.prototype.onHashChange = function(event,data) {
        this.render(this.mainNode);
		this.showWidget();
    };

    Menu.prototype.hideWidget = function() {
        this.mainNode.hide();
    };
	
	Menu.prototype.showWidget = function() {
        this.mainNode.show();
    };
     return Menu;
});

