import {
    Divider,
    SimpleGrid,
    Skeleton,
    Box,
    SkeletonText,
    useToast,
    useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Project } from "../types/project";
import { fetchRepositories } from "../api/github/repositories";
import ProjectsHeading from "../components/projects/ProjectsHeading";
import ProjectGrid from "../components/projects/ProjectGrid";

interface Props {
    projects: Project[];
}

const Projects = ({}: Props) => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("");
    const toast = useToast();
    const search = projects.filter((project) => {
        return project.title.toLowerCase().includes(query.toLowerCase());
    });
    const dividerColor = useColorModeValue("#dce0e8", "#3e3f52");

    useEffect(() => {
        (async () => {
            const projects = await fetchRepositories();
            if (projects) {
                setProjects(projects);
            } else {
                toast({
                    title: "Could not load projects",
                    description: "Please try again later or contact support",
                    variant: "left-accent",
                    status: "error",
                    isClosable: true,
                });
            }
            setLoading(false);
        })();
    }, []);

    return (
        <>
            <Box
                py={40}
                px={{
                    xl: 40,
                }}
            >
                <ProjectsHeading
                    onSearch={(event) => setQuery(event.target.value)}
                />
                <Divider mt={8} borderColor={dividerColor} />
                {loading ? (
                    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={12} my="8">
                        {[1, 2, 3, 4, 5, 6].map((i) => {
                            return (
                                <Box key={i} borderRadius="10px">
                                    <Skeleton
                                        height="360px"
                                        borderRadius="10px"
                                    />
                                    <SkeletonText
                                        mt="6"
                                        noOfLines={5}
                                        spacing="4"
                                    />
                                </Box>
                            );
                        })}
                    </SimpleGrid>
                ) : (
                    <ProjectGrid projects={search} />
                )}
            </Box>
        </>
    );
};

export default Projects;
