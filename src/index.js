import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';

import schema from './schema/message'
import resolvers from './resolvers/index'
import models from './models/index'
 
const app = express();

app.use(cors());

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: {
        models,
        me: models.users[1],
    },
  });
   
  server.applyMiddleware({ app, path: '/graphql' });
   
  app.listen({ port: 8000 }, () => {
    console.log('Apollo Server on http://localhost:8000/graphql')});