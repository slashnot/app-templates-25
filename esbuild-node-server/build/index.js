// main.js
import { ApolloServer } from "@apollo/server";
import express from "express";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";

// graphql/index.js
import { mergeSchemas } from "@graphql-tools/schema";

// graphql/Scalars.js
import { typeDefs, resolvers as ScalarResolver } from "graphql-scalars";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { gql } from "graphql-modules";
var scalarTypeDefs = gql`
scalar Timestamp
scalar DateTime
scalar DateTimeISO
scalar LocalDateTime
scalar JSON
scalar JSONObject
scalar EmailAddress
`;
var ScalarDef = mergeTypeDefs([typeDefs, scalarTypeDefs]);

// graphql/Test/Test.gql
var documentNode = { "kind": "Document", "definitions": [{ "kind": "ObjectTypeDefinition", "description": void 0, "name": { "kind": "Name", "value": "Test" }, "interfaces": [], "directives": [], "fields": [{ "kind": "FieldDefinition", "description": void 0, "name": { "kind": "Name", "value": "name" }, "arguments": [], "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } }, "directives": [] }] }, { "kind": "ObjectTypeDefinition", "description": void 0, "name": { "kind": "Name", "value": "Query" }, "interfaces": [], "directives": [], "fields": [{ "kind": "FieldDefinition", "description": void 0, "name": { "kind": "Name", "value": "Tests" }, "arguments": [], "type": { "kind": "ListType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Test" } } }, "directives": [] }] }], "loc": { "start": 0, "end": 64 } };
var Test_default = documentNode;

// prisma/prismaClient.js
import { PrismaClient } from "@prisma/client";
var prisma = new PrismaClient();

// graphql/Test/Test.resolver.js
var Query = {
  Tests: async () => {
    return await prisma.test.findMany();
  }
};
var TestResolver = { Query };

// graphql/index.js
var typeDefs2 = [
  ScalarDef,
  Test_default
];
var resolvers = [
  ScalarResolver,
  TestResolver
];
var schema = mergeSchemas({ typeDefs: typeDefs2, resolvers });

// main.js
var app = express();
var port = process.env.PORT || 4e3;
var server = new ApolloServer({
  schema,
  introspection: true
});
await server.start();
app.use(
  "/graphql",
  express.json(),
  cors(),
  expressMiddleware(server, {
    context: async ({ req, res }) => {
      return { request: req, response: res };
    }
  })
);
app.use("/", (_, res) => {
  return res.json({ message: "Running graphql dev server. \u{1F4A1}\u{1F341}\u{1F31F} \u{1F4A1}\u{1F341}\u{1F31F}" });
});
app.listen(port, () => {
  console.log("Graphql server started at http://localhost:4000/graphql");
});
var main_default = app;
export {
  app,
  main_default as default,
  server
};
