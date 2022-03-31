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
    if (this.daysToSpoil < 0) {
      this.fresh = false;
      console.log(`${this.name} has spoiled.`);
    } else if (this.fresh) {
      console.log(
        `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
      );
    } else {
      console.log(`${this.name} has spoiled`);
    }
  }

  aDayPasses() {
    this.daysToSpoil--;
    this.isFresh();
  }
}

// const cheeseCake = new Food("Strawberry Cheese-Cake", 3);

// console.log(cheeseCake)
// cheeseCake.prepare()
// cheeseCake.aDayPasses();
// cheeseCake.prepare() 
// cheeseCake.aDayPasses();
// cheeseCake.aDayPasses();
// cheeseCake.aDayPasses();

// Do not edit below this line
module.exports = Food;
