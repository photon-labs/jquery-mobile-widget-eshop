/*global define, window */

define( "framework/Base", [ "jquery", "framework/Clazz" ], function($, Clazz) {

	function Base() {
    }

    Base.prototype = new Clazz();

    Base.prototype.initialize = function(config) {
	};

	return Base;
});