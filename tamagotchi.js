// Create class below
class Tamagatchi {
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
    console.log(`Hello, I'm ${this.name}`);
  }
  status() {
    console.log(`****************`);
    console.log(`My mood is : ${this.mood}`);
    console.log(`I am this full: ${this.full}`);
    console.log(`My energy is: ${this.energy}`);
    !this.sick
      ? console.log(`I am not sick`)
      : console.log(`I don't feel too good...`);
    console.log(`****************`);
  }
  eat() {
    this.full += 2;
    this.energy--;
    this.full > 10 ? (this.sick = true) : null;
    this.status();
  }
  medicate() {
    this.sick
      ? ((this.full = 9), (this.energy -= 3), (this.sick = false))
      : (console.log("No! I feel fine!"), this.energy--);
  }
  play() {
    if (this.sick) {
      console.log(`${this.name} doesn't feel like playing.`);
      this.mood--;
      this.energy--;
      this.status();
    } else if (this.mood > 9) {
      console.log(`${this.name} seems too wound up to play`);
      this.energy -= 2;
      this.full--;
      this.status();
    } else if (this.energy <= 3) {
      console.log(`But I am le tired`);
      this.energy--;
      this.status();
    } else {
      this.mood += 2;
      this.full--;
      this.energy--;
      this.status();
    }
  }
  sleep() {
    this.energy += 4;
    this.full -= 3;
    this.status();
  }
  timePasses() {
    !this.sick
      ? ((this.mood -= 2), this.full--, this.energy--)
      : ((this.mood -= 3), (this.full -= 2), (this.energy -= 2));
    this.status();
  }
  badGuardian() {
    if (this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
      this.rehomed = true;
      console.log(
        `You are terrible, and ${this.name} has been taken away by Tamagatchi Protective Services`
      );
    }
  }
}

let harold = new Tamagatchi("Harold");
harold.greet();
harold.status();
harold.eat();
harold.medicate();
harold.play();
harold.sleep();
harold.timePasses();
harold.badGuardian();

// Do not edit below this line
module.exports = Tamagatchi;
