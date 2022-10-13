// Create class below
class Food {
  constructor(name, daysToSpoil, fresh) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = fresh;
  }
  prepare() {
    console.log(`${this.name} is being prepared`);
  }
  isFresh() {
    if (this.daysToSpoil > 0 && this.fresh === true) {
      console.log(
        `There are ${this.daysToSpoil} days left before ${this.name} spoils`,
      );
    } else {
      this.fresh === false;
      console.log(`${this.name} has spoiled`);
      console.log(`Is Fresh: ${this.fresh}`);
    }
  }
  aDayPasses() {
    this.daysToSpoil -= 1;
  }
}
const Bagel = new Food('OnionBagel', 4, true);
const Apple = new Food('GrannySmith', 0, false);
const Cake = new Food('BirthdayCake', 2, false);

Bagel.prepare();
Bagel.isFresh();
Bagel.aDayPasses();
Bagel.isFresh();
Apple.prepare();
Apple.isFresh();
Cake.prepare();
Cake.aDayPasses();
Cake.isFresh();

class Tamagotchi {
  constructor(name, energy, full, mood, sick, rehomed) {
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
      this.sick === true;
    }
  }
  medicate() {
    if (this.sick === true) {
      this.full === 9;
      this.energy -= 3;
    } else if (this.sick === false) {
      this.energy -= 1;
      console.log(`Tomogatchi is healthy, no need to medicate!`);
    }
  }
  play() {
    if (this.sick === true) {
      this.mood -= 1;
      this.energy -= 1;
    } else if (this.moood > 9) {
      this.energy -= 2;
      this.full -= 1;
    } else if (this.energy <= 3) {
      console.log('I am too tired to play');
      this.energy -= 1;
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
      this.rehomed === true;
    } else if (this.mood <= 0) {
      this.rehomed === true;
    } else if (this.full <= 0) {
      this.rehomed === true;
    }
  }
}

const Begley = new Tamagotchi('Begley', 8, 8, 8, false, false);
const Joffrey = new Tamagotchi('Joffrey', 0, 0, 0, false, false);
const Scarlet = new Tamagotchi('Scarlet', 5, 5, 5, true, false);
// Do not edit below this line
module.exports = Food;
