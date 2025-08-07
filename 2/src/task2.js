let customObj = {
  id: "302020",
  location: "Cairo",
  addr: "123,hello",
  getSetGen: function () {
    for (let key in this) {
      if (typeof this[key] !== "function") {
        this["get" + key[0].toUpperCase() + key.slice(1)] = function () {
          return this[key];
        };
        this["set" + key[0].toUpperCase() + key.slice(1)] = function (value) {
          this[key] = value;
        };
      }
    }
  },
};

// console.log(customObj);
// customObj.getSetGen();
// console.log(customObj);

const secondObj = {
  username: "",
  password: "",
};

console.log(secondObj);
customObj.getSetGen.call(secondObj);
console.log(secondObj);
