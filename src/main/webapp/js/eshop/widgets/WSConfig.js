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

