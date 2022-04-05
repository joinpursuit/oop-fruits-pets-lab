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
    this.full += 2, 
    this.energy--

    if(this.full > 10){
        this.sick = true
    }
}

medicate(){
    if(this.sick === true){
        // this.full += 9;
        // this.energy -= 3;
    }else{
        console.log(`${this.name} refuses to take medicine`);
        this.energy--;
    }
}

play(){
    this.energy--;
    this.full--;
    this.mood += 2;
    if(this.sick === true){
        //do not play if sick
    }
    else if(this.mood >= 9){
//if mood is greater than or equal to 9, don't play
    }
    else if(this.energy >= 3){

    }//if energy is greater than or equal to 3 don't play
    
}

sleep(){
    this.energy += 4;
    this.full -= 3;
}

timePasses(){
    if(this.sick === false){
        this.mood -= 2;
        this.full--;
        this.energy--;
    }
    if(this.sick === true){
        this.mood -= 3;
        this.full -= 2;
        this.energy -= 2;
    }
}

    badGuardian(){
        if(this.energy <= 0){
            this.rehomed = true;
        }
        else if (this.mood && this.full <= 0){
            this.rehomed = true;
        }
    }

}


// Do not edit below this line
module.exports = Tamagotchi;