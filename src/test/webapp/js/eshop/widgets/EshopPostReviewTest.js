/*global require */

require(  [ "jquery", "eshop/widgets/PostReview", "eshop/widgets/EShopAPI", "eshop/widgets/WSConfig" ], function($, PostReview, EShopAPI, WSConfig) {

	//var wsconfig, equal = QUnit.equal, notEqual = QUnit.notEqual, expect = QUnit.expect, testWithSameCase = QUnit.test, testWithMismatchCase = QUnit.test;

	/**
	 * Test that the setMainContent method sets the text in the PostReview-widget
	 */
	 module("PostReview.js;PostReview");
	asyncTest("Testing PostReview-widget With Same Case", function() {
	
		var self = this, jsonData, api, listener, output1, postReview, productId,  
			mainContent = $('<div class="tab_text" id="writeareview"></div>'), reviewForm, reviewFieldset, reviewRating, reviewRatingTitle, ratingStarSpan, i, starImage, star, starValueBox, pid, reviewComment, reviewCommentBox, reviewSubmit, reviewSubmitButton, reviewCancelButton, data, output2, wsconfig, wsURL;
			
			postReview = new PostReview();
			wsconfig = new WSConfig();
			wsconfig.getEnvironment(function(wsURL){
				api = new EShopAPI();
			api.initialize(wsURL); 
			postReview.api = api;
			postReview.listener = undefined;
			postReview.phrescoapi = undefined;
			
			postReview.productId = 1;
			
			output1 = postReview.testRenderUI();
			
			productId = 1;
			reviewForm = $('<form id="contact" method="post" action="form.html">');
			reviewFieldset = $('<fieldset><span class="comments_text" style="color:#FF0000;" name="errorMsg"  id="errorMsg"></span>');
			reviewRating = $('<div></div>');
			reviewRatingTitle = $('<label for="name"><span class="comments_text">Rate this</span></label>');
			ratingStarSpan = $('<span class="ratingStarSpan"></span>');

			for (i = 1; i <= 5; i++) {
				starImage = 'start_dis.png';
				star = $('<a href="javascript:void(0);" id="starImage_'+i+'" name="starImage_'+i+'"><img src="images/eshop/start_dis.png" width="16" height="16" title="' + i + '"></a>');
				data = i;
				ratingStarSpan.append(star);
			}        
			starValueBox = $('<input type="hidden" name="starValue" id="starValue" size="2">');
			pid = $('<input type="hidden" size="3" name="productId" id="productId" value="'+productId+'">');
			reviewRating.append(reviewRatingTitle);
			reviewRating.append(ratingStarSpan);
			reviewRating.append(pid);
			reviewRating.append(starValueBox);

			reviewComment = $('<label for="comments"><span>Comments</span></label>');
			reviewCommentBox = $('<textarea  autofocus="autofocus" name="commentbox" id="commentbox" placeholder="Your comments" cols="60" rows="7" scale="no" class="com_commentbox"></textarea>');
			reviewComment.append(reviewCommentBox);
			
			reviewFieldset.append(reviewRating);
			reviewFieldset.append(reviewComment);

			reviewSubmit = $('<div class="postreviewbutton">');
			reviewSubmitButton = $('<input type="button" value="Submit" class="buttonstyle"/>');

			reviewCancelButton = $('<input type="button" value="Cancel" class="buttonstyle"/>');

			reviewSubmit.append(reviewSubmitButton);
			reviewSubmit.append(reviewCancelButton);
			reviewFieldset.append(reviewSubmit);
			
			reviewForm.append(reviewFieldset);
			mainContent.append(reviewForm);
			output2 = mainContent;
			});
			setTimeout(function() {
			 start();
				equal(output1.html(), output2.html(), "Success - TestCase for PostReview Passed");
			},1000);
	});

		asyncTest("Testing PostReview-widget with Mismatch Case", function() {
	
		var self = this, jsonData, api, listener, output1, postReview, productId,  
			mainContent = $('<div class="tab_text" id="writeareview"></div>'), reviewForm, reviewFieldset, reviewRating, reviewRatingTitle, ratingStarSpan, i, starImage, star, starValueBox, pid, reviewComment, reviewCommentBox, reviewSubmit, reviewSubmitButton, reviewCancelButton, data, output2, wsconfig, wsURL;
			
			postReview = new PostReview();
			wsconfig = new WSConfig();
				wsconfig.getEnvironment(function(wsURL){
					api = new EShopAPI();
			api.initialize(wsURL); 
			postReview.api = api;
			postReview.listener = undefined;
			postReview.phrescoapi = undefined;
			
			postReview.productId = 1;
			
			output1 = postReview.testRenderUI();
			
			productId = 2;
			reviewForm = $('<form id="contact" method="post" action="form.html">');
			reviewFieldset = $('<fieldset><span class="comments_text" style="color:#FF0000;" name="errorMsg"  id="errorMsg"></span>');
			reviewRating = $('<div></div>');
			reviewRatingTitle = $('<label for="name"><span class="comments_text">Rate this</span></label>');
			ratingStarSpan = $('<span class="ratingStarSpan"></span>');

			for (i = 1; i <= 5; i++) {
				starImage = 'start_dis.png';
				star = $('<a href="javascript:void(0);" id="starImage_'+i+'" name="starImage_'+i+'"><img src="images/eshop/start_dis.png" width="16" height="16" title="' + i + '"></a>');
				data = i;
				ratingStarSpan.append(star);
			}        
			
			starValueBox = $('<input type="hidden" name="starValue" id="starValue" size="2">');
			pid = $('<input type="hidden" size="3" name="productId" id="productId" value="'+productId+'">');
			reviewRating.append(reviewRatingTitle);
			reviewRating.append(ratingStarSpan);
			reviewRating.append(pid);
			reviewRating.append(starValueBox);

			reviewComment = $('<label for="comments"><span>Comments</span></label>');
			reviewCommentBox = $('<textarea  autofocus="autofocus" name="commentbox11" id="commentbox" placeholder="Your comments" cols="60" rows="7" scale="no" class="com_commentbox"></textarea>');
			reviewComment.append(reviewCommentBox);
			
			reviewFieldset.append(reviewRating);
			reviewFieldset.append(reviewComment);

			reviewSubmit = $('<div class="postreviewbutton">');
			reviewSubmitButton = $('<input type="button" value="Submit" class="buttonstyle"/>');

			reviewCancelButton = $('<input type="button" value="Cancel" class="buttonstyle"/>');

			reviewSubmit.append(reviewSubmitButton);
			reviewSubmit.append(reviewCancelButton);
			reviewFieldset.append(reviewSubmit);
			
			reviewForm.append(reviewFieldset);
			mainContent.append(reviewForm);
			output2 = mainContent;
				
			});
				
		setTimeout(function() {
		 start();
			notEqual(output1.html(), output2.html(), "Failure - Mismatch In ProductID");
		},1000);
		
	}); 
});