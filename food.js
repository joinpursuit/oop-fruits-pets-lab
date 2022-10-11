// Create class below
class Food {
    constructor(name, daysToSpoil, fresh){
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = fresh || true;
    }
    prepare(name){
        console.log(`${name} is being prepared.`)
    }

    isFresh(name, daysToSpoil){
        if(daysToSpoil > 0){
            console.log(`There are ${daysToSpoil} days left before ${name} spoils.`)
        } else {
            console.log(`${name} has spoiled`)
        }
    }

    aDayPasses(daysToSpoil){
        daysToSpoil = daysToSpoil - 1;
       console.log(daysToSpoil);
    }
}

const food = new Food();
console.log(food.aDayPasses(5))



// Do not edit below this line
module.exports = Food;
