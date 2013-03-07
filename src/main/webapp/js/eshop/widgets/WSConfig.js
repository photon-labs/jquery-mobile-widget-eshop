/*global define, $ window */

define( "eshop/widgets/WSConfig", [ "jquery" ], function($) {
	
	function WSConfig () {
	}
    
	WSConfig.prototype.host = undefined;
	WSConfig.prototype.port = undefined;
	WSConfig.prototype.context = undefined;
	WSConfig.prototype.protocol = undefined;
	WSConfig.prototype.WSConfigurl = {};
	var defaultEnv = undefined;
	var serviceName = "eshopService";
	var envValue = undefined;
	WSConfig.prototype.getEnvironment = function(callback) {
		var self = this;
		var unitInfoPath = "src/WEB-INF/resources/phresco-unit-test-info.xml";
		var codeInfoPath = "src/WEB-INF/resources/phresco-validate-code-info.xml";
		if(urlExists(unitInfoPath) == 200) {
			WSConfig.prototype.getSelectedEnvironment("phresco-unit-test-info.xml", function(environment){
					defaultEnv = environment;
			});
		}	
		else {
			WSConfig.prototype.getSelectedEnvironment("phresco-validate-code-info.xml", function(environment){
				defaultEnv = environment;
			});
		}
		
		setTimeout(function() {
			$.get("src/WEB-INF/resources/phresco-env-config.xml",function(data){
				$(data).find("environment").each(function() {
					var env = $(this).attr('name');
					if (env.trim() === defaultEnv) {
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
					}	
				});	
			});
		}, 800);
		
		
		function urlExists(path) {
			 var http = jQuery.ajax({
				type:"HEAD",
				url: path,
				async: false
			  })
			  return http.status;
		}
		
	};
		
	WSConfig.prototype.getSelectedEnvironment = function(infoFile, callback) {
		var path = "src/WEB-INF/resources/"+infoFile;
				$.get(path,function(data){
					$(data).find("parameter").each(function() {
						var nameTag = $(this).find('name');
						var name = nameTag.text();
						if (name.trim() === 'Environment') {
							var valueTag = $(this).find('value');
							envValue = valueTag.text();
							envValue = envValue.replace(name.trim(), "");
							callback(envValue);
						}
					});	
				});
	};	
	return WSConfig; 
});

