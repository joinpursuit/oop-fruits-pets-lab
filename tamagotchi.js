// Create class below

// Create class below
// Create a virtual pet that can play, eat, sleep and more! Try to keep your pet happy or else it will be rehomed!

// - Create a tamagotchi class

// - Attributes
//   - name: string
//   - energy: number, default value 9
//   - full: number, default value 8
//   - mood: number, default value 6
//   - sick: boolean, default false
//   - rehomed: boolean, default false
// - Methods

//   - greet: Tamagotchi console logs `Hello, I'm <name>!`
//   - status: Tamogotchi console logs energy, full, mood, and sick values (see below for sample message)
//   - eat: increases fullness by two, decreases energy by 1,
//     - if eat method makes fullness more than 10, tamagotchi becomes sick (sick = true)

// - medicate:
//   - if tamagotchi is sick - set full to 9 - decrease energy by 3
//   - if tamagotchi is not sick
//     - console log refusal to take medicine
//       - reduce energy by 1
// - play: increases mood by 2, reduces energy and full by 1,
//   - will not play if tamagotchi is sick,
//   - if asked to play when sick, reduce mood and energy by 1
//   - will not play if mood is above 9, reduce energy by 2 and full by 1
//   - will not play if energy is less than or equal to 3
//     - console log "I am too tired to play" - reduce energy by 1
// - sleep:
//   - increases energy by 4 and decreases full by 3
// - timePasses:
//   - if tamagotchi is not sick - mood decreases by 2, fullness and energy decrease by 1
//     -if tamagotchi is sick - mood decreases by 3, fullness and energy decrease by 2
// - badGuardian
//   - logs a message that the tamagotchi has been rehomed
//   - if energy is less than or equal to 0, set rehomed to true
//   - if mood is less than or equal to 0 set rehomed to true
//   - if full is less than or equal to true set rehomed to true

// Sample status message:

// ![sample tamagotchi status](./assets/sample-status.png)

// Test your class by

// - creating an instance
// - running each method at least once

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
