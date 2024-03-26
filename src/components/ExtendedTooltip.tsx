import { Tooltip } from "@chakra-ui/react";
import React from "react";

interface Props {
    children: React.ReactNode;
    // prevent lsp from complaining about unknown props
    [x: string]: any;
}

const ExtendedTooltip = ({ children, ...props }: Props) => {
    return (
        <Tooltip
            placement="right"
            closeOnClick={false}
            hasArrow
            bg="#e4adbd"
            ml={4}
            {...props}
        >
            {children}
        </Tooltip>
    );
};

export default ExtendedTooltip;
