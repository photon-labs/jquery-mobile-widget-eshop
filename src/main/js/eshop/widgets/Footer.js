/*global define, $, window */

define( "eshop/widgets/Footer", [ "jquery", "framework/Clazz", "framework/Widget" ], function($, Clazz, Widget) {

    function Footer() {
    }

    Footer.prototype = new Clazz();    
    Footer.prototype = new Widget(); 

    Footer.prototype.mainNode = undefined;
    Footer.prototype.mainContent = undefined;
    Footer.prototype.hideItems = undefined;
    Footer.prototype.listener = undefined;
    Footer.prototype.phrescoapi = undefined;
    Footer.prototype.api = undefined;

    Footer.prototype.initialize = function(container, listener, api, phrescoapi) {
        listener.subscribe("Footer", this, "onHashChange");
        this.mainNode = container;
        this.listener = listener;
        this.phrescoapi = phrescoapi;
        this.hideItms = [];
        this.api = api; 
    };

    Footer.prototype.setMainContent = function() {
          // targetNode.empty();
        var data, mainContent = $('<div ></div>'), 
        self = this, myCart = $('<div class="mycart_div"></div>'),
        footerContainer = $('<div id="container-foot" class="footer footerTop">'), ul, homeLI, browseLI,
        specialOffersLI, myCartLI, moreLI;
        ul = $('<ul>');
        homeLI = $('<li class="home"></li>');
       
        browseLI = $('<li class="offerttab">');
        browseLI = $('<li id="browse" class="browse" ></li>');
        (browseLI).bind('click', function(event){
            $(homeLI).removeClass("home_active");
            $(browseLI).addClass("browse_active");
            $(specialOffersLI).removeClass("spl_offer_active");
            $(myCartLI).removeClass("mycart_active");
            $(moreLI).removeClass("more_active");

            self.hideItems = ['Login', 'LoginSuccess', 'Menu', 'MyCart', 'OrderForm', 'OrderFormView', 'OrderHistory', 'OrderSuccess', 'PostReview', 'ProductDetails', 'Review', 'Products', 'Register', 'ResgisterSuccess', 'ShoppingCart'];
            self.phrescoapi.hideWidget(self.hideItems);
            self.listener.publish(event,"Category", [event.data]);
        });    

        specialOffersLI = $('<li class="searchtab">');
        specialOffersLI = $('<li id="spl_offer" class="spl_offer"></li>');


        myCartLI = $('<li class="mucarttab">');
        myCartLI = $('<li id="mycart" class="mycart"></li>');
        moreLI = $('<li class="moretab">');
        moreLI = $('<li class="more"></li>');
        ul.append(homeLI);
        ul.append(browseLI);
        ul.append(specialOffersLI);
        ul.append(myCartLI);
        ul.append(moreLI);
        footerContainer.append(ul);
        mainContent.append(footerContainer);  
        this.mainContent = mainContent;
        self.addFunction(homeLI, browseLI, specialOffersLI, myCartLI, moreLI, self);    
    };
    
    Footer.prototype.renderUI = function() {
        this.setMainContent();
        return this.mainContent;
    };
    
    Footer.prototype.onHashChange = function(data) {
        this.render(this.mainNode);
        this.mainNode.show();
    };

    Footer.prototype.hideWidget = function(){
        this.mainNode.hide();
    };

    Footer.prototype.addFunction = function(homeLI, browseLI, specialOffersLI, myCartLI, moreLI, self){

         $(homeLI).bind('click', {} , function(event){
            self.hideItems = ['ProductDetails','ShoppingCart','Navigation','Category','OrderFormView','OrderForm','Login','OrderSuccess','Register','LoginSuccess','RegisterSuccess','Footer','Header', 'Review', 'PostReview'];
            self.phrescoapi.hideWidget(self.hideItems);
            self.listener.publish(event,"Menu",[event.data]);
            $("#eshop").css("display","none");
        });

        $(browseLI).bind('click', function(event){
            $(homeLI).removeClass("home_active");
            $(browseLI).addClass("browse_active");
            $(specialOffersLI).removeClass("spl_offer_active");
            $(myCartLI).removeClass("mycart_active");
            $(moreLI).removeClass("more_active");

            self.hideItems = ['Login', 'LoginSuccess', 'Menu', 'MyCart', 'OrderForm', 'OrderFormView', 'OrderHistory', 'OrderSuccess', 'PostReview', 'Review', 'ProductDetails', 'Products', 'Register', 'ResgisterSuccess', 'ShoppingCart'];
            self.phrescoapi.hideWidget(self.hideItems);
            self.listener.publish(event,"Category", [event.data]);
        });


        $(specialOffersLI).bind('click',{}, function(event){
            $(homeLI).removeClass("home_active");
            $(browseLI).removeClass("browse_active");
            $(specialOffersLI).addClass("spl_offer_active");
            $(myCartLI).removeClass("mycart_active");
            $(moreLI).removeClass("more_active");

            self.hideItems = ['Login', 'LoginSuccess', 'Menu', 'MyCart', 'OrderForm', 'OrderFormView', 'OrderHistory', 'OrderSuccess', 'PostReview', 'Review', 'ProductDetails', 'Category', 'Register', 'ResgisterSuccess', 'ShoppingCart'];
            self.phrescoapi.hideWidget(self.hideItems);
            self.listener.publish(event,"Products",[event.data]);
        });

        $(myCartLI).bind('click', {}, function(event){
            if(self.phrescoapi.productArray.length !== 0){
                var data;
                $(homeLI).removeClass("home_active");
                $(browseLI).removeClass("browse_active");
                $(specialOffersLI).removeClass("spl_offer_active");
                $(myCartLI).addClass("mycart_active");
                $(moreLI).removeClass("more_active");
                self.hideItems = ['Login', 'LoginSuccess','Products', 'Menu', 'MyCart', 'OrderForm', 'OrderFormView', 'OrderHistory', 'OrderSuccess', 'PostReview', 'Review', 'ProductDetails', 'Category', 'Register', 'ResgisterSuccess', 'ShoppingCart'];
                self.phrescoapi.hideWidget(self.hideItems);
                data = {productArray : self.phrescoapi.productArray, categoryID : null, productID : event.data.productId};
                self.listener.publish(event,"ShoppingCart",data);
            }
        });
    };
    

    return Footer;
});
