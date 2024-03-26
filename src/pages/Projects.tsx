import {
    Heading,
    VStack,
    Text,
    Input,
    InputRightElement,
    InputGroup,
    Divider,
    SimpleGrid,
    SlideFade,
    Skeleton,
    Box,
    SkeletonText,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Project } from "../types/project";
import ProjectCard from "../components/ProjectCard";
import { fetchRepositories } from "../api/github/repositories";
import AnimatedCard from "../components/AnimatedCard";

interface Props {
    projects: Project[];
}

const projectsPerPage = 6;

const Projects = ({}: Props) => {
    const [query, setQuery] = useState("");
    const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    const [fetchPage, setFetchPage] = useState(1); // The page to fetch from github
    const [realPage, setRealPage] = useState(1); // The page to show

    useEffect(() => {
        // Fetch until we have projectsPerPage available projects or we got all projects
        fetchRepositories(fetchPage).then((newProjects) => {
            if (!newProjects || newProjects.length === 0) {
                return;
            }
            setProjects([...projects, ...(newProjects ?? [])]);
            if (projects) {
            }
            setLoading(false);
            if (projects.length < fetchPage * projectsPerPage) {
                setFetchPage(fetchPage + 1);
            }
        });
    }, [fetchPage]);

    const cards = projects
        .filter((project) =>
            project.title.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, projectsPerPage * realPage)
        .map((project) => {
            return (
                <ProjectCard
                    key={project.title}
                    title={project.title}
                    imageUrl={project.imageUrl}
                    desc={project.desc}
                    tags={project.tags}
                    httpLink={project.httpLink}
                />
            );
        });
    return (
        <>
            <SlideFade in={true}>
                <VStack
                    alignItems={"start"}
                    spacing={6}
                    justifyContent="center"
                >
                    <Heading fontSize={{ base: "4xl", md: "6xl" }}>
                        Projects
                    </Heading>

                    <Text fontSize={{ base: "14px", md: "16px" }}>
                        I love building projects and practice my engineering
                        skills, here's an archive of things that I've worked on.
                    </Text>
                    <InputGroup maxW="400px">
                        <InputRightElement
                            pointerEvents="none"
                            children={<FaSearch />}
                        ></InputRightElement>

                        <Input
                            type="text"
                            placeholder="Search projects"
                            onChange={(e) => onSearch(e)}
                        ></Input>
                    </InputGroup>
                    <Divider />
                </VStack>
            </SlideFade>
            <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={12} my="8">
                {loading ? (
                    [1, 2, 3, 4, 5, 6].map((i) => {
                        return (
                            <Box key={i} borderRadius="10px" p="6">
                                <Skeleton height="360px" borderRadius="10px" />
                                <SkeletonText
                                    mt="6"
                                    noOfLines={5}
                                    spacing="4"
                                />
                            </Box>
                        );
                    })
                ) : cards.length === 0 ? (
                    <Text fontSize={{ base: "14px", md: "16px" }}>
                        No projects found.
                    </Text>
                ) : (
                    cards
                )}
            </SimpleGrid>

            {/*  Are there more projects to load?  */}
            {projects.length >= projectsPerPage * realPage ? (
                <SlideFade in={true}>
                    <Box
                        onClick={() => {
                            setFetchPage(fetchPage + 1);
                            setRealPage(realPage + 1);
                        }}
                        p="4"
                        borderRadius="10px"
                        // put in the bottom center
                        position="absolute"
                        left="45%"
                        transform="translateX(-50%)"
                        cursor="pointer"
                        py="10"
                        width="40"
                        textAlign="center"
                    >
                        <AnimatedCard>Load more</AnimatedCard>
                    </Box>
                </SlideFade>
            ) : null}
        </>
    );
};

export default Projects;
