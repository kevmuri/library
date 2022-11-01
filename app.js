let myLibrary = [];

document.getElementById("addBook").addEventListener("click", function(){addBookToLibrary()});


function Book(title, author, pages, completed) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.completed = completed;
}

function addBookToLibrary() {
    let title = document.getElementById("newTitle").value;
    let author = document.getElementById("newAuthor").value;
    let pages = document.getElementById("newPages").value;
    let completed = document.getElementById("newCompleted").checked;

    let newBook = new Book(title, author, pages, completed);
    myLibrary.push(newBook);
    refresh();
}

function refresh() {
    document.getElementById("newTitle").value = '';
    document.getElementById("newAuthor").value = '';
    document.getElementById("newPages").value = '';
    document.getElementById("newCompleted").checked = false;

    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i].title);
    }
}