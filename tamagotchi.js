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

  play() {
    if (this.sick) {
      this.mood--;
      this.energy--;
      return;
    }
    if (this.mood > 9) {
      this.energy -= 2;
      this.full--;
      return;
    }
    if (this.energy <= 3) {
      console.log("I am too tired to play.");
      this.energy--;
      return;
    }
    this.mood += 2;
    this.energy--;
    this.full--;
  }
  sleep() {
    this.energy += 4;
    this.full -= 3;
  }

  timePasses() {
    if (this.sick) {
      this.mood -= 3;
      this.energy -= 2;
      this.full -= 2;
      return;
    }
    this.mood -= 2;
    this.energy--;
    this.full--;
  }
  badGuardian() {
    if (this.energy <= 0) this.rehomed = true;
    if (this.mood <= 0) this.rehomed = true;
    if (this.full <= 0) this.rehomed = true;
    console.log(`${this.name} has been rehomed.`);
  }
}

const Tamatchi = new Tamagotchi("Tamatchi");
Tamatchi.greet();
Tamatchi.status();
Tamatchi.eat();
Tamatchi.medicate();
Tamatchi.play();
Tamatchi.sleep();
Tamatchi.timePasses();
Tamatchi.badGuardian();

module.exports = Tamagotchi;
