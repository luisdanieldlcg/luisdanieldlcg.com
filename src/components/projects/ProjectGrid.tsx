import { SimpleGrid } from "@chakra-ui/react";
import { Project } from "../../types/project";
import ProjectCard from "../ProjectCard";

interface Props {
    projects: Project[];
}

const ProjectGrid = ({ projects }: Props) => {
    const cards = projects.map((project) => {
        return (
            <ProjectCard
                key={project.title}
                title={project.title}
                imageUrl={project.imageUrl}
                desc={project.desc}
                tags={project.tags}
                httpLink={project.httpLink}
                stars={project.stars}
                forks={project.forks}
            />
        );
    });
    return (
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={12} my="8">
            {cards}
        </SimpleGrid>
    );
};

export default ProjectGrid;
