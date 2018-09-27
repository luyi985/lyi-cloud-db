const { ApolloServer } = require('apollo-server-lambda');
//const  { makeExecutableSchema } = ApolloServer;
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

// const executableSchema = makeExecutableSchema({
//   typeDefs,
//   resolvers,
// });

//const server = new ApolloServer({ schema: executableSchema, logger: e => console.log(e) });
const server = new ApolloServer({ 
  typeDefs,
  resolvers,
  logger: e => console.log(e)
});

const graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});

const test = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
    message: `Hello, the current time is ${new Date().toTimeString()}.`,
    })
  };
  callback(null, response);
}

module.exports = {
  graphqlHandler,
  test
}