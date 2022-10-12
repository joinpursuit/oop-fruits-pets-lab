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
    console.log(`energy: ${this.energy} fullness: ${this.full} mood: ${this.mood} is sick: ${this.sick}`);
  }
  eat() {
    this.full += 2;
    this.energy--;
    if (this.full > 10) {
      return (this.sick = true);
    }
  }
  medicate() {
    this.full = 9;
    this.sick
      ? (this.energy -= 3)
      : this.energy-- && console.log(`refusal to take medicine`);
    return (this.sick = false);
  }
  play() {
    if (this.sick) {
      this.mood--;
      this.energy--;
    } else if (this.mood > 9) {
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
    this.sick ? (this.mood -= 3) : (this.mood -= 2);
    this.sick ? (this.full -= 2) : this.full--;
    this.sick ? (this.energy -= 2) : this.energy--;
  }
  badGuardian() {
    if (this.full <= 0 || this.energy <= 0 || this.mood <= 0) {
      return (this.rehomed = true);
    }
  }
}

// Do not edit below this line
module.exports = Tamagotchi;
