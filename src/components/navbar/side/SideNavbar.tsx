import { As, HStack, Icon, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaEnvelope, FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";
import ExtendedTooltip from "../../ExtendedTooltip";
import { useTranslation } from "react-i18next";
interface IconProps {
    id: string;
    as: As;
    label: string;
}

const AnimatedIcon = ({ as, id, label }: IconProps) => {
    return (
        <HStack>
            <ExtendedTooltip
                label={label}
                aria-label="A tooltip"
                placement="right"
            >
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
    const { t } = useTranslation();
    return (
        <VStack
            position="fixed"
            left="0"
            top="50%"
            transform="translateY(-50%)"
            spacing="6"
            display={{ base: "none", md: "flex" }}
            p="4"
            borderRadius="md"
            zIndex="100"
        >
            <AnimatedIcon
                as={FaHome}
                id="intro"
                label={t("sidebar.icon.home.tooltip")}
            />
            <AnimatedIcon
                as={FaUser}
                id="about"
                label={t("sidebar.icon.about.tooltip")}
            />
            <AnimatedIcon
                as={FaProjectDiagram}
                id="projects"
                label={t("sidebar.icon.projects.tooltip")}
            />
            <AnimatedIcon
                as={FaEnvelope}
                id="contact"
                label={t("sidebar.icon.contact.tooltip")}
            />
        </VStack>
    );
};

export default SideNavbar;
