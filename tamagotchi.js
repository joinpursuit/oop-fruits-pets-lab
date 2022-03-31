// Create class below
class Tamagotchi{
    constructor(name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false){
        this.name = name;
        this.energy = energy;
        this.full = full;
        this.mood = mood;
        this.sick = sick;
        this.rehomed = rehomed;
    }
    greet(){
        console.log(`Hello I'm ${this.name}`);
    }
    status(){
        console.log(`
            my mood is: ${this.mood}
            I am this full: ${this.full}
            my energy is: ${this.energy}
            I am not sick: ${this.sick}
        `);
    }
    eat(){
        this.full += 2;
        this.energy--;
        if(this.full > 10){
            this.sick = true;
        } 
    }
    medicate(){
        if(this.sick){
            this.full = 9;
            this.energy -= 3;
        }

        if(!this.sick){
            console.log("refusal to take medicine");
            this.energy -= 1;
        }

        this.sick = false;
    }
    play(){   
        if(this.sick){ // is not sick
            this.mood -= 1;
            this.energy -= 1;
        }else if(this.mood > 9){
            this.energy -= 2;
            this.full -= 1;
        }else if(this.energy <= 3){
            console.log("I am too tired to play");
            this.energy -= 1;
        }else if(!this.sick){ // is sick
            this.mood += 2;
            this.energy -= 1;
            this.full -= 1;        
        }
    }
    sleep(){
        this.energy += 4;
        this.full -= 3;
    }
    timePasses(){
        if(!this.sick){
            this.mood -= 2;
            this.full -= 1;
            this.energy -= 1;
        }else if(this.sick){
            this.mood -= 3;
            this.full -= 2;
            this.energy -= 2;
        }
    }
    badGuardian(){
        if(this.energy <= 0){
            this.rehomed = true;
        }

        if(this.mood <= 0){
            this.rehomed = true;
        }

        if(this.full <= 0){
            this.rehomed = true;
        }
    }
}

const agumon = new Tamagotchi("Agumon")
console.log(agumon.play());


// Do not edit below this line
module.exports = Tamagotchi;
