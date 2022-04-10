// Create class below
class Food {
    constructor(name, daysToSpoil, fresh = true){
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = fresh;
    }

    prepare() {
        console.log(this.name + " is being prepared");
    }

    isFresh(){
        
        if(this.fresh) {
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
         } else {
             console.log(`ewww what an old ${this.name} has spoiled.`)
         }
        }
        
            aDayPasses(){
                --this.daysToSpoil
                this.isFresh()
        
        
        }
 }


// const ham = new Food('honey', 7, false)
// ham.prepare()
// ham.isFresh()
// console.log(ham.daysToSpoil)

// Do not edit below this line
module.exports = Food;
