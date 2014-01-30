/*global define, $, window */

define( "eshop/widgets/Login", [ "jquery", "framework/Clazz", "framework/Widget" ], function($, Clazz, Widget) {

    function Login() {
    }

    Login.prototype = new Clazz();    
    Login.prototype = new Widget(); 

    Login.prototype.mainNode = undefined;
    Login.prototype.mainContent = undefined;
    Login.prototype.hideItems = undefined;
    Login.prototype.listener = undefined;
    Login.prototype.api = undefined;
    Login.prototype.phrescoapi = undefined;

    Login.prototype.initialize = function(container, listener, api, phrescoapi) {
        listener.subscribe("Login", this, "onHashChange");
		listener.subscribe("ShowLogin", this, "onHashChange");
        this.mainNode = container;
        this.hideItems = [];
        this.listener = listener;
        this.api = api;
        this.phrescoapi = phrescoapi;
    };

    Login.prototype.setMainContent = function() {
        var mainContent = $('<div></div>'), self = this,
        //var apiRef = this.get("apiReference"),
        //url = apiRef.get("wsURLWithoutContext"),
        myCart = $('<div class="mycart_div"></div>'),
        //config = apiRef._getConfigData(),
        userId = 0,
        log_div, log_innerdiv, log_innerdiv1, log_heading, log_txt_div, log_txt1, log_txt_lft,
        log_txt_rht, log_txt2, log_txt_lft2, log_txt_rht2, log_txt4, log_bu_div, log_bu_login, log_reg_bu,
        log_bu_cancel, log_reg_bu1, checkout_btn, log_reg_bu2, clearDiv, copydiv1, copyinnerdiv, copyinnerdiv1, 
        copyheading, copyRight, privacyPolicy, poweredBy;

        //apiRef.set("backPage", "Login");
        //targetNode.empty();
      
        //if(apiRef.get("userId"))
        //    userId = apiRef.get("userId");

        if(userId > 0){
            log_div = $('<div class="log_div"></div>');
            log_innerdiv = $('<div class="log_innerdiv">');
            log_innerdiv1 = $('<div class="log_innerdiv1">');
            log_heading = $('<div class="log_heading">User Already Logged In</div>');
            log_innerdiv1.append(log_heading);
            log_innerdiv.append(log_innerdiv1);
            log_div.append(log_innerdiv);
            myCart.append(log_div); 
        } else{
            log_div = $('<div class="log_div"></div>');
            log_innerdiv = $('<div class="log_innerdiv"></div>');
            log_innerdiv1 = $('<div class="log_innerdiv1"></div>');
            log_heading = $('<div class="log_heading">Login</div>');
            log_txt_div = $('<div class="log_txt_div"></div>');

            log_txt1 = $('<div class="log_txt"><div id="logEmail_err_div" class="clearfix">');
            log_txt_lft = $('<div class="log_txt_lft">Email Id</div>');
            log_txt_rht = $('<div class="log_txt_rht"><input type="text" autofocus="autofocus" name="logEmail" id="logEmail" placeholder="Email" maxlength="250" /></div><span class="help-inline" id="logEmail_err"></span>');

            log_txt2 = $('<div class="log_txt"><div id="logpassword_err_div" class="clearfix">');
            log_txt_lft2 = $('<div class="log_txt_lft">Password</div>');
            log_txt_rht2 = $('<div class="log_txt_rht"><input type="password" name="logpassword" id="logpassword" placeholder="Password" maxlength="20" /></div><span class="help-inline" id="logpassword_err"></span>');
           
            log_txt4 = $('<div class="log_txt">');
            log_bu_div = $('<div class="log_bu_div">');
            log_bu_login = $('<div class="log_bu_login">');
            log_reg_bu = $('<div class="log_reg_bu"><a href="#">Submit</a></div>');
            $(log_reg_bu).bind('click', {} , function(event){
			    event.preventDefault();
			    self.hideItems = ['Login'];
				if(self.phrescoapi.userLogin() === true){
					var obj =  self.api.doLogin(self.phrescoapi.logindata);
					self.phrescoapi.hideWidget(self.hideItems);
					self.listener.publish(event,"LoginSuccess",[event.data]);
					self.listener.publish(event,"Navigation",[event.data]);
				}
			});  
            log_bu_cancel = $('<div class="log_bu_cancel">');
            log_reg_bu1 = $('<div class="log_reg_bu"><a href="javascript:void(0);">Cancel</a></div>');
			$(log_reg_bu1).bind('click', {} , function(event){
				self.hideItems = ['Register','Navigation','Header','Footer'];
				$("#footer").show();
				$("#eshop").hide();
				self.phrescoapi.hideWidget(self.hideItems);
				self.listener.publish(event,"Menu",[event.data]);
		});       

            checkout_btn = $('<div class="checkout_btn">');
            log_reg_bu2 = $('<div class="log_reg_bu"><a href="#">Register</a></div>');
            $(log_reg_bu2).bind('click', {} , function(event){
                self.hideItems = ['Login','LoginSuccess'];
                self.phrescoapi.hideWidget(self.hideItems);
                self.listener.publish(event,"Register",[event.data]);
                // self.listener.publish(event,"Header",[event.data]);
                // self.listener.publish(event,"Navigation",[event.data]);

            });
            clearDiv = $('<div style="clear:both"></div>');
           
            log_txt1.append(log_txt_lft);
            log_txt1.append(log_txt_rht);
            log_txt2.append(log_txt_lft2);
            log_txt2.append(log_txt_rht2);

            log_reg_bu.obj = this;
            //Y.on('click' , this.userLogin , log_reg_bu);

            log_bu_login.append(log_reg_bu);

            log_reg_bu1.obj = this;
            //Y.on('click' , this.showHome , log_reg_bu1);

            log_bu_cancel.append(log_reg_bu1);  

            log_bu_div.append(log_bu_login);     
            log_bu_div.append(log_bu_cancel);
            log_txt4.append(log_bu_div);   

            log_txt_div.append(log_txt1);
            log_txt_div.append(log_txt2);
            log_txt_div.append(log_txt4);

            log_innerdiv1.append(log_heading);
            log_innerdiv1.append(log_txt_div);

            log_reg_bu2.obj = this;
            //Y.on('click' , this.userRegistrationWidget , log_reg_bu2);

            checkout_btn.append(log_reg_bu2);
            checkout_btn.append(clearDiv);

            log_innerdiv.append(log_innerdiv1);
            log_innerdiv.append(checkout_btn);
            log_div.append(log_innerdiv);
            myCart.append(log_div);
        }

        copydiv1 = $('<div class="log_div"></div>');
        copyinnerdiv = $('<div class="log_innerdiv">');
        copyinnerdiv1 = $('<div class="log_innerdiv1">');
        copyheading = $('<div class="log_heading">');
        copyRight = $('<strong> E-Shop Phresco &copy; 2011 </strong>');
        privacyPolicy = $('<a class="link" href="#">Privacy Policy</a><br />');
        poweredBy = $('<a class="link" href="#">powered by Photon</a>');

        copyheading.append(copyRight);
        copyheading.append(privacyPolicy);
        copyheading.append(poweredBy);

        copyinnerdiv1.append(copyheading);
        copyinnerdiv.append(copyinnerdiv1);
        copydiv1.append(copyinnerdiv);
        myCart.append(copydiv1); 

        mainContent.append(myCart);
        this.mainContent = mainContent;
        
       /* if ($('#container').is(":visible")) {
            this.renderWidgets();
        }*/
    };
	
	Login.prototype.loginTest = function(logindata) {
		var obj, api, self = this;
        obj =  self.api.doLogin(logindata);
		return self.api.loginresponse.message;
    };

    Login.prototype.renderUI = function() {
        this.setMainContent();
        //this.mainContent.show();
		this.phrescoapi.navigateToPath( "#Login" );
        return this.mainContent;
    };
    
    Login.prototype.onHashChange = function(event,data) {
        this.render(this.mainNode);
		this.showWidget();
    };

    Login.prototype.hideWidget = function() {
        this.mainNode.hide();
    };
	
	Login.prototype.showWidget = function() {
        this.mainNode.show();
		$('#eshop').show();
    };

    return Login;
});
