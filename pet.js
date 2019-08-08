class Pet {
    constructor(species, name, weight){
        this.species = species;
        this.name = name;
        this.weight = weight;
    }

    inspection(){
        console.log(`Your pet, ${this.name}, belongs to the species of ${this.species} and it weighs ${this.weight} kg.`);
    }

}

module.exports = Pet;