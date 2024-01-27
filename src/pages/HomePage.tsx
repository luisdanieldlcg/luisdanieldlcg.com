// TODO: ask for introduction details with props

import Profile from "../components/home/Profile";
import { Heading, Text, Container } from "@chakra-ui/react";
const HomePage = () => {
    return (
        <>
            <Profile />
            <Container>
                <Heading>About Me</Heading>
                <Text>
                    Hey! I'm Luis. I've been programming since late 2019, and
                    have been passionate about it ever since.
                </Text>
            </Container>
        </>
    );
};

export default HomePage;
