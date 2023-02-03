import { createTheme } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import "@fontsource/cormorant-garamond";

const defaultTheme = createTheme();

const yellow = "#C78F3D";
const red = "#B74217";
const green = "#465B3C";

const theme = createTheme({
    typography: {
        h1: {
            fontFamily: "Cormorant Garamond",
            fontWeight: "900",
            letterSpacing: ".2rem",
            fontSize: "5rem",
            [defaultTheme.breakpoints.down("md")]: {
                fontSize: "2rem",
            },
            [defaultTheme.breakpoints.down("lg")]: {
                fontSize: "3rem",
            },
        },
        h2: {
            color: "#C78F3D",
            fontSize: "7rem",
            fontWeight: "900",
            textAlign: "center",
            padding: "0",
            [defaultTheme.breakpoints.down("md")]: {
                fontSize: "4rem",
            },
        },

        outlinedh2: {
            fontFamily: "Arial",
            fontSize: "7rem",
            fontWeight: "900",
            color: "transparent",
            WebkitTextStroke: "5px #C78F3D",
            textAlign: "center",
            textTransform: "uppercase",
            [defaultTheme.breakpoints.down("md")]: {
                fontSize: "4rem",
                WebkitTextStroke: "3px #C78F3D",
            },
        },
        h3: {
            color: "#C78F3D",
            fontSize: "4rem",
            fontWeight: "900",
            textTransform: "uppercase",

            [defaultTheme.breakpoints.down("md")]: {
                fontSize: "3rem",
            },
        },
        subtitle1: {
            color: "#C78F3D",
            fontSize: "2rem",
            fontWeight: "900",
            textAlign: "center",
            [defaultTheme.breakpoints.down("md")]: {
                fontSize: "1.5rem",
            },
        },
    } as ExtendedTypographyOptions,

    palette: {
        primary: {
            main: red,
        },
        secondary: {
            main: yellow,
        },
        success: {
            main: green,
        },

        error: {
            main: "#B22222",
        },
        /* boxShadow: "0px 5px 5px grey" */
    },
    components: {
        // Name of the component
        MuiButtonBase: {
            defaultProps: {
                // The props to change the default for.
                disableRipple: true, // No more ripple, on the whole application 💣!
            },
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    "&.MuiButtonBase-root": {
                        borderRadius: "0",
                        boxShadow: "none",
                        padding: "1rem 2rem",
                        color: "#465B3C",
                    },
                },
            },
        },
    },
});

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        outlinedh2: true;
    }
}

interface ExtendedTypographyOptions extends TypographyOptions {
    outlinedh2: React.CSSProperties;
}

export default theme;
