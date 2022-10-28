// Create class below [ok]
// Can call new on Tamagotchi [ok]
// Tamagotchi has name property that is a string [ok]
// Tamagotchi has energy property that is a number, default value is 9 [ok]
// Tamagotchi has full property that is a number, default value is 8 [ok]
// Tamagotchi has mood property that a number, default value is 6 [ok]
// Tamagotchi has sick property that is default false [ok]
// Tamagotchi has rehomed property that is default false [ok]
class Tamagotchi {
  constructor(name = '', energy = 9, full = 8, mood = 6, sick = false, rehomed = false) {
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

  // Tamagotchi has status method [ok]
  status() {
    console.log(`
    Here is my Status
    Mood: ${this.mood}
    Full: ${this.full}
    Energy: ${this.energy}
    `);
  }

  // Tamagotchi has eat method [ok]
  // eat method increases fullness by 2 [ok]
  // eat method decreases energy by 1 [ok]
  eat() {
    this.full = this.full + 2;
    this.energy = this.energy - 1;
    // if eat method makes fullness more than 10, tamagotchi becomes sick [ok]
    if (this.full > 10) {
      this.sick = true;
    }
  }

  // Tamagotchi has medicate method [ok]
  // Tamagotchi medicate heals sick tamagotchi [ok]
  // Tamagotchi medicate if sick, then: [ok]
  // tamagotchi sets full to 9 and decreases energy by 3 [ok]
  medicate() {
    // Validating sick
    if (this.sick) {
      this.full = 9;
      this.energy = this.energy - 3;
      // medicate heals sick tamagotchi
      this.sick=false;
    } else {
      // Tamagotchi medicate for not sick tamagotchi reduces energy by 1 [ok]
      this.energy = this.energy - 1;
    }
  }

  // Tamagotchi has play method [ok]
  play() {
    if (this.sick) {
      // Tamagotchi won't play if it is sick [ok]
      this.mood = this.mood - 1;
      this.energy = this.energy - 1;
    }
    else if (this.mood > 9) {
      // Tamagotchi won't play if mood is above 9 [ok]
      this.energy = this.energy - 2;
      this.full = this.full - 1;
    }
    else if (this.energy <= 3) {
      // Tamagotchi won't play if energy is less than or equal to 3 [ok]
      this.energy = this.energy - 1;
    } 
    else {
      // Tamagotchi play increases mood by 2, reduces energy & full by 1 [ok]
      this.mood = this.mood + 2;
      this.energy = this.energy - 1;
      this.full = this.full - 1;
    }
  }

  // Tamagotchi has sleep method [ok]
  // Sleep method increases energy by 4 and decreases full by 3 [ok]
  sleep() {
    this.energy = this.energy + 4;
    this.full = this.full - 3;
  }

}

// Do not edit below this line
module.exports = Tamagotchi;
