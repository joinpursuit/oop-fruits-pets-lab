// Create class below
class Tamagotchi {
  constructor(name, energy, full, mood, sick, rehomed) {
    this.name = name;
    this.energy = energy || 9;
    this.full = full || 8;
    this.mood = mood || 6;
    this.sick = sick || false;
    this.rehomed = rehomed || false;
  }
  greet() {
    `Hello I'm ${this.name}`;
  }
  status() {
    console.log(`My mood is: ${this.mood}
    I am this full: ${this.full}
    My energy is: ${this.energy}
    ${this.sick ? "I am sick" : "I am not sick"}`);
  }
  eat() {
    this.full += 2;
    this.energy -= 1;
    this.full > 10 ? (this.sick = true) : null;
  }
  medicate() {
    if (this.sick) {
      this.sick = false;
      this.full = 9;
      this.energy -= 3;
    } else {
      console.log("refusal to take medicine");
      this.energy -= 1;
    }
  }
}
// Do not edit below this line
module.exports = Tamagotchi;
