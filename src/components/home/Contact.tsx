import {
    Center,
    Flex,
    HStack,
    Heading,
    IconButton,
    Text,
    VStack,
    useColorModeValue,
} from "@chakra-ui/react";
import SlideUpWhenVisible from "../SlideUpWhenVisible";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { email, githubUsername, linkedin } from "../../../config.json";

const Contact = () => {
    const textStyle = useColorModeValue("mutedLight", "mutedDark");
    const { t } = useTranslation();
    return (
        <section id="contact">
            <Center>
                <SlideUpWhenVisible>
                    <Flex minH="50vh" mr="4.5rem">
                        <VStack>
                            <Heading
                                fontSize={{
                                    base: "1.6rem",
                                    md: "3.1rem",
                                }}
                                fontFamily="Inter"
                                color="#cba6f7"
                            >
                                {t("home.contact.title") + "."}
                            </Heading>

                            <Text
                                color={textStyle}
                                maxW={500}
                                textAlign="center"
                                mt="10px"
                            >
                                {t("home.contact.paragraph") + "."}
                            </Text>

                            <Text color={textStyle} maxW={500} mt="10px">
                                {t("home.contact.paragraph2") + " "}
                                <a href="mailto:dadsa">
                                    <Text as="span" fontWeight="bold">
                                        {email}
                                    </Text>
                                </a>
                            </Text>

                            <HStack mt={10} spacing={5}>
                                <IconButton
                                    aria-label="github"
                                    variant="outline"
                                    icon={<FaGithub />}
                                    onClick={() => {
                                        window.open(
                                            `https://github.com/${githubUsername}`,
                                            "_blank"
                                        );
                                    }}
                                />
                                <IconButton
                                    aria-label="linkedin"
                                    variant="outline"
                                    icon={<FaLinkedin />}
                                    onClick={() => {
                                        // open new tab to linkedin
                                        window.open(linkedin, "_blank");
                                    }}
                                />
                                <IconButton
                                    aria-label="email"
                                    variant="outline"
                                    icon={<FaEnvelope />}
                                    onClick={() => {
                                        window.open(`mailto:${email}`);
                                    }}
                                />
                            </HStack>
                        </VStack>
                    </Flex>
                </SlideUpWhenVisible>
            </Center>
        </section>
    );
};

export default Contact;
