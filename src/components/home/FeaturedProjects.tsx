import { Box, Heading, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import ProjectCard, { Project } from "../ProjectCard";
import SlideUpWhenVisible from "../SlideUpWhenVisible";
import { TbBrandFirebase, TbBrandFlutter } from "react-icons/tb";
import { FaRust } from "react-icons/fa";
import { SiDart } from "react-icons/si";

const FeaturedProjects = () => {
    const projects: Project[] = [
        {
            title: "Explora",
            imageUrl:
                "https://github.com/DanikingRD/VoxelExperiment/raw/main/assets/game-screenshot.png",
            desc: "Explora is a multiplayer Voxel game made with Rust and WGPU. It's still in development, but you can check out the source code on GitHub.",
            tags: [["Rust", <FaRust />, "orange"]],
        },

        {
            title: "WhatsUp",
            imageUrl:
                "https://i.pinimg.com/736x/c5/41/53/c541531b152dc59e6f41899d7b2e4895.jpg",
            desc: "WhatsUp is a WhatsApp clone built with Flutter and Firebase. It aims to replicate some of its core features but its main purpose is to showcase how easy it is to build real-time applications with Flutter and Firebase.",
            tags: [
                ["Dart", <SiDart />, "blue"],
                ["Flutter", <TbBrandFlutter />, "blue"],
                ["Firebase", <TbBrandFirebase />, "yellow"],
            ],
        },
    ];
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
