// Create class below
class Tamagotchi {
  constructor(name, energy, full, mood, sick, rehomed) {
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
    console.log(
      `My mood is : ${this.mood} I am this full : ${this.full} My energy is : ${
        this.energy
      } I am ${this.sick ? "not sick" : "sick"}`
    );
  }

  eat() {
    this.full = this.full + 2;
    this.energy = this.energy - 1;

    if (this.full > 10) {
      this.sick = true;
    }
  }

  medicate() {
    if (this.sick === true) {
      this.full = 9;
      this.energy = this.energy - 3;
      this.sick = false;
    } else {
      console.log(" refuse to make medicine");
      this.energy = this.energy - 1;
    }
  }

  play() {
    if (this.sick === true) {
      this.mood = this.mood - 1;
      this.energy = this.energy - 1;
    } else if (this.mood > 9) {
      this.energy = this.energy - 2;
      this.full = this.full - 1;
    } else if (this.energy <= 3) {
      console.log("I am too tired to play");
      this.energy = this.energy - 1;
    } else {
      this.mood = this.mood + 2;
      this.energy = this.energy - 1;
      this.full = this.full - 1;
    }
  }

  sleep() {
    this.energy = this.energy + 4;
    this.full = this.full - 3;
  }

  timePasses() {
    if (this.sick === true) {
        this.mood = this.mood - 3;
        this.full = this.full - 2;
        this.energy = this.energy - 2;
    } else {
        this.mood = this.mood - 2;
        this.full = this.full - 1;
        this.energy = this.energy - 1;
    }
  }

  badGuardian() {
    console.log(`${this.name} has been rehomed.`)
    if (this.energy <= 0 || this.mood <= 0 ||this.full <= 0) {
        this.rehomed = true;
    } else {
        this.rehomed = false;
    }

  }
}
// Do not edit below this line
module.exports = Tamagotchi;
