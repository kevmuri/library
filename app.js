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

    document.getElementById("inventory").innerHTML = '';

    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i].title);
        
        let node = document.createElement("li");
        let textnode = document.createTextNode(myLibrary[i].title);
        node.appendChild(textnode);
        document.getElementById("inventory").appendChild(node);
    }
}

function validate(value, type) {
    switch (type) {
        case 'text':
             if (value == '') {
                return false;
             }
             else {
                return true;
             }
        case 'number':
            if (value == '') {
                return false;
             }
             else if (Number.isInteger(value) == false) {
                return false
             }
             else {
                return true;
             }
    }
}