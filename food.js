// Create class below
class Food {
  constructor(name, daysToSpoil, fresh = true) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = fresh;
  }

  prepare() {
    console.log(this.name + " is being prepared");
  }

  isFresh() {
    if (this.fresh && this.daysToSpoil > 0) {
      console.log(
        `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
      );
    } else {
      console.log(this.name + " has spoiled.");
    }
  }

  aDayPasses() {
    this.isFresh(--this.daysToSpoil);
  }
}

const honey = new Food("honey", 7, false);
honey.prepare();
honey.isFresh();
honey.aDayPasses();

// Do not edit below this line
module.exports = Food;
