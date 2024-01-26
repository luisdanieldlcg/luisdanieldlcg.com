import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Stack } from "@chakra-ui/react";

const RootLayout = () => {
    return (
        <>
            <Navbar />
            {/* <Flex
                as="main"
                justifyContent="center"
                flexDirection="column"
            ></Flex> */}
            <Stack
                // spacing="144px"
                // justifyContent="center"
                // alignItems="flex-start"
                px={{ base: "5vw", md: "10vw" }}
                mt={{ base: "15vh", md: "22.5vh" }}
            >
                <Outlet />
            </Stack>
        </>
    );
};

export default RootLayout;
