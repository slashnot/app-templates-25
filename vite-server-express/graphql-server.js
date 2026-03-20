import { ApolloServer } from '@apollo/server';
// import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import cors from 'cors';
import { expressMiddleware } from '@as-integrations/express5';
import { schema } from "./graphql"

// ---------------------------------
// Server Init Function
// ---------------------------------
const init = async (app) => {
    // HTTPServer for Apollo Server
    // const httpServer = http.createServer(app);

    const server = new ApolloServer({
        schema,
        introspection: true,
        // plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    })

    await server.start()

    // ---------------------------------
    // Graphql Server
    // ---------------------------------
    app.use(
        "/graphql",
        express.json(),
        cors(),
        expressMiddleware(server, {
            context: async ({ req, res }) => {
                return { request: req, response: res }
            },
        })
    )
}

export { init }
export default init