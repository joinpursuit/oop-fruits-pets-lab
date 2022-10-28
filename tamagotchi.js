// Create class below [ok]
// Can call new on Tamagotchi [ok]
// Tamagotchi has name property that is a string [ok]
// Tamagotchi has energy property that is a number, default value is 9 [ok]
// Tamagotchi has full property that is a number, default value is 8 [ok]
// Tamagotchi has mood property that a number, default value is 6 [ok]
// Tamagotchi has sick property that is default false [ok]
// Tamagotchi has rehomed property that is default false [ok]
class Tamagotchi {
  constructor(name='', energy=9, full=8, mood=6, sick=false, rehomed=false) {
    this.name = name;
    this.energy = energy;
    this.full = full;
    this.mood = mood;
    this.sick = sick;
    this.rehomed = rehomed;
  }

  // Tamagotchi has greet method [ok]
  greet() {
    console.log(`Hello, I'm ${this.name}!`);
  }

  // Tamagotchi has status method
  status() {
    console.log(`
    Here is my Status
    Mood: ${this.mood}
    Full: ${this.full}
    Energy: ${this.energy}
    `);
  }
}

// Do not edit below this line
module.exports = Tamagotchi;
