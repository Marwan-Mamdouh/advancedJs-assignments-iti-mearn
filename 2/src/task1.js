function Rectangle(width, height) {
  if (width > 0 && height > 0) {
    this.width = width;
    this.height = height;
    this.area = function () {
      return this.height * this.width;
    };
    this.perimeter = function () {
      return (width + height) * 2;
    };
    this.displayInfo = function () {
      console.log(
        "the width: " +
          this.width +
          ", height: " +
          this.height +
          ", area: " +
          this.area() +
          ", perimeter: " +
          this.perimeter()
      );
    };
  }
}
const rect1 = new Rectangle(10, 19);

rect1.displayInfo();
console.log(rect1.area());
console.log(rect1.perimeter());
