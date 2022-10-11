// Create class below
class Tamagatchi {
  constructor(name) {
    this.name = name;
    this.energy = 9;
    this.full = 8;
    this.mood = 6;
    this.sick = false;
    this.rehomed = false;
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
    this.full += 3;
    this.energy--;
    this.full > 10 ? (this.sick = true) : null;
    this.status();
  }
  medicate() {
    this.sick
      ? ((this.full = 9), (this.energy -= 3))
      : (console.log("No! I feel fine!"), this.energy--);
  }
  play() {
    if (this.sick) {
      console.log(`${this.name} doesn't look like playing.`);
      this.mood--;
      this.energy--;
    } else if (this.mood > 9) {
      this.mood--;
      this.energy--;
      console.log(`${this.name} seems too wound up to play`);
    } else if (this.energy <= 3) {
      console.log(`But I am le tired`);
      this.energy--;
    } else {
      this.mood += 2;
      this.full--;
      this.energy--;
    }
  }
  sleep() {
    this.energy += 4;
    this.full -= 3;
  }
  timePasses() {
    !this.sick
      ? ((this.mood -= 2), this.full--, this.energy--)
      : ((this.mood -= 3), (this.full -= 2), (this.energy -= 2));
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

// Do not edit below this line
module.exports = Tamagatchi;
