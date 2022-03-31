// Create class below
class Food {
    constructor(name, daysToSpoil){
    this.name = name;
    this.daysToSpoil = Number(daysToSpoil);
    this.fresh = true;
    }

    prepare(){
        console.log(`${this.name} is being prepared`)
    }
    
    isFresh(){
    console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
    }


    // spoiled() {
    //     if (this.daysToSpoil <= 0) {
    //     console.log(`${this.name} has spoiled.`)
    //     }
    // }

    aDayPasses(){
        this.daysToSpoil--
        this.isFresh()
    }

}
//const example = new Food('plantains', 7)
// Do not edit below this line
module.exports = Food;
