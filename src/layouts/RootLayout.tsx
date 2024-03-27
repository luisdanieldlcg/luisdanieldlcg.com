import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { Box } from "@chakra-ui/react";
import Footer from "../components/Footer";

const RootLayout = () => {
    return (
        <>
            <Box transition="0.25s" py="2vh" px="3vh">
                <Navbar />
                <Outlet />
                <Footer />
            </Box>
        </>
    );
};

export default RootLayout;
