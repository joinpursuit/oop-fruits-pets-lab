// Attributes

// name: string
// daysToSpoil: number
// fresh: boolean, default true

// Methods

// prepare: console logs the food name is being prepared
// isFresh: console logs a message if the food is fresh with the number of days left: There are 3 days left before ice cream spoils.
// Else console logs a different message if the food is no longer fresh (0 or less days left)
// ice cream has spoiled.
// aDayPasses: decreases the daysToSpoil attribute by 1, calls the isFresh method to check freshness

// Create class below

class Food {
  constructor(name, daysToSpoil, fresh = true) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = fresh;
  }

  prepare() {
    console.log(`${this.name} is being prepared`);
  }

  //   isFresh(days) {
  //     if (days > 0) {
  //       console.log(
  //         `There are ${days} days left before this ${this.name} spoils.`
  //       );
  //     } else {
  //       console.log(`eeewww what an old ${this.name} has spoiled.`);
  //     }
  //   }

  isFresh() {
    if (this.daysToSpoil > 0) {
      console.log(
        `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
      );
    } else {
      console.log(`${this.name} has spoiled.`);
    }
  }

  aDayPasses() {
    this.daysToSpoil--
    this.isFresh()
  }
}

const milk = new Food("milk", 10);
// console.log(milk)
const bread = new Food("bread", 5);

milk.prepare();
bread.prepare();
console.log(milk.daysToSpoil);
milk.isFresh(1);
console.log(milk.fresh);

function add(a, b) {
  return a + b;
}
console.log(add(20, 5));

// Do not edit below this line
module.exports = Food;
