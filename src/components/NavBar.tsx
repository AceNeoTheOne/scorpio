import { Flex, useColorModeValue, Box, Image, Spacer, Text, Button } from "@chakra-ui/react";
import logo from "../assets/ITL Logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import DatePicker from "./DatePicker";
import { lightStyle, darkStyle, boxStyle } from "../styles/styles";

interface Props {
  onStartValueChange: (dateValue: string) => void;
  onEndValueChange: (dateValue: string) => void;
  onRefresh: () => void;
}

const NavBar = (props: Props) => {
  const bgColor = useColorModeValue(lightStyle, darkStyle);

  return (
    <Box sx={boxStyle} background={bgColor}>
      <Flex align="center" padding="5px 15px 5px 15px">
        <Image src={logo} boxSize="40px" objectFit="contain" marginRight={3} />
        <Text fontSize="lg" as="b">
          React
        </Text>
        <Spacer />
        <DatePicker {...props} labelValue="Start Date" />
        <DatePicker {...props} labelValue="End Date" />
        <Button
          fontSize="16px"
          marginRight={3}
          onClick={(event) => {
            props.onRefresh();
          }}
        >
          Refresh
        </Button>
        <ColorModeSwitch />
      </Flex>
    </Box>
  );
};

export default NavBar;
