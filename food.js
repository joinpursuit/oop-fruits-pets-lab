// Create class below [ok]
// Food has name that is a string [ok]
// Food has daysToSpoil that is a number [ok]
// Food has fresh property, set to be default to true [ok]
class Food {
  constructor(name, daysToSpoil, fresh=true) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = fresh;
  }

  // Food has prepare method [ok]
  // Food prepare function calls console log [ok]
  prepare() {
    console.log(`${this.name} is being prepared`);
  }

  // Food has isFresh method [ok]
  // isFresh logs days left when food is fresh [ok]
  // isFresh logs days left when food is fresh [ok]
  isFresh() {
    if (this.daysToSpoil>1) {
      console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`
      );
    } else {
      console.log(`${this.name} has spoiled.`);
    }  
  }

  // Food has aDayPasses method [ok]
  // aDayPasses decreases number of days to spoil [ok]
  // aDayPasses method calls isFresh method [ok]
  aDayPasses() {
    this.daysToSpoil --;
    this.isFresh();
  }
}

// Do not edit below this line
module.exports = Food;

const myBreakfast = new Food('Sandwich', 3, true)
const myLunch = new Food('Salad', 6, true)
const myDinner = new Food('Soup', 10, true)