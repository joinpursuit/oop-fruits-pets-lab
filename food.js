// Create class below
class Food{
    constructor(name,daysToSpoil,fresh=true){
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = fresh;
    }
    prepare(){
        console.log(`${this.name} is being prepared`);
    }
    isFresh(){
       if(this.fresh && this.daysToSpoil > 0){
           console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
     
        }else console.log(`${this.name} has spoiled.`)
    }
    aDayPasses(){
        this.daysToSpoil--;
        this.isFresh()
    }
    // prepare: console logs the food name is being prepared
    // isFresh: console logs a message if the food is fresh with the number of days left: There are 3 days left before ice cream spoils.
    // Else console logs a different message if the food is no longer fresh (0 or less days left)
    // ice cream has spoiled.
    // aDayPasses: decreases the daysToSpoil attribute by 1, calls the isFresh method to check freshness
}
// Do not edit below this line
module.exports = Food;
