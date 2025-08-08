let rectCount = 0;
let sqrCount = 0;

function Shape(width, height) {
  if (new.target === Shape) {
    throw new Error("can't get instance from shape.");
  }

  this.width = width;
  this.height = height;
}

Shape.prototype.area = function () {
  return this.height * this.width;
};

Shape.prototype.perimeter = function () {
  return (this.width + this.height) * 2;
};

Shape.prototype.toString = function () {
  console.log(`shape type is ${this.constructor.name}, 
    width: ${this.width}, height: ${this.height}, area:${this.area()} , 
      perimeter: ${this.perimeter()}`);
};

Shape.prototype.valueOf = function () {
  return this.area();
};

function Rectangle(width, height) {
  if (width < 0 && height < 0) {
    throw new Error(
      `can't create Rectangle with width: ${width} height: ${height}`
    );
  }

  if (rectCount >= 1 && this.constructor === Rectangle) {
    throw new Error("can't create other rectangle");
  }

  if (this.constructor === Rectangle) {
    rectCount++;
  } else {
    sqrCount++;
  }

  Shape.call(this, width, height);
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

function Square(side) {
  if (sqrCount >= 1) {
    throw new Error("can't create other square");
  }

  Rectangle.call(this, side, side);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

const rect1 = new Rectangle(10, 19);
// const rect2 = new Rectangle(10, 20);
const sqr = new Square(5);
// const sqr1 = new Square(6);
// const rect3 = new Shape();

rect1.toString();
// console.log(rect1.area());
// console.log(rect1.perimeter());

sqr.toString();
// console.log(sqr.area());
// console.log(sqr.perimeter());

// console.log("rect + square: " + parseInt(rect1 + sqr));
console.log("rect + square: " + Number(rect1 + sqr));
