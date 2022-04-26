// Create class below

// Tamagotchi

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
		console.log(`Hello, I'm ${this.name}`);
	}
	status() {
		console.log(`My modd is: ${this.mood}`);
		console.log(`I am this full ${this.full}`);
		console.log(`My energy is ${this.energy}`);
		if (this.sick) {
			console.log("I am sick");
		} else {
			console.log(`I am not sick `);
		}
	}
	eat() {
		this.full = this.full + 2;
		this.energy--;
		this.full > 10 ? (this.sick = true) : false;
	}
	medicate() {
		if (this.sick == true) {
			this.full = 9;
			this.energy = this.energy - 3;
			this.sick = false;
		} else {
			console.log(`${this.name} refusal to take medicine`);
			this.energy--;
		}
	}
	play() {
		if (this.sick === true) {
			this.mood--;
			this.energy--;
			console.log("I am too tired too play");
		} else if (this.mood > 9) {
			this.energy = this.energy - 2;
			console.log("I am too tired too play");
			this.full--;
		} else if (this.energy <= 3) {
			console.log("I am too tired too play");
			this.energy--;
		} else {
			this.mood = this.mood + 2;
			this.energy--;
			this.full--;
		}
	}

	sleep() {
		this.energy = this.energy + 4;
		this.full = this.full - 3;
	}

	timePasses() {
		if (this.sick === false) {
			this.mood = this.mood - 2;
			this.full--;
			this.energy--;
		} else {
			this.mood = this.mood - 3;
			this.full = this.full - 2;
			this.energy = this.energy - 2;
		}
	}

	badGuardian() {
		console.log(`${this.name} has been rehomed`);
		if (this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
			this.rehomed = true;
		}
	}
}

const pet = new Tamagotchi("Bob", 8, 8, 8, false, false);
pet.greet();
pet.status();
pet.eat();
pet.medicate();
pet.play();
pet.sleep();
pet.timePasses();
pet.badGuardian();
console.log(pet);
// Do not edit below this line
module.exports = Tamagotchi;
