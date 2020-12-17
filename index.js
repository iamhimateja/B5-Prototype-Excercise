/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/
  
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
  this.edibleFoods = ["carrot", "carrots", "banana", "rice", "chicken"]; // blah blah
  return this;
}

Person.prototype.eat = function(food){
  // Can check duplicates here, but he can eat whatever he want, how much he want, even it is the same thing. if it is an edible.
  if(this.edibleFoods.includes(food) && this.stomach.length < 10) {
    this.stomach.push(food)
    return this.stomach;
  } else {
    if (!this.edibleFoods.includes(food)) {
      throw `${this.name} can't eat ${food}, he'll die!!`
    } else {
      return this.stomach;
    }
  }
};

Person.prototype.poop = function(food){
  this.stomach = [];
};

Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`;
};

  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */
  
function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(gallons) {
  if (!isNaN(Number(gallons))) {
    this.tank += Number(gallons)
    return true;
  } else {
    return false;
  }
  return this;
};

Car.prototype.drive = function(distance) {
  let remainingFuel = distance / this.milesPerGallon;
  if (this.tank < remainingFuel) {
    this.odometer += this.tank * this.milesPerGallon; // maximum distance this car can travel
    this.tank = 0;
    return `I ran out of fuel at ${this.odometer} miles!`
  } else {
    this.tank -= remainingFuel;
    this.odometer += distance;
  }
  return this;
}
  
/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}

Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`;
};

  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. "this" defaults to global object which is Window object in simple mode and defaults to undefined in strinct mode.
    2. "this" will be the owner of the constructor function and initialises as an empty hash
    3. "this" stores the element selected from DOM using getElementById(), getElementsByClassName(), getElementsByTagName(), querySelector() or querySelectorAll()
    4. "this" also refers to the owner object while the method is defined inside an object.
  */
  
  
  ///////// END OF CHALLENGE /////////
