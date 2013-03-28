/*global define, $, window */

define( "framework/Clazz", [ "jquery" ], function($) {

    function Clazz() {

    }

    Clazz.prototype.extend = function(superClass, extendedFunctions) {
        var baseClass = function(config) {
            this.config = config;
            
            // call initialize
            this.initialize(config);
        }, property;
        
        baseClass.prototype.superClass = {};
        
        // get all property from super class and give it to this class
        for(property in superClass.prototype) {
            
            // copy original method to superClass keyword, exclude the superclass property
            // because it is specific to each class
            if(property !== "superClass") {
                baseClass.prototype.superClass[property] = superClass.prototype[property];
                baseClass.prototype[property] = superClass.prototype[property];
            }
        }
        
        // now apply its own function
        for(property in extendedFunctions) {
            baseClass.prototype[property] = extendedFunctions[property];
        }
        
        return baseClass;
    };
        
    Clazz.prototype.addPackage = function(base, currentPackageName) {
        if(base[currentPackageName] === undefined || base[currentPackageName] === null) {
            base[currentPackageName] = {};
        }
    };
    
    Clazz.prototype.createPackage = function(packageName, obj) {
        var packageNameSplitted = packageName.split("."), 
        currentBase = obj, i, currentPackageName;

        for(i=0;i<packageNameSplitted.length;i++) {
            currentPackageName = packageNameSplitted[i];
                
            obj.addPackage(currentBase, currentPackageName);
            currentBase = currentBase[currentPackageName];
        }
    };
    return Clazz;
});