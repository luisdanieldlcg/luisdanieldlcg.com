import { Card, useColorModeValue } from "@chakra-ui/react";
import SlideUpWhenVisible from "./SlideUpWhenVisible";
import { motion } from "framer-motion";

interface Props {
    children: React.ReactNode;
}
const AnimatedCard = ({ children }: Props) => {
    const bgColor = useColorModeValue("#dce0e8", "#181825");
    return (
        <SlideUpWhenVisible>
            <motion.div whileHover={{ scale: 1.05 }}>
                <Card
                    bg={bgColor}
                    mt={3}
                    maxW="lg"
                    // opacity={0.9}
                    // boxShadow="xl"
                    borderRadius="xl"
                    // nice shadow in all borders
                    boxShadow="rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;"
                >
                    {children}
                </Card>
            </motion.div>
        </SlideUpWhenVisible>
    );
};

export default AnimatedCard;
