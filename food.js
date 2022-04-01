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
    if (this.fresh && this.daysToSpoil > 0)
      console.log(
        `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
      );
    else console.log(`${this.name} has spoiled.`);
  }
  aDayPasses() {
    this.daysToSpoil--;
    this.isFresh();
  }
}

class BadFood extends Food {
  constructor(name, weapons) {
    super(name, daysToSpoil, fresh);
    this.weapons = weapons || [
      { name: "Sprinkle Spray", hitPoints: 3 },
      {
        name: "Icing Deluge",
        hitPoints: 4,
      },
      { name: "Sugar Shock", hitPoints: 5 },
    ];
  }

  fight(badFood) {
    const random = Math.floor(Math.random() * 2);
    console.log(random);
    const attack = this.weapons[random].hitPoints;
    badFood.daysToSpoil -= attack;
    console.log(
      `${badFood.name} is down ${badFood.daysToSpoil}, bit I am still up ${this.daysToSpoil}`
    );
  }
}

// Do not edit below this line
module.exports = Food;
