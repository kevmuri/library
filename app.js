let myLibrary = [];

document.getElementById("addBook").addEventListener("click", function(){addBookToLibrary()});


function Book(title, author, pages, completed) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.completed = completed;
}

function addBookToLibrary() {
    let title = document.getElementById("newtitle").innerHTML;
    let author = document.getElementById("newAuthor").innerHTML;
    let pages = document.getElementById("newPages").innerHTML;
    let completed = document.getElementById("completed").innerHTML;

    let newBook = new Book(title, author, pages, completed);
    myLibrary += newBook;
    refresh;
}

function refresh() {
    for (let i = 0; i < myLibrary.length; i++) {
        
    }
}