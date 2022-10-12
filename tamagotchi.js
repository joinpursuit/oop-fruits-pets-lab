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
      `********************\nMy mood is: ${this.mood}\nI am this full: ${
        this.full
      }\nMy energy is: ${this.energy}\n${
        this.sick === false ? "I am not sick" : "I am sick"
      }\n********************`
    );
  }

  eat() {
    this.full += 2;
    this.energy--;
    if (this.full > 10) this.sick = true;
  }

  medicate() {
    if (this.sick) {
      this.full = 9;
      this.energy -= 3;
      this.sick = false;
      return;
    }
    console.log("I refuse to take my medicine.");
    this.energy--;
  }
}

const Tamatchi = new Tamagotchi("Tamatchi");
Tamatchi.greet();
Tamatchi.status();
Tamatchi.eat();
Tamatchi.medicate();

module.exports = Tamagotchi;
