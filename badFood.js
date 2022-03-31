const Food = require("./food");

class BadFood extends Food {
    constructor(name, daysToSpoil = 20, fresh) {
        super(name, daysToSpoil, fresh);
        this.weapons = [
            { name: "knife", hitPoints: 3 },
            { name: "arrow", hitPoints: 4 },
            { name: "gun", hitPoints: 5 },
        ];
    }

    prepare() {
        console.log(
            `I am ${this.name} and my calories are too high to count! or I am ${this.name} and you are just a passing trend!`
        );
    }

    fight() {
        let rand = Math.floor(Math.random() * 2);
        this.daysToSpoil -= this.weapons[rand].hitPoints;
        console.log(
            `${this.name} is down ${this.weapons[rand].hitPoints}, but I am still up ${this.daysToSpoil}!`
        );
    }
}

let grapes = new BadFood("grape");
console.log(grapes.fight());
