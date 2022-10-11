// Create class below
class Food {
    constructor(name, daysToSpoil, fresh){
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = fresh || true;
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
       this.isFresh();
    }
}

const food = new Food();
// console.log(food.prepare('Banana'))
// console.log(food.isFresh("Banana, 3"))
// console.log(food.isFresh("Banana, 0"))
// console.log(food.aDayPasses(5))



// Do not edit below this line
module.exports = Food;
