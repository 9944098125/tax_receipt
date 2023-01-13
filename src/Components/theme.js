import { createTheme } from "@mui/material";
import { colors } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      dark: colors.indigo[800],
      main: colors.indigo[500],
      light: colors.indigo[400],
      bg: colors.indigo[50],
    },
    secondary: {
      dark: colors.deepPurple[900],
      main: colors.deepPurple[500],
      light: colors.deepPurple[100],
      bg: colors.deepPurple[50],
    },
  },
  typography: {
    fontFamily: "Proxima Nova, sans-serif",
  },
});

export default theme;
