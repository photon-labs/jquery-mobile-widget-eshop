/*global define, $, window */

define( "eshop/widgets/OrderHistory", [ "jquery", "framework/Clazz", "framework/Widget" ], function($, Clazz, Widget) {

    function OrderHistory() {
    }

    OrderHistory.prototype = new Clazz();    
    OrderHistory.prototype = new Widget(); 

    OrderHistory.prototype.mainNode = undefined;
    OrderHistory.prototype.mainContent = undefined;
    OrderHistory.prototype.listener = undefined;
    OrderHistory.prototype.api = undefined;
    OrderHistory.prototype.phrescoapi = undefined;

    OrderHistory.prototype.initialize = function(container, listener, api, phrescoapi) {
        listener.subscribe("OrderHistory", this, "onHashChange");
        this.mainNode = container;
        this.hideItems = [];
        this.listener = listener;
        this.api = api;
        this.phrescoapi = phrescoapi;
    };

    OrderHistory.prototype.setMainContent = function() {
		var mainContent, selection, divleft, h3, table, tr1, td1, td12, tbody, tr2, td2, td21, tr3, td3, td31, tr4, td4, td41, i;

		if(this.api.orderhistory !== undefined){
			mainContent = $('<div id="maincontact">');
			selection = $('<section id="contact">');
			divleft = $('<div id="">');
			h3 = $('<h3> Order History </h3>');
			table = $('<table summary="Order History" id="newspaper-a">');
			for (i = 0; i < this.api.orderhistory.product.length; i++) {
				tr1 = $('<tr>');
				td1 = $('<td><b>Order Id</b></td>');
				td12 = $('<td ><b>' + this.api.orderhistory.product[i].orderId +'</b></td>');
				tr1.append(td1);
				tr1.append(td12);
				tbody = $('<tbody>');
				tr2 = $('<tr>');	
				td2 = $('<td>Prd Qty</td>');
				td21 = $('<td>' + this.api.orderhistory.product[i].totalqty +'</td>');
				tr2.append(td2);
				tr2.append(td21);
				
				tr3 = $('<tr>');	
				td3 = $('<td>Price</td>');
				td31 = $('<td>' + this.api.orderhistory.product[i].totalPrice +'</td>');
				tr3.append(td3);
				tr3.append(td31);
				
				tr4 = $('<tr>');	
				td4 = $('<td>DOP</td>');
				td41 = $('<td>' + this.api.orderhistory.product[i].orderDate +'</td>');
				tr4.append(td4);
				tr4.append(td41);
				
				tbody.append(tr1);
				tbody.append(tr2);
				tbody.append(tr3);
				tbody.append(tr4);
				table.append(tbody);
			}
			divleft.append(h3);
			divleft.append(table);
			selection.append(divleft);
			mainContent.append(selection);
		
		    this.mainContent = mainContent;
	    }
    };

    OrderHistory.prototype.renderUI = function() {
        this.setMainContent();
        return this.mainContent;
    };
    
    OrderHistory.prototype.onHashChange = function(data) {
        this.render(this.mainNode);
        this.mainNode.show();
    };

    OrderHistory.prototype.hideWidget = function() {
        this.mainNode.hide();
    };

    return OrderHistory;
});
