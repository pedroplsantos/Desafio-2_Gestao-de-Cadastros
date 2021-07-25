const { ApolloServer} = require ('apollo-server');
const {mainCards, animals, categories } = require("./db");
const typeDefs = require("./schema")
const Query = require("./resolvers/Query")
const Category = require("./resolvers/Category")
const Animal = require("./resolvers/Animals")

const server = new ApolloServer({ 
    typeDefs,
    resolvers: {
        Query,
        Animal,
        Category
    }

});

server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`);
});
