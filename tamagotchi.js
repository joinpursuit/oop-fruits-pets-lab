// Create class below

// greet: Tamagotchi console logs Hello, I'm <name>!
// status: Tamogotchi console logs energy, full, mood, and sick values (see below for sample message)
// eat: increases fullness by two, decreases energy by 1,
// if eat method makes fullness more than 10, tamagotchi becomes sick (sick = true)

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
}

const myPet = new Tamagotchi("Mochi");
myPet.greet();

// Do not edit below this line
module.exports = Tamagotchi;
