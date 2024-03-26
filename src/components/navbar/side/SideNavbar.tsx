import { As, HStack, Icon, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaEnvelope, FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";
import ExtendedTooltip from "../../ExtendedTooltip";
interface IconProps {
    id: string;
    as: As;
}

const AnimatedIcon = ({ as, id }: IconProps) => {
    return (
        <HStack>
            <ExtendedTooltip label={id.charAt(0).toUpperCase() + id.slice(1)}>
                <a href={`#${id}`}>
                    <motion.div whileHover={{ scale: 1.65 }}>
                        {<Icon as={as} />}
                    </motion.div>
                </a>
            </ExtendedTooltip>
        </HStack>
    );
};

const SideNavbar = () => {
    return (
        <VStack
            position="fixed"
            left="0"
            top="50%"
            transform="translateY(-50%)"
            spacing="4"
            display={{ base: "none", md: "flex" }}
            p="4"
            borderRadius="md"
            zIndex="100"
        >
            <AnimatedIcon as={FaHome} id="intro" />
            <AnimatedIcon as={FaUser} id="about" />
            <AnimatedIcon as={FaProjectDiagram} id="projects" />
            <AnimatedIcon as={FaEnvelope} id="contact" />
        </VStack>
    );
};

export default SideNavbar;
