import { MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  fontFamily: 'Roboto, sans-serif',
  primaryColor: 'indigo',
});
    
const Providers = ({ children }) => {
    return (
        <MantineProvider theme={theme}>
            {children}
        </MantineProvider>
    );
}

export { Providers }
export default Providers