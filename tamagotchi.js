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
        console.log(`My mood is ${this.mood}, I am this full ${this.full}, my energy is ${this.energy}, I am ${this.sick}`)
    }
}








// Do not edit below this line
module.exports = Tamagotchi;
