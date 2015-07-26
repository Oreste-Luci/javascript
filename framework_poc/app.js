// Gets a new object. The architecture allows us not to have to use the new keyword here
var g = G$('John','Doe');

// Using our chainable methods
g.greet().setLang('es').greet(true).log();


// Using library on the click of a button (example)
$('#login').click(function() {
    
    // Creating a new Greetr object (pretending we know the name from the login)
    var loginGrtr = G$('John','Doe');
   
    // Hiding language selector div
    $('#logindiv').hide();
    
    // Firing off an HTML greeting, passing the id where the message is to be displayed
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting',true).log();
});
