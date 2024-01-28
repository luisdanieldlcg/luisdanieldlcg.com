import { Box, Heading, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import ProjectCard, { Project } from "../ProjectCard";
import SlideUpWhenVisible from "../SlideUpWhenVisible";

interface Props {
    projects: Project[];
}

const FeaturedProjects = ({ projects }: Props) => {
    const cards = projects.map((project) => (
        <ProjectCard
            title={project.title}
            imageUrl={project.imageUrl}
            desc={project.desc}
            tags={project.tags}
        />
    ));
    return (
        <>
            <SlideUpWhenVisible>
                <Stack spacing={1}>
                    <Heading> Projects.</Heading>
                    <Text fontSize={{ base: "md", md: "xl" }}>
                        Here are some of my featured projects.
                    </Text>
                    <Link onClick={() => {}} display={"block"}>
                        <Text fontSize={{ base: "sm", md: "xl" }}>
                            Explore more &rarr;
                        </Text>
                    </Link>
                </Stack>
            </SlideUpWhenVisible>
            <Box height="7" />

            <SlideUpWhenVisible>
                <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10}>
                    {cards}
                </SimpleGrid>
            </SlideUpWhenVisible>
        </>
    );
};

export default FeaturedProjects;
