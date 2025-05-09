class PremiumCars {
  constructor(nameOftheCar) {
    this.name = nameOftheCar;
  }

   getCarName() {
    return this.name;
  }


  setCarName(name) {
    this.name = name;
  }
}

module.exports = PremiumCars