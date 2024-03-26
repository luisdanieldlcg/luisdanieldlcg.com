// TODO: ask for introduction details with props

import Intro from "../components/home/Intro";
import { Box } from "@chakra-ui/react";
import AboutMe from "../components/home/AboutMe";
import FeaturedProjects from "../components/home/FeaturedProjects";
import { featuredProjects } from "../data";
import { Image } from "@chakra-ui/react";
const HomePage = () => {
    return (
        <>
            <section id="intro">
                <Intro />
            </section>
            <Box
                height="40vh"
                display="flex"
                justifyContent="center"
                alignItems="center"
            />
            <section id="about">
                <AboutMe />
            </section>
            {/* <Box height="60" /> */}
            {/* <FeaturedProjects projects={featuredProjects} /> */}
            {/* <Box height="60" /> */}
        </>
    );
};

export default HomePage;
