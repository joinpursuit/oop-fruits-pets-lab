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
    console.log(this.energy, this.full, this.mood, this.sick);
  }

  eat() {
    this.full += 2;
    this.energy--;
    if (this.full > 10) {
      this.sick = true;
    }
  }

  medicate() {
    this.sick = false;

    if (!this.sick) {
      this.full = 9;
      this.energy -= 3;
    } else if (this.sick) {
      this.energy -= 1;
      console.log("Refusal to take medicine");
    }
  }

  play() {
    this.mood += 2;
    this.energy -= 1;
    this.full -= 1;

    // if (this.sick === true) {

    // }
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
    } else {
      this.mood -= 3;
      this.full -= 2;
      this.energy -= 2;
    }
  }

  badGuardian() {
    console.log(`${this.name} has been rehomed.`);
    if (this.energy <= 0) {
      this.rehomed = true;
    }
  }
}

const pet = new Tamagotchi("pet", 4, 7, 3, false, true);
pet.greet();
pet.status();
pet.eat();
pet.medicate();
pet.play();
// Do not edit below this line
module.exports = Tamagotchi;
