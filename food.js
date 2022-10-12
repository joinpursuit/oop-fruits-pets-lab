// Create class below

class Food {
    constructor(name, daysToSpoil, fresh=true) {
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = fresh;
    }
    prepare() {
        console.log(`${this.name} is being prepared`)
    }
    isFresh() {
        if(this.daysToSpoil > 0) {
            console.log(`There are ${this.daysToSpoil} left before ${this.name} spoils`)
        } else {
            console.log(`${this.name} has spoiled`)
        }
        
    }
    aDayPasses() {
        this.daysToSpoil-1;

    }
}

const iceCream = new Food("Banana", 3);
console.log(iceCream.prepare())
console.log(iceCream.isFresh())
console.log(iceCream.aDayPasses())

// Do not edit below this line
module.exports = Food;
