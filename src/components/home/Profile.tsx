import {
    Button,
    HStack,
    Heading,
    SimpleGrid,
    Stack,
    Image,
    Box,
    Text,
    SlideFade,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Profile = () => {
    return (
        <SimpleGrid columns={{ base: 1, md: 2 }}>
            <Stack
                position="relative"
                spacing={1}
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <SlideFade
                    in={true}
                    transition={{ enter: { duration: 0.4, delay: 0.7 } }}
                >
                    <Text fontSize="display2">Hello! I'm - </Text>
                    <Heading fontSize="display">LUIS DE LA CRUZ.</Heading>
                    <Heading fontSize="display2">
                        <Box as="span">Software Engineer. </Box>
                        <Box as="span" fontSize="display3" color="muted">
                            A self-taught developer that build things with ❤️
                            and ☕️.
                        </Box>
                    </Heading>
                </SlideFade>
                <SlideFade
                    in={true}
                    transition={{ enter: { duration: 0.4, delay: 0.85 } }}
                >
                    <Box mt="2rem"></Box>
                    <Text fontSize="display3" color="muted">
                        🚀 Exploring opportunities and side projects.
                    </Text>
                    <Text fontSize="display3" color="muted">
                        💻 Currently specializing in Front-end Development.
                    </Text>
                    <Text fontSize="display3" color="muted">
                        🧑🏻‍💻 Interested in 3D Graphics & Low-level Programming.
                    </Text>

                    <HStack mt="5">
                        <Button mr="5" leftIcon={<FaGithub />}>
                            Github
                        </Button>
                        <Button mr="5" leftIcon={<FaLinkedin />}>
                            LinkedIn
                        </Button>
                    </HStack>
                </SlideFade>
            </Stack>
            <SlideFade
                in={true}
                transition={{ enter: { duration: 0.4, delay: 0.85 } }}
            >
                <Box
                    position="relative"
                    mx="5rem"
                    minW={{ base: "400px", lg: "500px" }}
                    minH={{ base: "400px", lg: "500px" }}
                >
                    <Image src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" />

                    <Box
                        maxW={{ base: "300px", lg: "600px" }}
                        maxH={{ base: "300px", lg: "430px" }}
                        zIndex="-1"
                        position="absolute"
                        top="3%"
                        bottom="-15%"
                        left="15%"
                        w="95%"
                        bg="#26292a"
                        bgGradient="linear(to-r, transparent, blackAlpha.800)"
                    ></Box>
                </Box>
            </SlideFade>
        </SimpleGrid>
    );
};

export default Profile;
