// Creating an object that will represent an Emitter
function Emitter() {
    this.events = {};
}

// Function to add listeners to the Emitter object
Emitter.prototype.on = function(type, listener){
    this.events[type] = this.events[type] || []; // create empty array if it does not exist
    this.events[type].push(listener); // adding listener to array
};

// Function to signal listeners of the given type
Emitter.prototype.emit = function(type) {
    if (this.events[type]) { // If array of type exists then call every listener in the array
        this.events[type].forEach(function(listener){
            listener();
        });
    };
};

module.exports = Emitter;