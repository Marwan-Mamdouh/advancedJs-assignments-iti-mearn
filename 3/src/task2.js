function Box(height, width, length, material) {
  this.height = height;
  this.width = width;
  this.len = length;
  this.material = material;
  this.content = [];
}

Box.prototype.count = function () {
  return this.content.length;
};

Box.prototype.add = function (book) {
  this.content.push(book);
};

Box.prototype.delete = function (bookTitle) {
  if (!this.content.length) {
    throw new Error("the box is empty.");
  }
  for (let index = 0; index < this.content.length; index++) {
    if (this.content[index].title === bookTitle) {
      this.content.splice(index, 1);
      return;
    }
  }
};

Box.prototype.toString = function () {
  for (let index = 0; index < this.content.length; index++) {
    console.log(this.content[index].title);
  }
};

function Book(
  title,
  numOfChapters,
  author,
  numOfPages,
  publisher,
  numOfCopies
) {
  this.title = title;
  this.numOfChapters = numOfChapters;
  this.author = author;
  this.numOfPages = numOfPages;
  this.publisher = publisher;
  this.numOfCopies = numOfCopies;
}

Book.prototype.toString = function () {
  console.log(`book title: ${this.title}`);
};

const book1 = new Book("song of ice and fire");
const book2 = new Book("storm of swords");
const book3 = new Book("clash of kings");
const book4 = new Book("storm of swords");

const box = new Box();
box.add(book1);
box.add(book2);
box.add(book2);
box.add(book3);
box.add(book4);

box.toString();
console.log("----------------------------------------------------------------");

box.delete("storm of swords");

box.toString();

book1.toString();
