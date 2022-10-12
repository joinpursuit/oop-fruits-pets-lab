const { faShuttleSpace } = require("@fortawesome/free-solid-svg-icons")

// Create class below
class Tamagotchi {
    constructor(name) {
        this.name = name
        this.energy = 9
        this.full = 8
        this.mood = 6
        this.sick = false
        this.rehomed = false
    }

    greet() {
        console.log(`Hello, I'm ${this.name}`)
    }

    status() {
        console.log(`My mood is: ${this.mood}`)
        console.log(`I am this full: ${this.full}`)
        console.log(`My energy is: ${this.energy}`)
        sick ? console.log('I am not sick') : console.log('I am sick')
    }

    eat() {
        this.full += 2
        this.energy -= 1

        if(this.full > 10){
            this.sick = true
        }
    }

    medicate() {
        if(this.sick === true){
            this.full = 9
            this.energy -= 3
            this.sick = false
        } else {
            console.log(`${this.name} refuse to take medicine`)
            this.energy --
        }
    }

    play() {
        if(this.sick === true){
            this.mood --
            this.energy --
        } else if(this.mood > 9){
            this.energy -= 2
            this.full --
        } else if(this.energy <= 3){
            console.log("I am too tired to play")
            this.energy --    
        } else {
            this.mood += 2 
            this.energy --
            this.full --
        }
    }
    
    sleep() {
        this.energy += 4
        this.full -= 3
    }

    timePasses() {
        if(!this.sick){
            this.mood -= 2
            this.full --
            this.energy --
        } else {
            this.mood -= 3
            this.full -= 2
            this.energy -= 2
        }
    }

    badGuardian() {
        if(this.energy <= 0 || this.energy <= 0 || this.mood <= 0 || this.full <= 0){
            this.rehomed = true
        }

        if(this.rehomed){
            console.log(`${this.name} has been rehomed0`)
        }

    }
}
// Do not edit below this line
module.exports = Tamagotchi;
