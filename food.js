// Create class below
class Food{
    constructor(name, daysToSpoil, fresh = true){
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = fresh;
    };

    prepare(name){
        console.log(`${this.name} is being prepared`);
    };
    isFresh(name, daysToSpoil){
        if(this.daysToSpoil >= 1){
            this.fresh = true;
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`);  
        } else{
            this.fresh = false;
            console.log(`${this.name} has spoiled.`);
        };
    };
    aDayPasses(name){
        this.daysToSpoil -= 1;
        return this.isFresh(name, this.daysToSpoil);
    };
};

const chicken = new Food("Chicken", 1);
chicken.prepare(chicken.name);
chicken.isFresh(chicken.name, chicken.daysToSpoil);
chicken.aDayPasses(chicken.name, chicken.daysToSpoil);



// Do not edit below this line
module.exports = Food;
