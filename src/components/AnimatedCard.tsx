import { Card, useColorModeValue } from "@chakra-ui/react";
import SlideUpWhenVisible from "./SlideUpWhenVisible";
import { motion } from "framer-motion";

interface Props {
    children: React.ReactNode;
    onClick?: () => void;
}
const AnimatedCard = ({ children, onClick }: Props) => {
    const bgColor = useColorModeValue("#dce0e8", "#181825");
    return (
        <SlideUpWhenVisible>
            <motion.div whileHover={{ scale: 1.05 }}>
                <Card
                    onClick={onClick}
                    cursor="pointer"
                    bg={bgColor}
                    mt={3}
                    maxW="xl"
                    borderRadius="xl"
                    boxShadow="rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;"
                >
                    {children}
                </Card>
            </motion.div>
        </SlideUpWhenVisible>
    );
};

export default AnimatedCard;
