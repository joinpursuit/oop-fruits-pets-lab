// Create class below
class Food {
    constructor (name, daysToSpoil, fresh = true){
        this.name = name; 
        this.daysToSpoil = daysToSpoil; 
        this.fresh = fresh; 
    }
    //methods 
    prepare() {
        console.log(`${this.name} is being prepared`);
    }
    isFresh() {
        if (this.daysToSpoil > 0){
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils`);  
        } else {
        console.log(`${this.name} has spoiled.`);
    }
}
    aDayPasses() {
        this.daysToSpoil = this.daysToSpoil - 1;
        console.log(`This old ${this.name} spoiled`);
        this.isFresh();
    } 
}

// const apple = new Food ("apple", 5, true)
// console.log(apple.aDayPasses())


// Do not edit below this line
module.exports = Food;
