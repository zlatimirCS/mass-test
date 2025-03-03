import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  createTheme,
  ThemeProvider,
  SimplePaletteColorOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    yellowBrand: SimplePaletteColorOptions;
  }
}

const colors = {
  black: "#000",
  white: "#fff",
  primaryMain: "#ff0000",
  secondaryMain: "#00ff00",
  strongCyanMain: "#33ECF5",
  strongCyanLight: "#000000",
};

const theme = createTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#ff0000",
    },
    secondary: {
      main: "#00ff00",
    },
    yellowBrand: {
      main: "#ffb634",
      light: "#000000",
    },
  },
  typography: {
    htmlFontSize: 10,
    h1: {
      fontSize: "6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
      fontFamily: "Geist",
    },
    body1: {
      fontSize: "1.6rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
      fontFamily: "Geist",
    },
    body2: {
      fontSize: "1.4rem",
      lineHeight: 1.43,
      letterSpacing: "0.01071em",
      fontFamily: "Geist",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disabled: false,
      },
      styleOverrides: {
        root: {
          borderRadius: "5px",
          width: "20rem",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
