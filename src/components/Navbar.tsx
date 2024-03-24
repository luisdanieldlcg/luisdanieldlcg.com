import {
    Avatar,
    Button,
    Drawer,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Spacer,
    useDisclosure,
    Slide,
    Box,
    useBreakpointValue,
    useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const isSmallDevice = useBreakpointValue({
        base: true,
        md: false,
    });
    const bg = useColorModeValue("bgLight", "bgDark");

    const DrawerComponent = () => {
        return (
            <Drawer isOpen={isOpen} onClose={onClose} placement="left">
                <DrawerOverlay />
                <DrawerContent bg={bg}>
                    <DrawerHeader borderBottomWidth="1px">
                        <Avatar src="src/assets/logo.jpg" />
                    </DrawerHeader>

                    <DrawerCloseButton />
                    <NavLink
                        to="/"
                        style={({ isActive }) => {
                            return { fontWeight: isActive ? 700 : 400 };
                        }}
                    >
                        <Button variant="ghost">Home</Button>
                    </NavLink>
                    <NavLink
                        to="/projects"
                        style={({ isActive }) => {
                            return { fontWeight: isActive ? 700 : 400 };
                        }}
                    >
                        <Button variant="ghost">Projects</Button>
                    </NavLink>
                </DrawerContent>
            </Drawer>
        );
    };

    const NavbarComponent = () => {
        if (isSmallDevice) {
            return (
                <>
                    <Button onClick={onOpen} variant="ghost">
                        <HamburgerIcon w="7" h="7"></HamburgerIcon>
                    </Button>
                    <Spacer />
                </>
            );
        } else {
            return (
                <>
                    <Avatar src="src/assets/logo.jpg" />
                    <Spacer />
                    <NavLink
                        to="/"
                        style={({ isActive }) => {
                            return { fontWeight: isActive ? 700 : 400 };
                        }}
                    >
                        <Button variant="ghost" mx="1.5rem">
                            Home
                        </Button>
                    </NavLink>

                    <NavLink
                        to="/projects"
                        style={({ isActive }) => {
                            return { fontWeight: isActive ? 700 : 400 };
                        }}
                    >
                        <Button variant="ghost" mx="1.5rem">
                            Projects
                        </Button>
                    </NavLink>

                    <Box mx="1.5rem">
                        <ThemeSwitcher />
                    </Box>
                </>
            );
        }
    };
    return (
        <>
            <Box position="sticky" zIndex="100" transition="red">
                <Slide in={true} direction="top">
                    <Flex
                        as="nav"
                        px="3vw"
                        py="0.9rem"
                        borderBottom="0.01px solid #1e2029"
                        justifyContent="end"
                        width="100%"
                        bg={bg}
                    >
                        <NavbarComponent />
                        <DrawerComponent />
                    </Flex>
                </Slide>
            </Box>
        </>
    );
};

export default Navbar;
