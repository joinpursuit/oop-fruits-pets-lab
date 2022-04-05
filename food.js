// Create class below
class Food {
  constructor(name, daysToSpoil, fresh=true){
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = fresh;
  };

  isFresh(){
    if(this.fresh === true && this.daysToSpoil > 0){
      console.log(`There are ${this.daysToSpoil} days left before Banana spoils.`)
    } else {
      console.log(`${this.name} has spoiled.`)
    };
  };

  prepare(){
    console.log(`${this.name} is being prepared`)
  };

  aDayPasses(){
    this.daysToSpoil--;
    this.isFresh();
  };
};

// Do not edit below this line
module.exports = Food;
