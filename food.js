// Create class below

class Food {
  constructor(name, daysToSpoil, fresh = true) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = fresh;
  }

  prepare() {
    return `${this.name} is being prepared`;
  }

  isFresh() {
    return this.daysToSpoil === 0
      ? `${this.name} has spoiled`
      : this.daysToSpoil === 1
      ? `There are ${this.daysToSpoil} day left before ${this.name} spoils.`
      : `There are ${this.daysToSpoil} days left before ${this.name} spoils.`;
  }

  aDayPasses() {
    this.daysToSpoil--;
    return this.isFresh();
  }
}

const salad = new Food("salad", 10, false);
// console.log(salad.prepare());
// console.log(salad.isFresh());
console.log(salad.aDayPasses());
console.log(salad);
// Do not edit below this line
module.exports = Food;
