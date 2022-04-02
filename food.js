// Create class below
class Food {
  constructor(name, daysToSpoil, fresh = true) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = fresh;
  }

  prepare() {
    console.log(`${this.name} is being prepared`);
  }

  isFresh() {
    if (this.fresh && this.daysToSpoil >= 0) {
      console.log(
        `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
      );
    } else {
      console.log(`${this.name} has spoiled.`);
    }
  }

  aDayPasses() {
    this.daysToSpoil--;
    this.isFresh();
  }
}

class BadFood extends Food {
  constructor(name, daysToSpoil, fresh = true, shield = false) {
    super(name, daysToSpoil, fresh);
    this.shield = shield;
    this.weapons = [
      { name: 'Attack 1', hitPoints: 3 },
      { name: 'Attack 2', hitPoints: 4 },
      { name: 'Attack 3', hitPoints: 5 },
    ];
  }

  prepare = () => {
    const battleCry = Math.floor(Math.random() * 2)
      ? `I am ${this.name} and my calories are too high to count!`
      : `I am ${this.name} and you are just a passing trend!`;
    console.log(battleCry);
  };

  fight(opponent) {
    const attack = this.weapons[Math.floor(Math.random() * 3)];
    if (!opponent.shield) {
      opponent.daysToSpoil -= attack.hitPoints;
      console.log(
        `${this.name} used ${attack.name}!\n${opponent.name} takes ${attack.hitPoints} damage!\n `
      );
    } else {
      console.log(
        `${this.name} used ${attack.name}!\n${opponent.name} blocked the attack!\n `
      );
    }
  }

  heal() {
    const healNum = Math.floor(Math.random() * 3) + 2;
    this.daysToSpoil += healNum;
    console.log(
      `${this.name} used heal!\n${this.name} healed ${healNum}HP!\n `
    );
  }

  block() {
    this.shield = true;
    console.log(
      `${this.name} used block!\n${this.name} prepares to block an attack!\n `
    );
  }

  actionSelector(choice, opponent) {
    switch (true) {
      case choice === 1:
        this.fight(opponent);
        break;
      case choice === 2:
        this.heal();
        break;
      case choice === 3:
        this.block();
        break;
    }
  }
}

const simulateBattle = (fruit1, fruit2) => {
  const fruit1Action = Math.floor(Math.random() * 3) + 1;
  const fruit2Action = Math.floor(Math.random() * 3) + 1;
  const fruit1First =
    fruit1Action === 3 ||
    (fruit2Action !== 3 && Math.floor(Math.random() * 2) === 0);

  fruit1First
    ? fruit1.actionSelector(fruit1Action, fruit2)
    : fruit2.actionSelector(fruit2Action, fruit1);

  if (fruit1.daysToSpoil <= 0) {
    console.log(
      `${fruit1.name}: [${fruit1.daysToSpoil}hp] vs ${fruit2.name}: [${fruit2.daysToSpoil}hp]\n_____\n`
    );
    console.log(`${fruit1.name} has fainted!\n${fruit2.name} wins!!`);
    return fruit2;
  } else if (fruit2.daysToSpoil <= 0) {
    console.log(
      `${fruit1.name}: [${fruit1.daysToSpoil}hp] vs ${fruit2.name}: [${fruit2.daysToSpoil}hp]\n_____\n`
    );
    console.log(`${fruit2.name} has fainted!\n${fruit1.name} wins!!`);
    return fruit1;
  }

  fruit1First
    ? fruit2.actionSelector(fruit2Action, fruit1)
    : fruit1.actionSelector(fruit1Action, fruit2);

  if (fruit1.daysToSpoil <= 0) {
    console.log(
      `${fruit1.name}: [${fruit1.daysToSpoil}hp] vs ${fruit2.name}: [${fruit2.daysToSpoil}hp]\n_____\n`
    );
    console.log(`${fruit1.name} has fainted!\n${fruit2.name} wins!!`);
    return fruit2;
  } else if (fruit2.daysToSpoil <= 0) {
    console.log(
      `${fruit1.name}: [${fruit1.daysToSpoil}hp] vs ${fruit2.name}: [${fruit2.daysToSpoil}hp]\n_____\n`
    );
    console.log(`${fruit2.name} has fainted!\n${fruit1.name} wins!!`);
    return fruit1;
  }

  fruit1.shield = false;
  fruit2.shield = false;
  console.log(
    `${fruit1.name}: [${fruit1.daysToSpoil}hp] vs ${fruit2.name}: [${fruit2.daysToSpoil}hp]\n_____\n`
  );
  return simulateBattle(fruit1, fruit2);
};

const banana = new BadFood('banana', 3);
const orange = new BadFood('orange', 4);
// banana.fight(orange);
// orange.fight(banana);
// console.log(banana.daysToSpoil);
// console.log(orange.daysToSpoil);
simulateBattle(banana, orange);
// Do not edit below this line
module.exports = Food;
