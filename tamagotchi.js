// Create class below

class Tamagotchi {
  constructor(name, energy, full, mood, sick = false, rehomed = false) {
    this.name = name;
    this.energy = energy || 9;
    this.full = full || 8;
    this.mood = mood || 6;
    this.sick = sick;
    this.rehomed = rehomed;
  }
  greet() {
    console.lo(`Hello, I'm ${this.name}!`);
  }

  medicate() {
      if(!this.sick){
          console.log('refusal to take medicine')
          this.energy--
      } else {
        this.full = 9
        this.energy -= 3
        this.sick = !this.sick
      }
  }

  status(){}

  eat(){
    this.full += 2
    this.energy--
    if(this.full > 10){
        this.sick = !this.sick
    }
  }
  //  play: increases mood by 2, reduces energy and full by 1,
  //  will not play if tamagotchi is sick,
  //  if asked to play when sick, reduce mood and energy by 1
  //  will not play if mood is above 9, reduce energy by 2 and full by 1
  //  will not play if energy is less than or equal to 3
  //  console log "I am too tired to play" - reduce energy by 1

  play() {
    if (this.sick) {//if(this.sick === true)
      this.mood--;
      this.energy--;
    } else if (this.mood > 9) {
      this.full--;
      this.energy -= 2;
    } else if(this.energy <= 3) {
      this.energy--;
      console.log(`I am too tired to play`);
    } 
    else {
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
if(!this.sick){
    this.mood -= 2;
    this.full--;
    this.energy--;
} else {
    this.mood -= 3;
    this.full -= 2;
    this.energy -= 2;
}
}

badGuardian(){
    if(this.energy <= 0 || this.full <= 0 && this.mood <= 0){
        this.rehomed = !this.rehomed
    }
}


}

const tamagotchi = new Tamagotchi()
tamagotchi.medicate()
// Do not edit below this line
module.exports = Tamagotchi;
