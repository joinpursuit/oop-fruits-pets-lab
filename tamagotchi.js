// Create class below
class Tamagotchi {
    constructor(name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false) {
        this.name = name;
        this.energy = energy;
        this.full = full;
        this.mood = mood;
        this.sick = sick;
        this.rehomed = rehomed;
    }
    greet() {
        console.logs(`Hello, I'm ${this.name}!`)
    }
    status() {
        const message = `My mood is: ${this.mood} \n I am this full: ${this.full} \n My energy is: ${this.energy}`
        this.full > 10 ? message + "\n I am sick" : message + "\n I am not sick"
    }
    eat() {
        this.full += 2;
        this.energy -= 1;
        this.full > 10 ? this.sick = true : null;
    }
    medicate() {
        if (this.sick === true) {
            this.full = 9;
            this.energy -= 3;
            this.sick = false;
        } else {
            console.log(`${this.name} won't take the medicine`);
            this.energy -= 1;
        }
    }
    play() {
        if (this.sick) {
            this.mood -= 1;
            this.energy -= 1;
        }else if (this.mood > 9) {
            this.energy -= 2;
            this.full -= 1
        }else if (this.energy <= 3) {
            this.energy -= 1;
            console.log('I am too tired to play');
        } else {
            this.mood += 2;
            this.energy -= 1;
            this.full -= 1
        }
    }
    sleep() {
        this.energy += 4;
        this.full -= 3;
    }
    timePasses() {
        if (this.sick) {
            this.mood -= 3;
            this.full -= 2;
            this.energy -= 2;
        } else {
            this.mood -= 2;
            this.full -= 1;
            this.energy -= 1;
        }
    }
    badGuardian() {
        this.energy <= 0 ? this.rehomed = true : null;
        this.mood <= 0 ? this.rehomed = true : null;
        this.full <= 0 ? this.rehomed = true : null;
        console.log(`${this.name} has been rehomed`)
    }

    // console.log('here')
}
// Do not edit below this line
module.exports = Tamagotchi;
