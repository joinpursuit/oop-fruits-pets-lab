// Create class below
class Food {
  constructor(name, daysToSpoil) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = this.daysToSpoil >= 1 ? true : false;
  }

  prepare() {
    console.log(`${this.name} is being prepared`);
  }
  isFresh() {
    this.fresh
      ? console.log(
          `There are ${this.daysToSpoil} days left before ${this.name} spoils`
        )
      : console.log(`${this.name} has spoiled`);
  }
  aDayPasses() {
    this.daysToSpoil -= 1;
    this.daysToSpoil <= 0 ? (this.fresh = false) : null;
    this.isFresh();
  }
}

let hamburger = new Food("Hamburger", 3, true);
hamburger.prepare();
hamburger.isFresh();
hamburger.aDayPasses();
hamburger.aDayPasses();
hamburger.aDayPasses();
hamburger.aDayPasses();
// Do not edit below this line
module.exports = Food;
