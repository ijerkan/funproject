class Games {
    constructor(name, genre){
        this.name = name;
        this.genre = genre;
    }
    
    review(){
        console.log(`${this.name} is a videogame belonging to ${this.genre} genre
        and it has a rating of ` + (Math.ceil(Math.random() * 100)) + `/100`);
    } 
}

module.exports = Games;