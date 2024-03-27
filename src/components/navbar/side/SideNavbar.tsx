import { As, HStack, Icon, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ExtendedTooltip from "../../ExtendedTooltip";
import { useTranslation } from "react-i18next";
import { TbCode, TbHome, TbMail, TbUser } from "react-icons/tb";
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
                        {<Icon as={as} boxSize={5} />}
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
                as={TbHome}
                id="intro"
                label={t("sidebar.icon.home.tooltip")}
            />
            <AnimatedIcon
                as={TbUser}
                id="about"
                label={t("sidebar.icon.about.tooltip")}
            />
            <AnimatedIcon
                // as={FaProjectDiagram}
                as={TbCode}
                id="projects"
                label={t("sidebar.icon.projects.tooltip")}
            />
            <AnimatedIcon
                as={TbMail}
                id="contact"
                label={t("sidebar.icon.contact.tooltip")}
            />
        </VStack>
    );
};

export default SideNavbar;
