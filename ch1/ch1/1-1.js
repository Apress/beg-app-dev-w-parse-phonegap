// Initialize Parse JavaScript SDK
Parse.initialize("APPLICATION ID", "JAVASCRIPT KEY");
// Define a new Parse class named "Toy"
var Toy = Parse.Object.extend("Toy");
// Create a new Instance of the Toy Parse Class
var myToy = new Toy();

// Set some Example Values
myToy.set("name", "Rocking Horse");
myToy.set("color", "brown");
// Save Object to Parse Cloud Database
myToy.save();