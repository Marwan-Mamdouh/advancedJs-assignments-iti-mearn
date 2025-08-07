let linkedList = {
  data: [],
  enqueue: function (value) {
    if (!this.data.length || this.data[this.data.length - 1] < value) {
      this.data.push(value);
    } else {
      console.log(
        "you can't add: " +
          value +
          " in the end of the this list [" +
          this.data +
          "]"
      );
    }
  },

  insert: function (value, index) {
    if (index >= 0 || this.data.length - 1 >= index) {
      if (
        this.data[index] > value &&
        (value > this.data[index - 1] || index === 0)
      ) {
        this.data.splice(index, 0, value);
      } else if (this.data.length - 1 === index) {
        this.data.splice(index + 1, 0, value);
      } else {
        console.log("can't add: " + value + " at index: " + index);
      }
    }
  },

  pop: function () {
    if (this.data.length) {
      this.data.pop();
    } else {
      console.log("list is empty.");
    }
  },

  remove: function (value) {
    if (this.data.includes(value)) {
      let index = this.data.indexOf(value);
      this.data.splice(index, 1);
    } else {
      console.log("value: " + value + " not found.");
    }
  },

  dequeue: function () {
    if (this.data.length) {
      this.data.shift();
    } else {
      console.log("list is empty.");
    }
  },

  display: function () {
    console.log(this.data);
  },
};

function task2way1() {
  return Array.from(arguments).reverse();
}

function task2way2() {
  return [].slice.call(arguments).reverse();
}

// console.log(task2way1(9, 20, 82));
// console.log(task2way2(9, 20, 82));

// function task2way1() {
//   return [].from(arguments).reverse();
// }

linkedList.enqueue(10);
linkedList.enqueue(11);
linkedList.enqueue(13);
// linkedList.enqueue(9);
// linkedList.display();

linkedList.insert(9, 0);
linkedList.insert(8, 0);
// linkedList.insert(99, 0);
linkedList.insert(9.5, 2);
linkedList.insert(12, 5);
linkedList.insert(99, 3);
linkedList.insert(99, 6);
linkedList.insert(15, 7);
linkedList.insert(15, 6);
// linkedList.insert(99, 5);
// linkedList.insert(1, 5);
linkedList.insert(1, -5);
linkedList.insert(100, 90);
// linkedList.insert(20, 5);
// linkedList.display();
// linkedList.dequeue();
linkedList.display();
// linkedList.enqueue(11);
