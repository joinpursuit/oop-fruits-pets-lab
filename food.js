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
    return (this.daysToSpoil -= 1);
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
}

// Do not edit below this line
module.exports = Food;
