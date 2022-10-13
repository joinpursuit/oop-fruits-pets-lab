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
      }
// Do not edit below this line
module.exports = Tamagotchi;
