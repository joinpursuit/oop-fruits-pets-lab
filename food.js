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
      this.daysToSpoil <= 0
        ? `${this.name} has spoiled.`
        : this.daysToSpoil === 1
        ? `There are ${this.daysToSpoil} day left before ${this.name} spoils.`
        : `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
    );
  }
}

module.exports = Food;
