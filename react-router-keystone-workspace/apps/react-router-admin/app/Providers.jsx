import { MantineProvider, createTheme, Button } from '@mantine/core';
import classes from "@app/admin/theme/variants.module.css";

const theme = createTheme({
  fontFamily: 'Poppins, sans-serif',
  primaryColor: 'indigo',
  components: {
    Button: Button.extend({ classNames: classes }),
  }
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