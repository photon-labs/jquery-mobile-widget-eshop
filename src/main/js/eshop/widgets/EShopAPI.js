/*global define, $, window */

define( "eshop/widgets/EShopAPI", [ "jquery-ui", "xml2json", "framework/Clazz", "framework/Widget" ], function($, Clazz, Widget) {

	function EShopAPI() {
	}

	EShopAPI.prototype = new Clazz();
	EShopAPI.prototype = new Widget();

	EShopAPI.prototype.apiHost = undefined;
    EShopAPI.prototype.xmlDoc = undefined;
    //EShopAPI.prototype.wsURL = undefined;
    EShopAPI.prototype.wsURLWithoutContext = undefined;
    EShopAPI.prototype.productArray = undefined;
    EShopAPI.prototype.resgisterresponse = undefined;
	EShopAPI.prototype.loginresponse = undefined;

    EShopAPI.prototype.initialize = function() {
		this.productArray = [];
		//this.getWsConfig();
		this.resgisterresponse = {};
		this.loginresponse = {};
		this.configService();
    };

    EShopAPI.prototype.getWsConfig = function () {
        
        var url = "environment.jsp", api = this;
        $.ajax({
            url: url,
            header:"Access-Control-Allow-Headers: x-requested-with",
            type: "GET",
            dataType: "json",
            crossDomain: true,
            cache: true,
			async: false,
            success : function(jo, e, xhr) {

				$.ajax({
					type: "GET",
					url: "resources/phresco-env-config.xml",
					dataType: "xml",
		            crossDomain: true,
					async: false,
					success: function (xml) {
						api.xmlDoc = xml;
						var currentEnv = jo.environment,
						type = "WebService", name = "", 
						configdata = api.getConfigByName(currentEnv, type, name), 
						host = configdata.host, 
						port = configdata.port,
						protocol = configdata.protocol, 
						context = configdata.context, 
						username = configdata.username,
						password = configdata.password,
						urlWithoutContext = protocol + '://' + host + ':' + port,
						url = protocol + '://' + host + ':' + port + '/' + context;
						api.wsURL = url;
						api.wsURLWithoutContext = urlWithoutContext;
					},
					error : function(xhr, e, et){
						var jo = {"status":"server error"};
					}
				});
            },
            error : function(xhr, e, et){
                var jo = {"status":"server error"};
            }
        });             
    };
    
    EShopAPI.prototype.getCategories = function (callback) {
		var eshopAPI = this;	           
		var url = eshopAPI.wsURL + '/rest/api/categories?callback=?';
			           
		var url = this.wsURL + '/rest/api/categories';
		$.ajax({
			url: url,
			header:"Access-Control-Allow-Headers: x-requested-with",
			type: "GET",
			dataType: "json",
			crossDomain: true,
			cache: true,
			async:false,
			success : function(jo, e, xhr) {
				if(callback !== null) {
					callback(jo);
				}
			},
			error : function(xhr, e, et){
				var jo = {"status":"server error"};
				if(callback !== null) {
					callback(jo);
				}
			}
		});
    };

	EShopAPI.prototype.getTopsellProducts = function (callback) {
	
		var eshopAPI = this;	           
		var url = eshopAPI.wsURL + '/rest/api/specialproducts';
		$.ajax({
			url: url,
			header:"Access-Control-Allow-Headers: x-requested-with",
			type: "GET",
			dataType: "json",
			crossDomain: true,
			cache: true,
			success : function(jo, e, xhr) {
				if(callback !== null) {
					callback(jo);
				}
			},
			error : function(xhr, e, et){
				var jo = {"status":"server error"};
				if(callback !== null) {
					callback(jo);
				}
			}
		});
	};

    EShopAPI.prototype.getConfigByName = function (currentEnv, type, name) {
		
		var eshopAPI = this;, i, envNode, env, envDefault, 
        environments =  api.xmlDoc.documentElement.getElementsByTagName("environment"); 
            for (i = 0; i < environments.length; i++) {
                envNode = environments[i];
                env = envNode.getAttribute("name");
                envDefault = envNode.getAttribute("default");
				
                if (currentEnv !== undefined && currentEnv !== "") {
                    if (currentEnv === env) {
                        return eshopAPI.getConfigJson(envNode, type, name);
                    }
                } else if (envDefault === "true") {
                    return eshopAPI.getConfigJson(envNode, type, name);
                }
            }
    };

    EShopAPI.prototype.getConfigJson = function(envNode, type, name) {
        
        var nodes = envNode.childNodes, i, configNode, configNodeName, configName, xmlString, xmlSerializer,
        json = {};

        for (i = 0; i < nodes.length; i++) {
            configNode = nodes[i];
            configNodeName = configNode.nodeName;

            if (configNodeName === type && name !== undefined && configNodeName !== "#text") {
                configName = configNode.getAttribute("name");
                if (configName === name) {
                    xmlString = (new window.XMLSerializer()).serializeToString(configNode);
                    json = $.xml2json(configNode);
                    return json;
                } else if (name === "") {
                    xmlString = (new window.XMLSerializer()).serializeToString(configNode);
                    json = $.xml2json(configNode);
                    return json;
                }
            } else if (configNodeName === type && configNodeName !== "#text") {
                xmlString = (new window.XMLSerializer()).serializeToString(configNode);
                json = $.xml2json(configNode);
                return json;
            }
        }

        return json;
    };
	
	EShopAPI.prototype.configService = function () {
	          
	        var eshopAPI = this,
	        url = eshopAPI.wsURL + '/rest/api/config';
			$.ajax({
				url: url,
				header:"Access-Control-Allow-Headers: x-requested-with",
				type: "GET",
				dataType: "json",
				crossDomain: true,
				cache: true,
				async: false,
				success : function(response) {
					api.configresponse = response;
					//console.info("api.configresponse", api.configresponse);
				},
				error : function(xhr, e, et){
					var jo = {"status":"server error"};
					/*if(callback != null) {
						callback(jo);
					}*/
				}
			});
	};
    
    EShopAPI.prototype.getAllProducts = function (categoryId, callback) {
	
		if(categoryId === 0){
			categoryId = 1;
		}
		var eshopAPI = this;
		var url = eshopAPI.wsURL + '/rest/api/categories/' + categoryId + '?callback=?';

		if(categoryId === 'All Products'){
			url = eshopAPI.wsURL + '/rest/api/products/?callback=?';
		} else if(categoryId === 'Special Products') {
			url = eshopAPI.wsURL + '/rest/api/specialproducts/?callback=?';
        }

		$.ajax({
			url: url,
			header:"Access-Control-Allow-Headers: x-requested-with",
			type: "GET",
			dataType: "json",
			crossDomain: true,
			cache: true,
			async:false,
			success : function(jo, e, xhr) {
				if(callback !== null) {
					callback(jo);
				}
			},
			error : function(xhr, e, et){
				var jo = {"status":"server error"};
				if(callback !== null) {
					callback(jo);
				}
			}
		});
    };

    EShopAPI.prototype.getProductDetails = function (data,callback) {
		
		if(data === null || data <= 0 || data === undefined) {
			return null;
			
		}

		var url = eshopAPI.wsURL + '/rest/api/products/' +data ;
		$.ajax({
			url: url,
			header:"Access-Control-Allow-Headers: x-requested-with",
			type: "GET",
			dataType: "json",
			crossDomain: true,
			cache: true,
			success : function(jo, e, xhr) {
				if(callback !== null) {
					callback(jo);
				}
			},
			error : function(xhr, e, et){
				var jo = {"status":"server error"};
				if(callback !== null) {
					callback(jo);
				}
			}
		});
    };  
	
    EShopAPI.prototype.searchProducts = function (searchCriteria,callback) {
		
		var url = eshopAPI.wsURL + '/rest/api/products/search/' + searchCriteria +'?callback=?';
		$.ajax({
			url: url,
			header:"Access-Control-Allow-Headers: x-requested-with",
			type: "GET",
			dataType: "json",
			crossDomain: true,
			cache: true,
			success : function(jo, e, xhr) {
				if(callback !== null) {
					callback(jo);
				}
			},
			error : function(xhr, e, et){
				var jo = {"status":"server error"};
				if(callback !== null) {
					callback(jo);
				}
			}
		});
    };

    EShopAPI.prototype.doRegister = function (data) {
        var eshopAPI = this,
        url = eshopAPI.wsURL + '/rest/api/post/register';
		$.ajax({
			url: url,
			data: data,
			header:"Access-Control-Allow-Headers: x-requested-with",
			type: "POST",
			dataType: "json",
			crossDomain: true,
			cache: true,
			async: false,
			success : function(response) {
				api.resgisterresponse = response;
			},
			error : function(xhr, e, et){
				var jo = {"status":"server error"};
				/*if(callback != null) {
					callback(jo);
				}*/
			}
		});
    };

    EShopAPI.prototype.doLogin = function (data) {
          
        var eshopAPI = this,
        url = eshopAPI.wsURL + '/rest/api/post/login';
		$.ajax({
			url: url,
			data: data,
			header:"Access-Control-Allow-Headers: x-requested-with",
			type: "POST",
			dataType: "json",
			crossDomain: true,
			cache: true,
			async: false,
			success : function(response) {
				api.loginresponse = response;
			},
			error : function(xhr, e, et){
				var jo = {"status":"server error"};
				/*if(callback != null) {
					callback(jo);
				}*/
			}
		});
    };

    EShopAPI.prototype.getProductReview = function (productId, callback) {
		var eshopAPI = this;
		if(productId === 0){
			productId = 1;
		}

		var url = eshopAPI.wsURL + '/rest/api/products/' + productId +'/reviews?callback=?';

		$.ajax({
			url: url,
			header:"Access-Control-Allow-Headers: x-requested-with",
			type: "GET",
			dataType: "json",
			crossDomain: true,
			cache: true,
			success : function(jo, e, xhr) {
				if(callback !== null) {
					callback(jo);
				}
			},
			error : function(xhr, e, et){
				var jo = {"status":"server error"};
				if(callback !== null) {
					callback(jo);
				}
			}
		});
    };

			
    EShopAPI.prototype.postReview = function (data) {
        var api = this,
        url = this.wsURL + '/rest/api/product/post/review';
		$.ajax({
			url: url,
			data: data,
			header:"Access-Control-Allow-Headers: x-requested-with",
			type: "POST",
			dataType: "json",
			crossDomain: true,
			cache: true,
			async: false,
			success : function(response) {
				api.loginresponse = response;
			},
			error : function(xhr, e, et){
				var jo = {"status":"server error"};
				/*if(callback != null) {
					callback(jo);
				}*/
			}
		});
    };

    EShopAPI.prototype.getOrderHistory = function (userid) {
		var api = this, orderhistory,
        url = this.wsURL + '/rest/api/products/orderhistory/' + userid;
		$.ajax({
			url: url,
			//data: {'param1':param1},
			header:"Access-Control-Allow-Headers: x-requested-with",
			type: "GET",
			dataType: "json",
			crossDomain: true,
			cache: true,
			async: false,
			success : function(orderResponse) {
				api.orderhistory = orderResponse;
				/*if(callback != null) {
					callback(jo);
				}*/
			},
			error : function(xhr, e, et){
				var jo = {"status":"server error"};
				/*if(callback != null) {
					callback(jo);
				}*/
			}
		});           
    };

    EShopAPI.prototype.postOrder = function (orderDetail, customerEmail, comments,productDetails, cartTotal, totalItem, userId) {       
        var data = {}, customerInfo = {};
        data.products = productDetails;
        data.paymentMethod = "Cash on Delivery";
        customerInfo.emailID = customerEmail;
        customerInfo.deliveryAddress = orderDetail;
        customerInfo.billingAddress = orderDetail;
        data.customerInfo = customerInfo;
		data.totalItem = totalItem;
        data.totalPrice = cartTotal;
        data.comments = comments;
		data.userId = userId;

        $.post(this.wsURL + '/rest/api/product/post/orderdetail', data, function(response) {
		     // Do something with the request
        }, 'json');
    };

	return EShopAPI;
});