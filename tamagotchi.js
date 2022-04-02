// Create class below
class Tamagotchi{
    constructor(name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false){
        this.name = name;
        this.energy = energy;
        this.full = full;
        this.mood = mood;
        this.sick = sick;
        this.rehomed = rehomed;
    };
    greet(name){
        return `Hello, I'm ${name}!`;
    };
    status(){
        console.log(`My mood is: ${this.mood}\n I am this full: ${this.full}\n My energy is: ${this.energy}\n I am ${this.sick ? 'sick': 'not sick'}`);
    };
    eat(){
        this.full += 2;
        this.energy -= 1;
        if(this.full > 10){
            return this.sick = true;
        };
    };
    medicate(){
        if(this.sick){
            this.full = 9;
            this.energy -= 3;
            this.sick = false;
        } else{
            this.energy -= 1;
            console.log("Tamagotchi refuses to take medicine, I'm not sick!");
        };
    };
    play(){
        if(this.sick){
            this.mood -= 1;
            this.energy -= 1;
        } else if(this.mood > 9){
            this.energy -= 2;
            this.full -= 1;
        } else if(this.energy <= 3){
            console.log("I am too tired to play");
            this.energy -= 1;
        } else{
            this.mood += 2;
            this.energy -= 1;
            this.full -=1;
        };
    };
    sleep(){

    };
    timePasses(){

    };
    badGuardian(){

    };






    
};



// Do not edit below this line
module.exports = Tamagotchi;
