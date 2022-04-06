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
  constructor(name, daysToSpoil = 20, fresh = true, weapons = []) {
    super(name, daysToSpoil);
    this.fresh = fresh;
    this.weapons = weapons 
  }
 
  isFresh() {
   return super.isFresh()
  }
 
  prepare() {
    
      const { name } = this
      console.log(`I am ${name} and my calories are too high to count!`);

  }

  fight(badFood){

  }
}

// name, daysToSpoil = 20, fresh = true, weapons = []
const donut = new BadFood('Pizza', 6, false, [
    {
      name: "Sprinkle Spray",
      hitPoints: 3,
    },
    {
      name: "Icing Deluge",
      hitPoints: 4,
    },
    {
      name: "Sugar Shock",
      hitPoints: 5,
    },
  ]);
const pizza = new BadFood('Pizza', 20, false, [
    {
      name: "Mouth Burn",
      hitPoints: 3,
    },
    {
      name: "Hot Pepper Storm",
      hitPoints: 4,
    },
    {
      name: "Cheese Grease",
      hitPoints: 5,
    },
  ]);
donut.isFresh();
donut.prepare();
// donut.fight(pizza)
pizza.fight(donut)
// Do not edit below this line
module.exports = Food;
