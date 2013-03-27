/*
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
/*global define, $ window */

define( "eshop/widgets/WSConfig", [ "jquery" ], function($) {
	
	function WSConfig () {
	}
    
	WSConfig.prototype.host = undefined;
	WSConfig.prototype.port = undefined;
	WSConfig.prototype.context = undefined;
	WSConfig.prototype.protocol = undefined;
	WSConfig.prototype.WSConfigurl = {};
	var serviceName = "eshopService";
	
	WSConfig.prototype.getEnvironment = function(callback) {
		var self = this;
		$.get("test/resources/phresco-env-config.xml",function(data){
			$(data).find("environment").each(function() {
			var env = $(this).attr('name');
				$(this).find("WebService").each(function() {
					var configServiceName = $(this).attr("name");
					if (configServiceName === serviceName) {
						self.WSConfigurl.host = $(this).find("host").text();
						self.WSConfigurl.port = $(this).find("port").text();
						self.WSConfigurl.context = $(this).find("context").text();
						self.WSConfigurl.protocol = $(this).find("protocol").text();
						callback(self.WSConfigurl); 
					}
				});
			});	
		});
	};
	return WSConfig; 
});

