<%--

    PHR_html_jquery_mobileapp

    Copyright (C) 1999-2013 Photon Infotech Inc.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

            http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

--%>
<%@ page import="java.io.InputStream" %>
<%@ page import="java.util.List" %>
<%@ page import="java.io.File" %>
<%@ page import="java.util.Properties" %>			
<%@ page import="com.photon.phresco.configuration.ConfigReader" %>
<%@ page import="com.photon.phresco.configuration.Configuration" %>
<!DOCTYPE html> 
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:eshop="http://phresco.com/">
    <head>
        <title>E-Shop | Phresco</title>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8">
        <meta charset="utf-8">
        <meta name="viewport" content="user-scalable=0, width=device-width, minimum-scale=1.0, maximum-scale=1.0">

        <!-- Linking styles -->
        <link type="text/css" rel="stylesheet" media="screen" href="css/eshop/style.css">
        <link type="text/css" rel="stylesheet" media="screen" href="css/eshop/style1.css"/>
        <link type="text/css" rel="stylesheet" media="screen" href="css/eshop/jquery.loadmask.css"/>

<script type="text/javascript" charset="utf-8" src="js/almond/almond.js"></script>
<script type="text/javascript" src="js/jslibraries/files/jslib_jquery-amd/1.7.1-alpha-1/jslib_jquery-amd-1.7.1-alpha-1.js"></script>
<script type="text/javascript" src="js/framework/Clazz.js"></script>
<script type="text/javascript" src="js/framework/Base.js"></script>
<script type="text/javascript" src="js/framework/Widget.js"></script>
<script type="text/javascript" src="js/eshop/widgets/LoginSuccess.js"></script>
<script type="text/javascript" src="js/eshop/widgets/LoginSuccessBootstrap.js"></script>
<script type="text/javascript" src="js/eshop/widgets/RegisterSuccess.js"></script>
<script type="text/javascript" src="js/eshop/widgets/RegisterSuccessBootstrap.js"></script>
<script type="text/javascript" src="js/eshop/widgets/Login.js"></script>
<script type="text/javascript" src="js/eshop/widgets/LoginBootstrap.js"></script>
<script type="text/javascript" src="js/jslibraries/files/jslib_jsonpath-amd/0.8.0/jslib_jsonpath-amd-0.8.0.js"></script>
<script type="text/javascript" src="js/eshop/widgets/Phresco.js"></script>
<script type="text/javascript" src="js/jslibraries/files/jslib_xml2json-amd/1.1/jslib_xml2json-amd-1.1.js"></script>
<script type="text/javascript" src="js/jslibraries/files/jslib_jquery-ui-amd/1.8.16-alpha-1/jslib_jquery-ui-amd-1.8.16-alpha-1.js"></script>
<script type="text/javascript" src="js/eshop/widgets/EShopAPI.js"></script>
<script type="text/javascript" src="js/eshop/widgets/Menu.js"></script>
<script type="text/javascript" src="js/eshop/widgets/MenuBootstrap.js"></script>
<script type="text/javascript" src="js/eshop/widgets/OrderFormView.js"></script>
<script type="text/javascript" src="js/eshop/widgets/OrderFormViewBootstrap.js"></script>
<script type="text/javascript" src="js/eshop/widgets/ProductDetails.js"></script>
<script type="text/javascript" src="js/eshop/widgets/ProductDetailsBootstrap.js"></script>
<script type="text/javascript" src="js/eshop/widgets/OrderForm.js"></script>
<script type="text/javascript" src="js/eshop/widgets/OrderFormBootstrap.js"></script>
<script type="text/javascript" src="js/eshop/widgets/Navigation.js"></script>
<script type="text/javascript" src="js/eshop/widgets/NavigationBootstrap.js"></script>
<script type="text/javascript" src="js/framework/Listener.js"></script>
<script type="text/javascript" src="js/eshop/widgets/Products.js"></script>
<script type="text/javascript" src="js/eshop/widgets/ProductsBootstrap.js"></script>
<script type="text/javascript" src="js/eshop/widgets/Register.js"></script>
<script type="text/javascript" src="js/eshop/widgets/RegisterBootstrap.js"></script>
<script type="text/javascript" src="js/eshop/widgets/OrderSuccess.js"></script>
<script type="text/javascript" src="js/eshop/widgets/OrderSuccessBootstrap.js"></script>
<script type="text/javascript" src="js/eshop/widgets/Category.js"></script>
<script type="text/javascript" src="js/eshop/widgets/CategoryBootstrap.js"></script>
<script type="text/javascript" src="js/eshop/widgets/MyCart.js"></script>
<script type="text/javascript" src="js/eshop/widgets/MyCartBootstrap.js"></script>
<script type="text/javascript" src="js/eshop/widgets/PostReview.js"></script>
<script type="text/javascript" src="js/eshop/widgets/PostReviewBootstrap.js"></script>
<script type="text/javascript" src="js/eshop/widgets/Header.js"></script>
<script type="text/javascript" src="js/jslibraries/files/history/jslib_jquery.hashable/1.0.0/jslib_jquery.hashable-1.0.0.js"></script>

		<%
			String currentEnv = System.getProperty("SERVER_ENVIRONMENT");
			if(currentEnv == null) {
				currentEnv = "Production";
			}
			String path = application.getRealPath("/WEB-INF/resources/phresco-env-config.xml");
			File file = new File(path);
			ConfigReader reader = new ConfigReader(file);
			String configJson = reader.getConfigAsJSON(currentEnv, "WebService");
		%>
		
		<script type="text/javascript">
			var configJsonData = $.parseJSON('<%= configJson%>'); 
		</script>
		
<script type="text/javascript" src="js/eshop/widgets/HeaderBootstrap.js"></script>
<script type="text/javascript" src="js/eshop/widgets/Review.js"></script>
<script type="text/javascript" src="js/eshop/widgets/ReviewBootstrap.js"></script>
<script type="text/javascript" src="js/eshop/widgets/OrderHistory.js"></script>
<script type="text/javascript" src="js/eshop/widgets/OrderHistoryBootstrap.js"></script>
<script type="text/javascript" src="js/eshop/widgets/ShoppingCart.js"></script>
<script type="text/javascript" src="js/eshop/widgets/ShoppingCartBootstrap.js"></script>
<script type="text/javascript" src="js/eshop/widgets/Footer.js"></script>
<script type="text/javascript" src="js/eshop/widgets/FooterBootstrap.js"></script>
<script type="text/javascript" src="js/eshop/widgets/Init.js"></script>
    </head>
    <body>

        <div id="splash" class="img_div">
           <img src="images/eshop/splash_logo.png" class="spalsh">
        </div>

        <div id="container">
            <eshop:menu-widget api=api></eshop:menu-widget>
        </div>

        <div id="eshop" style="display:none">
            <div id="header">
                <eshop:header-widget api=api></eshop:header-widget> 
            </div>

            <div id="header-tab" class="header_tab">
                <eshop:navigation-widget api=api></eshop:navigation-widget>
            </div>

            <div id="wrapper">
                <div id="scroller">
                    <eshop:category-widget api=api></eshop:category-widget>
                    <eshop:products-widget api=api></eshop:products-widget>
                    <eshop:productDetails-widget api=api></eshop:productDetails-widget>
                    <eshop:shoppingcart-widget api=api></eshop:shoppingcart-widget>
					<eshop:orderform-widget api=api></eshop:orderform-widget>
                    <eshop:orderformview-widget api=api></eshop:orderformview-widget>
					<eshop:ordersuccess-widget api=api></eshop:ordersuccess-widget>
                    <eshop:review-widget api=api></eshop:review-widget>
                    <eshop:postReview-widget api=api></eshop:postReview-widget>  
                    <eshop:myCart-widget api=api></eshop:myCart-widget>
                    <eshop:register-widget api=api></eshop:register-widget>
                    <eshop:registerSuccess-widget api=api></eshop:registerSuccess-widget> 
                    <eshop:login-widget api=api></eshop:login-widget>
                    <eshop:loginsuccess-widget api=api></eshop:loginsuccess-widget> 
                </div>
            </div>
			<div id="footer">
				<eshop:footer-widget api=api></eshop:footer-widget> 
			</div>
        </div>

	</body>
</html>