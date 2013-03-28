/*global require */

require(  [ "jquery", "eshop/widgets/Review", "eshop/widgets/EShopAPI", "eshop/widgets/WSConfig"], function($, Review, EShopAPI, WSConfig) {

	//var wsconfig, equal = QUnit.equal, notEqual = QUnit.notEqual, expect = QUnit.expect, testwithSameProduct = QUnit.test, testwithDiffProduct = QUnit.test;

	/**
	 * Test that the setMainContent method sets the text in the PostReview-widget
	 */
	 module("Review.js;Review");
	asyncTest("Testing Review-widget With Same ProductID", function() {
	
	var  mainContent = $('<div class="mycart_div"></div>'), jsonData, review, api, listener,  productId, valueStr = "value", keyStr = 'key',  commentStr = 'comment', userStr = 'user', commentData = 'commentDate', reviedTitleDiv, userId=1, postReviewText, productReview,
        reviewDiv, avgreviewDiv, starTotal = 0, starCount, i, ratingValue, barWidth = 0, percentageBar, starVal, review_star_ratio1, review_star_lft1Div1, review_star_rht1, review_ratio_bar1, j, reviewDetail, star_bar, star_bar_arrow, aLink, ratingDone, starImage, aSpan1, aDiv, userDiv, commentDateDiv, output1, output2, wsURL, api;
        reviedTitleDiv = $('<div class="mycart_head">Customer Reviews </div>');
		
		review = new Review();
		wsconfig = new WSConfig();
		wsconfig.getEnvironment(function(data){
			api = new EShopAPI();
			api.initialize(data); 

			api.configService();
			review.api = api;
			review.listener = undefined;
			review.phrescoapi = undefined;
			review.productId = 1;
		});
		
		
		setTimeout(function() {
			start();
			output1 = review.testRenderUI();
			
			productId = 1;
			if(userId > 0){
				postReviewText = $('<a class="mycart_head_span">Post Review</a>');
				reviedTitleDiv.append(postReviewText);
			}
			mainContent.append(reviedTitleDiv);
			api.getProductReview(productId, function(jsonObject){
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
				output2 = mainContent;
				equal(output1.html(), output2.html(), "Success - Testcase for Review-widget Passed");
		}, 1000);
	});
	
	
		asyncTest("Testing Review-widget with Different ProductID", function() {
	
		var  mainContent = $('<div class="mycart_div"></div>'), jsonData, review, api, listener,  productId, valueStr = "value", keyStr = 'key',  commentStr = 'comment', userStr = 'user', commentData = 'commentDate', reviedTitleDiv, userId=1, postReviewText, productReview,
        reviewDiv, avgreviewDiv, starTotal = 0, starCount, i, ratingValue, barWidth = 0, percentageBar, starVal, review_star_ratio1, review_star_lft1Div1, review_star_rht1, review_ratio_bar1, j, reviewDetail, star_bar, star_bar_arrow, aLink, ratingDone, starImage, aSpan1, aDiv, userDiv, commentDateDiv, output1, output2, wsURL, api;
        reviedTitleDiv = $('<div class="mycart_head">Customer Reviews </div>');
		
		review = new Review();
		wsconfig = new WSConfig();
		wsconfig.getEnvironment(function(data){
			api = new EShopAPI();
			api.initialize(data); 
			
			api.configService();
			review.api = api;
			review.listener = undefined;
			review.phrescoapi = undefined;
			review.productId = 1;
		
		});
		
		setTimeout(function() {
			start();
			output1 = review.testRenderUI();
			
			productId = 2;
			if(userId > 0){
				postReviewText = $('<a class="mycart_head_span">Post Review</a>');
				reviedTitleDiv.append(postReviewText);
			}
			mainContent.append(reviedTitleDiv);
			api.getProductReview(productId, function(jsonObject){
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
			output2 = mainContent;
			equal(output1.html(), output2.html(), "Failure - Invalid ProductID");
		}, 1000);
	});
});