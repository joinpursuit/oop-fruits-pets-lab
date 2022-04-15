// Create class below
class Tamagotchi{
    constructor(name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false){
        this.name = name;
        this.energy = energy;
        this.full = full;
        this.mood = mood;
        this.sick = sick;
        this.rehomed = rehomed;
    }
    // methods
    greet(){
        console.log(`Hello, I'm ${this.name}!`)
    }
    status(){
        console.log(`${this.energy} ${this.full} ${this.mood} ${this.sick}`)
    }
    eat(){
        this.full = this.full + 2;
        this.energy = this.energy - 1;
        if (this.full > 10){
            this.sick = true;
        }
    }
    // more methods
    medicate(){
        if (this.sick === true){
            this.full = 9;
            this.energy = this.energy - 3;
            this.sick = false;
        } else if (this.sick === false){
            console.log(`${this.name} refuses to take medicine`);
            this.energy = this.energy - 1;
        }
    }
    play(){
        // won't play
        if (this.sick === true){
            this.mood = this.mood - 1;
            this.energy = this.energy - 1;
        } else if (this.mood > 9){
            this.energy = this.energy - 2;
            this.full = this.full - 1;
        } else if (this.energy <= 3){
            console.log("I am too tired to play");
            this.energy = this.energy -1;
        } else {
            // will play
            this.mood = this.mood + 2;
            this.energy = this.energy - 1;
            this.full = this.full - 1;
        }
    }
    sleep(){
        this.energy = this.energy + 4;
        this.full = this.full - 3;
    }
    timePasses(){
        if (this.sick === false){
            this.mood = this.mood - 2;
            this.full = this.full -1;
            this.energy = this.energy -1;
        }
        if (this.sick === true){
            this.mood = this.mood - 3;
            this.full = this.full - 2;
            this.energy = this.energy - 2;
        }
    }
    badGuardian(){
        console.log(`The tamagotchi ${this.name} has been rehomed`)
        if (this.energy <= 0){
            this.rehomed = true;
        }
        if (this.mood <=0){
            this.rehomed = true;
        }
        if (this.full <= 0){
            this.rehomed = true;
        }
    }
}

// run file - node tamagotchi.js
// name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false
const friend = new Tamagotchi("Pet", 6, 8, 10, sick = false)
// const friend = new Tamagotchi("Pet", 3, 3, 4)
console.log(friend)
friend.play()
console.log(friend)

// const statusMessage = `
// ********************
// My mood is: ${friend.mood}
// I am this full: ${friend.full}
// My energy is: ${friend.energy}
// I am ${friend.sick ? "sick" : "not sick"}
// ********************`
// console.log(statusMessage)

// Do not edit below this line
module.exports = Tamagotchi;
