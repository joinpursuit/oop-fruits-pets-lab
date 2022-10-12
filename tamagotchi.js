// Create class below

class Tamagotchi {
  constructor(name, energy, full, mood, sick = false, rehomed = false) {
    this.name = name;
    this.energy = energy || 9;
    this.full = full || 8;
    this.mood = mood || 6;
    this.sick = sick;
    this.rehomed = rehomed;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}!`);
  }
  status() {
    console.log(`My mood is: ${this.mood}`);
    console.log(`I am this full: ${this.full}`);
    console.log(`My energy is: ${this.energy}`);
    if (!this.sick) {
      console.log(`I am not sick`);
    } else {
      console.log(`I am sick`);
    }
  }
  eat() {
    this.full += 2;
    this.energy--;
    if (this.full > 10) {
      this.sick = true;
    }
  }
  medicate() {
    if (this.sick) {
      this.full = 9;
      this.energy -= 3;
      this.sick = false
    } else {
      console.log("I dont need medicine right now");
      this.energy--;
    }
  }
  play() {
    if (this.sick) {
      console.log("I am too sick to play");
      this.mood--;
      this.energy--;
    } else if (this.mood > 9) {
      console.log("I dont feel like playing right now");
      this.energy -= 2;
      this.full--;
    } else if (this.energy <= 3) {
      console.log("I am too tired to play");
      this.energy--;
    } else {
      this.mood += 2;
      this.energy--;
      this.full--;
    }
  }
  sleep() {
    this.energy += 4;
    this.full -= 3;
  }
  timePasses() {
    if (!this.sick) {
      this.mood -= 2;
      this.full--;
      this.energy--;
    } else {
      this.mood -= 3;
      this.full -= 2;
      this.energy -= 2;
    }
  }
  badGuardian() {
    if (this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
      this.rehomed = true;
      console.log("Your tamagotchi has been rehomed due to your neglect");
    } else {
      console.log("You are a great guardian");
    }
  }
}

let kirby = new Tamagotchi("kirby");
kirby.greet();
kirby.status();
kirby.eat();
kirby.medicate();
kirby.play();
kirby.sleep();
kirby.timePasses();
kirby.medicate();
kirby.status();
kirby.badGuardian();


// Do not edit below this line
module.exports = Tamagotchi;
