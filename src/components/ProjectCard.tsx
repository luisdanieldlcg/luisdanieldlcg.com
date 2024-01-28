import {
    Card,
    CardBody,
    CardHeader,
    HStack,
    Image,
    ScaleFade,
    Spacer,
    Tag,
    TagLabel,
    Text,
} from "@chakra-ui/react";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import { motion } from "framer-motion";
import { ProjectTag } from "../types/project";
import { Link } from "react-router-dom";

interface Props {
    title: string;
    imageUrl: string;
    desc: string;
    tags: ProjectTag[];
    httpLink: string;
}

const ProjectCard = ({ title, imageUrl, desc, tags, httpLink }: Props) => {
    const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1);
    return (
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.1 }}>
            <Link to={httpLink} color="white" target="_blank">
                <ScaleFade in={true} initialScale={0.75}>
                    <Card
                        maxW="600"
                        bg="secondary"
                        bgGradient="linear(to-r, transparent, blackAlpha.900)"
                        borderRadius="10px"
                        border="1px"
                        borderColor={{ base: "#333", md: "borderColor" }}
                    >
                        {/* // TODO: Make the images fit better  */}
                        <CardHeader p="0" minH="320px" maxH="500px">
                            <Image
                                borderBottom="1px solid #222"
                                borderTopRadius="10px"
                                src={imageUrl}
                                alt={formattedTitle}
                                maxH="500"
                                transition="0.3s"
                            />
                        </CardHeader>
                        <CardBody>
                            <HStack alignItems="center" spacing={4}>
                                <Text fontSize="2xl" fontWeight="bold">
                                    {formattedTitle}
                                </Text>
                                <Spacer></Spacer>
                                <FaGithub aria-label="github" size={23} />
                                <FaExternalLinkAlt
                                    aria-label="project link"
                                    size={20}
                                />
                            </HStack>
                            <HStack mt="3">
                                {tags.map((tag) => (
                                    <Tag
                                        colorScheme={tag[2]}
                                        key={tag[0] + title}
                                    >
                                        <HStack>
                                            {tag[1]}
                                            <TagLabel>{tag[0]}</TagLabel>
                                        </HStack>
                                    </Tag>
                                ))}
                            </HStack>
                            <Text mt="5" mb="2">
                                {desc}
                            </Text>
                        </CardBody>
                    </Card>
                </ScaleFade>
            </Link>
        </motion.div>
    );
};

export default ProjectCard;
