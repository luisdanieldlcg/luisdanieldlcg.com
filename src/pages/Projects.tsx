import {
    Heading,
    VStack,
    Text,
    Input,
    InputRightElement,
    InputGroup,
    Divider,
    SimpleGrid,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import ProjectCard, { Project } from "../components/ProjectCard";
import { useState } from "react";

interface Props {
    projects: Project[];
}

const Projects = ({ projects }: Props) => {
    const [query, setQuery] = useState("");

    const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const cards = projects
        .filter((project) =>
            project.title.toLowerCase().includes(query.toLowerCase())
        )
        .map((project) => {
            return (
                <ProjectCard
                    title={project.title}
                    imageUrl={project.imageUrl}
                    desc={project.desc}
                    tags={project.tags}
                />
            );
        });
    return (
        <>
            <VStack alignItems={"start"} spacing={6} justifyContent="center">
                <Heading fontSize={{ base: "4xl", md: "6xl" }}>
                    Projects
                </Heading>
                <Text fontSize={{ base: "14px", md: "16px" }}>
                    I love building projects and practice my engineering skills,
                    here's an archive of things that I've worked on.
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
            <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8} my="8">
                {cards}
            </SimpleGrid>
        </>
    );
};

export default Projects;
