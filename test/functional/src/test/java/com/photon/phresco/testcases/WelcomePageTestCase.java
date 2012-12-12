package com.photon.phresco.testcases;

import java.io.IOException;

import org.testng.Assert;
import org.testng.Reporter;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import com.photon.phresco.Screens.WelcomeScreen;
import com.photon.phresco.uiconstants.PhrescoUiConstants;
import com.photon.phresco.uiconstants.UIConstants;
import com.photon.phresco.uiconstants.UserInfoConstants;
import com.photon.phresco.uiconstants.WidgetData;

public class WelcomePageTestCase {

	
	private  PhrescoUiConstants phrescoUiConstants;
	private  WelcomeScreen welcomeScreen;
	private  String methodName;
	private  String selectedBrowser;
	private  UIConstants uiConstants;
	private  UserInfoConstants userInfoConstants;
	private  WidgetData widgetData;

	// private Log log = LogFactory.getLog(getClass());

	@Parameters(value = { "browser", "platform" })
	@BeforeTest
	public  void setUp(String browser, String platform) throws Exception {
		try {
			phrescoUiConstants = new PhrescoUiConstants();
			userInfoConstants = new UserInfoConstants();
			uiConstants=new UIConstants();
			widgetData=new WidgetData();
			String selectedBrowser = browser;
			String selectedPlatform = platform;
			
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
	
			/*Reporter.log("Selected Browser to execute testcases--->>"
			+ selectedBrowser);*/
	System.out
	.println("-----------Selected Browser to execute testcases--->>"
			+ selectedBrowser);
			String applicationURL = phrescoUiConstants.PROTOCOL + "://"
					+ phrescoUiConstants.HOST + ":" + phrescoUiConstants.PORT
					+ "/";
			welcomeScreen = new WelcomeScreen(selectedBrowser, selectedPlatform, applicationURL,
					phrescoUiConstants.CONTEXT,userInfoConstants,uiConstants,widgetData,phrescoUiConstants);
			
		} catch (Exception exception) {
			exception.printStackTrace();
		}
	}
	@Test
	public void testWelcomePageScreen() throws InterruptedException,
			IOException, Exception {
		try {
			Assert.assertNotNull(welcomeScreen);
			// Thread.sleep(10000);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test
	public void testToVerifyTheAudioDevicesAddToCart()
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheAudioDevicesAddToCart()-------------");
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();

			welcomeScreen.clickOnBrowse(methodName);
			welcomeScreen.AudioDevices(methodName);			
			welcomeScreen.BillingInfo(methodName);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test
	public void testToVerifyTheCamerasAddToCart() throws InterruptedException,
			IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheCamerasAddToCart()-------------");
			welcomeScreen.clickOnBrowseTab(methodName);
			welcomeScreen.Cameras(methodName);
			welcomeScreen.BillingInfo(methodName);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test
	public void testToVerifyTheVideoGamesAddToCart()
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheVideoGamesAddToCart()-------------");
			welcomeScreen.clickOnBrowseTab(methodName);
			welcomeScreen.VideoGames(methodName);
			welcomeScreen.BillingInfo(methodName);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test
	public void testToVerifyTheTelevisionAddToCart()
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheTelevisionAddToCart()-------------");
			welcomeScreen.clickOnBrowseTab(methodName);
			welcomeScreen.Television(methodName);
			welcomeScreen.BillingInfo(methodName);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test
	public void testToVerifyTheTabletsAddToCart() throws InterruptedException,
			IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheTabletsAddToCart()-------------");
			welcomeScreen.clickOnBrowseTab(methodName);
			welcomeScreen.Tablets(methodName);
			welcomeScreen.BillingInfo(methodName);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test
	public void testToVerifyTheMP3PlayersAddToCart()
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheMP3PlayersAddToCart()-------------");
			welcomeScreen.clickOnBrowseTab(methodName);
			welcomeScreen.MP3Players(methodName);
			welcomeScreen.BillingInfo(methodName);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test
	public void testToVerifyTheMoviesAndMusicAddToCart()
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheMoviesAndMusicAddToCart()-------------");
			welcomeScreen.clickOnBrowseTab(methodName);
			welcomeScreen.MoviesnMusic(methodName);
			welcomeScreen.BillingInfo(methodName);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test
	public void testToVerifyTheMobilePhonesAddToCart()
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheMobilePhonesAddToCart()-------------");
			welcomeScreen.clickOnBrowseTab(methodName);
			welcomeScreen.MobilePhones(methodName);
			welcomeScreen.BillingInfo(methodName);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test
	public void testToVerifyTheAccessoriesAddToCart()
			throws InterruptedException, IOException, Exception {
		try {
			System.out
					.println("---------testToVerifyTheAccessoriesAddToCart()-------------");
			welcomeScreen.clickOnBrowseTab(methodName);
			welcomeScreen.Accessories(methodName);
			welcomeScreen.BillingInfo(methodName);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test
	public void testToVerifyTheComputersAddToCart()
			throws InterruptedException, IOException, Exception {
		try {
			System.out
					.println("---------testToVerifyTheComputersAddToCart()-------------");
			welcomeScreen.clickOnBrowseTab(methodName);
			welcomeScreen.Computers(methodName);
			welcomeScreen.BillingInfo(methodName);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@AfterTest
	public void tearDown() {
		welcomeScreen.closeBrowser();
	}

}
