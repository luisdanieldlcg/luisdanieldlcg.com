import { ArrowDownIcon } from "@chakra-ui/icons";
import { Box, Center, Icon, VStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Section {
    id: string;
    index: number;
}
const BottomNavbar = () => {
    const [sectionId, setSectionId] = useState<Section>({
        id: "",
        index: 0,
    });

    useEffect(() => {
        const sectionList = document.querySelectorAll("section");
        const sectionIds = Array.from(sectionList).map((section) => section.id);

        const handleScroll = () => {
            sectionList.forEach((section, index) => {
                const windowTop = window.scrollY;
                const sectionTop = section.offsetTop;
                if (windowTop > sectionTop * 0.5) {
                    setSectionId({
                        id: sectionIds[index],
                        index: index,
                    });
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    if (sectionId.id === "") {
        return null;
    }
    return (
        <Box position="fixed" bottom="0" right="0" left="0">
            <a>
                <VStack
                    cursor="pointer"
                    onClick={() => {
                        window.scrollTo({
                            top: window.innerHeight * (sectionId.index + 1),
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
                        <Text>{sectionId.id}</Text>
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
