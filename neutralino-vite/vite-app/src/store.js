import { createSignalStore, createDerivedSignalStore, computed } from "react-synapse"

const { store, useStore, useSelector, useSetter } = createSignalStore({
    count: 0,
    user: {
        name: "John Doe",
        age: 30,
        email: "john.doe@example.com"
    }
})

const { useSelector: useDerivedSelector } = createDerivedSignalStore({
    multiply: computed(() => store.count * 2)
})

export { useStore, useSelector, useSetter, useDerivedSelector }