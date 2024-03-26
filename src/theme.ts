// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
// 2. Add your color mode config
const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
    disableTransitionOnChange: false,
};

const fluidType = (minSize: number, maxSize: number) => {
    let XX = 768 / 100;
    let YY = (100 * (maxSize - minSize)) / (1920 - 768);
    let ZZ = minSize / 16;
    return `calc(${ZZ}rem + ((1vw - ${XX}px) * ${YY}))`;
};

const breakpoints = {
    base: "0rem", // 0px
    sm: "30rem", // 480px
    md: "48rem", // 768px
    lg: "64rem", // 1024px
    xl: "80rem", // 1280px
    "2xl": "96rem", // 1536px
};

const Link = {
    baseStyle: {
        color: "#3CCF91",
        _hover: { color: "#F6A20E", textDecoration: "none" },
    },
};

// 3. extend the theme
const theme = extendTheme({
    components: {
        Link,
    },
    fonts: {
        heading: `'Raleway', sans-serif`,
        body: `'Raleway', sans-serif`,
    },
    fontSizes: {
        // display: fluidType(34, 82),
        // display2: fluidType(24, 36),
        // display3: fluidType(16, 24),
    },
    config,
    // declare custom color variables
    colors: {
        secondary: "#0F0E0E",
        muted: "#a0a3bd",
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

    // light / dark background color switch
});

export default theme;
