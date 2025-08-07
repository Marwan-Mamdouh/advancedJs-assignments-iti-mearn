function NumericalSequence(start, end, step) {
  if (!start && !end && !step) {
    throw new Error(
      "Invalid input, start: " + start + ", end: " + end + ", step: " + step
    );
  }

  let data = (function fill() {
    const values = [];
    for (let index = start; index <= end; index += step) {
      values.push(index);
    }
    return values;
  })();

  this.append = function (value) {
    if (data[data.length - 1] + step === value) {
      data.push(value);
    } else {
      throw new Error("Invalid input: " + value);
    }
  };

  this.prepend = function (value) {
    if (data[0] - step === value) {
      data.unshift(value);
    } else {
      throw new Error("Invalid input: " + value);
    }
  };

  this.dequeue = function () {
    if (!data.length) {
      throw new Error("empty list.");
    }
    data.shift();
  };

  this.pop = function () {
    if (!data.length) {
      throw new Error("empty list.");
    }
    data.pop();
  };

  this.toString = function () {
    console.log(data);
  };
}

// let list1 = new NumericalSequence();
let list2 = new NumericalSequence(2, 20, 2);
// console.log(list1);
list2.toString();
list2.append(22);
list2.toString();
list2.prepend(0);
list2.toString();
// list2.append(5);
// list2.prepend(28);

list2.pop();
list2.toString();
list2.dequeue();
list2.toString();
