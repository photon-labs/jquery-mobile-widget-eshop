/**
 * PHR_html_jquery_mobileapp
 *
 * Copyright (C) 1999-2013 Photon Infotech Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.photon.phresco.testcases;

import java.io.IOException;

import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import com.photon.phresco.Screens.WelcomeScreen;
import com.photon.phresco.model.Jquerymobilewidgets.Mobilewidget;
import com.photon.phresco.uiconstants.PhrescoUiConstants;
import com.photon.phresco.uiconstants.UIConstants;
import com.photon.phresco.uiconstants.UserInfoConstants;

public class WelcomePageTestCase {

	private PhrescoUiConstants phrescoUiConstants;
	private WelcomeScreen welcomeScreen;
	private String methodName;
	private UIConstants uiConstants;
	private UserInfoConstants userInfoConstants;

	@Parameters(value = { "browser", "platform" })
	@BeforeTest
	public void setUp(String browser, String platform) throws Exception {
		try {
			phrescoUiConstants = new PhrescoUiConstants();
			userInfoConstants = new UserInfoConstants();
			uiConstants = new UIConstants();
			String selectedBrowser = browser;
			String selectedPlatform = platform;

			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();

			String applicationURL = phrescoUiConstants.getProtocol() + "://"
					+ phrescoUiConstants.getHost() + ":"
					+ phrescoUiConstants.getPort() + "/";
			welcomeScreen = new WelcomeScreen(selectedBrowser,
					selectedPlatform, applicationURL,
					phrescoUiConstants.getContext(), userInfoConstants,
					uiConstants,  phrescoUiConstants);

		} catch (Exception exception) {
			exception.printStackTrace();
		}
	}

	@Test
	public void testWelcomePageScreen() throws InterruptedException,
			IOException, Exception {
		try {
			Assert.assertNotNull(welcomeScreen);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "jqueryMobilewidgetdata", dataProviderClass = com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheAudioDevicesAddToCart(Mobilewidget mobilewidget)
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheAudioDevicesAddToCart()-------------");
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();

			welcomeScreen.clickOnBrowse(methodName);
			welcomeScreen.AudioDevices(methodName);
			welcomeScreen.BillingInfo(methodName, mobilewidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "jqueryMobilewidgetdata", dataProviderClass = com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheCamerasAddToCart(Mobilewidget mobilewidget)
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheCamerasAddToCart()-------------");
			welcomeScreen.clickOnBrowseTab(methodName);
			welcomeScreen.Cameras(methodName);
			welcomeScreen.BillingInfo(methodName, mobilewidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "jqueryMobilewidgetdata", dataProviderClass = com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheVideoGamesAddToCart(Mobilewidget mobilewidget)
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheVideoGamesAddToCart()-------------");
			welcomeScreen.clickOnBrowseTab(methodName);
			welcomeScreen.VideoGames(methodName);
			welcomeScreen.BillingInfo(methodName, mobilewidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "jqueryMobilewidgetdata", dataProviderClass = com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheTelevisionAddToCart(Mobilewidget mobilewidget)
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheTelevisionAddToCart()-------------");
			welcomeScreen.clickOnBrowseTab(methodName);
			welcomeScreen.Television(methodName);
			welcomeScreen.BillingInfo(methodName, mobilewidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "jqueryMobilewidgetdata", dataProviderClass = com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheTabletsAddToCart(Mobilewidget mobilewidget)
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheTabletsAddToCart()-------------");
			welcomeScreen.clickOnBrowseTab(methodName);
			welcomeScreen.Tablets(methodName);
			welcomeScreen.BillingInfo(methodName, mobilewidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "jqueryMobilewidgetdata", dataProviderClass = com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheMP3PlayersAddToCart(Mobilewidget mobilewidget)
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheMP3PlayersAddToCart()-------------");
			welcomeScreen.clickOnBrowseTab(methodName);
			welcomeScreen.MP3Players(methodName);
			welcomeScreen.BillingInfo(methodName, mobilewidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "jqueryMobilewidgetdata", dataProviderClass = com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheMoviesAndMusicAddToCart(Mobilewidget mobilewidget)
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheMoviesAndMusicAddToCart()-------------");
			welcomeScreen.clickOnBrowseTab(methodName);
			welcomeScreen.MoviesnMusic(methodName);
			welcomeScreen.BillingInfo(methodName, mobilewidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "jqueryMobilewidgetdata", dataProviderClass = com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheMobilePhonesAddToCart(Mobilewidget mobilewidget)
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheMobilePhonesAddToCart()-------------");
			welcomeScreen.clickOnBrowseTab(methodName);
			welcomeScreen.MobilePhones(methodName);
			welcomeScreen.BillingInfo(methodName, mobilewidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "jqueryMobilewidgetdata", dataProviderClass = com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheAccessoriesAddToCart(Mobilewidget mobilewidget)
			throws InterruptedException, IOException, Exception {
		try {
			System.out
					.println("---------testToVerifyTheAccessoriesAddToCart()-------------");
			welcomeScreen.clickOnBrowseTab(methodName);
			welcomeScreen.Accessories(methodName);
			welcomeScreen.BillingInfo(methodName, mobilewidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "jqueryMobilewidgetdata", dataProviderClass = com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheComputersAddToCart(Mobilewidget mobilewidget)
			throws InterruptedException, IOException, Exception {
		try {
			System.out
					.println(" testToVerifyTheComputersAddToCart ");
			welcomeScreen.clickOnBrowseTab(methodName);
			welcomeScreen.Computers(methodName);
			welcomeScreen.BillingInfo(methodName, mobilewidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	

	@AfterTest
	public void tearDown() {
		welcomeScreen.closeBrowser();
	}

}
