// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
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
    base: "0em", // 0px
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
    "2xl": "96em", // 1536px
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
        muted: "#a0a3bd",
        highlight: "#6B46C1",

        bgDark: "#11111b",
        bgLight: "#eff1f5",
    },
    styles: {
        global: (props: any) => ({
            body: {
                background: props.colorMode === "dark" ? "#0a0908" : "#e5e5e5",
            },
        }),
    },
    fonts: {
        heading: `'Inter', sans-serif`,
        body: `'Inter', sans-serif`,
    },
    fontSizes: {
        display: fluidType(34, 82),
        display2: fluidType(24, 36),
        display3: fluidType(16, 24),
    },
    breakpoints,

    // light / dark background color switch
};

// 3. extend the theme
const theme = extendTheme(overrides);

export default theme;
