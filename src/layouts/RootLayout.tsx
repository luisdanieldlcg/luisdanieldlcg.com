import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { Box } from "@chakra-ui/react";
import BottomNavbar from "../components/navbar/BottomNavbar";

const RootLayout = () => {
    return (
        <>
            <Box transition="0.25s" py="2vh">
                <Navbar />
                <Box>
                    <Outlet />
                </Box>
                <BottomNavbar />
            </Box>
        </>
    );
};

export default RootLayout;
