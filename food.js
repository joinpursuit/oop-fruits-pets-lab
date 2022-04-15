// Create class below
class Food {
    constructor(name, daysToSpoil, fresh = true){
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = fresh;
    }
    // methods
    prepare(){
        console.log(`${this.name} is being prepared`);
    }
    isFresh(){
        if (this.daysToSpoil > 0){
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`);
        } else {
            console.log(`${this.name} has spoiled.`);
        }
    }
    aDayPasses(){
        this.daysToSpoil = this.daysToSpoil - 1;
        console.log(`eeewww what an old ${this.name} has spoiled.`);
        this.isFresh();
    }
}

// Bonus: Bad Foods Gone Bad
class BadFood extends Food {
    constructor(name, daysToSpoil, fresh, weapons){
        super(name, daysToSpoil, fresh);
        this.weapons = weapons;
    }
    // inherited
    isFresh(){}
    // overwrite this method
    prepare(){
        console.log(`I am ${this.name} and my calories are too high to count!`)
        console.log(`I am ${this.name} and you are just a passing trend!`)
    }
    // new method
    fight(BadFood){
        console.log(`${this.name} is down ${this.name.daysToSpoil} , but I am still up ${this.name.daysToSpoil} !`)
    }
}

// instances of `BadFood`s
let donut = new BadFood("donut")
let pizza = new BadFood("pizza")
console.log(donut.prepare())
console.log(donut.fight(pizza))
console.log(pizza.prepare())
console.log(pizza.fight(donut))

let rottenFood = new BadFood("apple", 20)
console.log(rottenFood)

// Do not edit below this line
module.exports = Food;
