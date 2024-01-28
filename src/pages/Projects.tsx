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
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Project } from "../types/project";
import ProjectCard from "../components/ProjectCard";
import { fetchRepositories } from "../api/github/repositories";

interface Props {
    projects: Project[];
}

const Projects = ({}: Props) => {
    const [query, setQuery] = useState("");
    const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const [projects, setProjects] = useState<Project[]>([]);
    useEffect(() => {
        fetchRepositories().then((projects) => {
            setProjects(projects ?? []);
        });
    }, []);

    const cards = projects
        .filter((project) =>
            project.title.toLowerCase().includes(query.toLowerCase())
        )
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
            <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8} my="8">
                {cards.length === 0 ? (
                    <Text fontSize={{ base: "14px", md: "16px" }}>
                        {query === ""
                            ? "Looks like something went wrong, try again later."
                            : "No projects found."}
                    </Text>
                ) : (
                    cards
                )}
            </SimpleGrid>
        </>
    );
};

export default Projects;
