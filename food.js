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
    if (this.daysToSpoil > 0) {
      console.log(
        `There are ${this.daysToSpoil} days left before ${this.name} spoils`
      );
    } else {
      console.log(`${this.name} has spoiled`);
    }
  }

  aDayPasses() {
    this.daysToSpoil -= 1;
  }
}

const myFood = new Food("lasagna", 3);
myFood.prepare(); // lasagna is being prepared
myFood.isFresh(); // there are 3 days before lasagna spoilg
console.log(myFood.daysToSpoil); // 3
myFood.aDayPasses(); // 2
console.log(myFood.daysToSpoil); // 2

const expiredFood = new Food("spaghetti", 0);
expiredFood.isFresh(); //spaghetti has spoiled

// Do not edit below this line
module.exports = Food;
