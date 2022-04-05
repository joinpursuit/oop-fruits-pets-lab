// Create class below

class Food {
    constructor(name, daysToSpoil, fresh){
        this.name = 'name';
        this.daysToSpoil = 0;
        this.fresh = true; 

    }
    prepare(){
        console.log(`food ${this.name} is being prepared`);
    }

    isFresh(daysToSpoil){
        if(daysToSpoil === 0){
            console.log(`ice cream has spoiled.`)
        } else {
            console.log(`There are ${daysToSpoil} days left before ice cream spoils`)
        }
    }

    aDayPasses(){
        if(this.isFresh() > 0){
            return this.daysToSpoil --;
        }
    }
}
const guanabana = new Food('banana', 3, true);

console.log(guanabana.prepare())
console.log(guanabana)
console.log(guanabana.isFresh(0))
guanabana.aDayPasses(1)










// Do not edit below this line
module.exports = Food;
