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
    if (this.daysToSpoil >= 1) {
      console.log(
        `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
      );
    } else {
      console.log(`${this.name} has spoiled.`);
    }
  }

  aDayPasses() {
    return this.isFresh(), this.daysToSpoil--;
  }
}
const Banana = new Food("banana", 3, false);
Banana.isFresh();

class BadFood extends Food {
  constructor(name, daysToSpoil = 20, edible = true, weapons) {
    super(name, daysToSpoil);
    this.edible = edible;
    this.weapons = weapons || [3, 4, 5];
  }
 
  isFresh() {
    if (this.edible && this.daysToSpoil > 1) {
      console.log(
        `${this.name} has ${this.daysToSpoil} days left to spoil, you can eat it `
      );
    } else if ( this.daysToSpoil === 1) {
      console.log(
        `${this.name} has ${this.daysToSpoil} day left to spoil, you cannot eat it `
      );
    }
  
  }
 
  //    or `I am <name> and you are just a passing trend!`
  prepare() {
    
      const {weapons, name } = this
      const amunitions = weapons.map(num => num).reduce((a, b ) => a += b, 0)
      if(amunitions > 20){
          console.log(`I am ${name} and my calories are too high to count!`);

      }
  }
}

const badFood = new BadFood('Pizza', 1, false);
badFood.isFresh();
badFood. prepare();

// Do not edit below this line
module.exports = Food;
