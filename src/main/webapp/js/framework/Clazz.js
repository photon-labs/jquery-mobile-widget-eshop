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