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
		console.log(
			this.daysToSpoil > 0
				? `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
				: `${this.name} has spoiled.`
		);
	}
	aDayPasses() {
		this.daysToSpoil--;
		if (this.daysToSpoil <= 0) {
			this.fresh = false;
		}
		this.isFresh();
	}
}

const iceCream = new Food("ice cream", 6, true);
iceCream.prepare();
iceCream.isFresh();
iceCream.aDayPasses();
// Do not edit below this line
module.exports = Food;
