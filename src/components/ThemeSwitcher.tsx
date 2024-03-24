import { Button, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsMoonStars, BsSun } from "react-icons/bs";

// props

interface ThemeSwitcherProps {
    disableAnimation?: boolean;
}

const ThemeSwitcher = ({ disableAnimation }: ThemeSwitcherProps) => {
    const { colorMode, toggleColorMode } = useColorMode();

    if (disableAnimation) {
        return (
            <Button onClick={toggleColorMode} variant="subtle">
                {colorMode === "dark" ? (
                    <BsSun size={20} />
                ) : (
                    <BsMoonStars size={20} />
                )}
            </Button>
        );
    }

    return (
        <motion.div
            whileHover={{ scale: 1.4 }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            animate={{ rotate: 360 }}
        >
            <Button onClick={toggleColorMode} variant="subtle">
                {colorMode === "dark" ? (
                    <BsSun size={20} />
                ) : (
                    <BsMoonStars size={20} />
                )}
            </Button>
        </motion.div>
    );
};

export default ThemeSwitcher;
