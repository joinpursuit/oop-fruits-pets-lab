// Create class below
class Food {
  constructor(name, daysToSpoil = 3, fresh = true) {
    this.name = name
    this.daysToSpoil = daysToSpoil
    this.fresh = fresh
  }
  prepare() {
    console.log(`${this.name} is being prepared`)
  }
  isFresh() {
    if (this.daysToSpoil > 0) {
      console.log(
        `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
      )
    } else {
      console.log(`${this.name} has spoiled.`)
    }
  }
  aDayPasses() {
    this.daysToSpoil--
    this.isFresh()
  }
}
// let fresh = new Food('apple', 39, true)
// Do not edit below this line
// console.log(fresh.aDayPasses())
// console.log(fresh.isFresh())
// console.log(fresh.prepare())

module.exports = Food
