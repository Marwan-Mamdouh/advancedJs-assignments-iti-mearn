function Vehicle(speed, color) {
  this.speed = speed;
  this.color = color;
}

Vehicle.prototype.start = function () {};
Vehicle.prototype.stop = function () {};
Vehicle.prototype.turnRight = function () {};
Vehicle.prototype.turnLeft = function () {};
Vehicle.prototype.goBackward = function (speed, accel) {};
Vehicle.prototype.goForward = function (speed, accel) {};

Vehicle.prototype.oString = function () {
  console.log(this.speed, this.color);
};

Vehicle.prototype.valueOf = function () {
  return [this.speed, this.color];
};

function Bicycle(speed, color) {
  Vehicle.call(this, speed, color);
}

Bicycle.prototype.ringBall = function () {};
Bicycle.prototype = Object.create(Vehicle.prototype);
Bicycle.prototype.constructor = Bicycle;

function MotorVehicle(speed, color, sizeOfEngine, licensePlate) {
  Vehicle.call(this, speed, color);
  this.sizeOfEngine = sizeOfEngine;
  this.licensePlate = licensePlate;
}

MotorVehicle.prototype.getSizeOfEngine = function () {};
MotorVehicle.prototype.getLicensePlate = function () {};

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
}

Car.prototype.getNumberOfDoors = function () {};
Car.prototype.switchOnAirCon = function () {};

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
}

DumpTruck.prototype.lowerLoad = function () {};
DumpTruck.prototype.raiseLoad = function () {};

DumpTruck.prototype = Object.create(MotorVehicle.prototype);
DumpTruck.prototype.constructor = DumpTruck;
