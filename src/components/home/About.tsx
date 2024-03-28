import {
    Box,
    Center,
    Flex,
    HStack,
    Image,
    SimpleGrid,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import SlideUpWhenVisible from "../SlideUpWhenVisible";
import { useTranslation } from "react-i18next";
import Title from "../Title";
import { GiClick } from "react-icons/gi";

const About = () => {
    const textStyle = useColorModeValue("mutedLight", "mutedDark");
    const { t } = useTranslation();

    return (
        <section id="about">
            <Center>
                <Flex
                    minH="80vh"
                    justifyContent="center"
                    flexDirection="column"
                >
                    <SlideUpWhenVisible>
                        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
                            <Box>
                                <Title title={t("home.about.title")} />

                                <Box mt={6} maxW="520px" transition="0.25s">
                                    <Text color={textStyle}>
                                        {t("home.about.paragraph")}
                                    </Text>
                                    <br />
                                    <Text color={textStyle}>
                                        {t("home.about.paragraph2")}
                                    </Text>
                                </Box>
                            </Box>
                            <Center mt={12}>
                                <Image
                                    src="assets/icon/programmer.png"
                                    alt="about"
                                    boxSize="240px"
                                />
                            </Center>
                        </SimpleGrid>
                        <HStack
                            cursor="pointer"
                            mt={6}
                            spacing={2}
                            color={textStyle}
                            fontWeight="bold"
                        >
                            <Text>Learn more about me</Text>
                            <GiClick />
                        </HStack>
                    </SlideUpWhenVisible>
                </Flex>
            </Center>
        </section>
    );
};

export default About;
