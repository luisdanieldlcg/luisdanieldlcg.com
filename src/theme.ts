// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
// 2. Add your color mode config
const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

const fluidType = (minSize: number, maxSize: number) => {
    let XX = 768 / 100;
    let YY = (100 * (maxSize - minSize)) / (1920 - 768);
    let ZZ = minSize / 16;
    return `calc(${ZZ}rem + ((1vw - ${XX}px) * ${YY}))`;
};

const breakpoints = {
    base: "0em",
    sm: "30em",
    md: "60em",
    lg: "80em",
    xl: "80em",
};

const Link = {
    baseStyle: {
        color: "#3CCF91",
        _hover: { color: "#F6A20E", textDecoration: "none" },
    },
};

const overrides = {
    components: {
        Link,
    },
    config,
    // declare custom color variables
    colors: {
        secondary: "#0F0E0E",
        muted: "#d6d6d6",
        highlight: "#6B46C1",
    },
    styles: {
        global: {
            body: {
                background: "#000000",
            },
        },
    },
    fonts: {
        heading: `'Montserrat', sans-serif`,
        body: `'Montserrat', sans-serif`,
    },
    fontSizes: {
        display: fluidType(34, 82),
        display2: fluidType(24, 36),
        display3: fluidType(16, 24),
    },
    breakpoints,
};

// 3. extend the theme
const theme = extendTheme(overrides);

export default theme;
