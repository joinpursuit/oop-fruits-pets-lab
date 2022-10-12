// Create class below
class Food {
  constructor(name, daysToSpoil, fresh) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = fresh || true;
  }
  prepare() {
    console.log(`${this.name} is being prepared`);
  }
  isFresh() {
    if (this.fresh && this.daysToSpoil > 0) {
      console.log(
        `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
      );
    } else {
      console.log(`${this.name} has spoiled.`);
    }
  }
  aDayPasses() {
    this.daysToSpoil--;
    this.isFresh();
  }
}

let fish = new Food("fish", 3, true);

fish.prepare();
fish.isFresh();
fish.aDayPasses();

// Do not edit below this line
module.exports = Food;
