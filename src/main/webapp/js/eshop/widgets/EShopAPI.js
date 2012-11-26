/*global define, $, xml2json, window */

define( "eshop/widgets/EShopAPI", [ "jquery", "framework/Clazz", "framework/Widget" ], function($, Clazz, Widget) {

	function EShopAPI() {
	}

	EShopAPI.prototype = new Clazz();
	EShopAPI.prototype = new Widget();

	EShopAPI.prototype.apiHost = undefined;
    EShopAPI.prototype.xmlDoc = undefined;
    EShopAPI.prototype.wsURL = undefined;
    EShopAPI.prototype.wsURLWithoutContext = undefined;
    EShopAPI.prototype.productArray = undefined;
    EShopAPI.prototype.resgisterresponse = undefined;
	EShopAPI.prototype.loginresponse = undefined;

    EShopAPI.prototype.initialize = function(config) {
		this.productArray = [];
		this.resgisterresponse = {};
		this.loginresponse = {};
		this.wsURL = config.protocol + '://' + config.host + ':' + config.port + '/' + config.context;
		this.wsURLWithoutContext = config.protocol + '://' + config.host + ':' + config.port + '/';
		this.configService();
    };

    EShopAPI.prototype.getCategories = function (callback) {
		var api = this, url = api.wsURL + '/rest/api/categories?callback=?';

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
	
		var api = this, url = api.wsURL + '/rest/api/specialproducts';
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
	
	EShopAPI.prototype.configService = function () {

	        var api = this,
	        url = api.wsURL + '/rest/api/config?callback=?';
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
		var api = this, url = api.wsURL + '/rest/api/categories/' + categoryId + '?callback=?';
		
		if(categoryId === 0){
			categoryId = 1;
		}

		if(categoryId === 'All Products'){
			url = api.wsURL + '/rest/api/products/?callback=?';
		} else if(categoryId === 'Special Products') {
			url = api.wsURL + '/rest/api/specialproducts/?callback=?';
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

		var api = this, url = api.wsURL + '/rest/api/products/' +data ;
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
		
		var api = this, url = api.wsURL + '/rest/api/products/search/' + searchCriteria +'?callback=?';
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
        var api = this, url;
		$.support.cors = true;
        url = api.wsURL + '/rest/api/post/register';
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
          
        var api = this,
        url = api.wsURL + '/rest/api/post/login';
		$.support.cors = true;
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
		var api = this, url = api.wsURL + '/rest/api/products/' + productId +'/reviews?callback=?';
		
		if(productId === 0){
			productId = 1;
		}

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