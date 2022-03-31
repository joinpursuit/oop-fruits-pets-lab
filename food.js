// Create class below
class Food{
    constructor(name, daysToSpoil, fresh = true){
        this.name = name
        this.daysToSpoil = daysToSpoil
        this.fresh = fresh
    }

    prepare(){
        console.log("Banana is being prepared")
    }

    isFresh(){
        if(this.daysToSpoil < 0){
            console.log("eeewww what an old banana has spoiled.")
        } else {
            console.log(`There are ${this.daysToSpoil} days left before Banana spoils.`)
        }
    }

    aDayPasses(){
        this.daysToSpoil--
        this.isFresh()
    }

}

// Do not edit below this line
module.exports = Food;
