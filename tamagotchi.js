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
    console.log(`Hello, I'm ${this.name}!`);
  }

  status() {
    console.log(`
    My mood is: ${this.mood}\n
    I am this full: ${this.full}\n
    My energy is: ${this.energy}\n
    I am not sick
    `);
  }

  eat() {
    this.full += 2;
    this.energy -= 1;
    if (this.full > 10) {
      this.sick = true;
    }
  }

  medicate() {
    if (this.sick === true) {
      this.full = 9;
      this.energy -= 3;
      this.sick = false;
    } else {
      console.log("I refuse to take medicine since I am not sick.");
      this.energy -= 1;
    }
  }

  play() {
    if (this.sick === true) {
      console.log("I am sick, I will not play!");
      this.mood -= 1;
      this.energy -= 1;
    } else if (this.mood > 9) {
      console.log("I am not in the mood to play!");
      this.energy -= 2;
      this.full -= 1;
    } else if (this.energy <= 3) {
      console.log(`I am too tired to play`);
      this.energy -= 1;
    } else {
      console.log("YAY!!! Play time!");
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
    if (this.sick !== true) {
      this.mood -= 2;
      this.full -= 1;
      this.energy -= 1;
    } else {
      this.mood -= 3;
      this.full -= 2;
      this.energy -= 2;
    }
  }

  badGuardian() {
    console.log(
      `Your tamagotchi ${this.name} has been rehomed because you are a terrible guardian.`
    );
    if (this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
      this.rehomed = true;
    }
  }
}
// Do not edit below this line
module.exports = Tamagotchi;
