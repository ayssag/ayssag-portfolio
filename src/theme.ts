import { createTheme } from "@mui/material";
import "@fontsource/boldonse";
import "@fontsource-variable/dm-sans";

const palette = {
    primary: {
        main: "#C299F5",
    },
    secondary: {
        main: "#FF9500"
    },
    text: {
        primary: "#E5E5EA",
        secondary: "#39D400"
    },
    background: {
        default: "#0D0514",
        paper: "#2D1254"
    }
}

export const theme = createTheme({
    cssVariables: true,
    palette,
    typography: {
        fontFamily: "'DM Sans Variable', sans-serif",
        h1: {
            fontFamily: "'Boldonse', sans-serif",
            fontSize: "3.5rem",
            textTransform: "uppercase",
            color: palette.primary.main
        },
        h2: {
            fontFamily: "'Boldonse', sans-serif",
            fontSize: "2.5rem",
            textTransform: "uppercase",
            color: palette.primary.main
        },
        body1: {
            fontSize: "1.125rem",
            color: palette.text.primary
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                "html, body, #root": {
                    margin: 0,
                    padding: 0,
                    width: "100%",
                    minHeight: "100vh",
                    WebkitHyphens: "auto",
                    msHyphens: "auto",
                    hyphens: "auto",
                },
            },
        },
    },
})
