// Create class below
class Tamagotchi {
    constructor(name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false){
        this.name = name;
        this.energy = energy;
        this.full = full;
        this.mood = mood;
        this.sick = sick;
        this.rehomed = rehomed;
    }

    greet(){
        console.log(`Hello, I'm ${this.name}`)
    }

    status(){
        console.log(`my mood is ${this.mood}.\n I am this full: ${this.full}.\n My energy is: ${this.energy}.\n I am ${this.sick}? sick : not sick.`)
    }

    eat(){
        this.full += 2;
        this.energy -=1;
        if(this.full > 10){
            this.sick = true;
        }
    }

    medicate(){
        if(this.sick) {
            this.full = 9;
            this.energy -=3;
            this.sick = false;
        } else {
            console.log("refusal to take medicine")
            this.energy -=1;
        }
    }
   
    // will not play if tamagotchi is sick,
    // if asked to play when sick, reduce mood and energy by 1
    // will not play if mood is above 9, reduce energy by 2 and full by 1
    // will not play if energy is less than or equal to 3
    // console log "I am too tired to play" - reduce energy by 1
    play(){
        if(this.sick) {
            this.mood -= 1;
            this.energy -=1;
         }

        if(this.mood>9) {
            this.energy -=2;
            this.full -=1;
            return;
        }

        if(this.energy <=3){
            this.energy -= 1;
            console.log("I am too tired to play");
            return;
        }
        
        if(!this.sick) {
            this.mood += 2;
            this.energy -=1;
            this.full -=1;
        }
    }

    sleep(){
        this.energy += 4;
        this.full -= 3;
    }

    timePasses(){
        if(this.sick){
            this.mood -= 3;
            this.full -= 2;
            this.energy -= 2;
        } else {
            this.mood -= 2;
            this.full -= 1;
            this.energy -= 1;
        }
    }

    badGuardian(){
        console.log(`${this.name} has been rehomed`)
        if(this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
           return this.rehomed = true;
        }
    
    }
}

let newTamagotchi = new Tamagotchi("Cod roe")

// Do not edit below this line
module.exports = Tamagotchi;
