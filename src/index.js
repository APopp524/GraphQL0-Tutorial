import express from 'express';
import { ApolloServer } from 'apollo-server-express';

const app = express();

const schema = GQ1`
    type Query {
        me: User
    }
        type User {
            username: String!
        }
    `;

const resolvers = {
    Query: {
        me: () => {
            return {
                username: "Andrew Popp",
            };
        },
    },
};

const data = {
    me: {
        username: "Andrew Popp",
    },
};

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
});

server.applyMiddleware({ app, path: '/graphq1' });

app.listen({ port:8000 }, () => {
    console.log('Apollo Server on https://localhost:8000/graphq1')
});