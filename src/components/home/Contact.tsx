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

const Contact = () => {
    const textStyle = useColorModeValue("mutedLight", "mutedDark");
    const { t } = useTranslation();
    return (
        <section id="contact">
            <Center>
                <SlideUpWhenVisible>
                    <Flex minH="50vh">
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

                            <Text
                                color={textStyle}
                                maxW={500}
                                textAlign="center"
                                mt="10px"
                            >
                                {t("home.contact.paragraph2") + " "}
                                <a href="mailto:dadsa">
                                    <Text as="span" fontWeight="bold">
                                        hello.luisdanieldlcg@gmail.com
                                    </Text>
                                </a>
                            </Text>

                            <HStack mt={5}>
                                <IconButton
                                    aria-label="github"
                                    variant="ghost"
                                    icon={<FaGithub />}
                                />
                                <IconButton
                                    aria-label="linkedin"
                                    variant="ghost"
                                    icon={<FaLinkedin />}
                                />
                                <IconButton
                                    aria-label="email"
                                    variant="ghost"
                                    icon={<FaEnvelope />}
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