import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { navbar_EN, sidebar_EN, floatingbar_EN, home_EN } from "../assets/i18n";
import { navbar_ES, sidebar_ES, floatingbar_ES, home_ES } from "../assets/i18n";

// refer to https://react.i18next.com/getting-started
i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: "en",
        returnObjects: true, ///assets/i18n/index.ts?url
        resources: {
            en: {
                translation: {
                    navbar: navbar_EN,
                    sidebar: sidebar_EN,
                    floatingbar: floatingbar_EN,
                    home: home_EN,
                },
            },
            es: {
                translation: {
                    navbar: navbar_ES,
                    sidebar: sidebar_ES,
                    floatingbar: floatingbar_ES,
                    home: home_ES,
                },
            },
        },
    });
