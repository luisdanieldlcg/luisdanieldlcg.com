import { Card } from "@chakra-ui/react";
import SlideUpWhenVisible from "./SlideUpWhenVisible";
import { motion } from "framer-motion";

interface Props {
    children: React.ReactNode;
}
const InfoCard = ({ children }: Props) => {
    return (
        <SlideUpWhenVisible>
            <motion.div whileHover={{ scale: 1.02 }}>
                <Card borderRadius="16px" boxShadow="md" p="3" bg="#181825">
                    {children}
                </Card>
            </motion.div>
        </SlideUpWhenVisible>
    );
};

export default InfoCard;
