import {
    Popover,
    PopoverTrigger,
    chakra,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
} from "@chakra-ui/react";
const HoverInfo = () => {
    return (
        <Popover trigger="hover" placement="right" isLazy>
            <PopoverTrigger>
                <chakra.span
                    color="button1"
                    cursor="help"
                    onMouseOver={() => {}}
                >
                    xfasdas
                </chakra.span>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow bg="button1" />
                <PopoverBody>ll</PopoverBody>
            </PopoverContent>
        </Popover>
    );
};

export default HoverInfo;
