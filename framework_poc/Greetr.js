// Receives the global object and jQuery object
// The semicolon is placed in case any previous loaded code is not terminated properly
;(function(global,$) {
    
    // Returns new object than can be used as Greetr() or G$(), as defined below
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName,lastName,language);
    };
    
    // These variables are not exposed (hidden within the scope of the IIFE) to the outside environment
    // since it is not part of Greetr.init or Greetr.prototype
    var supportedLangs = ['en','es'];
    
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };
    
    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesión'
    };
    
    // All methods inside the propety are common to all instances
    Greetr.prototype = {
    
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },
        
        // To validate if supported language
        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid Language";
            }
        },
        
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName(); 
        },
        
        greet: function(formal) {
            var msg;
            
            // If not defined then false
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting(); 
            }
            
            if (console) {
                console.log(msg);
            }
            
            // This refers to the calling object at execution time
            // it maked the method chainable
            return this;
        },
        
        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }
            // Making it chainable
            return this;
        },
        
        setLang: function(lang) {
            this.language = lang;
            this.validate();
            // Making it chainable
            return this;
        },
        
        // This method uses jQuery to set a message in the html
        HTMLGreeting: function(selector,formal) {
            
            if (!$) {
                throw 'jQuery not loaded!';
            }
            
            if (!selector) {
                throw 'Missing jQuery selector!';
            }
            
            var msg;
            
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }
            
            $(selector).html(msg);
            
            // Making it chainable
            return this;
        }
    
    };
    
    // The properties here will be uniqur to each instance
    // This where the actual object is created allowing us to use the 'new' object
    // without using calling 'new' directly.
    Greetr.init = function(firstName,lastName,language) {
        
        var self = this;
        
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
        
        // Validating language
        self.validate();
    };
    
    // Seting init prototype the same as Greetr prototype (borrowd from jQuery)
    Greetr.init.prototype = Greetr.prototype;
    
    // Setting alias to Greetr object in global environment (eg: window)
    global.Greetr = global.G$ = Greetr;
    
}(window,$));