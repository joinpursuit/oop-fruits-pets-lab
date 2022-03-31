// Create class below
class Food {
    constructor(name, daysToSpoil, fresh = daysToSpoil < 0 ? false : true) {
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = fresh;
    }

    prepare() {
        console.log(`${this.name} is being prepared`);
    }

    isFresh() {
        if (this.fresh) {
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

let bananas = new Food("Banana", -1);
console.log(bananas);
console.log(bananas.prepare());
console.log(bananas.isFresh());
console.log(bananas.aDayPasses());

// Do not edit below this line
module.exports = Food;
