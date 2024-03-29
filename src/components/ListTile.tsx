import {
    Circle,
    Flex,
    HStack,
    Spacer,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";

interface ListTileProps {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    titleTrailing?: React.ReactNode;
    subtitleTrailing?: React.ReactNode;
}

const ListTile = ({
    title,
    subtitle,
    icon,
    subtitleTrailing,
    titleTrailing,
}: ListTileProps) => {
    const textStyle = useColorModeValue("mutedLight", "mutedDark");
    return (
        <Flex
            borderRadius={10}
            color="white"
            alignItems="center"
            justifyContent="space-between"
            mt={5}
        >
            <Flex alignItems="center">
                <Circle
                    size="54px"
                    bgGradient="linear(to-tr, #c6a0f6, #e4adbc)"
                >
                    {icon}
                </Circle>

                <Flex direction="column" ml={4}>
                    <HStack>
                        <Text color={useColorModeValue("black", "white")}>
                            {title}
                        </Text>

                        <Text
                            fontSize="sm"
                            color={textStyle}
                            mt={1}
                            fontWeight="light"
                        >
                            {titleTrailing}
                        </Text>
                    </HStack>
                    <HStack spacing={2} color={textStyle} fontSize="sm">
                        <Text>{subtitle}</Text>
                        <Text textAlign="end">{subtitleTrailing}</Text>
                    </HStack>
                </Flex>
            </Flex>
        </Flex>
    );
};
export default ListTile;
