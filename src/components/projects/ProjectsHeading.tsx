import {
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    VStack,
    useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaSearch } from "react-icons/fa";

interface Props {
    onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProjectsHeading = ({ onSearch }: Props) => {
    const textStyle = useColorModeValue("mutedLight", "mutedDark");
    const { t } = useTranslation();
    return (
        <VStack alignItems={"start"} spacing={6}>
            <Heading
                fontSize={{ base: "4xl", md: "6xl" }}
                fontFamily="Inter"
                bgGradient="linear(to-l, #c6a0f6, #e4adbc)"
                bgClip="text"
            >
                {t("projects.heading.title") + "."}
            </Heading>
            <Text fontSize={{ base: "14px", md: "16px" }} color={textStyle}>
                {t("projects.heading.subtitle") + "."}
            </Text>

            <InputGroup maxW="400px">
                <InputRightElement
                    pointerEvents="none"
                    children={<FaSearch />}
                ></InputRightElement>

                <Input
                    focusBorderColor="#d0a4e2"
                    type="text"
                    placeholder={t("projects.search.placeholder")}
                    onChange={(e) => onSearch(e)}
                ></Input>
            </InputGroup>
        </VStack>
    );
};

export default ProjectsHeading;
