// Create class below
class Food{
constructor(name,daysToSpoil, fresh = true){
this.name= name
this.daysToSpoil= daysToSpoil
this.fresh=fresh
}
prepare(){
    console.log(`${this.name} is being prepared`);
}
isFresh(){
    if(this.daysToSpoil<=0) {
        console.log(`${this.name} has spoiled.`)    
    }
    console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
}
aDayPasses(){
    this.isFresh() - this.daysToSpoil -- 
}
}

// Do not edit below this line
module.exports = Food;
