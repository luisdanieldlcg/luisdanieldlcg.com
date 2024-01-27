import { Card } from "@chakra-ui/react";
import SlideUpWhenVisible from "./SlideUpWhenVisible";
import { motion } from "framer-motion";

interface Props {
    children: React.ReactNode;
}
const InfoCard = ({ children }: Props) => {
    return (
        <SlideUpWhenVisible>
            <motion.div whileHover={{ scale: 1.07 }}>
                <Card
                    borderRadius="16px"
                    boxShadow="md"
                    p="3"
                    bg="#21262a"
                    bgGradient="linear(to-r, transparent, blackAlpha.800)"
                >
                    {children}
                </Card>
            </motion.div>
        </SlideUpWhenVisible>
    );
};

export default InfoCard;
