// Create class below

class Tamagotchi {
    constructor(name, energy=9, full=8, mood=6, sick=false, rehomed=false) {
        this.name = name;
        this.energy = energy;
        this.full = full;
        this.mood = mood;
        this.sick = sick;
        this.rehomed = rehomed;
    }
    greet() {
        console.log(`Hello, I'm ${this.name}!`)
    }
    status() {
        console.log(`My mood is: ${this.mood}`/n `I am this full: ${this.full}`/n `My energy is: ${this.energy}`/n `I am not sick`);
    }
    eat() {
        this.full += 2;
        this.energy -= 1;
        if (this.full > 10) {
            return !this.sick
        }
    }
}
const captain = new Tamagotchi("Gozarutchi")
captain.greet()
captain.status()
captain.eat()
// Do not edit below this line
module.exports = Tamagotchi;
