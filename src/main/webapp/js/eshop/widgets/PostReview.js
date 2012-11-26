/*global define, $, window */

define( "eshop/widgets/PostReview", [ "jquery", "framework/Clazz", "framework/Widget" ], function($, Clazz, Widget) {

    function PostReview() {
    }

    PostReview.prototype = new Clazz();    
    PostReview.prototype = new Widget(); 

    PostReview.prototype.mainNode = undefined;
    PostReview.prototype.mainContent = undefined;
    PostReview.prototype.hideItms = undefined;
    PostReview.prototype.phrescoapi = undefined;
    PostReview.prototype.listener = undefined;
    PostReview.prototype.api = undefined;

    PostReview.prototype.initialize = function(container, listener, phrescoapi, api) {
        listener.subscribe("PostReview",this,"onHashChange");
		listener.subscribe("ShowPostReview",this,"onHashChange");
        this.listener = listener;
        this.mainNode = container;
        this.phrescoapi = phrescoapi;
        this.hideItms = [];
        this.api = api; 
    };

    PostReview.prototype.setMainContent = function() {
        var self = this, jsonData, productId=this.productId, obj, 
        mainContent = $('<div class="tab_text" id="writeareview"></div>'), reviewForm, reviewFieldset, reviewRating, reviewRatingTitle, ratingStarSpan, i, starImage, star, starValueBox, pid, reviewComment, reviewCommentBox, reviewSubmit, reviewSubmitButton, reviewCancelButton, data;

        reviewForm = $('<form id="contact" method="post" action="form.html">');
        reviewFieldset = $('<fieldset><span class="comments_text" style="color:#FF0000;" name="errorMsg"  id="errorMsg"></span>');
        reviewRating = $('<div></div>');
        reviewRatingTitle = $('<label for="name"><span class="comments_text">Rate this</span></label>');
        ratingStarSpan = $('<span class="ratingStarSpan"></span>');

        for (i = 1; i <= 5; i++) {
            starImage = 'start_dis.png';
            star = $('<a href="javascript:void(0);" id="starImage_'+i+'" name="starImage_'+i+'"><img src="images/eshop/start_dis.png" width="16" height="16" title="' + i + '"></a>');
            data = i;
            self.clickFunction(star, data, self);
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

        $(reviewSubmitButton).bind('click', {productId : productId}, function(event){
            data = self.phrescoapi.submitReview(productId);

            if(data){
                obj =  self.api.postReview(data);
                self.hideItems = ['PostReview'];
                self.phrescoapi.hideWidget(self.hideItems);
                self.listener.publish(event,"Review",[event.data]);
            }
        });

        reviewCancelButton = $('<input type="button" value="Cancel" class="buttonstyle"/>');
		$(reviewCancelButton).bind('click', {productId : productId}, function(event){
			self.hideItems = ['PostReview'];
			self.phrescoapi.hideWidget(self.hideItems);
			self.listener.publish(event,"Review",[event.data]);
		});

        reviewSubmit.append(reviewSubmitButton);
        reviewSubmit.append(reviewCancelButton);
        reviewFieldset.append(reviewSubmit);
        
        reviewForm.append(reviewFieldset);
        mainContent.append(reviewForm);
        this.mainContent = mainContent;
    };

    PostReview.prototype.renderUI = function() {
        this.setMainContent();
		this.phrescoapi.navigateToPath( "#PostReview" );
        return this.mainContent;
    };
	
	// For Test
	PostReview.prototype.testRenderUI = function() {
        this.setMainContent();
        return this.mainContent;
    };
    
    PostReview.prototype.clickFunction = function(starValue, data, self){
        $(starValue).bind('click', data , function(event){
            self.phrescoapi.addRating(event.data);
        });

    };

    PostReview.prototype.onHashChange = function(event,data) {
        this.productId = data.productId;
        this.render(this.mainNode);
        this.showWidget();
    };

    PostReview.prototype.hideWidget = function(){
        this.mainNode.hide();
    };
	
	PostReview.prototype.showWidget = function() {
        this.mainNode.show();
		$('#eshop').show();
    };

    PostReview.prototype.prodDetail = function(productImage, productName, self, productId, data){
        $(productImage).bind('click', data , function(event){
            self.hideItems = ['PostReview'];
            self.phrescoapi.hideWidget(self.hideItems);
            self.listener.publish(event,"ProductDetails",[event.data]);
        });
        $(productName).bind('click', data , function(event){
            self.hideItems = ['PostReview'];
            self.phrescoapi.hideWidget(self.hideItems);
            self.listener.publish(event,"ProductDetails",[event.data]);
        });
    };

    return PostReview;
});
