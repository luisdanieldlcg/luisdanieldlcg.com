import { Text } from "@chakra-ui/react";
import { nameAlt } from "../../config.json";

const Footer = () => {
    return (
        <div>
            <footer>
                <Text textAlign="center" fontSize="sm" color="gray.500" mt="10">
                    Handcrafted by {nameAlt} © 2024.
                </Text>
            </footer>
        </div>
    );
};

export default Footer;
