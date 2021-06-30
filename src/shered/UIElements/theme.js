import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
      light: "#dddddd",
    },
    secondary: {
      main: "#17A280",
      light: "#5CD7BA",
    },
    text: {
      primary: "#000000",
      secondary: "#858585",
    },
    error: {
      main: "#fa1e0e",
    },
    warning: {
      main: "#ffbe0f",
    },
  },
});

export default theme;
