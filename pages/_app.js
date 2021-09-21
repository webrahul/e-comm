import { createTheme, ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import "../public/assets/css/bootstrap.min.css";
// import "../public/assets/js/bootstrap.bundle.min.js";
import "../styles/globals.css";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ee5a2d",
      light: "#ffa58a",
      dark: "#ff3c00",
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
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
