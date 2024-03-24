import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box, Stack, useColorModeValue } from "@chakra-ui/react";

const RootLayout = () => {
    const bgColor = useColorModeValue("bgLight", "bgDark");

    return (
        <>
            <Navbar />
            <Box
                px={{ base: "5vw", md: "10vw" }}
                py={{ base: "5vh", md: "22vh" }}
                bg={bgColor}
                transition="background-color 0.5s"
            >
                <Outlet />
            </Box>
        </>
    );
};

export default RootLayout;
