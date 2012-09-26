/*global $, require, window */

// When the document is ready:
$().ready(function() {

	require(  [ "eshop/widgets/EShopAPI", "eshop/widgets/Phresco", "framework/Listener", "eshop/widgets/NavigationBootstrap", "eshop/widgets/CategoryBootstrap", "eshop/widgets/ProductBootstrap", "eshop/widgets/OrderFormBootstrap", "eshop/widgets/OrderFormViewBootstrap", "eshop/widgets/OrderHistoryBootstrap", "eshop/widgets/MyCartBootstrap", "eshop/widgets/ProductDetailsBootstrap", "eshop/widgets/ShoppingCartBootstrap", "eshop/widgets/RegisterSuccessBootstrap", "eshop/widgets/LoginBootstrap", "eshop/widgets/RegisterBootstrap", "eshop/widgets/OrderSuccessBootstrap", "eshop/widgets/MenuBootstrap", "eshop/widgets/HeaderBootstrap", "eshop/widgets/FooterBootstrap", "eshop/widgets/LoginSuccessBootstrap", "eshop/widgets/ReviewBootstrap", "eshop/widgets/PostReviewBootstrap" ], function(   
				EShopAPI, 
				Phresco, 
				Listener, 
				NavigationBootstrap, 
				CategoryBootstrap, 
				ProductBootstrap, 
				OrderFormBootstrap, 
				OrderFormViewBootstrap, 
				OrderHistoryBootstrap, 
				MyCartBootstrap, 
				ProductDetailsBootstrap, 
				ShoppingCartBootstrap, 
				RegisterSuccessBootstrap, 
				LoginBootstrap, 
				RegisterBootstrap, 
				OrderSuccessBootstrap,
				MenuBootstrap,
				HeaderBootstrap,
				FooterBootstrap,
				LoginSuccessBootstrap,
				ReviewBootstrap,
				PostReviewBootstrap) {

		var api, 
		phresco, 
		listener, 
		aboutusBootstrap, 
		navigationBootstrap, 
		searchBootstrap, 
		categoryBootstrap, 
		hideItems, 
		productBootstrap, 
		orderFormBootstrap, 
		orderFormViewBootstrap, 
		orderHistoryBootstrap, 
		myCartBootstrap, 
		newproductsBootstrap, 
		productDetailsBootstrap,
		shoppingCartBootstrap, 
		contactusBootstrap, 
		registerSuccessBootstrap, 
		loginBootstrap, 
		registerBootstrap, 
		orderSuccessBootstrap,
		menuBootstrap,
		headerBootstrap,
		footerBootstrap,
		loginSuccessBootstrap,
		reviewBootstrap,
		postReviewBootstrap;

		listener = new Listener();

		api = new EShopAPI();
        api.initialize(this.configJsonData);
		
		phresco = new Phresco();
		phresco.initialize(listener, api);

		categoryBootstrap = new CategoryBootstrap();
		categoryBootstrap.init(listener, api, phresco);

		navigationBootstrap = new NavigationBootstrap();
		navigationBootstrap.init(listener, api, phresco);
		
		productBootstrap = new ProductBootstrap();
		productBootstrap.init(listener, api, phresco);

		orderFormBootstrap = new OrderFormBootstrap();
		orderFormBootstrap.init(listener, api, phresco);

		orderFormViewBootstrap = new OrderFormViewBootstrap();
		orderFormViewBootstrap.init(listener, api, phresco);
		
		orderSuccessBootstrap = new OrderSuccessBootstrap();
		orderSuccessBootstrap.init(listener, api, phresco);
		
		myCartBootstrap = new MyCartBootstrap();
		myCartBootstrap.init(listener, api, phresco);
		
		productDetailsBootstrap = new ProductDetailsBootstrap();
		productDetailsBootstrap.init(listener, api, phresco);

		loginBootstrap = new LoginBootstrap();
		loginBootstrap.init(listener, api, phresco);
		
		loginSuccessBootstrap = new LoginSuccessBootstrap();
		loginSuccessBootstrap.init(listener, api, phresco); 
		
		registerBootstrap = new RegisterBootstrap();
		registerBootstrap.init(listener, api, phresco);
		
		shoppingCartBootstrap = new ShoppingCartBootstrap();
		shoppingCartBootstrap.init(listener, api, phresco);
		
		menuBootstrap = new MenuBootstrap();
		menuBootstrap.init(listener, api, phresco);
        
        orderSuccessBootstrap = new OrderSuccessBootstrap();
		orderSuccessBootstrap.init(listener, api, phresco);
				
		registerSuccessBootstrap = new RegisterSuccessBootstrap();
		registerSuccessBootstrap.init(listener, api, phresco);

		headerBootstrap = new HeaderBootstrap();
		headerBootstrap.init(listener, api, phresco);	
        
		footerBootstrap = new FooterBootstrap();
		footerBootstrap.init(listener, api, phresco);
		
		reviewBootstrap = new ReviewBootstrap();
		reviewBootstrap.init(listener, api, phresco);
		
		postReviewBootstrap = new PostReviewBootstrap();
		postReviewBootstrap.init(listener, api, phresco);
		
		// For Histroy Browser Back Functiomality
		headerBootstrap.headerWidget.historyback();
		
		hideItems = ['Category', 'Products','ProductDetails', 'Header', 'Navigation','ShoppingCart','OrderFormView','OrderForm','Login','OrderSuccess','Aboutus','Contactus','Register','LoginSuccess','RegisterSuccess','OrderHistory'];
        phresco.hideWidget(hideItems); 
	});
});
