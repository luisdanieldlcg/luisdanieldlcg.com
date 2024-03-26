import {
    CardBody,
    CardFooter,
    Divider,
    Flex,
    HStack,
    Heading,
    Image,
    ScaleFade,
    Spacer,
    Stack,
    Tag,
    TagLabel,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import { motion } from "framer-motion";
import { ProjectTag } from "../types/project";
import { Link } from "react-router-dom";
import AnimatedCard from "./AnimatedCard";

interface Props {
    title: string;
    imageUrl: string;
    desc: string;
    tags: ProjectTag[];
    httpLink: string;
}

const ProjectCard = ({ title, imageUrl, desc, tags, httpLink }: Props) => {
    const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1);
    const textStyle = useColorModeValue("mutedLight", "mutedDark");
    return (
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.1 }}>
            <Link to={httpLink} color="white" target="_blank">
                <ScaleFade in={true} initialScale={0.75}>
                    <AnimatedCard>
                        <CardBody>
                            {
                                <Image
                                    src={imageUrl}
                                    alt="Green double couch with wooden legs"
                                    borderRadius="md"
                                    h="300px"
                                    w="100%"
                                    fit="cover"
                                />
                            }
                            <Stack mt="6" spacing="3">
                                <HStack>
                                    <Heading
                                        as="h2"
                                        size="lg"
                                        fontFamily="Inter"
                                        color="#f2d5cf"
                                        bgGradient="linear(to-l, #c6a0f6, #e4adbc)"
                                        bgClip="text"
                                    >
                                        {formattedTitle}
                                    </Heading>
                                    <Spacer></Spacer>
                                    <HStack spacing="4">
                                        <FaGithub
                                            aria-label="github"
                                            size={23}
                                        />
                                        <FaExternalLinkAlt
                                            aria-label="project link"
                                            size={20}
                                        />
                                    </HStack>
                                </HStack>
                                <HStack wrap="wrap">
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
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <Text color={textStyle}> {desc} </Text>
                        </CardFooter>
                    </AnimatedCard>
                </ScaleFade>
            </Link>
        </motion.div>
    );
};

export default ProjectCard;
