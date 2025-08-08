function Vehicle(speed, color) {
  this.speed = speed;
  this.color = color;

  this.start = function () {};
  this.stop = function () {};
  this.turnRight = function () {};
  this.turnLeft = function () {};
  this.goBackward = function (speed, accel) {};
  this.goForward = function (speed, accel) {};

  this.toString = function () {
    console.log(speed, color);
  };
  this.valueOf = function () {
    return [speed, color];
  };
}

function Bicycle(speed, color) {
  Vehicle.call(this, speed, color);
  this.ringBall = function () {};
}

Bicycle.prototype = Object.create(Vehicle.prototype);
Bicycle.prototype.constructor = Bicycle;

function MotorVehicle(speed, color, sizeOfEngine, licensePlate) {
  Vehicle.call(this, speed, color);
  this.sizeOfEngine = sizeOfEngine;
  this.licensePlate = licensePlate;

  this.getSizeOfEngine = function () {};
  this.getLicensePlate = function () {};
}

MotorVehicle.prototype = Object.create(Vehicle.prototype);
MotorVehicle.prototype.constructor = MotorVehicle;

function Car(
  speed,
  color,
  sizeOfEngine,
  licensePlate,
  numberOfDoors,
  numberOfWheels,
  weight
) {
  MotorVehicle.call(this, speed, color, sizeOfEngine, licensePlate);
  this.getNumberOfDoors = numberOfDoors;
  this.numberOfWheels = numberOfWheels;
  this.weight = weight;

  this.switchOnAirCon = function () {};
  this.getNumberOfDoors = function () {};
}

Car.prototype = Object.create(MotorVehicle.prototype);
Car.prototype.constructor = Car;

function DumpTruck(
  speed,
  color,
  sizeOfEngine,
  licensePlate,
  loadCapacity,
  numberOfWheels,
  weight
) {
  MotorVehicle.call(this, speed, color, sizeOfEngine, licensePlate);
  this.loadCapacity = loadCapacity;
  this.numberOfWheels = numberOfWheels;
  this.weight = weight;

  this.lowerLoad = function () {};
  this.raiseLoad = function () {};
}

DumpTruck.prototype = Object.create(MotorVehicle.prototype);
DumpTruck.prototype.constructor = DumpTruck;
