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
  sickState() {
    if (!this.sick) {
      this.sick === true;
      console.log(`I am sick`);
    } else {
      console.log(`I am not sick`);
    }
  }
  status() {
    console.log(
      `***********\n My mood is: ${this.mood} \n I am this full: ${this.full} 
      \n My energy is: ${this.energy} \n ` +
        this.sickState() +
        `\n ***********`,
    );
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
    } else if (this.sick === false) {
      this.energy -= 1;
      console.log(`Tomogatchi is healthy, no need to medicate!`);
    }
  }
  play() {
    if (this.sick === true) {
      this.mood -= 1;
      this.energy -= 1;
    } else if (this.mood > 9) {
      this.energy -= 2;
      this.full -= 1;
    } else if (this.energy <= 3) {
      console.log('I am too tired to play');
      this.energy -= 1;
    } else {
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
    if (this.sick === false) {
      this.mood -= 2;
      this.full -= 1;
      this.energy -= 1;
    } else if (this.sick === true) {
      this.mood -= 3;
      this.full -= 2;
      this.energy -= 2;
    }
  }
  badGuardian() {
    console.log(
      `Protective services has seized your Tamagatchi and has been rehomed.`,
    );
    if (this.energy <= 0) {
      this.rehomed = true;
    } else if (this.mood <= 0) {
      this.rehomed = true;
    } else if (this.full <= 0) {
      this.rehomed = true;
    }
  }
}
const Begley = new Tamagotchi('Begley', 8, 8, 8, false, false);
const Joffrey = new Tamagotchi('Joffrey', 0, 0, 0, false, false);
const Scarlet = new Tamagotchi('Scarlet', 5, 5, 5, true, false);

Begley.greet();
Joffrey.greet();
Joffrey.badGuardian();
Scarlet.status();
// Do not edit below this line
module.exports = Tamagotchi;
