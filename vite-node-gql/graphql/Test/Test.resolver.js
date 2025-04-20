import TestDef from "./Test.gql"

const Query = {
    Tests: () => {
        return [{
            name: "Test1"
        }]
    }
}

const TestResolver = { Query }
export { TestDef, TestResolver }