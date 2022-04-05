// Create class below

class Food {
    constructor(){
        this.name = 'banana';
        this.daysToSpoil = 0;
        this.fresh = true; 

    }
    prepare(){
        console.log(`food ${this.name} is being prepared');
    }
}
const guanabana = new Food();
console.log(guanabana.name)
// Do not edit below this line
module.exports = Food;
