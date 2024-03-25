import { Button, useColorModeValue } from "@chakra-ui/react";
import { NavLink as ReactRouterLink } from "react-router-dom";
import { motion } from "framer-motion";

interface NavbarButtonProps {
    title: string;
    to: string;
    selected: boolean;
}

const NavbarButton = ({ title, to, selected }: NavbarButtonProps) => {
    const linkStyle = (isActive: boolean) => {
        const activeColor = useColorModeValue("muted", "#fff");
        const inactiveColor = useColorModeValue("muted", "#6c6e87");
        return {
            color: isActive ? activeColor : inactiveColor,
            fontWeight: isActive ? "bold" : "normal",
        };
    };
    const hoverColor = useColorModeValue("muted", "#bcc0cc");
    return (
        <ReactRouterLink
            to={to}
            style={({ isActive }) => {
                return linkStyle(isActive);
            }}
        >
            <motion.div
                animate={{
                    opacity: selected ? 1 : 0.7,
                }}
            >
                <Button
                    variant="subtle"
                    mx="1.5rem"
                    _hover={{
                        color: hoverColor,
                    }}
                >
                    {title}
                    {selected ? (
                        <motion.div
                            layout
                            transition={{
                                duration: 0.4,
                                type: "spring",
                            }}
                            className="underline"
                            layoutId="underline"
                            style={{
                                position: "absolute",
                                top: "100%",
                                marginTop: "0.4rem",
                                backgroundColor: "#7287fd",
                                width: "100%",
                                height: "5px",
                                borderRadius: "3000px",
                            }}
                        ></motion.div>
                    ) : null}
                </Button>
            </motion.div>
        </ReactRouterLink>
    );
};

export default NavbarButton;
