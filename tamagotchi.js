// Create class below

class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.energy = 9;
    this.full = 8;
    this.mood = 6;
    this.sick = false;
    this.rehomed = false;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
  status() {
    console.log(`My mood is: ${this.mood} 
      I am this full: ${this.full}
      My energy is: ${this.energy}
      `);
    if (this.sick === false) {
      console.log("I am not sick");
    } else {
      ("I am sick");
    }
  }
  eat() {
    this.full += 2;
    this.energy -= 1;
    if (this.full > 10) {
      this.sick === true;
    }
  }
  medicate() {}
  play() {}
  sleep() {}
  timePasses() {}
  badGuardian() {}
}

// Do not edit below this line
module.exports = Tamagotchi;
