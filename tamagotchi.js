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
        console.log(`Hello, I'm ${this.name}!`)
    }

    status() {
        console.log(`My mood is: ${this.mood}\n I am this full: ${this.full}\n My energy is: ${this.energy}\n I am ${this.sick ? 'sick' : 'not sick'} `)
    }

    eat() {
        if (this.full >= 10) {
            this.sick = true
        }
        this.full += 2
        this.energy-- 
    }

    medicate() {
        if(this.sick){
            this.sick = false
            this.updateStatus()
        } else {
            this.energy--
            console.log("I don't want it!")
        }
    }

    updateStatus() {
       this.full = 9
       this.energy -= 3
    }

    play() {
       if(this.sick) {
        this.mood-- 
        this.energy--
       } else if(this.mood > 9){
           this.energy -= 2
           this.full--
       } else if(this.energy <=3){
           console.log(`I am too tired to play`)
           this.energy--
       } else {
           this.mood += 2
           this.energy--
           this.full--
       }
    }

    sleep() {
        this.energy += 4
        this.full -= 3
    }

    timePasses() {
        if(!this.sick){
            this.mood -= 2
            this.full--
            this.energy--
        } else if(this.sick){
            this.mood -= 3
            this.full -= 2
            this.energy -= 2
        }
    }

    badGuardian() {
       if(this.energy <= 0 || this.mood <= 0 || this.full <= 0){
           this.rehomed = true
        console.log(`${this.name} has been rehomed`)
       }
    }

}

// const pet = new Tamagotchi('Tama', 0, 0, 0, true )
// pet.status()
// pet.greet()
// pet.eat()
// pet.eat()
// console.log(pet)
// pet.medicate()
// console.log(pet)
// console.log(pet.full)
// console.log(pet.energy)
// console.log(pet.sick)

// Do not edit below this line
module.exports = Tamagotchi;
