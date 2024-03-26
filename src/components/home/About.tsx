import {
    Box,
    Center,
    Flex,
    Heading,
    Image,
    SimpleGrid,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import SlideUpWhenVisible from "../SlideUpWhenVisible";

const About = () => {
    const textStyle = useColorModeValue("mutedLight", "mutedDark");
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
                                <Heading
                                    fontSize={{
                                        base: "1.6rem",
                                        md: "3.1rem",
                                    }}
                                    fontFamily="Inter"
                                    color="#cba6f7"
                                >
                                    About Me.
                                </Heading>

                                <Box mt={6} maxW="600px" transition="0.25s">
                                    <Text color={textStyle}>
                                        Hey! I'm Luis. I've been programming
                                        since late 2019, and have been
                                        passionate about it ever since. Being
                                        self-taught, I've had to learn a lot of
                                        things on my own, which has helped me
                                        develop a strong sense of autonomy and
                                        problem-solving skills.
                                    </Text>
                                    <br />
                                    <Text color={textStyle}>
                                        My areas of interest include networking,
                                        operating systems and 3D graphics, many
                                        of which I've been learning about in my
                                        spare time.
                                    </Text>
                                </Box>
                            </Box>
                            <Center mt={12}>
                                <Image
                                    src="https://cdn-icons-png.flaticon.com/512/10770/10770873.png"
                                    alt="about"
                                    boxSize="240px"
                                />
                            </Center>
                        </SimpleGrid>
                    </SlideUpWhenVisible>
                </Flex>
            </Center>
        </section>
    );
};

export default About;
