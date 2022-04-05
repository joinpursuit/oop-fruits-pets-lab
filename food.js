// Create class below

class Food {
    constructor(name, daysToSpoil, fresh){
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = true; 

    }
    prepare(){
        console.log(`${this.name} is being prepared`);
    }

    isFresh(daysToSpoil){
        if(this.daysToSpoil > 0){
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)

            
        } else if (this.daysToSpoil <= 0) {
            console.log(`${this.name} has spoiled.`)
        }
    }

    aDayPasses(){
        
            this.daysToSpoil  = this.daysToSpoil - 1;
            this.isFresh();
        }
    
}
const guanabana = new Food('banana', 3, true);

guanabana.prepare();
console.log(guanabana.name)
console.log(guanabana.isFresh(2))
guanabana.aDayPasses(1)










// Do not edit below this line
module.exports = Food;
