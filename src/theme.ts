// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import "./global.css";
// 2. Add your color mode config
const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
    disableTransitionOnChange: false,
};

const breakpoints = {
    base: "0rem", // 0px
    sm: "30rem", // 480px
    md: "48rem", // 768px
    lg: "64rem", // 1024px
    xl: "80rem", // 1280px
    "2xl": "96rem", // 1536px
};

const theme = extendTheme({
    components: {
        Link: {
            baseStyle: {
                color: "#ca9ee6",
                fontWeight: "bold",
                _hover: { color: "#F6A20E", textDecoration: "none" },
            },
        },
    },
    fonts: {
        heading: `'Raleway', sans-serif`,
        body: `'Raleway', sans-serif`,
    },
    config,
    colors: {
        secondary: "#0F0E0E",
        mutedDark: "#a0a3bd",
        mutedLight: "#4c4f69",
        highlight: "#6B46C1",
        bgDark: "#1c1c2b",
        bgLight: "#eff1f5",
    },
    styles: {
        global: (props: any) => ({
            body: {
                background: props.colorMode === "dark" ? "bgDark" : "bgLight",
            },
        }),
    },
    breakpoints,
});

export default theme;
