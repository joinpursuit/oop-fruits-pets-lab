// Create class below

class Food {
  constructor(name, daysToSpoil, fresh) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = true;
  }
  prepare() {
    console.log(`${this.name} is being prepared`);
  }
  isFresh() {
    this.daysToSpoil > 0
      ? console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
      : console.log(`${this.name} has spoiled.`);
  }
  aDayPasses() {
    this.daysToSpoil -= 1;
    return this.isFresh();
  }
}

const strawberry = new Food("strawberry", 7, true);

strawberry.prepare();
strawberry.isFresh();
strawberry.aDayPasses();

// Do not edit below this line
module.exports = Food;
