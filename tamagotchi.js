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

  status() {
    console.log(
      `My Mood is: ${this.mood}\nI am this full: ${this.full}\nMy Energy is: ${
        this.energy
      }\n${this.sick ? "I am sick" : "I am not sick"}`
    );
  }
}

const myPet = new Tamagotchi("Mochi");
myPet.greet(); // Hello, I'm Mochi
myPet.status(); // I am not sick

const sickPet = new Tamagotchi("Mocha", 9, 8, 6, true, false);
sickPet.status(); // I am sick

// Do not edit below this line
module.exports = Tamagotchi;
