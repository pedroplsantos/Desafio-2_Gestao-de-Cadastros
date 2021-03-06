const {mainCards, animals, categories } = require("../db");

const Query= {
    mainCards: (parents, args, {mainCards}) => mainCards,

    animals: (parents, args, {animals}) => animals,

    animal: (parent, args, {animals}) => {
        let animal = animals.find((animal) =>{
            return animal.slug === args.slug
        });
        return animal;
    },

    categories: (parents, args, {categories}) => categories,

        category: (parent, args, {categories}) => {
            let category = categories.find((category) =>{
                return category.slug === args.slug
            });
            return category;
        }
}

module.exports = Query