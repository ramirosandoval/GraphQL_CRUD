const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const typeDefs = require("./GraphQL/typeDefinitions");
const resolvers = require("./GraphQL/resolvers");

const apolloServer = new ApolloServer({ typeDefs, resolvers});
const app = express();

(async function startApolloServer(){
    await apolloServer.start()
    apolloServer.applyMiddleware({ app });
})()

app.listen({ port : 4000}, () =>{
    console.log("http://localhost:4000" + apolloServer.graphqlPath);
});