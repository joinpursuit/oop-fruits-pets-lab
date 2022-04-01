// Create class below

class Food {
    constructor(name, daysToSpoil, fresh = true){
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = fresh; 
    }
    prepare(){
        console.log(`${this.name} is being prepared`)
    }
    isFresh(){
        if(this.daysToSpoil > 0){
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
        } else {
            console.log(`${this.name} has spoiled.`)
        }
    }
    aDayPasses(){
        this.daysToSpoil--;
        this.isFresh()
    }
}

const croissant = new Food("croissant", 0, true)
console.log(croissant)
croissant.prepare()
croissant.isFresh()
croissant.aDayPasses()
// Do not edit below this line
module.exports = Food;
