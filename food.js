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
      ? console.log(
          `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
        )
      : console.log(`${this.name} has spoiled.`);
  }

  aDayPasses() {
    this.daysToSpoil -= 1;
    this.daysToSpoil < 1 ? (this.fresh = false) : (this.fresh = true);
    this.isFresh();
  }
}
// Do not edit below this line
module.exports = Food;
