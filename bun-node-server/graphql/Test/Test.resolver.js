import TestDef from "./Test.gql"

const Query = {
    Tests: () => {
        return [
            {
                name: "Test1"
            },
            {
                name: "Test2"
            },
            {
                name: "Test3"
            },
            {
                name: "Test4"
            }
        ]
    }
}

const TestResolver = { Query }
export { TestDef, TestResolver }