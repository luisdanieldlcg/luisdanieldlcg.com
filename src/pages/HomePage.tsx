import Intro from "../components/home/Intro";
import { VStack } from "@chakra-ui/react";
import About from "../components/home/About";
import Contact from "../components/home/Contact";
import FeaturedProjects from "../components/home/FeaturedProjects";
import { featuredProjects } from "../data";
import SideNavbar from "../components/navbar/side/SideNavbar";
import BottomNavbar from "../components/navbar/BottomNavbar";

const HomePage = () => {
    return (
        <>
            <SideNavbar />
            <VStack
                as="main"
                spacing="244px"
                pb="144px"
                ml={{
                    base: "0",
                    md: "50px",
                }}
            >
                <Intro />
                <About />
                <FeaturedProjects projects={featuredProjects} />
                <Contact />
            </VStack>
            <BottomNavbar />
        </>
    );
};

export default HomePage;
