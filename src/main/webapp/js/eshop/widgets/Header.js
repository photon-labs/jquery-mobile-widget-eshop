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
        backBtn1, userId=0, self = this, urlhide, hidestring, url, showpage, arrayofstring, hidepage;
        
        headerInner = $('<div class="headerInner headerTop">');
        btnContainer = $('<div class="btn_container">');
            backBtn = $('<a href="javascript:void(0);"><div class="btn"><div><span></span></div><p>Back</p></div></a>');
                $(backBtn).bind('click', {} , function(event){
                    $('#container').css("display", "block"); 
                    $('#eshop').css("display", "none");
					urlhide = document.URL;
					hidestring = urlhide.split("#");
					hidepage = hidestring[1];
					window.history.back();
					url = document.URL;
					arrayofstring = url.split("#");
					showpage = arrayofstring[1];
					self.hideItems = ['Category', 'Products','ProductDetails','ShoppingCart','OrderFormView','OrderForm','Login','OrderSuccess','Register','LoginSuccess','RegisterSuccess'];
					self.phrescoapi.hideWidget(self.hideItems);
					self.listener.publish(null, "Show"+showpage, [null]);  
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
	
	
	Header.prototype.historyback = function(){
		var urlhide, hidestring, hidepage = [], url, arrayofstring, showpage, self = this ;
		$(window).bind("hashChange", function(e, newHash, oldHash) {
			if(oldHash !== ""){
				hidepage =[oldHash];
				self.phrescoapi.hideWidget(hidepage);
				if(newHash === "Menu"){
					self.listener.publish(null, "Show"+newHash, [null]);
					$('#eshop').css("display", "none"); 
				}
				else{
					self.listener.publish(null, "Show"+newHash, [null]);
				}
			}	
		});
		$(window).hashChange();
	};

    return Header;
});


    