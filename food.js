// Create class below

class Food {
  constructor(name) {
    this.name = name;
    this.daysToSpoil = 3;
    this.fresh = true;
  }
  prepare() {
    console.log(`${this.name} is being prepared`);
  }
  isFresh() {
    if (this.daysToSpoil === 3) {
      console.log(
        `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
      );
    } else {
      console.log(`eeewww what an old ${this.name} has spoiled.`);
    }
  }
  aDayPasses() {
    --this.daysToSpoil;
  }
}

// Do not edit below this line
module.exports = Food;
