import { Select } from "@chakra-ui/react";
import { supportedLanguages } from "../data";
import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

const LocaleSelector = () => {
    const { i18n } = useTranslation();

    const selectLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
        const languageCode = event.target.value;
        i18n.changeLanguage(languageCode);
    };
    return (
        <Select
            variant="filled"
            borderRadius="md"
            defaultValue={i18n.language}
            onChange={(event) => selectLanguage(event)}
        >
            {supportedLanguages.map((language) => (
                <option key={language.code} value={language.code}>
                    {language.name}
                </option>
            ))}
        </Select>
    );
};

export default LocaleSelector;
