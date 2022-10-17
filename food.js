// Create a food class below:

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
        `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
      );
    } else {
      console.log(`${this.name} has spoiled.`);
    }
  }

  aDayPasses() {
    this.daysToSpoil -= 1;
    return this.isFresh();
  }
}

//Creating an instance for test case:
const banana = new Food('Banana', 0, false);

banana.prepare();
banana.isFresh();
banana.aDayPasses();

//Creating a child class called BadFood:
class BadFood extends Food {
  constructor(name, daysToSpoil, fresh, weapons) {
    super(name, daysToSpoil, fresh, weapons);
    this.daysToSpoil = daysToSpoil;
    this.weapons = [{ hitPoints: 3 }, { hitPoints: 4 }, { hitPoints: 5 }];
    this.fight();
  }

  fight() {
    let blow = 0;
    for (let i = 0; i < this.weapons.length; i++) {
      blow = this.weapons.hitPoints - Math.floor(Math.random() * 3);
    }
    return blow;
  }

  isFresh() {
    this.daysToSpoil >= 2
      ? console.log(`${this.name} is still fresh`)
      : console.log(`${this.name} is down to ${this.daysToSpoil}`);
  }

  prepare() {
    this.weapons.hitPoints > 1
      ? console.log(`I am ${this.name} and you are just a passing trend.`)
      : console.log(`I am ${this.name} and my calories are too high.`);
  }
}

const cheeseGrease = new BadFood('Cheese Grease', 1, true, 0);
const sprinkleSpray = new BadFood('Sprinkle Spray', 5, true, -1);

sprinkleSpray.fight();
sprinkleSpray.isFresh();
sprinkleSpray.prepare();

cheeseGrease.fight();
cheeseGrease.isFresh();
cheeseGrease.prepare();

// Do not edit below this line
module.exports = Food;
