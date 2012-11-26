/*global define, $, window */

define( "eshop/widgets/LoginSuccess", [ "jquery", "framework/Clazz", "framework/Widget" ], function($, Clazz, Widget) {

    function LoginSuccess() {
    }

    LoginSuccess.prototype = new Clazz();    
    LoginSuccess.prototype = new Widget(); 

    LoginSuccess.prototype.mainNode = undefined;
    LoginSuccess.prototype.mainContent = undefined;
    LoginSuccess.prototype.hideItems = undefined;
    LoginSuccess.prototype.listener = undefined;
    LoginSuccess.prototype.api = undefined;
    LoginSuccess.prototype.phrescoapi = undefined;

    LoginSuccess.prototype.initialize = function(container, listener, api, phrescoapi) {
        listener.subscribe("LoginSuccess", this, "onHashChange");
        this.mainNode = container;
        this.hideItems = [];
        this.listener = listener;
        this.api = api;
        this.phrescoapi = phrescoapi;
    };

    LoginSuccess.prototype.setMainContent = function() {

		var mainContent = $('<div></div>'),
		self = this,
        myCart = $('<div class="mycart_div"></div>'),
        userId = 0,
        log_div,log_innerdiv,log_innerdiv1,log_heading,log_txt_div,
        registrationStatus,statusMsg,log_txtEmail,log_txt_lftEmail,
        log_txt_rhtEmail,copydiv1,copyinnerdiv,copyinnerdiv1,copyheading,
        copyRight,privacyPolicy,poweredBy;
		
		myCart = $('<div class="mycart_div"></div>');
        log_div = $('<div class="log_div"></div>');
        log_innerdiv = $('<div class="log_innerdiv"></div>');
        log_innerdiv1 = $('<div class="log_innerdiv1"></div>');
        log_heading = $('<div class="log_heading">Login</div>');
        log_txt_div = $('<div class="log_txt_div"></div>');
                            
        registrationStatus = $('<div class="log_txt"></div>');
        statusMsg = $('<div class="logStatus_txt">Status : '+ self.api.loginresponse.successMessage +'</div>');
        registrationStatus.append(statusMsg);
                          
        log_txtEmail = $('<div class="log_txt">');
		log_txt_lftEmail = $('<div class="logStatus_txt">Email : '+ self.phrescoapi.login.loginEmail+' </div>');
        /* log_txt_rhtEmail = $('<div class="log_txt_lft"></div>'); */
        log_txtEmail.append(log_txt_lftEmail);
        log_txtEmail.append(log_txt_rhtEmail);
                       
        log_txt_div.append(registrationStatus);
        log_txt_div.append(log_txtEmail);

        log_innerdiv1.append(log_heading);
        log_innerdiv1.append(log_txt_div);

        log_innerdiv.append(log_innerdiv1);
        log_div.append(log_innerdiv);
        myCart.append(log_div);
                                        
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
	};
        
    LoginSuccess.prototype.renderUI = function() {
        this.setMainContent();
        return this.mainContent;
    };
    
    LoginSuccess.prototype.onHashChange = function(data) {
        this.render(this.mainNode);
        this.mainNode.show();
    };

    LoginSuccess.prototype.hideWidget = function(){
        this.mainNode.hide();
    };

    return LoginSuccess;
});
