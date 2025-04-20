import TestDef from "./Test.gql"
import { prisma } from "@gql-app/prisma/prismaClient"

const Query = {
    Tests: async () => {
        return await prisma.test.findMany()
    }
}

const TestResolver = { Query }
export { TestDef, TestResolver }