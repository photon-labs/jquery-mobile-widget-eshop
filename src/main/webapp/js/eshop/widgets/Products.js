/*global define, $, window */

define( "eshop/widgets/Products", [ "jquery", "framework/Clazz", "framework/Widget" ], function($, Clazz, Widget) {

    function Products() {
    }

    Products.prototype = new Clazz();    
    Products.prototype = new Widget(); 

    Products.prototype.mainNode = undefined;
    Products.prototype.mainContent = undefined;
    Products.prototype.categoryId = undefined;
    Products.prototype.hideItms = undefined;
    Products.prototype.searchCriteria = undefined;
    Products.prototype.phrescoapi = undefined;
    Products.prototype.listener = undefined;
    Products.prototype.api = undefined;

    Products.prototype.initialize = function(container, listener, phrescoapi, api) {
        listener.subscribe("Products",this,"onHashChange");
		listener.subscribe("ShowProducts",this,"showWidget");
        this.listener = listener;
        this.mainNode = container;
        this.phrescoapi = phrescoapi;
        this.hideItms = [];
        this.api = api; 
    };

    Products.prototype.setMainContent = function() {
        var self = this, topH3, //mainContent = $('<div></div>'),topH3 = $('<h3>Products</h3>'),
        mainContent = $('<div class="cat_listerDetail"></div>'),
        navUL = $('<ul></ul>'),
        categoryId = this.categoryId,
        searchCriteria = this.searchCriteria;

        if(categoryId === undefined || categoryId === null) {
            categoryId = 1;
            $('#special-tab').addClass("active");
            $('#cart-tab').removeClass("active");
            $('#browse-tab').removeClass("active");
            
           /* $('.footer li.browse').addClass("browse_active");
            $('.footer li.spl_offer').removeClass("spl_offer_active");
            $('.footer li.mycart').removeClass("mycart_active");*/
        } else if(categoryId === 'All Products') {
            topH3 = $('<h3>' + categoryId + '</h3>');
        } else if(categoryId === 'Special Products') {
            topH3 = $('<h3>' + categoryId + '</h3>');
        }

        if (searchCriteria === undefined || searchCriteria === null) {
            self.api.getAllProducts(categoryId,function(jsonObject){
                self.constructProductUI(jsonObject, mainContent, navUL, categoryId, self); 
            });   
        } else {
            self.api.searchProducts(searchCriteria, function(jsonObject){
                self.constructProductUI(jsonObject, mainContent, navUL,categoryId, self); 
            });      
        }

        //mainContent.append(topH3);     
        //mainContent.append(productsList);
        this.mainContent = mainContent;
    };

    Products.prototype.renderUI = function() {
        this.setMainContent();
		this.phrescoapi.navigateToPath( "#Products" );
        return this.mainContent;
    };
	
	// For Test
	Products.prototype.testRenderUI = function() {
        this.setMainContent();
        return this.mainContent;
    };
    
    Products.prototype.onHashChange = function(event,data) {
        this.categoryId = data.categoryId;
        this.searchCriteria = data.searchCriteria;
		this.render(this.mainNode);
		this.showWidget();
    };

    Products.prototype.hideWidget = function(){
        this.mainNode.hide();
    };
	
	Products.prototype.showWidget = function() {
        this.mainNode.show();
		$('#eshop').show();
    };

    Products.prototype.prodDetail = function(productImage, productName, self, productId, data){
        $(productImage).bind('click', data , function(event){
            self.hideItems = ['Products'];
            self.phrescoapi.hideWidget(self.hideItems);
            self.listener.publish(event,"ProductDetails",[event.data]);
        });
        $(productName).bind('click', data , function(event){
            self.hideItems = ['Products'];
            self.phrescoapi.hideWidget(self.hideItems);
            self.listener.publish(event,"ProductDetails",[event.data]);
        });
    };

    Products.prototype.productReview = function(reviewButton, self, productId, data){
        $(reviewButton).bind('click', data , function(event){
            self.hideItems = ['Products'];
            self.phrescoapi.hideWidget(self.hideItems);
            self.listener.publish(event,"Review",[event.data]);
        });
    };
    Products.prototype.constructProductUI = function(jsonObject, mainContent, navUL,categoryId, self) {
        var productList = jsonObject, 
        newProductsUL = $('<ul>'), productsHolder, productImage, productName, reviewDiv, reviewHolder, 
        reviewContent, price, starImage, j, star, reviewButtonDiv, reviewButton, ratingDone, 
        i, product, innerLi, innerDiv1, innerDiv2, productNamelink,url, imageURL, image, 
        productPriceDiv, productButtonDiv, ahref1, ahref2, data,
        newproducts = productList.product.length;

        url = this.api.wsURL;
        imageURL = url + '/' + self.api.configresponse.imagePath.web;
			for (i = 0; i < newproducts; i++) {

				product = jsonObject.product[i];
				innerLi = $('<li></li>');
				image = imageURL + '/' + product.image;
				productsHolder = $('<div class="cat_listerDetail_bg">');
				productImage = $('<div class="cat_listerDetail_image"><a href="javascript:void(0);"><img src="'+image+'" width="78" alt=""></a></div>');
				productName = $('<div class="cat_listerDetail_imagetxt"><h3><a href="javascript:void(0);">' + product.name + '</a></h3>');
				reviewDiv = $('<div class="cat_listerDetail_imagetxt">');
				reviewHolder = $('<div class="review_cont">');
				reviewContent = $('<div class="review_contleft">');
				price = $('<p>$'+product.sellPrice+'</p>');
				reviewContent.append(price);
				ratingDone = false;
				for (j = 0; j < 5; j++) {
					starImage = 'start.png';
					if (product.rating === j) {
						ratingDone = true;
					}
					if (ratingDone === true) {
						starImage = 'start_dis.png';
					}
					star = $('<span ><img src="images/eshop/' + starImage + '" border="0" title="image" /></span>');
					reviewContent.append(star);
				}
				reviewButtonDiv = $('<div class="review_contright">');
				reviewButton = $('<a ><img src="images/eshop/review.png" border="0" title="image" /></a></div>');

                self.addFunction(reviewButton, self);

				data = {};
				data.productId = product.id;
				self.prodDetail(productImage, productName, self, data.productId, data);

				self.productReview(reviewButton, self, data.productId, data);

				reviewButtonDiv.append(reviewButton);

				reviewHolder.append(reviewContent);
				reviewHolder.append(reviewButtonDiv);

				reviewDiv.append(reviewHolder);
				//productName.appendChild(reviewHolder);
				productsHolder.append(productImage);
				productsHolder.append(productName);
				productsHolder.append(reviewDiv);

				innerLi.append(productsHolder);
				navUL.append(innerLi);
				mainContent.append(navUL);
			}
    };

    Products.prototype.addFunction = function(reviewButton, self){
        $(reviewButton).bind('click', {} , function(event){
            self.hideItems = ['Menu','Login', 'ProductDetails', 'Register', 'Category', 'LoginSuccess'];
            self.phrescoapi.hideWidget(self.hideItems);
            self.listener.publish(event,"Review",[event.data]);
            self.listener.publish(event,"Header",[event.data]);
            self.listener.publish(event,"Navigation",[event.data]);
			$("#browse").removeClass("browse_active");
			$("#spl_offer").removeClass("spl_offer_active");
        });
    };

    return Products;
});
