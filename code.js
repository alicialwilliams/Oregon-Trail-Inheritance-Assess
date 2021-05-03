/**
 * Oregon Trail-----------------------------------------------------------
 * Test Code is in tests.js
 */

// Create your Classes here.
//function

//Inheritance Conversion
class Traveler {
  constructor(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
  }
  hunt() {
    this.food += 2;
  }
  eat() {
    if (this.food <= 0) {
      return (this.isHealthy = false);
    }
    this.food -= 1;
  }
}
//sub classes

class Doctor extends Traveler {
  constructor(name, food, isHealthy) {
    super(name, food, isHealthy);
    this.name = name;
  }

  heal(traveler) {
    return (traveler.isHealthy = true);
  }
}

class Hunter extends Traveler {
  constructor(name, food, isHealthy) {
    super(name, food, isHealthy);
    this.name = name;
    this.food = 2;
  }
  hunt() {
    this.food += 5;
  }
  eat() {
    if (this.food <= 1) {
      this.food -= this.food;
      return (this.isHealthy = false);
    }
    this.food -= 2;
  }
  giveFood(traveler, numOfFood) {
    if (this.food >= numOfFood) {
      this.food -= numOfFood;
      traveler.food += numOfFood;
    }
  }
}

class Wagon {
  constructor(capacity, passengers) {
    this.capacity = capacity;
    this.passengers = [];
  }

  getAvailableSeatCount() {
    return this.capacity - this.passengers.length;
  }
  join(traveler) {
    if (this.getAvailableSeatCount() >= 1) {
      this.passengers.push(traveler);
    }
  }
  shouldQuarantine() {
    let sickly = this.passengers.some(
      (passenger) => passenger.isHealthy == false
    );
    return sickly;
  }

  totalFood() {
    let totalNumber = 0;
    for (let index = 0; index < this.passengers.length; index += 1) {
      totalNumber += this.passengers[index].food;
    }
    return totalNumber;
  }
}
