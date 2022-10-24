// Create class below
class Food {
  constructor(name, daysToSpoil, fresh=true) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = fresh;
  }

  prepare() {
    console.log(`${this.name} is being prepared`);
  }

  isFresh() {
    (this.fresh) 
    ?
    console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils`)
    :
    console.log(`${this.name} has spoiled`)
  }

  aDayPasses() {
    (this.isFresh) ? this.daysToSpoil-1 : this.daysToSpoil;
  }
}

// Do not edit below this line
module.exports = Food;

const myLunch = new Food('Sandwich', 3, true)