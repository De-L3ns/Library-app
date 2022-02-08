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

    if (this.isRead) {

        this.isRead = "READ";

    } else {

        this.isRead = "NOT READ";
    }

}

let book1 = new Book("IT", "Stephen King", 400, true);
let book2 = new Book("Harry Potter", "JK Rowling", 500, false);

myLibrary.push(book1);
myLibrary.push(book2);


function addBookToLibrary() {

    let formInfo = document.getElementById("book-form");

    // collect the values from the form
    let title = formInfo.elements[0].value;
    let author = formInfo.elements[1].value;
    let pages = formInfo.elements[2].value;
    let isRead = formInfo.elements[3].checked;

    // create an object and push to the array
    let book = new Book(title, author, pages, isRead);
    myLibrary.push(book);
    updateBookList(book);
}

let libraryBody = document.getElementById("library-body")

// Show all books in the array on first load
myLibrary.forEach(function (book) {


    updateBookList(book);
    

})

// re-usable functions

function updateBookList(book) {

    let bookCard = document.createElement("div");
    bookCard.className = "book-card";
    libraryBody.appendChild(bookCard);
    pushTextToDiv("h2", book.title, bookCard);
    pushTextToDiv("p", "By " + book.author, bookCard);
    pushTextToDiv("p", "Pages: " + book.pages, bookCard);
    pushTextToDiv("p", book.isRead, bookCard);
}

function pushTextToDiv(tag, content, div) {

    const tagElement = document.createElement(tag);
    tagElement.innerHTML = content;
    div.appendChild(tagElement);

}

// Form code

function openForm() {

    document.getElementById("form-popup").style.display = "block";

}

function closeForm() {

    document.getElementById("form-popup").style.display = "none";
}