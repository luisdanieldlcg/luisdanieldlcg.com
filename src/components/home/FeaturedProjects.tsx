import {
    Box,
    HStack,
    Heading,
    Icon,
    Link,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import SlideUpWhenVisible from "../SlideUpWhenVisible";
import { Project } from "../../types/project";
import ProjectCard from "../ProjectCard";
import { GiClick } from "react-icons/gi";
import { useTranslation } from "react-i18next";

interface Props {
    projects: Project[];
}

const FeaturedProjects = ({ projects }: Props) => {
    const cards = projects.map((project) => (
        <ProjectCard
            key={project.title}
            title={project.title}
            imageUrl={project.imageUrl}
            desc={project.desc}
            tags={project.tags}
            httpLink={project.httpLink}
        />
    ));
    const textStyle = useColorModeValue("mutedLight", "mutedDark");
    const { t } = useTranslation();
    return (
        <section id="projects">
            <Box mt={20}>
                <SlideUpWhenVisible>
                    <Stack>
                        <Heading
                            fontSize={{
                                base: "1.6rem",
                                md: "3.1rem",
                            }}
                            fontFamily="Inter"
                            color="#cba6f7"
                        >
                            {t("home.projects.title") + "."}
                        </Heading>
                        <Text
                            fontSize={{ base: "md", md: "xl" }}
                            color={textStyle}
                        >
                            {t("home.projects.subtitle") + "."}
                        </Text>
                        <Box w="fit-content">
                            <Link
                                display={"block"}
                                href="/projects"
                                fontSize={{ base: "sm", md: "xl" }}
                            >
                                <HStack>
                                    <Text
                                        bgGradient="linear(to-l, #c6a0f6, #e4adbc)"
                                        bgClip="text"
                                    >
                                        {t("home.projects.more") + "."}
                                    </Text>
                                    <Icon as={GiClick} />
                                </HStack>
                            </Link>
                        </Box>
                    </Stack>
                </SlideUpWhenVisible>
                <Box height="7" />

                <SlideUpWhenVisible>
                    <SimpleGrid
                        columns={{ sm: 1, lg: 2 }}
                        spacing={10}
                        gap={32}
                    >
                        {cards}
                    </SimpleGrid>
                </SlideUpWhenVisible>
            </Box>
        </section>
    );
};

export default FeaturedProjects;
