// Create class below

class Tamagotchi {
    constructor (name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false){
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
        console.log(
            `My mood is: ${this.mood};
            I am this full: ${this.full};
            My energy is: ${this.energy};
            Am I sick?: ${this.sick}`);

    }
    eat() {
        this.full = this.full + 2;
        this.energy = this.energy - 1;  
        if (this.full > 10) {
            this.sick = true
        } 
        //this.status() //to see in console when node tamagotchi.js
    }
    medicate() {
        if (this.sick === true){  
            this.full = 9; 
            this.energy = this.energy - 3;
            this.sick = false;
        } else if (this.sick === false) {
            console.log(`${this.name} refuses to take medicine`);
            this.energy = this.energy - 1;
        }
        //this.status() //to see in console when node tamagotchi.js
    }
    play(){
        //won't play
        if (this.sick === true){
            this.mood = this.mood -1; 
            this.energy = this.energy -1; 
        } else if (this.mood > 9){
            this.energy = this.energy -2; 
            this.full = this.full - 1; 
        } else if (this.energy <= 3){
            console.log("I am too tired to play");
            this.energy = this.energy - 1;
        } else {
            //will play
            this.mood = this.mood + 2; 
            this.energy = this.energy - 1; 
            this.full = this.full -1;
        }
    }
    sleep(){
        this.energy = this.energy + 4; 
        this.full = this.full - 3;
    }
    timePasses(){
        if (this.sick === true){
            this.mood = this.mood - 3; 
            this.full = this.full - 2; 
            this.energy = this.energy - 2; 
        }
        if (this.sick === false){
            this.mood = this.mood - 2; 
            this.full = this.full - 1; 
            this.energy = this.energy - 1;
        }
    }
    badGuardian(){
        console.log(`The tamagotchi ${this.name} has been rehomed`)
        if (this.energy <= 0 || this.mood <= 0 || this.full <= 0){
            this.rehomed = true;
        }
    }
}

// const ducky = new Tamagotchi ("Ducky")
// console.log(ducky.eat().medicate())


// Do not edit below this line
module.exports = Tamagotchi;
