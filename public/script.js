
let myLibrary = [];

// book class

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

// Functions

function addBookToLibrary() {

    let formInfo = document.getElementById("book-form");

    // collect the values from the form
    let title = formInfo.elements[0].value;
    let author = formInfo.elements[1].value;
    let pages = formInfo.elements[2].value;
    let isRead = formInfo.elements[3].checked;

    // create an object and push to the array
    let book = new Book(title, author, pages, isRead);
    let index = myLibrary.length;
    myLibrary.push(book);
    updateBookList(book, index);
}

function deleteBookFromLibrary(index) {
    
    let correspondingDivs = document.getElementsByClassName("book-card");
    for (let i = 0; i < correspondingDivs.length; i++) {
        
        if (correspondingDivs[i].getAttribute("data-index") == index) {

            correspondingDivs[i].remove();
            myLibrary.splice(index, 1);
            // book 0, 1, 2, 3
            // card 0, 2, 3, 4
            // so change dataset index as from the point the book was deleted.
            
            for (let newIndex = i; newIndex < correspondingDivs.length; newIndex++) {

                // As soon as a book is removed the corresponding div cards and buttons need to have their ID changed to match the array.
                correspondingDivs[newIndex].dataset.index = newIndex;
                let correspondingDeleteButton = correspondingDivs[newIndex].querySelector('.delete-button');
                let correspondingReadButton = correspondingDivs[newIndex].querySelector('.read-button');
                correspondingDeleteButton.setAttribute("id", newIndex);
                correspondingReadButton.setAttribute("id", newIndex);
                // Also changing the ID on the deleteBookFromLibrary and markRead function for future books.
                correspondingDeleteButton.setAttribute("onclick", "deleteBookFromLibrary("+newIndex+");");
                correspondingReadButton.setAttribute("onclick", "markAsRead("+newIndex+");");
                
            }

        }  

    }

}

// re-usable functions

function updateBookList(book, index) {
    

    let bookCard = document.createElement("div");
    bookCard.className = "book-card";
    bookCard.dataset.index = index;
    libraryBody.appendChild(bookCard);
    pushToDiv("h2", book.title, bookCard);
    pushToDiv("p", "By " + book.author, bookCard);
    pushToDiv("p", "Pages: " + book.pages, bookCard);
    pushToDiv("p", book.isRead, bookCard);

    // creating a button
    
    pushDeleteButtonToDiv("BUTTON", "Delete", bookCard, "delete-button", index);
    pushButtonToDiv("BUTTON", "Mark Read", bookCard, "read-button", index);
    
    
    


}
function pushToDiv(tag, content, div) {

    const tagElement = document.createElement(tag);
    tagElement.innerHTML = content;
    div.appendChild(tagElement);

}
function pushDeleteButtonToDiv(tag, content, div, className, index) {

    const tagElement = document.createElement(tag);
    tagElement.className = className
    tagElement.innerHTML = content;
    tagElement.setAttribute("onclick", "deleteBookFromLibrary("+index+");");
    tagElement.setAttribute("id", index);
    div.appendChild(tagElement);

}

function pushReadButtonToDiv(tag, content, div, className, index) {

    const tagElement = document.createElement(tag);
    tagElement.className = className
    tagElement.innerHTML = content;
    tagElement.setAttribute("onclick", "markAsRead("+index+");");
    tagElement.setAttribute("id", index);
    div.appendChild(tagElement);

}

// Form functions 

function openForm() {

    document.getElementById("form-popup").style.display = "block";

}

function closeForm() {

    document.getElementById("form-popup").style.display = "none";
}

// Show all books in the array on first load
let libraryBody = document.getElementById("library-body");

function refresh() {
    console.log("refresh here");
    console.log(myLibrary);
    myLibrary.forEach(function (book, index) {


        updateBookList(book, index);
        
        
        
    
    })
}

refresh();




// Button event listeners

// Delete Button

