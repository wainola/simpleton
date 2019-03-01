const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const bodyParser = require('body-parser');
const cors = require('cors');

const schemas = require('./schemas');
const resolvers = require('./resolvers');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 9001 }, () => {
  console.log('Server on port 9001');
});
