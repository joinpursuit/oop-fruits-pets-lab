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
        `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
      );
    } else {
      console.log(`${this.name} has spoiled.`);
    }
  }

  aDayPasses() {
    this.daysToSpoil -= 1;
    this.isFresh();
  }
}

const Apple = new Food('apple', 2, true);
console.log(Apple.prepare);
console.log(Apple.isFresh);
console.log(Apple.aDayPasses);

class BadFood extends Food {
  constructor(name, daysToSpoil = 20, fresh = true, weapons = []) {
    super(name, daysToSpoil);
    this.fresh = fresh;
    this.weapons = weapons;
  }
  prepare() {
    const { name } = this;
    console.log(`I am ${name}  and my calories are too high to count!`);
  }
  fight(BadFood) {}
}

const donut = new BadFood('Pizza', 6, false, [
  {
    name: 'Sprinkle Spray',
    hitPoints: 3,
  },
  {
    name: 'Icing Deluge',
    hitPoints: 4,
  },
  {
    name: 'Sugar Shock',
    hitPoints: 5,
  },
]);
const pizza = new BadFood('Pizza', 20, false, [
  {
    name: 'Mouth Burn',
    hitPoints: 3,
  },
  {
    name: 'Hot Pepper Storm',
    hitPoints: 4,
  },
  {
    name: 'Cheese Grease',
    hitPoints: 5,
  },
]);

//  Do not edit below this line
module.exports = Food;
