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
    if (this.daysToSpoil > 0 && this.fresh === true) {
      console.log(
        `There are ${this.daysToSpoil} days left before ${this.name} spoils.`,
      );
    } else {
      this.fresh === false;
      console.log(`${this.name} has spoiled.`);
    }
  }
  aDayPasses() {
    this.isFresh();
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

// Do not edit below this line
module.exports = Food;
