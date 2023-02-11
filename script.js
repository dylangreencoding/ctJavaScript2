// `use strict`;

//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
  pizza:["Deep Dish","South Side Thin Crust"],
  tacos:"Anything not from Taco bell",
  burgers:"Portillos Burgers",
  ice_cream:["Chocolate","Vanilla","Oreo"],
  shakes:[{
      oberwise:"Chocolate",
      dunkin:"Vanilla",
      culvers:"All of them",
      mcDonalds:"Sham-rock-shake",
      cupids_candies:"Chocolate Malt"
  }]
}

// good opportunity to use a recursion function

const fxExpression = function(obj) {
  for(let i = 0; i < Object.keys(obj).length; i++) {
    if(Array.isArray(obj) === false) {
      console.log(`Favorite ${Object.keys(obj)[i]}`);
    }
    let current = Object.values(obj)[i];
    if(typeof current === 'string') {
      console.log(`\t ${current}`);
    } else if(typeof current === 'object') {
      fxExpression(current);
    }
  }
}

// fxExpression(person3);


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/
// Create our Person Prototype
// Use an arrow to create the printInfo method
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age

function Person(nom, age) {
  this.nom = nom;
  this.age = age;
  this.birthday = () => this.age ++;
  this.printInfo = () => console.log(`${this.nom} is ${this.age} years old!`);
}

const fred = new Person(`fred`, 23);
// fred.printInfo();
fred.birthday();
// fred.printInfo();


// =============Exercise #3 ============//
/*

  Create a Promised based function that will check a string to determine if it's length is greater than 10.
  If the length is greater than ten console log "Big word". 
  If the length of the string is less than 10 console log "Small Number"
*/

let output = document.getElementById('the-promised-land');
let currentYarn = document.getElementById('yarn');
let yarn;

function measureYarn() {
  return new Promise( (resolve, reject) => {
    if (yarn.length > 10) {
      resolve({ log: 'Big word' });
    } else if (yarn.length < 10) {
      resolve({ log: 'Small Number' });
    } else {
      reject({ log: 'Exactly 10' })
    }
  })
}

currentYarn.addEventListener('keydown', (e) => { 
  // console.log(e); // event
  if (e.key === 'Enter') {
    yarn = currentYarn.value;
    // console.log(typeof yarn); // string
    // console.log(yarn); // works - gets current value when entered
    
    measureYarn().then( (value) => {
      output.innerHTML = value.log;
    }).catch( (error) => {
      output.innerHTML = error.log;
    })
  }
})