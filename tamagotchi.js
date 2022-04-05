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
    console.log(`Hello, I'm ${this.name}`);
  }
  status() {
    console.log(
      `My mood is: ${this.mood}\nI am this full: ${this.full}\nMy energy is: ${this.energy}\nI am ${this.sick}`
    );
  }
  eat() {
    this.full +=2;
    this.energy--;
    if (this.full > 10) {
      this.sick = true;
    }
  }
  medicate() {
    if (this.sick) {
      this.full = 9;
      this.energy -=3;
      this.sick = false;
    } else {
      console.log(`${this.name} refuses to take medication`);
      this.energy--;
    }
  }
// Tamagotchi won't play if it is sick (3 ms)
// Tamagotchi won't play if mood is above 9 (1 ms)
  play() {
    if (this.sick) {
    //   console.log(`I don't want to play!`);
      this.mood-=1;
      this.energy-= 1;
    } else if (this.mood > 9) {
    //   console.log(`I don't want to play!`);
      this.energy -=2;
      this.full-=1;
    } else if  (this.energy <= 3) {
      console.log(`I am too tired to play`);
      this.energy--;
    } else {
      this.mood +=2;
      this.energy-= 1;
      this.full--;
    }
  }
  sleep() {
    this.energy +=4;
    this.full -=3;
  }
  timePasses() {
    if (!this.sick) {
      this.mood -=2;
      this.full--;
      this.energy--;
    } else {
      this.mood -=3;
      this.full -=2;
      this.energy -=2;
    }
  }
  badGuardian() {
    console.log(`${this.name} has been rehomed.`);
    if (this.energy <= 0) {
      this.rehomed = true;
    }
    if (this.mood <= 0) {
      this.rehomed = true;
    }
    if (this.full <= 0) {
      this.rehomed = true;
    }
  }
}
const pet = new Tamagotchi("Yims");
// Do not edit below this line
module.exports = Tamagotchi;
