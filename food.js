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
    }

}

// Do not edit below this line
module.exports = Food;
