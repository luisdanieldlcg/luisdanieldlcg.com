import {
    CardBody,
    CardFooter,
    Divider,
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

import { FaExternalLinkAlt, FaGithub, FaStar } from "react-icons/fa";

import { ProjectTag } from "../types/project";
import { Link } from "react-router-dom";
import AnimatedCard from "./AnimatedCard";
import { GoRepoForked } from "react-icons/go";

interface Props {
    title: string;
    imageUrl: string;
    desc: string;
    tags: ProjectTag[];
    httpLink: string;
    stars?: number;
    forks?: number;
}

const ProjectCard = ({
    title,
    imageUrl,
    desc,
    tags,
    httpLink,
    stars,
    forks,
}: Props) => {
    const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1);
    const textStyle = useColorModeValue("mutedLight", "mutedDark");

    const starsComponent =
        stars !== null && stars !== undefined ? (
            <HStack>
                <Text color={textStyle} fontSize="xl">
                    {stars}
                </Text>
                <FaStar aria-label="stars" size={23} />
            </HStack>
        ) : (
            <></>
        );

    const forksComponent =
        forks !== null && forks !== undefined ? (
            <HStack>
                <Text color={textStyle} fontSize="xl">
                    {forks}
                </Text>
                <GoRepoForked aria-label="forks" size={23} />
            </HStack>
        ) : (
            <></>
        );
    const dividerColor = useColorModeValue("#b8bfcb", "#3e3f52");

    return (
        <Link to={httpLink} color="white" target="_blank">
            <ScaleFade in={true} initialScale={0.25}>
                <AnimatedCard>
                    <CardBody>
                        <Image
                            src={imageUrl}
                            alt="Project Image"
                            h="300px"
                            w="100%"
                            fit="contain"
                        />
                        <Stack mt="6" spacing="3">
                            <HStack wrap="wrap">
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
                                    {starsComponent}
                                    {forksComponent}
                                    <FaGithub aria-label="github" size={23} />
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
                    <Divider borderColor={dividerColor} />
                    <CardFooter>
                        <Text color={textStyle}> {desc} </Text>
                    </CardFooter>
                </AnimatedCard>
            </ScaleFade>
        </Link>
    );
};

export default ProjectCard;
