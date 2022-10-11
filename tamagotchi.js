// Create class below
class Tamogotchi {
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
    console.log(`****************`);
    console.log(`My mood is : ${this.mood}`);
    console.log(`I am this full: ${this.full}`);
    console.log(`My energy is: ${this.energy}`);
    this.sick
      ? console.log(`I am not sick`)
      : console.log(`I don't feel too good...`);
  }
  eat() {
    this.fullness += 2;
    this.energy--;
    this.fullness > 10 ? (this.sick = true) : null;
  }
  
}

// Do not edit below this line
module.exports = Tamagotchi;
