import { mergeSchemas } from "@graphql-tools/schema"
import { ScalarDef, ScalarResolver } from "./Scalars"
import { TestDef, TestResolver } from "./Test/Test.resolver"

const typeDefs = [
  ScalarDef,
  TestDef,
]

const resolvers = [
  ScalarResolver,
  TestResolver,
]

// For long running servers
const schema = mergeSchemas({ typeDefs, resolvers })

export { schema }
