// Create class below

class Food {
  constructor(name, daysToSpoil, fresh = true) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = true;
  }

  prepare() {
    console.log(`${this.name} is being prepared`);
  }

  isFresh() {
    if (this.daysToSpoil >= "0") {
      console.log(
        `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
      );
    } else {
      console.log(`${this.name} has spoiled.`);
    }
  }
  aDayPasses() {
    this.daysToSpoil = this.daysToSpoil - 1;
    this.isFresh();
  }
}

const moochi = new Food("moochi", 3);
console.log(moochi);
console.log(moochi.name);
console.log(moochi.prepare());
console.log(moochi.isFresh());
console.log(moochi.aDayPasses());

// Do not edit below this line
module.exports = Food;
