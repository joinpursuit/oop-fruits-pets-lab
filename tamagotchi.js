// Create class below
class Tamagotchi {
    constructor(name, energy, full, mood, sick, rehomed){
        this.name = name;
        this.energy = 9;
        this.full = 8;
        this.mood = 6;
        this.sick = false;
        this.rehomed = false;
    }

    greet(){
        console.log(`Hello, I'm ${this.name}`)
    }

    status(){
        console.log(`My mood is: ${this.mood}
        I am this full: ${this.full}
        My energy is: ${this.energy}
        ${this.sick ? "I am sick" : "I am not sick"}
        `)
    }

    eat(){
        
    }

    
}
// Do not edit below this line
module.exports = Tamagotchi;
