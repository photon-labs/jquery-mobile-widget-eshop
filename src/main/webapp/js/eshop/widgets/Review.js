/*global define, $, window */

define( "eshop/widgets/Review", [ "jquery", "framework/Clazz", "framework/Widget" ], function($, Clazz, Widget) {

    function Review() {
    }

    Review.prototype = new Clazz();    
    Review.prototype = new Widget(); 

    Review.prototype.mainNode = undefined;
    Review.prototype.mainContent = undefined;
    Review.prototype.hideItms = undefined;
    Review.prototype.phrescoapi = undefined;
    Review.prototype.listener = undefined;
    Review.prototype.api = undefined;

    Review.prototype.initialize = function(container, listener, phrescoapi, api) {
        listener.subscribe("Review",this,"onHashChange");
		listener.subscribe("ShowReview",this,"showWidget");
        this.listener = listener;
        this.mainNode = container;
        this.phrescoapi = phrescoapi;
        this.hideItms = [];
        this.api = api; 
    };

    Review.prototype.setMainContent = function() {
        var self = this, jsonData, productId=this.productId, valueStr = "value", keyStr = 'key',  commentStr = 'comment', userStr = 'user', commentData = 'commentDate',
        mainContent = $('<div class="mycart_div"></div>'), reviedTitleDiv, userId=1, postReviewText, productReview,
        reviewDiv, avgreviewDiv, starTotal = 0, starCount, i, ratingValue, barWidth = 0, percentageBar, starVal, review_star_ratio1, review_star_lft1Div1, review_star_rht1, review_ratio_bar1, j, reviewDetail, star_bar, star_bar_arrow, aLink, ratingDone, starImage, aSpan1, aDiv, userDiv, commentDateDiv ;
        reviedTitleDiv = $('<div class="mycart_head">Customer Reviews </div>');

        if(userId > 0){
            postReviewText = $('<a class="mycart_head_span">Post Review</a>');
                $(postReviewText).bind('click', { productId : productId} , function(event){
                    self.hideItems = ['Review'];
                    self.phrescoapi.hideWidget(self.hideItems);
                    self.listener.publish(event,"PostReview",[event.data]);
                });            
            reviedTitleDiv.append(postReviewText);
        }

        mainContent.append(reviedTitleDiv);

        self.api.getProductReview(productId, function(jsonObject){

            reviewDiv = $('<div class="review_div">');
            productReview = jsonObject.review;
            if(productReview.ratings){
                avgreviewDiv = $('<div class="review_head">Average Customer Review ('+productReview.average+')</div>');
                reviewDiv.append(avgreviewDiv);
                starTotal = 0;
                for(i=productReview.ratings.rating.length-1; i >= 0; i--){
                    starCount = productReview.ratings.rating[i];
                    starTotal = Number(starTotal) + Number(starCount[valueStr]);
                }

                for(i=productReview.ratings.rating.length-1; i >= 0; i--){
                    ratingValue = productReview.ratings.rating[i];
                    barWidth = 0;
                    barWidth = (Number(ratingValue[valueStr]) * Number(100))/ Number(starTotal);

                    if(barWidth > 0 ){
                        percentageBar = Math.round(barWidth) + '%';
                    }else{ 
                        percentageBar = '0 %';
                    }

                    starVal = 'Vote';
                    if(ratingValue[valueStr] > 1){
                        starVal = 'Votes';
                    }

                    review_star_ratio1 = $('<div class="review_star_ratio">');
                    review_star_lft1Div1 = $('<div class="review_star_lft"> ' + ratingValue[keyStr] + '  Star</div>');
                    review_star_rht1 = $('<div class="review_star_rht">');
                    review_ratio_bar1= $('<div class="review_ratio_bar" style="width:'+Math.round(barWidth)+'%"></div><span class="review_ratio_bar_span"> '+ratingValue[valueStr]+' </span>');  
                    review_star_rht1.append(review_ratio_bar1);
                    review_star_lft1Div1.append(review_star_rht1);
                    review_star_ratio1.append(review_star_lft1Div1);
                    reviewDiv.append(review_star_ratio1);
                }   
                mainContent.append(reviewDiv);                

                for(j=0; j<productReview.comments.length; j++) {
                    reviewDetail = productReview.comments[j];
                    star_bar = $('<div class="star_bar">');
                    star_bar_arrow = $('<div class="star_bar_arrow">');
                    aLink = $('<a href="#">');
                    ratingDone = false;

                    for (i = 0; i < 5; i++) {
                        starImage = 'start.png';
                        if (reviewDetail.rating === i) {
                            ratingDone = true;
                        }
                        if (ratingDone === true) {
                            starImage = 'start_dis.png';
                        }

                        aSpan1 = $('<span ><img src="images/eshop/' + starImage + '" border="0" alt="image" /></span>');
                        aLink.append(aSpan1);
                    }

                    aDiv = $('<div class="star_text">'+reviewDetail[commentStr]+'</div>');
                    userDiv = $('<div class="star_text">by : '+reviewDetail[userStr]+'</div>');
                    commentDateDiv = $('<div class="star_text">on :'+reviewDetail[commentData]+'</div>');
                    aLink.append(aDiv);
                    aLink.append(userDiv);
                    aLink.append(commentDateDiv);
                    star_bar_arrow.append(aLink);
                    star_bar.append(star_bar_arrow);
                    mainContent.append(star_bar);
                }
            }
        });

        this.mainContent = mainContent;
    };

    Review.prototype.renderUI = function() {
        this.setMainContent();
		this.phrescoapi.navigateToPath( "#Review" );
        return this.mainContent;
    };
	
	// For Test
	Review.prototype.testRenderUI = function() {
        this.setMainContent();
        return this.mainContent;
    };
    
    Review.prototype.onHashChange = function(event,data) {
        this.productId = data.productId;
        this.render(this.mainNode);
        this.showWidget();
    };

    Review.prototype.hideWidget = function(){
        this.mainNode.hide();
    };
	
	Review.prototype.showWidget = function() {
        this.mainNode.show();
		$('#eshop').show();
    };

    Review.prototype.prodDetail = function(productImage, productName, self, productId, data){

        $(productImage).bind('click', data , function(event){
            self.hideItems = ['Review'];
            self.phrescoapi.hideWidget(self.hideItems);
            self.listener.publish(event,"ProductDetails",[event.data]);
        });

        $(productName).bind('click', data , function(event){
            self.hideItems = ['Review'];
            self.phrescoapi.hideWidget(self.hideItems);
            self.listener.publish(event,"ProductDetails",[event.data]);
        });
    };

    return Review;
});