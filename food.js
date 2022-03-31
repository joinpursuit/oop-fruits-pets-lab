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

  isFresh() {
    console.log(
      `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
    );
  }
}

const milk = new Food("milk", 10);
console.log(milk)
const bread = new Food("bread", 5);

milk.prepare();
bread.prepare()
console.log(milk.daysToSpoil)
milk.isFresh()

function add(a, b = 4) {
    return a + b
}
console.log(add(20))

// Do not edit below this line
module.exports = Food;
