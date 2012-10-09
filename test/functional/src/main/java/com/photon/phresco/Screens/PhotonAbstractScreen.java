package com.photon.phresco.Screens;

import java.io.IOException;

import com.photon.phresco.uiconstants.PhrescoUiConstants;
import com.photon.phresco.uiconstants.UIConstants;
import com.photon.phresco.uiconstants.UserInfoConstants;
import com.photon.phresco.uiconstants.WidgetData;

public class PhotonAbstractScreen extends BaseScreen {

	public PhotonAbstractScreen() {

	}

	protected PhotonAbstractScreen(String selectedBrowser,
			String applicationURL, String applicationContext,			
			UserInfoConstants userInfoConstants,UIConstants uiConstants, WidgetData widgetData,PhrescoUiConstants phrescoUiConstants)
			throws IOException, Exception {
		super(selectedBrowser, applicationURL, applicationContext,
				 userInfoConstants, uiConstants, widgetData,phrescoUiConstants);

	}
}