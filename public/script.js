// script to keep track of library books
// Write a constructor for making “Book” objects. 
// We will revisit this in the project at the end of this lesson. 
// Your book objects should have the book’s title, author, 
// the number of pages, and whether or not you have read the book
let myLibrary = [];

function Book(title, author, pages, isRead) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

}

function addBookToLibrary() {

    let formInfo = document.getElementById("book-form");
    let title = formInfo.elements[0].value;
    console.log(title);
    let author = formInfo.elements[1].value;
    console.log(author);
    let pages = formInfo.elements[2].value;
    console.log(pages);
    let isRead = formInfo.elements[3].value;
    console.log(isRead);

    let book = new Book(title, author, pages, isRead);
    myLibrary.push(book);

}

// testing push functionality 
for (let i = 0; i < myLibrary.length; i++) {

    console.log(myLibrary[i]);

}