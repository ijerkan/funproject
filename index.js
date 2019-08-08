const Pet = require('./pet');
const Games = require('./videogames');

const pet1 = new Pet('dog', 'Hubert', 35);
pet1.inspection();

const pet2 = new Pet('parrot', 'Crookey', 2);
pet2.inspection();

const game1 = new Games('Call Of Duty', 'First Person Shooter');
game1.review();