// Create class below
class Tamagotchi {
  constructor(name, energy, full, mood, sick, rehomed) {
    this.name = name;
    this.energy = energy || 9;
    this.full = full || 8;
    this.mood = mood || 6;
    this.sick = sick || false;
    this.rehomed = rehomed || false;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}!`);
  }
  status() {}
  eat() {
    this.full += 2; // this.full = this.full + 2
    this.energy--;
    if (this.full > 10) {
      return (this.sick = true);
    }
  }
  medicate() {
    this.full = 9;
    if (this.sick) {
      this.energy -= 3;
    } else {
      this.energy--;
    }
    return (this.sick = false); // Taken care of now have to set back to false
  }
  play() {
    if (this.sick) {
      this.mood--;
      this.energy--;
    } else if (this.mood > 9) {
      this.energy -= 2;
      this.full--;
    }
    else if(this.energy<=3){
        console.log("I am too tired to play")
        this.energy--

    } else {
      this.mood += 2;
      this.energy--;
      this.full--;
    }
  }
  sleep(){
      this.energy += 4 
      this.full -= 3
  }
  timePasses(){
    if(this.sick){
        this.mood -= 3
        this.full -= 2 
        this.energy -=2 
        
    } else{
        this.mood -= 2
        this.full -- 
        this.energy--
    }
    return (this.sick = false)
  }
  badGuardian(){
    if(this.energy<=0){
this.rehomed= true
    }
    else if (this.mood<= 0){
this.rehomed= true 

    }
    else if(this.full<=0){
this.rehomed= true
    }
  }
}

// Do not edit below this line
module.exports = Tamagotchi;
