// Create class below
class Tamagotchi{
    constructor(name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false){
        this.name= name;
        this.energy = energy;
        this.full = full;
        this.mood = mood;
        this.sick = sick;
        this.rehomed = rehomed;
    }
    //methods
    greet(){
        console.log(`Hello I'm ${this.name}`)
    }
    status(){
        console.log(`${this.energy} ${this.full} ${this.mood} ${this.sick}`)
    }
    eat(){
        this.full = this.full+2;
        this.energy= this.energy-1;
        if(this.full > 10){
            this.sick=true;
        }
    }
    medicate(){
        if(this.sick){
            this.sick = false;
            this.full = 9;
            this.energy = this.energy - 3;
        }else{
            this.energy = this.energy - 1;
        }
    }
    play(){
        if(!this.sick){
            this.mood = this.mood + 2;
            this.energy = this.energy - 1;
            this.full = this.full - 1;
        }
    }
}
//run file
const friend = new Tamagotchi('')
console.log(friend)
// Do not edit below this line
module.exports = Tamagotchi;