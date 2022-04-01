// Create class below
class Tamagotchi {
    constructor(name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false){
        this.name = name.toString();
        this.energy = energy;
        this.full = full;
        this.mood = mood;
        this.sick = sick;
        this.rehomed = rehomed;
    }

greet(){
    console.log(`Hello, I'm ${this.name}!`)
}

status(){
    console.log(`My mood is: ${this.mood}
    I am this full: ${this.full}
    My energy is: ${this.energy}
    I am not sick`)
}

eat(){
    this.full + 2, 
    this.energy--

    if(this.full > 10){
        this.sick = true
    }
}

medicate(){
    if(this.sick === true){
        this.full = 9
        this.energy - 3
    }else{
        console.log(`${this.name} refuses to take medicine`)
        this.energy--
    }
}

play(){

}









}
// Do not edit below this line
module.exports = Tamagotchi;