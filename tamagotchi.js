// Create class below
class Tamagotchi {
    constructor(name = "", energy = 9, full = 8, mood = 6, sick = false, rehomed = false) {
        this.name = name;
        this.energy = energy;
        this.full = full;
        this.mood = mood;
        this.sick = sick;
        this.rehomed = rehomed;
    }

    //methods
    greet() {
        console.log(`Hello, I'm ${this.name}!`)
    }

    status() {
        console.log(`My mood is: ${this.mood} I am this full: ${this.full} My energy is: ${this.energy} I am not sick`)
    }

    eat() {
        //increase fullness by 2
        this.full += 2;
        this.energy--
        //If too full (over 10) become sick
        if (this.full > 10) {
            //change boolean
            this.sick = true;
        }
    }
    //call medicate
    medicate() {
        if (this.sick = true) {
            this.full = 9;
            // -= to decrease by a num
            this.energy -= 3;
            //no longer sick
            this.sick = false
        } else {
            console.log("I don't need medicine!!")
            this.energy--;
        }
    }

    //Play
    play() {
        //If sick - reduice mood and enegry by one
        if (this.sick) {
            this.mood--;
            this.energy--;
        } else if (this.mood > 9) { //if mood is greater than 9
            this.energy -= 2;
            this.full--;
        } else if (this.energy <= 3) {
            console.log("I am too tired to play");
            this.energy--;
        } else if (!this.sick) { //If not sick
            this.mood += 2;
            this.energy--;
            this.full--;
        }
    }

    //Sleep
    sleep() {
        //regain energy
        this.energy += 4;
        //sleep off food
        this.full -= 3
    }

    //time
    timePasses() {
        //if not sick
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
        if (this.energy <= 0) {
            this.rehomed = true;
            console.log("Tamagotchi went to a new home")
        } else if (this.mood <= 0) {
            this.rehomed = true;
            console.log("Tamagotchi went to a new home")
        } else if (this.full <= 0) {
            this.rehomed = true;
            console.log("Tamagotchi went to a new home")
        } else {
            console.log("Good job taking care of Tamagotchi!!!")
        }
    }

}

const myTom = new Tamagotchi("Tom")

console.log(myTom)

// Do not edit below this line
module.exports = Tamagotchi;
