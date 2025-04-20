import { typeDefs, resolvers as ScalarResolver } from 'graphql-scalars';
import { mergeTypeDefs } from "@graphql-tools/merge"
import { gql } from "graphql-modules"


const scalarTypeDefs = gql`
scalar Timestamp
scalar DateTime
scalar DateTimeISO
scalar LocalDateTime
scalar JSON
scalar JSONObject
scalar EmailAddress
`

const ScalarDef = mergeTypeDefs([typeDefs, scalarTypeDefs])

export { ScalarDef, ScalarResolver }