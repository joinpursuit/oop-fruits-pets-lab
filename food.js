// Create class below

class Food {
    constructor(name, daysToSpoil, fresh){
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = true;
    }
    prepare(){
        console.log(`${this.name} is being prepared`)
    }
    isFresh(){
        if(this.daysToSpoil > 0) {
            console.log(`There are ${this.daysToSpoil} days left before the ${this.name} spoils`)
        }else{
            console.log(`${this.name} has spoiled`)
        }
    }
    aDayPasses(){
        this.daysToSpoil
        return this.isFresh
    }

}

const mangos = new Food ("mangos",15,true)
mangos.prepare()
mangos.isFresh()
mangos.aDayPasses()

// Do not edit below this line
module.exports = Food;
