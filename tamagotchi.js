// Create class below
class Tamagotchi {
  constructor(name, energy=9, full=8, mood=6, sick=false,rehomed=false ){
      this.name = name;
      this.energy = energy;
      this.mood = mood;
      this.sick = sick;
      this.full = full;
      this.rehomed = false
  }
  greet(){
      console.log(`Hello, I'm ${this.name}`);
  };
  status(){
      console.log(` My mood is: ${this.mood}\n I am this full: ${this.full}\n My energy is: ${this.energy}\n I am` + (this.sick ? '': 'not') + 'sick')
  };
  eat(){
    this.full += 2;
    this.energy --;
    if(this.full > 10){
      this.sick = true;
    };
  };
  medicate(){
    
  };
  play(){

  };
  sleep(){

  };
  timePasses(){

  };
  badGuardian(){

  }
};
// Do not edit below this line
module.exports = Tamagotchi;
