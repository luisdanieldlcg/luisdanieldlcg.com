import { ArrowDownIcon } from "@chakra-ui/icons";
import { Box, Center, Icon, VStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const BottomNavbar = () => {
    const [shouldRender, setShouldRender] = useState(true);
    const { t } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + window.scrollY >=
                document.body.scrollHeight - 100
            ) {
                // you're at the bottom of the page
                setShouldRender(false);
            } else {
                setShouldRender(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    if (!shouldRender) {
        return <Box></Box>;
    }

    return (
        <Box position="fixed" bottom="0" right="0" left="0">
            <a>
                <VStack
                    cursor="pointer"
                    onClick={() => {
                        window.scrollTo({
                            top: document.body.scrollHeight,
                            behavior: "smooth",
                        });
                    }}
                >
                    <motion.div
                        animate={{
                            opacity: [0, 1],
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    >
                        <Text>{t("floatingbar.button.text")}</Text>
                        <Center>
                            <Icon as={ArrowDownIcon} fontSize="2xl" />
                        </Center>
                    </motion.div>
                </VStack>
            </a>
        </Box>
    );
};

export default BottomNavbar;
