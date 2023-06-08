// Define & start an Apollo Server
const { ApolloServer } = require("@apollo/server");
// require startStandardServer function from @apollo/server
const { startStandaloneServer } = require("@apollo/server/standalone");
// Use mock schema for now with mocked data
// require from @graphql-tools/mock and @graphql-tools/schema
const { addMocksToSchema } = require("@graphql-tools/mock");
const { makeExecutableSchema } = require("@graphql-tools/schema");
// require typeDefs from schema.js
const typeDefs = require("./schema");
// require mocks from mock.js
const mocks = require("./mocks");

// start Apollo standalone server async lambda def
const startApolloServer = async () => {
  // Generate a mock schema with mock resolvers
  const schemaWithMocks = addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs }),
    mocks
  });
  // create a new ApolloServer instance, passing in the typeDefs & resolvers
  const server = new ApolloServer({ schema: schemaWithMocks });
  // start standalone server
  const { url } = await startStandaloneServer(server);
  // log the server url
  console.log(`Apollo Server is running at ${url}`);
};

// start server
startApolloServer();
