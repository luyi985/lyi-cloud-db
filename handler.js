const { ApolloServer } = require('apollo-server-lambda');
const  { makeExecutableSchema } = ApolloServer;
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({ schema: executableSchema, logger: e => console.log(e) });

const graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});

module.exports = {
  graphqlHandler
}