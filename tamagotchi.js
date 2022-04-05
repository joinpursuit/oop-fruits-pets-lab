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
      `My mood is: ${this.mood}\nI am this full: ${this.full}\nMy energy is: ${
        this.energy
      }\nI am ${this.sick ? 'sick' : 'not sick'}`
    );
  }

  eat() {
    this.full += 2;
    --this.energy;

    if (this.full > 10) {
      this.sick = true;
    }
  }

  medicate() {
    if (this.sick) {
      this.sick = false;
      this.full = 9;
      this.energy -= 3;
    } else {
      console.log('efusal to take medicine');
      this.energy--;
    }
  }

  play() {
    switch (true) {
      case this.sick:
        this.mood--;
        this.energy--;
        break;
      case this.mood > 9:
        this.energy -= 2;
        this.full--;
        break;
      case this.energy <= 3:
        console.log('I am too tired to play');
        this.energy--;
        break;
      default:
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
      console.log('Tomagotchi has been rehomed');
    }
  }
}

// Do not edit below this line
module.exports = Tamagotchi;
