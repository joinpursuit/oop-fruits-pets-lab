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
    console.log("*********************");
    console.log(`My moods is: ${this.mood}`);
    console.log(`I am this full: ${this.full}`);
    console.log(`My energy is: ${this.energy}`);
    console.log(`${this.sick ? "I am sick" : "I am not sick"}`);
    console.log("*********************");
  }

  eat() {
    this.full += 2;
    this.energy -= 1;
    if (this.full > 10) {
      this.sick = true;
    }
  }

  medicate() {
    if (this.sick) {
      this.full = 9;
      this.energy -= 3;
      this.sick = false;
    } else {
      console.log("refusal to take medicine");
      this.energy -= 1;
    }
  }

  play() {
    if (this.sick) {
      this.mood -= 1;
      this.energy -= 1;
      return;
    }

    if (this.mood > 9) {
      this.energy -= 2;
      this.full -= 1;
      return;
    }

    if (this.energy <= 3) {
      console.log("I am too tired to play");
      this.energy -= 1;
      return;
    }

    if (!this.sick) {
      this.mood += 2;
      this.energy -= 1;
      this.full -= 1;
    }
  }

  sleep() {
    this.energy += 4;
    this.full -= 3;
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
  }

  badGuardian() {
    if (this.energy <= 0) {
      this.rehomed = true;
    }
    if (this.mood <= 0) {
      this.rehomed = true;
    }
    if (this.full <= 0) {
      this.rehomed = true;
    }
    if (this.rehomed) {
      console.log("the tamagotchi has been rehomed");
    }
  }
}
// Do not edit below this line
module.exports = Tamagotchi;
