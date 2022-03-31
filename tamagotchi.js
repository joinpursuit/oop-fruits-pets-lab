// Create class below
class Tamagotchi {
    constructor(
        name,
        energy = 9,
        full = 8,
        mood = 6,
        sick = false,
        rehomed = false
    ) {
        this.name = name;
        this.energy = energy;
        this.full = full;
        this.mood = mood;
        this.sick = sick;
        this.rehomed = rehomed;
    }

    greet() {
        console.log(`Hello, I'm ${this.name}!`);
    }

    status() {
        console.log(`*********************\n
    My mood is: ${this.mood}
    I am this full: ${this.full}
    My energy is: ${this.energy}
    ${this.sick ? "I am sick" : "I am not sick"}
    \n*********************`);
    }

    eat() {
        this.full += 2;
        this.energy--;
        if (this.full > 10) {
            this.sick = true;
        }
    }

    medicate() {
        if (this.sick) {
            this.full = 9;
            this.energy -= 3;
            this.sick = false;
        } else {
            console.log("I do not want to take medicine");
            this.energy -= 1;
        }
    }

    play() {
        if (this.sick) {
            this.energy--;
            this.mood--;
        } else if (this.mood > 9) {
            this.energy -= 2;
            this.full--;
        } else if (this.energy <= 3) {
            this.energy--;
            console.log("I am too tired to play");
        } else if (!this.sick) {
            this.full--;
            this.energy--;
            this.mood += 2;
        }
    }

    sleep() {
        this.energy += 4;
        this.full -= 3;
    }

    timePasses() {
        if (!this.sick) {
            this.mood -= 2;
            this.full--;
            this.energy--;
        } else {
            this.mood -= 3;
            this.full -= 2;
            this.energy -= 2;
        }
    }

    badGuardian() {
        //         logs a message that the tamagotchi has been rehomed
        // if energy is less than or equal to 0, set rehomed to true
        // if mood is less than or equal to 0 set rehomed to true
        // if full is less than or equal to true set rehomed to true
        if (this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
            this.rehomed = true;
        }
    }
}
// Do not edit below this line
module.exports = Tamagotchi;
