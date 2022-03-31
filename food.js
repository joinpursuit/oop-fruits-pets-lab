// Create class below

class Food{
    constructor(name, daysToSpoil, fresh = true){
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = fresh;
    }
    prepare(){
        console.log(`${this.name} is being prepared`);
    }
    isFresh(){
        if(!this.fresh || this.daysToSpoil <= 0){
            console.log(`${this.name} has spoiled.`);
        }else{
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`);
        }
    }
    aDayPasses(){
        this.daysToSpoil--;
        this.isFresh();
    }
};

class BadFood extends Food{
    
};

// const sandwichGood = new Food("BLT", 2, true);
// const sandwichBad = new Food("BEC", 0, false)
// console.log(sandwichGood.prepare());
// console.log(sandwichGood.isFresh());
// console.log(sandwichGood.aDayPasses());

// console.log(sandwichBad.prepare());
// // console.log(sandwichBad.isFresh());
// console.log(sandwichBad.aDayPasses());

// Do not edit below this line
module.exports = Food;
