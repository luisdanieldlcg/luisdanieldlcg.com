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

const Intro = () => {
    const textStyle = useColorModeValue("mutedLight", "mutedDark");

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
                                        <span
                                            style={{
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Hello,
                                        </span>{" "}
                                        my name is
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
                                        I'm a Software Developer with experience
                                        building web and mobile applications for
                                        a variety of platforms.
                                    </Text>
                                    <Text color={textStyle} mt={5}>
                                        My areas of interest include 3D
                                        Graphics, Low-level Programming, and
                                        Backend infrastructure.
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
                                        src="src/assets/images/5.jpg"
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
