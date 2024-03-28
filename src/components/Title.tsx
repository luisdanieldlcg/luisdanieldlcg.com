import { Heading } from "@chakra-ui/react";

interface Props {
    title: string;
    gradient?: boolean;
}
const Title = ({ title, gradient }: Props) => {
    return (
        <Heading
            fontSize={{
                base: "1.6rem",
                md: "3.5rem",
            }}
            fontFamily="Inter"
            color="#cba6f7"
            bgGradient={gradient ? "linear(to-l, #c6a0f6, #e4adbc)" : ""}
            bgClip={gradient ? "text" : ""}
        >
            {title}
        </Heading>
    );
};

export default Title;
