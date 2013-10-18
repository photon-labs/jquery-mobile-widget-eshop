/*global define, $ window */

define( "eshop/widgets/ProductDetails", [ "jquery", "framework/Clazz", "framework/Widget" ], function($, Clazz, Widget) {
	
    function ProductDetails() {
    }

    ProductDetails.prototype = new Clazz();    
    ProductDetails.prototype = new Widget(); 

    ProductDetails.prototype.mainNode = undefined;
    ProductDetails.prototype.mainContent = undefined;
    ProductDetails.prototype.hideItems = undefined;
    ProductDetails.prototype.listener = undefined;
    ProductDetails.prototype.phrescoapi = undefined;
    ProductDetails.prototype.api = undefined;
	ProductDetails.prototype.productId = undefined;

    ProductDetails.prototype.initialize = function(container, listener, phrescoapi, api) {
        listener.subscribe("ProductDetails",this,"onHashChange");
		listener.subscribe("ShowProductDetails", this, "showWidget");
		this.mainNode = container;
		this.listener = listener;
        this.phrescoapi = phrescoapi;
        this.hideItms = [];
        this.api = api; 
    };

    ProductDetails.prototype.setMainContent = function() {
		var self = this,
		mainContent, jsonData,apiRef,url,config,webImage,productDetails,imageURL,
		detailImageURL ,youSave,productName,pd,pdUL,pdLI,pdHolder,pdImage,pdLeftHolder,pdHead,pdReviewCount,
		pdPriceHolder,price,sellPrice,ratingDone,j,starImage,star,btnHolder,reviewA,addToCartA,data,
		pdDescHolder,pdSpec,pdSpecUL,pdSpecLI1,pdSpecLI2,pdAttrHolder,pdTitle,pdSpecDetail,pdSpecDetailUL,
		pdSpecDetailLI1,pdSpecDetailLI2,pdSpecDetailLI3,pdSpecDetailLI4,pdSpecDetailLI5,pdSpecDetailLI6,
		pdSpecDetailLI7, pdSpecDetailLI8, productId=this.productId, topH3;
		
		mainContent = $('<div></div>');
        topH3 = $('<h3>Product Details</h3>');
        
		self.api.getProductDetails(productId,function(jsonObject){
			if(jsonObject.message === 'Product id unavailable'){
				return;
			}
			productDetails = jsonObject.product[0];
			detailImageURL = self.api.wsURL +'/images/web/' + productDetails.image;
			productName = $('<div class="product_name"> ' + productDetails.name + ' </div>');
			pd = $('<div class="cat_listerDetail">');
			pdUL = $('<ul>');
			pdLI = $('<li>');
			pdHolder = $('<div class="cat_listerDetail_borderline">');
			pdImage = $('<div class="cat_listerDetail_image"><img src=" '+ detailImageURL + '" border="0" title="image" height="57"/></div>');
			pdLeftHolder = $('<div class="product_left_div">');
			pdHead = $('<div class="product_head">');
			pdReviewCount = $('<div class="review_cont">');
			pdPriceHolder = $('<div class="product_contleft">');
			price = $('<p><b>List Price: ' + productDetails.listPrice + ' </b></p>');
			pdPriceHolder.append(price); 
			 
			sellPrice = $('<p><b>Sell Price:  '+ productDetails.sellPrice + ' </b></p>');
			pdPriceHolder.append(sellPrice);
			
			ratingDone = false; 

			for (j = 0; j < 5; j++) {
				starImage = 'start.png';
				if (productDetails.rating === j) {
					ratingDone = true;
				}

				if (ratingDone === true) {
					starImage = 'start_dis.png';
				}

				star = $('<span ><img src="images/eshop/' + starImage + '" border="0" title="image" /></span>');
				pdPriceHolder.append(star);
			} 

			pdReviewCount.append(pdPriceHolder);
			pdHead.append(pdReviewCount);
			pdLeftHolder.append(pdHead);

			btnHolder = $('<div class="review_contright1">');
			reviewA = $('<a href="#"><img src="images/eshop/review.png" border="0" title="image" /></a>');
			
			$(reviewA).bind('click', {productId : productId} , function(event){
                self.hideItems = ['Menu','Login', 'ProductDetails', 'Register', 'Category', 'LoginSuccess','PostReview'];
                self.phrescoapi.hideWidget(self.hideItems);
                self.listener.publish(event,"Review",[event.data]);
                self.listener.publish(event,"Header",[event.data]);
                self.listener.publish(event,"Navigation",[event.data]);
				$("#browse").removeClass("browse_active");
				$("#spl_offer").removeClass("spl_offer_active");
            }); 

            data = {};
            data.productId = productDetails.id;
            self.productReview(reviewA, self, data.productId, data);

			addToCartA = $('<a href="#" id="Addtocart"><img src="images/eshop/add_cart.png" border="0" title="image" /></a>');
			btnHolder.append(reviewA);
			btnHolder.append(addToCartA);
			pdLeftHolder.append(btnHolder);

			pdHolder.append(pdImage);
			pdHolder.append(pdLeftHolder);

			pdLI.append(pdHolder);
			pdUL.append(pdLI);
			pd.append(pdUL); 

			pdDescHolder = $('<div class="product_details">');
			pdSpec = $('<div class="product_spec">');
			pdSpecUL = $('<ul>');
			pdSpecLI1 = $('<li class="head">Description</li>');
			pdSpecLI2 = $('<li class="text">' + productDetails.description + '</li>');
			pdSpecUL.append(pdSpecLI1);
			pdSpecUL.append(pdSpecLI2);
			pdSpec.append(pdSpecUL);
			pdDescHolder.append(pdSpec);

			pdAttrHolder = $('<div class="pro_detail">');
			pdTitle = $('<div class="pro_detail_head">Details</div>');
			pdSpecDetail = $('<div class="pro_spec_detail">');
			pdSpecDetailUL = $('<ul>');
			pdSpecDetailLI1 = $('<li class="left">TV Type</li>');
			pdSpecDetailLI2 = $('<li class="right">: ' +productDetails.details['TV Type']+ '</li>');
			pdSpecDetailLI3 = $('<li class="left">Screen Size</li>');
			pdSpecDetailLI4 = $('<li class="right">: '+productDetails.details['Screen Size']+'</li>');
			pdSpecDetailLI5 = $('<li class="left">Screen Ratio </li>');
			pdSpecDetailLI6 = $('<li class="right">: '+productDetails.details['Screen Ratio']+'</li>');
			pdSpecDetailLI7 = $('<li class="left">TV definition</li>');
			pdSpecDetailLI8 = $('<li class="right">: '+productDetails.details['TV Definition']+ '</li>');
			pdSpecDetailUL.append(pdSpecDetailLI1);
			pdSpecDetailUL.append(pdSpecDetailLI2);
			pdSpecDetailUL.append(pdSpecDetailLI3);
			pdSpecDetailUL.append(pdSpecDetailLI4);
			pdSpecDetailUL.append(pdSpecDetailLI5);
			pdSpecDetailUL.append(pdSpecDetailLI6);
			pdSpecDetailUL.append(pdSpecDetailLI7);
			pdSpecDetailUL.append(pdSpecDetailLI8);
			pdSpecDetail.append(pdSpecDetailUL);
			pdAttrHolder.append(pdTitle);
			pdAttrHolder.append(pdSpecDetail);
			pdDescHolder.append(pdAttrHolder); 
			
			data = {};
			data.productId = productDetails.id;
			data.name = productDetails.name;
			data.quantity = 1;
			data.price = productDetails.sellPrice;
			data.image = productDetails.image;
			data.totalPrice = (data.quantity * productDetails.sellPrice);
			$(addToCartA).bind('click', data , function(event){
				self.hideItems = ['ProductDetails'];
				self.phrescoapi.hideWidget(self.hideItems);
				self.phrescoapi.showShoppingCart(event.data);
				data = {productArray : self.phrescoapi.productArray, categoryID : null, productID : event.data.productId};
				self.listener.publish(event,"ShoppingCart",data);
			}); 
			mainContent.append(productName);
			mainContent.append(pd);
			mainContent.append(pdDescHolder);
		});
	
		this.mainContent = mainContent;
	};

    ProductDetails.prototype.productReview = function(reviewButton, self, productId, data){
        $(reviewButton).bind('click', data , function(event){
            //console.info('data = ', [event.data]);
            self.hideItems = ['ProductDetails'];
            self.phrescoapi.hideWidget(self.hideItems);
            self.listener.publish(event,"Review",[event.data]);
        });
    };

    
    ProductDetails.prototype.renderUI = function() {
        this.setMainContent();
		this.phrescoapi.navigateToPath( "#ProductDetails" );
        return this.mainContent;
    };
	
	// For Test
	ProductDetails.prototype.testRenderUI = function() {
        this.setMainContent();
        return this.mainContent;
    };
    
    ProductDetails.prototype.onHashChange = function(event,data) {
        this.productId = data.productId;
        this.searchCriteria = data.searchCriteria; 
        this.render(this.mainNode);
		this.showWidget();
    };

    ProductDetails.prototype.hideWidget = function() {
        this.mainNode.hide();
    };
	
	ProductDetails.prototype.showWidget = function() {
        this.mainNode.show();
		$('#eshop').show();
    };

    return ProductDetails;
});
