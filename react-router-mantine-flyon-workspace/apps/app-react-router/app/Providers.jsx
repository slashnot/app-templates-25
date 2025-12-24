import { HeadlessMantineProvider } from "@mantine/core"

const Providers = ({ children }) => {
    return (
        <HeadlessMantineProvider>
            {children}
        </HeadlessMantineProvider>
    )
}

export { Providers }
export default Providers