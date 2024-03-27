import {
    Heading,
    SimpleGrid,
    Image,
    Box,
    Text,
    SlideFade,
    Center,
    useColorModeValue,
} from "@chakra-ui/react";
import { Trans, useTranslation } from "react-i18next";

const Intro = () => {
    const textStyle = useColorModeValue("mutedLight", "mutedDark");
    const { t } = useTranslation();

    return (
        <>
            <section id="intro">
                <Center mt="20vh">
                    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={12}>
                        <SlideFade
                            in={true}
                            transition={{
                                enter: { duration: 0.3, delay: 0.25 },
                            }}
                        >
                            <Box mt={16}>
                                <Text
                                    as="div"
                                    fontSize="lg"
                                    maxW="520px"
                                    px="0px"
                                >
                                    <Text
                                        fontSize={{
                                            base: "1rem",
                                            md: "1.5rem",
                                        }}
                                    >
                                        <Trans i18nKey="home.intro.hello" />
                                    </Text>
                                    <Heading
                                        fontSize={{
                                            base: "1.6rem",
                                            md: "3.1rem",
                                        }}
                                        fontFamily="Inter"
                                        bgGradient="linear(to-l, #c6a0f6, #e4adbc)"
                                        bgClip="text"
                                    >
                                        Luis De La Cruz.
                                    </Heading>
                                    <Text color={textStyle} mt={5}>
                                        {t("home.intro.paragraph")}
                                    </Text>
                                    <Text color={textStyle} mt={5}>
                                        {t("home.intro.paragraph2")}
                                    </Text>
                                </Text>
                            </Box>
                        </SlideFade>

                        <SlideFade
                            style={{
                                marginRight: 90,
                            }}
                            in={true}
                            transition={{
                                enter: { duration: 0.3, delay: 0.25 },
                            }}
                        >
                            <Box position="relative">
                                {/* Image Shade */}
                                <Center>
                                    <Box
                                        // boxSize="100%"
                                        h="100%"
                                        w="75%"
                                        zIndex="-1"
                                        position="absolute"
                                        top="14"
                                        right="0"
                                        bottom="0"
                                        left="105"
                                        bg="#26292a"
                                        bgGradient="linear(to-r, #1c1c2b, #7287fd)"
                                        opacity="0.6"
                                        borderRadius="md"
                                    ></Box>

                                    <Image
                                        boxSize={360}
                                        src="assets/images/5.jpg"
                                        objectFit="cover" // Ensure the image covers the entire container
                                        borderRadius="md"
                                    />
                                </Center>
                            </Box>
                        </SlideFade>
                    </SimpleGrid>
                </Center>
            </section>
        </>
    );
};

export default Intro;
