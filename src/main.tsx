import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./theme";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import "@fontsource/raleway/400.css";
import "@fontsource/raleway/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ChakraProvider theme={theme} cssVarsRoot="body">
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App></App>
        </ChakraProvider>
    </React.StrictMode>
);
