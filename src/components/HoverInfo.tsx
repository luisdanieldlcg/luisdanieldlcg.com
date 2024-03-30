import {
    Popover,
    PopoverTrigger,
    chakra,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    useColorModeValue,
} from "@chakra-ui/react";

interface Props {
    text: string;
    content: React.ReactNode;
}
const HoverInfo = ({ text, content }: Props) => {
    const bgColor = useColorModeValue("#dce0e8", "#181825");

    return (
        <Popover trigger="hover" placement="right" isLazy>
            <PopoverTrigger>
                <chakra.span
                    cursor="help"
                    onMouseOver={() => {}}
                    textDecoration="underline"
                    textDecorationColor={"#cba6f7"}
                >
                    {text}
                </chakra.span>
            </PopoverTrigger>
            <PopoverContent
                bg={bgColor}
                color="button1"
                p={3}
                borderRadius="xl"
            >
                <PopoverArrow bg={bgColor} color="button1" />
                <PopoverBody>{content}</PopoverBody>
            </PopoverContent>
        </Popover>
    );
};

export default HoverInfo;
