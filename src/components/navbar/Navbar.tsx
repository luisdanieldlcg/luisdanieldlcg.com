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
    HStack,
    Text,
    AvatarBadge,
    VStack,
    Divider,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink as ReactRouterLink, useLocation } from "react-router-dom";
import ThemeSwitcher from "../ThemeSwitcher";
import { FaCode, FaHome } from "react-icons/fa";
import NavbarButton from "./NavbarButton";
import ExtendedTooltip from "../ExtendedTooltip";
import LocaleSelector from "../LocaleSelector";
import { useTranslation } from "react-i18next";

interface ProfileAvatarProps {
    tooltipLabel?: string;
}

const ProfileAvatar = ({ tooltipLabel }: ProfileAvatarProps) => {
    const badgeBorderColor = useColorModeValue("white", "black");
    const { t } = useTranslation();
    return (
        <ExtendedTooltip
            label={tooltipLabel}
            aria-label="A tooltip"
            placement="bottom"
        >
            <ReactRouterLink
                to="https://github.com/luisdanieldlcg"
                target="_blank"
            >
                <HStack>
                    <Avatar src="assets/logo.jpg" padding="0">
                        <AvatarBadge
                            boxSize="1.1em"
                            bg="green.400"
                            borderColor={badgeBorderColor}
                            borderWidth="2px"
                        ></AvatarBadge>
                    </Avatar>
                    <VStack alignItems="flex-start" spacing="0" ml="0.4rem">
                        <Text fontSize="sm" fontWeight="bold">
                            Luis Daniel
                        </Text>
                        <Text fontSize="sm" color="gray.500">
                            {t("navbar.skill")}
                        </Text>
                    </VStack>
                </HStack>
            </ReactRouterLink>
        </ExtendedTooltip>
    );
};

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
                    <DrawerHeader>
                        <h1>Menu</h1>
                        <HStack mt="1rem">
                            <ProfileAvatar />
                            <ThemeSwitcher />
                        </HStack>
                    </DrawerHeader>
                    <DrawerCloseButton size="lg" mr="1.2rem" />
                    <Divider />
                    <Button variant="ghost" py="1.5rem" leftIcon={<FaHome />}>
                        Home
                    </Button>
                    <Button variant="ghost" py="1.5rem" leftIcon={<FaCode />}>
                        Projects
                    </Button>
                </DrawerContent>
            </Drawer>
        );
    };

    const NavbarComponent = () => {
        const loc = useLocation();
        const { t } = useTranslation();
        const home = t("navbar.home");
        const projects = t("navbar.projects");
        const avatarTooltip = t("navbar.avatar.tooltip");

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
            const routes = [
                {
                    title: home,
                    to: "/",
                },
                {
                    title: projects,
                    to: "/projects",
                },
            ];
            const selected = (path: string) => {
                return loc.pathname === path;
            };
            const buttons = routes.map((route, index) => {
                return (
                    <NavbarButton
                        key={index}
                        title={route.title}
                        to={route.to}
                        selected={selected(route.to)}
                    />
                );
            });
            return (
                <>
                    <ProfileAvatar tooltipLabel={avatarTooltip} />
                    <Spacer />
                    {buttons}
                    <Box mr={4}>
                        <ThemeSwitcher />
                    </Box>
                    <Box display={{ base: "none", md: "block" }} mx="1.5rem">
                        <LocaleSelector />
                    </Box>
                </>
            );
        }
    };

    const borderColors = useColorModeValue("#dce0e8", "#1e2030");
    return (
        <>
            <Box position="sticky" zIndex="100">
                <Slide in={true} direction="top">
                    <Flex
                        as="nav"
                        px="3vw"
                        py="0.9rem"
                        borderBottom={`0.01px solid ${borderColors}`}
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
