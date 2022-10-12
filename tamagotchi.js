// Create class below

class Tamagotchi {
  constructor(
    name,
    energy = 9,
    full = 8,
    mood = 6,
    sick = false,
    rehomed = false
  ) {
    this.name = name;
    this.energy = energy;
    this.full = full;
    this.mood = mood;
    this.sick = sick;
    this.rehomed = rehomed;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}!`);
  }

  status() {
    console.log(
      `My Mood is: ${this.mood}\nI am this full: ${this.full}\nMy Energy is: ${
        this.energy
      }\n${this.sick ? "I am sick" : "I am not sick"}`
    );
  }

  eat() {
    this.full += 2;
    this.full > 10 ? (this.sick = true) : "";
  }

  medicate() {
    if (this.sick) {
      this.full = 9;
      this.energy -= 3;
    } else {
      console.log("I don't need medicine!");
      this.energy -= 1;
    }
  }

  play() {
    if (this.sick) {
      this.mood -= 1;
      this.energy -= 1;
      console.log("I'm too sick to play!");
    } else if (this.mood >= 9) {
      this.energy -= 2;
      this.full -= 1;
      console.log("My mood is too high to play!");
    } else if (this.energy <= 3) {
      this.energy -= 1;
      console.log("I am too tired to play!");
    } else {
      this.mood += 2;
      this.energy -= 1;
      this.full -= 1;
      console.log("I played!");
    }
  }

  sleep() {
    this.energy += 4;
    this.full -= 3;
    console.log(`My energy is ${this.energy} and my full is ${this.full} `);
  }

  timePasses() {
    if (this.sick) {
      this.mood -= 3;
      this.full -= 2;
      this.energy -= 2;
    } else {
      this.mood -= 2;
      this.full -= 1;
      this.energy -= 1;
    }
    console.log(
      `My energy is ${this.energy}, my full is ${this.full}, and my mood is ${this.mood}`
    );
  }

  badGuardian() {
    if (this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
      this.rehomed = true;
      console.log("This tamagotchi has been rehomed");
    }
  }
}

let myPet = new Tamagotchi("Mochi");
myPet.greet(); // Hello, I'm Mochi
myPet.status(); // I am not sick

// myPet.eat(); // full = 10
// console.log(myPet.full);
// myPet.status(); // not sick

// --------- Testing Eat Method ---------

// myPet.eat(); // full = 12
// console.log(myPet.full);
// myPet.status(); // sick

// --------- Testting Medicate Method ---------

// myPet.medicate(); // will medicate
// myPet.status(); // full = 9, energy decreased
// myPet.sick = false;
// myPet.medicate(); // won't medicate

// --------- Testing Play Method ---------

// myPet.sick = true;
// myPet.play(); // too sick to play

// myPet.sick = false;
// myPet.mood = 9;
// myPet.play(); // mood too high to play

// myPet.mood = 7;
// myPet.energy = 3;
// myPet.play(); // energy too low to play

// myPet.energy = 6;
// myPet.play(); // I played

// --------- Testing Sleep Method ---------
// myPet.sleep();

// --------- Testing Time Method ---------
// myPet.timePasses();
// myPet.sick = true;
// myPet.timePasses();

// --------- Testing Bad Guardian Method ---------
// myPet.energy = 0;
// myPet.badGuardian();
// myPet.energy = 7;
// myPet.rehomed = false;

// myPet.mood = 0;
// myPet.badGuardian();
// myPet.mood = 7;
// myPet.rehomed = false;

// myPet.full = 0;
// myPet.badGuardian();
// myPet.full = 7;
// myPet.rehomed = false;

// Do not edit below this line
module.exports = Tamagotchi;
