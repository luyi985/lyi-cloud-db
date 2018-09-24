const { ApolloServer } = require('apollo-server-lambda');
const  { makeExecutableSchema } = require('graphql-tools');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({ schema: executableSchema });

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});