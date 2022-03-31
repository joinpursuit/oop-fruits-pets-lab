// Food
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
		if (this.fresh === true && this.daysToSpoil > 0) {
			console.log(
				`There are ${this.daysToSpoil} days left before ${this.name} spoils.`
			);
		} else {
			console.log(`${this.name} has spoiled.`);
		}
	}
	aDayPasses() {
		this.daysToSpoil--;
		this.isFresh();
	}
}

const oreos = new Food("oreo", 4, true);
oreos.prepare();
oreos.isFresh();
oreos.aDayPasses();
console.log(oreos);

// Do not edit below this line
module.exports = Food;
