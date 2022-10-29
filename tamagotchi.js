// Create class below
class Tamagotchi {
    constructor (name, energy = 9, full = 8, mood = 6,    
        sick = false, rehomed = false) {
     //attributes
        this.name = name;
        this.energy = energy;
        this.full = full;
        this.mood = mood;
        this.sick = sick;
        this.rehomed = rehomed;
    }
    //methods
    greet() {
        console.log(`Hello, I'm ${this.name}!`);
    }
    status() {
        console.log(`My mood is: ${this.mood}`)
        console.log(`I am this full: ${this.full}`)
        console.log(`My energy is: ${this.energy}`)
        this.sick ? console.log('I am sick') : console.log('I am not sick')     
    }
    eat() {
        this.full+=2;
        this.energy--;
        if(this.full > 10) {
            this.sick = true;
        }
    }
    medicate() {
       if(this.sick === true) {
        this.full = 9;
        this.energy-=3;
        this.sick = false;
        } else {
        console.log("I don't need medication !")
        this.energy--  
       }
    }
    play() {
        if (this.sick === true){
            this.mood--;
            this.energy--;
        }      
        else if (this.mood > 9) {
            this.energy-=2;
            this.full-=1;
        }  
        else if (this.energy <=3) {
            console.log("I am too tired to play");
            this.energy-=1; 
        } else {
            this.mood += 2;
            this.energy -= 1;
            this.full -= 1;
        }
    }

    sleep() {
        this.energy +=4;
        this.full -=3;
    }
    timePasses() {
        if(!this.sick) {
            this.mood -=2;
            this.full --;
            this.energy --;
        }
        if(this.sick) {
            this.mood -=3;
            this.full -=2;
            this.energy -=2;
        }        
    }
    badGuardian() {
        if(this.energy <= 0 || this.mood <= 0 || this.full <= true) {
            this.rehomed = true;
            console.log("Tamagotchi has been rehomed.")
        }
    }
}

// Do not edit below this line
module.exports = Tamagotchi;