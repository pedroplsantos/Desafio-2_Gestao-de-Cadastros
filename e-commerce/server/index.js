const { ApolloServer, gql } = require ('apollo-server');

const typeDefs = gql`
    type Book {
        title: String
        autor: String
    }

    type Query{
        book: [Book]
    }
`;

const book = [
    {
        title:"The Awakening",
        autor:"Kate Chopin",
    },
    {
        title:"City os Glass",
        autor:"Paul Auster",
    },
];

const resolvers = {
    Query: {
        book: () => book,
    },
};

const server = new ApolloServer({  typeDefs,resolvers });

server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`);
});
