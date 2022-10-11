// Create class below:

class Tamagotchi {
  constructor(
    name,
    energy = 9,
    full = 8,
    mood = 6,
    rehomed = false,
    sick = false
  ) {
    this.name = name;
    this.energy = energy;
    this.full = full;
    this.mood = mood;
    this.rehomed = rehomed;
    this.sick = sick;
  }

  eat() {
    this.full += 2;
    this.energy -= 1;
    if (this.full > 10) {
      this.sick = true;
    }
  }

  greet() {
    console.log(`Hello, I'm ${this.name}!`);
  }

  medicate() {
    if (this.sick === true) {
      this.full = 9;
      this.energy -= 3;
      this.sick = false;
    } else {
      this.energy -= 1;
      console.log(
        `I'm ${this.name}, I am not sick, don't give me any medicine.`
      );
    }
  }

  play() {
    if (this.sick === true) {
      this.mood -= 1;
      this.energy -= 1;
    }
    if (this.mood > 9) {
      this.energy -= 2;
      this.full -= 1;
      return;
    }
    if (this.energy <= 3) {
      this.energy -= 1;
      return;
    }
    if (this.sick === false) {
      this.mood += 2;
      this.energy -= 1;
      this.full -= 1;
    }
  }

  status() {
    console.log(`
    ****************************
    My mood is: ${this.mood}
    I am this full: ${this.full}
    My energy is: ${this.energy}
    ${this.sick ? 'I am sick' : 'I am not sick'}
    ****************************
    `);
  }

  sleep() {
    this.energy += 4;
    this.full -= 3;
  }

  timePasses() {
    if (this.sick === false) {
      this.mood -= 2;
      this.energy -= 1;
      this.full -= 1;
    } else {
      this.mood -= 3;
      this.energy -= 2;
      this.full -= 2;
    }
  }

  badGuardian() {
    if (this.mood <= 0 || this.energy <= 0 || this.full <= 0) {
      this.rehomed = true;
    }
    if (this.rehomed === true) {
      console.log(`${this.name} has been rehomed.`);
    }
  }
}

//Creating an instance for test case:
const marutchi = new Tamagotchi('Marutchi', 6, 5, 4, true, true);

marutchi.eat();
marutchi.play();
marutchi.sleep();
marutchi.greet();
marutchi.status();
marutchi.medicate();
marutchi.timePasses();
marutchi.badGuardian();

// Do not edit below this line
module.exports = Tamagotchi;
