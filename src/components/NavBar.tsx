import { Flex, useColorModeValue, Box, Image, Spacer, Text } from "@chakra-ui/react";
import logo from "../assets/ITL Logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  return (
    <Box borderWidth="2px" borderRadius="lg" margin="10px" bg={bgColor}>
      <Flex align="center" padding="5px 15px 5px 15px">
        <Image src={logo} boxSize="40px" objectFit="contain" marginRight={3} />
        <Text fontSize="lg" as="b">
          Scorpio
        </Text>
        <Spacer />
        <ColorModeSwitch />
      </Flex>
    </Box>
  );
};

export default NavBar;
