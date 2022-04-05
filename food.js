// Create class below
class Food {
  constructor(name, daysToSpoil, fresh=true){
  this.name = name;
  this.daysToSpoil = daysToSpoil;
  this.fresh = fresh;
  }
  prepare(name){
    console.log(`${name} is being prepared`)
  }

  isFresh(fresh){

  }
  aDayPasses(){
    
  }
}

// Do not edit below this line
module.exports = Food;
