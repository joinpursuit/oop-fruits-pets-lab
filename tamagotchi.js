// Create class below
class Tamagotchi {
    constructor(name, energy, full, mood, sick, rehomed) {
        this.name = name;
        this.energy = 9;
        this.full = 8;
        this.mood = 6;
        this.sick = false;
        this.rehomed = false;
    }

    greet() {
        console.log(`Hello, I'm ${this.name}`)
    }

    status() {
        console.log(`My mood is: ${this.mood}
        I am this full: ${this.full}
        My energy is: ${this.energy}
        ${this.sick ? "I am sick" : "I am not sick"}
        `)
    }

    eat() {
        if (this.full >= 10) {
            this.sick = true;
            // this.status();
        }
        this.full += 2;
        this.energy--;
    }

    medicate() {
        if (this.sick) {
            this.full = 9;
            this.energy -= 3;
            this.sick = false;
        } else {
            console.log(`Refusal to take medicine`)
            this.energy--;
        }
    }

    play() {
        if (this.sick) {
            this.mood--;
            this.energy--;
        } else if (this.mood > 9) {
            this.energy -= 2;
            this.full--;
        } else if (this.energy <= 3) {
            console.log(`I am too tired to play`)
            this.energy--;
        } else {
            this.mood += 2;
            this.energy--;
            this.full--;
        }
    }

    sleep(){
        this.energy += 4;
        this.full -= 3;
    }

    timePasses(){
        if (!this.sick){
            this.mood -= 2;
            this.full --;
            this.energy--;
        } else {
            this.mood -= 3;
            this.full -= 2;
            this.energy -= 2;
        }
    }

    badGuardian(){
        if(this.energy <= 0 || this.mood <= 0 || this.full <= 0){
            this.rehomed = true;
        }
    }
}
// Do not edit below this line
module.exports = Tamagotchi;
