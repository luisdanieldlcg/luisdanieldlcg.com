import {
    Box,
    CardBody,
    CardHeader,
    Center,
    HStack,
    Heading,
    Image,
    Text,
} from "@chakra-ui/react";
import InfoCard from "../InfoCard";

const AboutMe = () => {
    return (
        <Box maxW={800} mx="auto" boxShadow="md" transition="0.25s" id="about">
            <InfoCard>
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
                </CardBody>
            </InfoCard>
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
