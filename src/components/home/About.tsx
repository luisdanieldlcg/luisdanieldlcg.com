import {
    Avatar,
    Box,
    Center,
    Circle,
    Flex,
    HStack,
    Image,
    ListItem,
    SimpleGrid,
    Text,
    UnorderedList,
    useColorModeValue,
} from "@chakra-ui/react";
import SlideUpWhenVisible from "../SlideUpWhenVisible";
import { useTranslation } from "react-i18next";
import Title from "../Title";
import { HiOutlineBriefcase } from "react-icons/hi";
import ListTile from "../ListTile";
import {
    PiBriefcase,
    PiBriefcaseBold,
    PiBriefcaseDuotone,
    PiBriefcaseLight,
} from "react-icons/pi";

const About = () => {
    const textStyle = useColorModeValue("mutedLight", "mutedDark");
    const { t } = useTranslation();
    const borderColor = useColorModeValue("#dce0e8", "#3e3f52");

    return (
        <section id="about">
            <Center>
                <Flex
                    minH="80vh"
                    justifyContent="center"
                    flexDirection="column"
                >
                    <SlideUpWhenVisible>
                        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
                            <Box>
                                <Title title={t("home.about.title")} />

                                <Box mt={6} maxW="520px" transition="0.25s">
                                    <Text color={textStyle}>
                                        {t("home.about.paragraph")}
                                    </Text>
                                    <br />
                                    <Text color={textStyle}>
                                        {t("home.about.paragraph2")}
                                    </Text>

                                    {
                                        <Box my={7}>
                                            <Text
                                                textAlign="center"
                                                bgGradient="linear(to-l, #c6a0f6, #e4adbc)"
                                                bgClip="text"
                                                mt={6}
                                                fontSize="2xl"
                                            >
                                                ∿∿∿∿∿
                                            </Text>
                                        </Box>
                                    }
                                    <Text color={textStyle} mt={6}>
                                        {t("home.about.paragraph3")}
                                    </Text>

                                    <UnorderedList
                                        spacing={3}
                                        my={4}
                                        px={5}
                                        color={textStyle}
                                    >
                                        <ListItem>
                                            {t("home.about.list1")}
                                        </ListItem>

                                        <ListItem>
                                            {t("home.about.list2")}
                                        </ListItem>

                                        <ListItem>
                                            {t("home.about.list3")}
                                        </ListItem>

                                        <ListItem>
                                            {t("home.about.list4")}
                                        </ListItem>

                                        <ListItem>
                                            {t("home.about.list5")}
                                        </ListItem>
                                    </UnorderedList>
                                </Box>
                            </Box>
                            <Box>
                                <Center mt={12}>
                                    <Image
                                        src="assets/icon/programmer.png"
                                        alt="about"
                                        boxSize="240px"
                                    />
                                </Center>
                                <Center mt="15vh">
                                    <SlideUpWhenVisible>
                                        <Box
                                            border="1px solid"
                                            borderColor={borderColor}
                                            borderRadius="lg"
                                            px={7}
                                            py={4}
                                            maxW={400}
                                        >
                                            <HStack>
                                                <PiBriefcaseLight size={24} />
                                                <Text fontWeight="bold">
                                                    {t("work.title")}
                                                </Text>
                                            </HStack>
                                            <Box mt={4}>
                                                <ListTile
                                                    title="NotSuitableGroup"
                                                    subtitle={t(
                                                        "work.lead.mobile.developer"
                                                    )}
                                                    icon={
                                                        <Circle
                                                            size="48px"
                                                            bg="white"
                                                        >
                                                            <Avatar
                                                                size="md"
                                                                src="assets/images/nsg.png"
                                                                boxSize={8}
                                                            />
                                                        </Circle>
                                                    }
                                                    titleTrailing={t("work.uk")}
                                                    subtitleTrailing="2022 - Present"
                                                />
                                                <ListTile
                                                    title="Cling"
                                                    subtitle={t(
                                                        "work.web.developer"
                                                    )}
                                                    icon={
                                                        <Avatar
                                                            size="md"
                                                            name="Cling"
                                                            src="https://shop.cling.do/wp-content/uploads/2023/04/cropped-dot-192x192.webp"
                                                            boxSize="60px"
                                                        />
                                                    }
                                                    titleTrailing={t("work.do")}
                                                    subtitleTrailing="2022 - 2023"
                                                />
                                            </Box>
                                        </Box>
                                    </SlideUpWhenVisible>
                                </Center>
                                <Center>
                                    <SlideUpWhenVisible>
                                        <Text
                                            mt={4}
                                            color={textStyle}
                                            fontSize="sm"
                                            fontStyle="italic"
                                        >
                                            {t("work.job.list.description") +
                                                "."}
                                        </Text>
                                    </SlideUpWhenVisible>
                                </Center>
                            </Box>
                        </SimpleGrid>
                    </SlideUpWhenVisible>
                </Flex>
            </Center>
        </section>
    );
};

export default About;
