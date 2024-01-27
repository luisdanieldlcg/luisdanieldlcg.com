// TODO: ask for introduction details with props

import Profile from "../components/home/Profile";
import { Box } from "@chakra-ui/react";
import AboutMe from "../components/home/AboutMe";
import FeaturedProjects from "../components/home/FeaturedProjects";

const HomePage = () => {
    return (
        <>
            <Profile />
            <Box height="60" />
            <AboutMe />
            <Box height="60" />
            <FeaturedProjects />
            <Box height="60" />
        </>
    );
};

export default HomePage;
