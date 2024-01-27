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
    useMediaQuery,
    Slide,
    Box,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isTabletWidth] = useMediaQuery("(max-width: 768px)");

    const DrawerComponent = () => {
        return (
            <Drawer isOpen={isOpen} onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent backgroundColor="secondary">
                    <DrawerHeader borderBottomWidth="1px">
                        <Avatar src="src/assets/logo.jpg" />
                    </DrawerHeader>

                    <DrawerCloseButton />
                    <Button variant="ghost">
                        <NavLink
                            to="/"
                            style={({ isActive }) => {
                                return { fontWeight: isActive ? 700 : 400 };
                            }}
                        >
                            Home
                        </NavLink>
                    </Button>
                    <Button variant="ghost">
                        <NavLink
                            to="/projects"
                            style={({ isActive }) => {
                                return { fontWeight: isActive ? 700 : 400 };
                            }}
                        >
                            Projects
                        </NavLink>
                    </Button>
                </DrawerContent>
            </Drawer>
        );
    };
    return (
        <>
            <Box position="sticky" zIndex="100">
                <Slide in={true} direction="top">
                    <Flex
                        as="nav"
                        px="3vw"
                        py="0.9rem"
                        borderBottom="0.5px solid #1e2029"
                        justifyContent="space-between"
                        alignItems="center"
                        width="100%"
                        bg="black"
                    >
                        <Avatar src="src/assets/logo.jpg" />
                        <Spacer />
                        {isTabletWidth ? (
                            <HamburgerIcon
                                w="7"
                                h="7"
                                onClick={onOpen}
                            ></HamburgerIcon>
                        ) : (
                            <>
                                <Button p="4" ml="3vw" variant="ghost">
                                    <NavLink
                                        to="/"
                                        style={({ isActive }) => {
                                            return {
                                                fontWeight: isActive
                                                    ? 700
                                                    : 400,
                                            };
                                        }}
                                    >
                                        Home
                                    </NavLink>
                                </Button>
                                <Button p="4" ml="3vw" variant="ghost">
                                    <NavLink
                                        to="/projects"
                                        style={({ isActive }) => {
                                            return {
                                                fontWeight: isActive
                                                    ? 700
                                                    : 400,
                                            };
                                        }}
                                    >
                                        Projects
                                    </NavLink>
                                </Button>
                            </>
                        )}
                    </Flex>
                </Slide>
                <DrawerComponent />
            </Box>
        </>
    );
};

export default Navbar;
