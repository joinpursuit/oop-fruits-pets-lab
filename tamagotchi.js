const e = require('cors')

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
    this.name = name
    this.energy = energy
    this.full = full
    this.mood = mood
    this.sick = sick
    this.rehomed = rehomed
  }
  greet() {
    return `Hello, I'm ${this.name}`
  }
  status() {
    return this.energy, this.full, this.sick
  }
  eat() {
    this.full += 2
    this.energy -= 1
    if (this.full > 10) {
      this.sick = true
    }
  }
  medicate() {
    if (this.sick === true) {
      this.full = 9
      this.energy -= 3
    } else {
        this.energy-=1
    }
    
  }
    play() {
        if (this.sick===true || this.mood >9 || this.energy <=3) {
            this.mood -= 1
            this.energy-=1
        }
       
    }
}
// Do not edit below this line
module.exports = Tamagotchi
