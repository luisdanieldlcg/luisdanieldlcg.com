import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";

const AboutMe = () => {
    return (
        <Box>
            <Heading>About Me.</Heading>
            <SimpleGrid
                mt={6}
                columns={{
                    base: 1,
                    md: 2,
                }}
                spacing={16}
            >
                <Box transition="0.25s" id="about">
                    <Text>
                        Hey! I'm Luis. I've been programming since late 2019,
                        and have been passionate about it ever since. Being
                        self-taught, I've had to learn a lot of things on my
                        own, which has helped me develop a strong sense of
                        autonomy and problem-solving skills.
                    </Text>
                    <br />
                    <Text>
                        My areas of interest include networking, operating
                        systems and 3D graphics, many of which I've been
                        learning about in my spare time.
                    </Text>
                    {/* <InfoCard>
                <CardHeader>
                    <Center>
                        <HStack>
                            <Image
                                src="src/assets/biography.png"
                                alt="about"
                                boxSize="40px"
                            />
                            <Heading>About Me</Heading>
                        </HStack>
                    </Center>
                </CardHeader>
                <CardBody>
                   
                </CardBody>
            </InfoCard> */}
                </Box>
                <Image
                    src="https://cdn-icons-png.flaticon.com/512/10770/10770873.png"
                    alt="about"
                    boxSize="200px"
                ></Image>
            </SimpleGrid>
        </Box>

        // <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16}>
        //     <Center>

        //     </Center>
        /* 
            <InfoCard>
                <CardHeader>
                    <HStack>
                        <FcLinux
                            style={{
                                fontSize: "50px",
                            }}
                        />
                        <Heading>I ❤️ Linux</Heading>
                    </HStack>
                </CardHeader>
                <CardBody mt="3">
                    <Text>
                        Linux is by far my favourite operating system. It is
                        like being given the superpower to fine-tune your
                        workflow without the OS getting in your way. Fedora is
                        currently my daily driver, but sometimes I happen to use
                        Arch (btw), Pop(OS) or Linux Mint.
                    </Text>
                    <br />
                    <Text>
                        I also enjoy writing scripts to automate tasks, which
                        would otherwise be tedious to do each time manually.
                    </Text>
                </CardBody>
            </InfoCard> */
        // {/* </SimpleGrid> */}
    );
};

export default AboutMe;
