const books = [
    { title: "Lord Of The Rings II", body: "Book about magical beasts"},
    { title: "Gecko Life", body: "Lil' rascals runnin' 'round the jungle"},
    { title: "Pyrates beware", body: "Arrrghh, pirate!"}
];

function getBookTitles(){
    setTimeout(() => {
        let output = '';
        books.forEach((book, index) => {
            output += `<li>${book.title}</li>`
        });
        document.getElementById("titles").innerHTML = output;
    }, 500);
}

function getBookDesc(){
    setTimeout(() => {
        let output = '';
        books.forEach((book, index) => {
            output += `<li>${book.body}</li>`
        });
        document.getElementById("description").innerHTML = output;
    }, 800);
}

function createBook(book){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            books.push(book);

            const error = false;

            if(!error) {
                resolve();
            } else {
                reject("Error: some went wrong bud");
            }
        }, 1300);
    })  
    
}


createBook({ title: 'Terminator III', body: 'Hasta la Vista babehhh'})
    .then(getBookTitles)
    .then(getBookDesc)
    .catch(err => console.log(err));