// Create class below

class Tamagotchi{
    constructor(name, energy, full, mood, sick, rehomed){
        this.name = name;
        this.energy = energy || 9;
        this.full = full || 8;
        this.mood = mood || 6;
        this.sick = sick || false;
        this.rehomed = rehomed || false 
    }
    greet(){
        console.log(`Hello, I'm ${this.name}`)
    }
    status(){
        console.log(`My mood is: ${this.mood}
        I am this full: ${this.full}
        My energy is: ${this.energy}
        I am !${this.sick}`)
    }
    eat(){
        this.full +=2
        this.energy -=1
        if(this.full > 10){
         this.sick === true
        }else{
            null
        }
    }
}








// Do not edit below this line
module.exports = Tamagotchi;
