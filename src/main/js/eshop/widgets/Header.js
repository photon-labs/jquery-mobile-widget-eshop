
/*global define, $ window */

define( "eshop/widgets/Header", [ "jquery", "framework/Clazz", "framework/Widget" ], function($, Clazz, Widget) {

    function Header() {
    }

    Header.prototype = new Clazz();    
    Header.prototype = new Widget(); 

    Header.prototype.mainNode = undefined;
    Header.prototype.mainContent = undefined;
    Header.prototype.hideItems = undefined;
    Header.prototype.listener = undefined;
    Header.prototype.phrescoapi = undefined;
    Header.prototype.api = undefined;

    Header.prototype.initialize = function(container, listener, api, phrescoapi) {
        listener.subscribe("Header", this, "onHashChange");
        this.mainNode = container;
        this.listener = listener;
        this.phrescoapi = phrescoapi;
        this.hideItms = [];
        this.api = api; 
    };

    Header.prototype.setMainContent = function() {
        var mainContent = $('<div></div>'), headerInner, btnContainer, backBtn, logo, btnContainer1, 
        backBtn1, userId=0, self = this;
        
        headerInner = $('<div class="headerInner headerTop">');
        btnContainer = $('<div class="btn_container">');
            backBtn = $('<a href="javascript:void(0);"><div class="btn"><div><span></span></div><p>Back</p></div></a>');
                $(backBtn).bind('click', {} , function(event){
                    // alert('123');
                    $('#container').css("display", "block"); 
                    $('#eshop').css("display", "none");
                    self.hideItems = ['Category', 'Products','Header', 'Login', 'ProductDetails', 'Register', 'OrderSuccess', 'OrderFormView', 'OrderForm', 'MyCart'];
                    self.phrescoapi.hideWidget(self.hideItems);
                    self.listener.publish(event,"Menu",[event.data]);
                });        
                btnContainer.append(backBtn);

        logo = $('<div class="logo"><img src="images/eshop/logo.png" alt="image" />');
        headerInner.append(btnContainer);
        headerInner.append(logo);
        
        if(userId > 0){
            btnContainer1 = $('<div class="btn_container1">');
            backBtn1 = $('<a href="javascript:void(0);"><div class="btn"><div><span></span></div><p>Logout</p></div></a>');
            btnContainer1.append(backBtn1);
            headerInner.append(btnContainer1);
        }

        mainContent.append(headerInner);
        this.mainContent = mainContent;
    };

    Header.prototype.renderUI = function() {
        this.setMainContent();
        this.mainContent.show();
        return this.mainContent;
    };
    
    Header.prototype.onHashChange = function(data) {
        this.render(this.mainNode);
        this.mainNode.show();
    };
    
    Header.prototype.hideWidget = function(){
        this.mainNode.hide();
    };

    return Header;
});


    