/*global require */

require(  [ "jquery", "eshop/widgets/Menu"], function($, Menu) {

	//var equal = QUnit.equal, notEqual = QUnit.notEqual, expect = QUnit.expect, testWithSameItem = QUnit.test, testWithDiffItem = QUnit.test;

	/**
	 * Test that the setMainContent method sets the text in the Menu-widget
	 */
	 module("Menu.js;Menu");
	test("Testing Menu-widget With Menu Item", function() {

                var menu, initeObj, listener, api, phresco, mainContent, navUL, headerLogo, bodyIconRows, firstRowIcons, firstRowUL, homeLI, 
                registerLI, myCartLI, firstRowClearBoth, secondRowIcons, secondRowUL, searchLI, browseLI, 
                loginLI, secondRowClearBoth, thirdRowIcons, thirdRowUL, settingLI, offerLI, eventsLI, 
                thirdRowClearBoth, output1, output2;

                // Setup view and call method under test
                menu = new Menu();

                menu.api = api;
                menu.listener = undefined;
                menu.phrescoapi = undefined;

                output1 = menu.testRenderUI();

                headerLogo = $('<div class="header" style="text-align: center;"><img src="images/eshop/logo.png" /></div>');
                bodyIconRows = $('<div class="body_icon_row">');
                firstRowIcons = $('<div class="icons_row">');
                firstRowUL = $('<ul>');
                homeLI = $('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/home_icon.png" /></div><div class="fonts">Home</div></a></li>');
                registerLI = $('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/register_icon.png" /></div><div class="fonts">Register</div></a></li>');

                mainContent = $('<div class="inner_wrap">');
                headerLogo = $('<div class="header" style="text-align: center;"><img src="images/eshop/logo.png" /></div>');
                bodyIconRows = $('<div class="body_icon_row">');
                firstRowIcons = $('<div class="icons_row">');
                firstRowUL = $('<ul>');
                homeLI = $('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/home_icon.png" /></div><div class="fonts">Home</div></a></li>');
                registerLI = $('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/register_icon.png" /></div><div class="fonts">Register</div></a></li>');
              
                myCartLI = $('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/my_cart_icon.png" /></div><div class="fonts">My Cart</div></a></li>');
           
                firstRowUL.append(homeLI);
                firstRowUL.append(registerLI);
                firstRowUL.append(myCartLI);
                firstRowIcons.append(firstRowUL);
                firstRowClearBoth = $('<div style="clear:both;"></div>');
                firstRowIcons.append(firstRowClearBoth);
                secondRowIcons = $('<div class="icons_row">');
                secondRowUL = $('<ul>');
                searchLI = $('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/search_icon.png" /></div><div class="fonts">Search</div></a></li>');
                browseLI = $('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/browse_icon.png" /></div><div class="fonts">Browse</div></a></li>');
                loginLI = $('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/loginicon.png" /></div><div class="fonts">Login</div></a></li>');

                secondRowUL.append(searchLI);
                secondRowUL.append(browseLI);
                secondRowUL.append(loginLI);
                secondRowIcons.append(secondRowUL);

                secondRowClearBoth = $('<div style="clear:both;"></div>');
                secondRowIcons.append(secondRowClearBoth);

                thirdRowIcons = $('<div class="icons_row">');
                thirdRowUL = $('<ul>');
                settingLI = $('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/setting_icon.png" /></div><div class="fonts">Settings</div></a></li>');
                offerLI = $('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/special_offer_icon.png" /></div><div class="fonts">Special Offers</div></a></li>');
                eventsLI = $('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/events_icon.png" /></div><div class="fonts">Events</div></a></li>');
                thirdRowUL.append(settingLI);
                thirdRowUL.append(offerLI);
                thirdRowUL.append(eventsLI);
                thirdRowIcons.append(thirdRowUL);

                thirdRowClearBoth = $('<div style="clear:both;"></div>');
                thirdRowIcons.append(thirdRowClearBoth);

                bodyIconRows.append(firstRowIcons);
                bodyIconRows.append(secondRowIcons);
                bodyIconRows.append(thirdRowIcons);

                mainContent.append(headerLogo);
                mainContent.append(bodyIconRows);
                output2 = mainContent;

                // Expect that the text was set on the expected element
                equal(output1.html(), output2.html(),	"Success - Test case for Menu-widget Passed");
	});
	
	test("Testing Menu-widget With Different Menu Item", function() {

                var menu, initeObj, listener, api, phresco, mainContent, navUL, headerLogo, bodyIconRows, firstRowIcons, firstRowUL, homeLI, 
                registerLI, myCartLI, firstRowClearBoth, secondRowIcons, secondRowUL, searchLI, browseLI, 
                loginLI, secondRowClearBoth, thirdRowIcons, thirdRowUL, settingLI, offerLI, eventsLI, 
                thirdRowClearBoth, output1, output2;

                // Setup view and call method under test
                menu = new Menu();

                menu.api = api;
                menu.listener = undefined;
                menu.phrescoapi = undefined;

                output1 = menu.testRenderUI();

                headerLogo = $('<div class="header" style="text-align: center;"><img src="images/eshop/logo.png" /></div>');
                bodyIconRows = $('<div class="body_icon_row1">');
                firstRowIcons = $('<div class="icons_row">');
                firstRowUL = $('<ul>');
                homeLI = $('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/home_icon.png" /></div><div class="fonts">Home</div></a></li>');
                registerLI = $('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/register_icon.png" /></div><div class="fonts">Register</div></a></li>');

                mainContent = $('<div class="inner_wrap">');
                headerLogo = $('<div class="header" style="text-align: center;"><img src="images/eshop/logo.png" /></div>');
                bodyIconRows = $('<div class="body_icon_row">');
                firstRowIcons = $('<div class="icons_row">');
                firstRowUL = $('<ul>');
                homeLI = $('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/home_icon.png" /></div><div class="fonts">Home</div></a></li>');
                // registerLI = $('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/register_icon.png" /></div><div class="fonts">Register</div></a></li>');
              
                myCartLI = $('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/my_cart_icon.png" /></div><div class="fonts">My Cart</div></a></li>');
           
                firstRowUL.append(homeLI);
                // firstRowUL.append(registerLI);
                firstRowUL.append(myCartLI);
                firstRowIcons.append(firstRowUL);
                firstRowClearBoth = $('<div style="clear:both;"></div>');
                firstRowIcons.append(firstRowClearBoth);
                secondRowIcons = $('<div class="icons_row">');
                secondRowUL = $('<ul>');
                searchLI = $('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/search_icon.png" /></div><div class="fonts">Search</div></a></li>');
                browseLI = $('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/browse_icon.png" /></div><div class="fonts">Browse</div></a></li>');
                loginLI = $('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/loginicon.png" /></div><div class="fonts">Login</div></a></li>');

                secondRowUL.append(searchLI);
                secondRowUL.append(browseLI);
                secondRowUL.append(loginLI);
                secondRowIcons.append(secondRowUL);

                secondRowClearBoth = $('<div style="clear:both;"></div>');
                secondRowIcons.append(secondRowClearBoth);

                thirdRowIcons = $('<div class="icons_row">');
                thirdRowUL = $('<ul>');
                settingLI = $('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/setting_icon.png" /></div><div class="fonts">Settings</div></a></li>');
                offerLI = $('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/special_offer_icon.png" /></div><div class="fonts">Special Offers</div></a></li>');
                eventsLI = $('<li><a href="javascript:void(0);"><div class="icons"><img src="images/eshop/events_icon.png" /></div><div class="fonts">Events</div></a></li>');
                thirdRowUL.append(settingLI);
                thirdRowUL.append(offerLI);
                thirdRowUL.append(eventsLI);
                thirdRowIcons.append(thirdRowUL);

                thirdRowClearBoth = $('<div style="clear:both;"></div>');
                thirdRowIcons.append(thirdRowClearBoth);

                bodyIconRows.append(firstRowIcons);
                bodyIconRows.append(secondRowIcons);
                bodyIconRows.append(thirdRowIcons);

                mainContent.append(headerLogo);
                mainContent.append(bodyIconRows);
                output2 = mainContent;

                // Expect that the text was set on the expected element
                notEqual(output1.html(), output2.html(), "Failure - Mismatch in Menu Item");
	});
});