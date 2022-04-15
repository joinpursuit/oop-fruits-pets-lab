// Create class below
class Food {
    //Constructor to create attributes
    constructor(name, daysToSpoil, fresh = true) {
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = fresh;
    }
    //Methods below
    prepare() {
        //Uses from class 'Food'
        console.log(`${this.name} is being prepared`)
    }

    isFresh() {
        //if days are more than 0 the food is fresh
        if (this.daysToSpoil > 0) {
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
        } else {
            console.log(`${this.name} has spoiled`)
        }
    }

    aDayPasses() {
        //decrease days to spoil
        this.daysToSpoil--
        //and call the isFresh fucntion
        this.isFresh()
    }

}

const shrimp = new Food("shrimp", 1)
shrimp.aDayPasses()
console.log(shrimp)

// Do not edit below this line
module.exports = Food;
