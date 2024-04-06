"use client";
import { Space_Grotesk } from "next/font/google";
import { createTheme, useTheme } from "@mui/material/styles";
import {
  cyan,
  deepPurple,
  amber,
  deepOrange,
  grey,
} from "@mui/material/colors";
import { PaletteMode } from "@mui/material";

const sans = Space_Grotesk({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const getDesignTokens = (mode: PaletteMode) => ({
  typography: {
    fontFamily: sans.style.fontFamily,
  },
  palette: {
    mode,
    primary: {
      ...amber,
      ...(mode === "dark" && {
        main: amber[300],
      }),
    },
    ...(mode === "dark" && {
      background: {
        default: grey[900],
        paper: grey[800],
      },
    }),
    text: {
      ...(mode === "light"
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: "#fff",
            secondary: grey[500],
          }),
    },
  },
});

const theme = createTheme(getDesignTokens("dark"));

export default theme;

/**



const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
  },
});


 */
