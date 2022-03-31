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
        if(this.daysToSpoil <= 0) {
            console.log(`${this.name} has spoiled.`);
        } else {
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`);
        }
    }
    aDayPasses() {
        this.daysToSpoil--
        this.isFresh();
    }
}

// const oatmeal = new Food("oatmeal", 5);
// console.log(oatmeal);
// oatmeal.prepare();
// oatmeal.isFresh();
// oatmeal.aDayPasses();

// Do not edit below this line
module.exports = Food;
