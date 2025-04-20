import { ApolloServer } from "@apollo/server"
import express from 'express';
import cors from "cors"
import { expressMiddleware } from "@apollo/server/express4"
import { schema } from "./graphql"

// Setup
// ---------------------------------
const app = express()
const port = process.env.PORT || 4000

// ---------------------------------
// Server
// ---------------------------------
const server = new ApolloServer({
  schema,
  introspection: true,
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

app.use("/", (_, res) => {
  return res.json({ message: "Running graphql dev server. 💡🍁🌟 💡🍁🌟" })
})

// ---------------------------------
// Run Server
// ---------------------------------
app.listen(port, () => {
  console.log('Graphql server started at http://localhost:4000/graphql');
});

export { app, server }
export default app