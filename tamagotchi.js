class Tamagotchi {
    constructor(name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false) {
    this.name = name;
    this.energy = energy;
    this.full = full;
    this.mood = mood;
    this.sick = sick;
    this.rehomed = rehomed;
    }

    greet(){
        console.log(`Hello, I'm ${this.name}!`)
    }

    status(){
        console.log(
        `My mood is: ${this.mood}\n
        I am this full: ${this.full}\n
        My energy is: ${this.energy}\n
        ${this.sick ? "I am not sick" : ""}   
        `);
    }

    eat(){
        this.full += 2;
        this.energy--;

        if(this.full > 10) {
            this.sick = true;
        }
    }   

    medicate(){
        if (this.sick === true){
            this.full = 9;
            this.energy -= 3;
            this.sick = false;
        } else {
            console.log("refusal to take medicine")
            this.energy--;
        }
    }
    
    play(){
        if(this.sick === true){
            this.mood--;
            this.energy--;
        }
            else if(this.mood > 9) {
                this.energy -= 2;
                this.full--;
            }
            else if(this.energy <= 3){
                console.log("I am too tired to play")
                this.energy--;
            }  
            else {
        this.mood += 2;
        this.energy--;
        this.full--;
        } 
    }
    // - sleep:
    //   - increases energy by 4 and decreases full by 3
    sleep(){
        this.energy += 4;
        this.full -= 3;
    }
    // - timePasses:
    //   - if tamagotchi is not sick - mood decreases by 2, fullness and energy decrease by 1
    //     -if tamagotchi is sick - mood decreases by 3, fullness and energy decrease by 2
    timePasses(){
        if(this.sick === false) {
            this.mood -= 2;
            this.full--;
            this.energy--;
        } 
        if(this.sick === true){
            this.mood -= 3;
            this.full -= 2;
            this.energy -=2;
        }
    }
    // - badGuardian
    //   - logs a message that the tamagotchi has been rehomed
    //   - if energy is less than or equal to 0, set rehomed to true
    //   - if mood is less than or equal to 0 set rehomed to true
    //   - if full is less than or equal to true set rehomed to true

    badGuardian(){
        // console.log(`the ${this.name} has been rehomed`)
        if(this.energy <= 0) {
            this.rehomed = true;
        }
        if(this.mood <= 0) {
            this.rehomed = true;
        }
        if(this.full <= 0) {
            this.rehomed = true;
        }
    }




}

const newMethod = new Tamagotchi('Pikachu', 10, 10, 10, false, false);
console.log(newMethod)
// Do not edit below this line
module.exports = Tamagotchi;



// Do not edit below this line
module.exports = Tamagotchi;