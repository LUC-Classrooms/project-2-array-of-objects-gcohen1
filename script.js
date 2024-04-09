/*
 Project 2 - Array of Objects
 Name: Gracie Cohen
 Comments: 
 */

/*** 
 * Please see the full assignment instructions in COMP 125 on Sakai (or under the "Markdown" tab)
 * Make an array of objects of the same type. Start by creating an object constructor funciton. Test it with individual object instances. Then create an array and initialize it with objects created from your constructor.
 * Use the draw() function to display and move your objects independently on the canvas.
***/

// Global Variables go here

var objects = new Array(10); // the argument to Array

function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600 x 400 pixel drawing canvas
obj1 = new MyClass (148,248); 
obj2 = new MyClass (110,98); 
for(var i = 0; i < objects.length; i++) {
  objects[i] = new MyClass(random(width), random(height));
  }
}

  function draw() {
    background(248); // super light grey background
    for(var i = 0; i < objects.length; i++){
      objects[i].move(); // each time through the loop, move the next object in the array
      objects[i].display(); // call the display method for each object (0 - 9)
    }
}

