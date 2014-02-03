/*global define, $, window */

define( "eshop/widgets/Register", [ "jquery", "framework/Clazz", "framework/Widget" ], function($, Clazz, Widget) {

    function Register() {
    }

    Register.prototype = new Clazz();    
    Register.prototype = new Widget(); 

    Register.prototype.mainNode = undefined;
    Register.prototype.mainContent = undefined;
    Register.prototype.hideItems = undefined;
    Register.prototype.listener = undefined;
    Register.prototype.api = undefined;
    Register.prototype.phrescoapi = undefined;

    Register.prototype.initialize = function(container, listener, api, phrescoapi) {
        listener.subscribe("Register", this, "onHashChange");
		listener.subscribe("ShowRegister", this, "showWidget");
        this.mainNode = container;
        this.hideItems = [];
        this.listener = listener;
        this.api = api;
        this.phrescoapi = phrescoapi;
    };

    Register.prototype.setMainContent = function() {
	    
	    var self = this, mainContent, myCart, log_div, log_innerdiv, log_innerdiv1, log_heading, log_txt_div, log_txtfname,
        log_txt_lftfname, log_txt_rhtfname, log_txtlname, log_txt_lftlname, log_txt_rhtlname, log_txt1, log_txt_lft, log_txt_rht,
        log_txt2, log_txt_lft2, log_txt_rht2, log_txt3, log_txt_lft3, log_txt_rht3, log_txt4, log_bu_div, log_bu_login, log_reg_bu,
        log_bu_cancel, log_reg_bu1, checkout_btn, log_reg_bu2, clearDiv, copydiv1, copyinnerdiv, copyinnerdiv1, copyheading, copyRight,
        privacyPolicy, poweredBy;

        mainContent = $('<div class="mycart_div"></div>');
        log_div = $('<div class="log_div"></div>');
        log_innerdiv = $('<div class="log_innerdiv"></div>');
        log_innerdiv1 = $('<div class="log_innerdiv1"></div>');
        log_heading = $('<div class="log_heading">Register</div>');
        log_txt_div = $('<div class="log_txt_div"></div>');
                                
        log_txtfname = $('<div class="log_txt"><div id="regfirstname_err_div" class="clearfix">');
        log_txt_lftfname = $('<div class="log_txt_lft">First Name</div>');
        log_txt_rhtfname = $('<div class="log_txt_rht"><input type="text" name="regfirstname" id="regfirstname" placeholder="First Name" autofocus="autofocus" maxlength="40"/></div><span class="help-inline" id="regfirstname_err"></span>');
        log_txtfname.append(log_txt_lftfname);
        log_txtfname.append(log_txt_rhtfname);

        log_txtlname = $('<div class="log_txt"><div id="reglastname_err_div" class="clearfix">');
        log_txt_lftlname = $('<div class="log_txt_lft">Last Name</div>');
        log_txt_rhtlname = $('<div class="log_txt_rht"><input type="text" name="reglastname" id="reglastname" placeholder="Last Name" maxlength="40"/></div><span class="help-inline" id="reglastname_err"></span>');
        log_txtlname.append(log_txt_lftlname);
        log_txtlname.append(log_txt_rhtlname);

        log_txt1 = $('<div class="log_txt"><div id="regemail_err_div" class="clearfix">');
        log_txt_lft = $('<div class="log_txt_lft">Email Id</div>');
        log_txt_rht = $('<div class="log_txt_rht"><input type="text" name="regemail" id="regemail" placeholder="Email" maxlength="250"/></div><span class="help-inline" id="regemail_err"></span>');
        log_txt1.append(log_txt_lft);
        log_txt1.append(log_txt_rht);

        log_txt2 = $('<div class="log_txt"><div id="regpassword_err_div" class="clearfix">');
        log_txt_lft2 = $('<div class="log_txt_lft">Password</div>');
        log_txt_rht2 = $('<div class="log_txt_rht"><input type="password" name="regpassword" id="regpassword" placeholder="Password" maxlength="20"  /></div><span class="help-inline" id="regpassword_err"></span>');
        log_txt2.append(log_txt_lft2);
        log_txt2.append(log_txt_rht2);

        log_txt3 = $('<div class="log_txt"><div id="regphonenumber_err_div" class="clearfix">');
        log_txt_lft3 = $('<div class="log_txt_lft">Phone</div>');
        log_txt_rht3 = $('<div class="log_txt_rht"><input type="phone" name="regphonenumber" id="regphonenumber" placeholder="Phone Number" maxlength="20" /></div><span class="help-inline" id="regphonenumber_err"></span>');
        log_txt3.append(log_txt_lft3);
        log_txt3.append(log_txt_rht3);

        log_txt4 = $('<div class="log_txt">');
        log_bu_div = $('<div class="log_bu_div">');
        log_bu_login = $('<div class="log_bu_login">');
        log_reg_bu = $('<div class="log_reg_bu"><a href="#">Register</a></div>');

        $(log_reg_bu).on('click', function(e){
            e.preventDefault();
            self.hideItems = ['Register'];
            if(self.phrescoapi.userRegister() === true){
                var obj =  self.api.doRegister(self.phrescoapi.registerdata);
                self.phrescoapi.hideWidget(self.hideItems);
                self.listener.publish(event,"RegisterSuccess",[event.data]);
                self.listener.publish(event,"Navigation",[event.data]);
            }
        });  

        log_bu_login.append(log_reg_bu);
        log_bu_cancel = $('<div class="log_bu_cancel">');
        log_reg_bu1 = $('<div class="log_reg_bu"><a href="javascript:void(0);">Cancel</a></div>');

        $(log_reg_bu1).on('click', function(event){
            self.hideItems = ['Register','Navigation','Header','Footer'];
            $("#footer").show();
            $("#eshop").hide();
            self.phrescoapi.hideWidget(self.hideItems);
            self.listener.publish(event,"Menu",[event.data]);
        });   

        log_bu_cancel.append(log_reg_bu1);       
        log_bu_div.append(log_bu_login);     
        log_bu_div.append(log_bu_cancel);
        log_txt4.append(log_bu_div);   
 
        log_txt_div.append(log_txtfname);
        log_txt_div.append(log_txtlname);
        log_txt_div.append(log_txt1);
        log_txt_div.append(log_txt2);
        log_txt_div.append(log_txt3);
        log_txt_div.append(log_txt4);

        log_innerdiv1.append(log_heading);
        log_innerdiv1.append(log_txt_div);

        checkout_btn = $('<div class="checkout_btn">');
        log_reg_bu2 = $('<div class="log_reg_bu"><a href="#">Login</a></div>');
        clearDiv = $('<div style="clear:both"></div>');
        checkout_btn.append(log_reg_bu2);
        checkout_btn.append(clearDiv);
		
        log_innerdiv.append(log_innerdiv1);
        log_innerdiv.append(checkout_btn);
        log_div.append(log_innerdiv);
        mainContent.append(log_div);
        copydiv1 = $('<div class="log_div"></div>');
        copyinnerdiv = $('<div class="log_innerdiv">');
        copyinnerdiv1 = $('<div class="log_innerdiv1">');
        copyheading = $('<div class="copywrite">');
        copyRight = $('<strong> E-Shop Phresco &copy; 2011 </strong>');
        privacyPolicy = $('<a class="link" href="#">Privacy Policy</a><br />');
        poweredBy = $('<a class="link" href="#">powered by Photon</a>');
        copyheading.append(copyRight);
        copyheading.append(privacyPolicy);
        copyheading.append(poweredBy);
        copyinnerdiv1.append(copyheading);
        copyinnerdiv.append(copyinnerdiv1);
        copydiv1.append(copyinnerdiv);
        mainContent.append(copydiv1);
        this.mainContent = mainContent;
    };
	
	Register.prototype.registerTest = function(registerdata) {
		var self = this;
		self.api.doRegister(registerdata);
		return self.api.resgisterresponse.successMessage;
	};

    Register.prototype.renderUI = function() {
        this.setMainContent();
		this.phrescoapi.navigateToPath( "#Register" );
        return this.mainContent;
    };
    
    Register.prototype.onHashChange = function(event,data) {
        this.render(this.mainNode);
		this.showWidget();
    };

    Register.prototype.hideWidget = function() {
        this.mainNode.hide();
    };
	
	Register.prototype.showWidget = function() {
        this.mainNode.show();
		$('#eshop').show();
    };

    return Register;
});