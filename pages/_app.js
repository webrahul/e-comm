import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../styles/globals.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#bf360c",
      light: "#cb5e3c",
      dark: "#852508",
    },
    secondary: {
      main: "#29b6f6",
      light: "#53c4f7",
      dark: "#1c7fac",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
