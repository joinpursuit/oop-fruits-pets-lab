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
        console.log(`Hello, I'm ${this.name}`)
    }
    status() {
        console.log(`${this.energy},${this.full},${this.mood},${this.sick}`)
    }
    eat() {
        this.full += 2;
        this.energy -= 1;
        if (this.full > 10) {
            return this.sick = true;
        }
    }
    medicate() {
        if (this.sick === true) {
            this.full = 9;
            this.energy -= 3;
        } else {
            console.log("refusal to take medicine")
            this.energy -= 1
        }
    }
    play() {
        this.mood += 2;
        this.energy -= 1;
        this.full -= 1;
        if (this.sick === true || this.mood > 9 || this.energy <= 3) {
            this.energy -= 2;
            this.full -= 1;
            console.log("I am too tired to play")
            this.energy -= 1;
        } else if (`${this.name} is asked to play`) {
            this.energy -= 1;
            this.mood -= 1;

        }
    }
    sleep() {
        this.energy += 4;
        this.full -= 3;
    }
    timePasses() {
        if (this.sick === false) {
            this.mood -= 2
            this.energy -= 1;
            this.full -= 1;
        } else {
            this.mood -= 3
            this.energy -= 2;
            this.full -= 2;
        }
    }
    badGuardian() {
        if (this.energy <= 0) {
            this.rehomed = true;
        }
        if (this.mood <= 0) {
            this.rehomed = true;
        }
        if (this.full <= 0) {
            this.rehomed = true;
        }
        console.log("Tamagotchi has been rehomed");
    }
}

const kalilah = new Tamagotchi("kalilah", 9, 8, 6, false)

kalilah.greet()
kalilah.status()
kalilah.eat()
kalilah.medicate()
kalilah.play()
kalilah.sleep()
kalilah.timePasses()
kalilah.badGuardian()

// Do not edit below this line
module.exports = Tamagotchi;
