import { FaTachometerAlt } from "react-icons/fa";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { NumericFormat } from "react-number-format";

interface Props {
  odometer: number;
}

const Odometer = ({ odometer }: Props) => {
  return (
    <HStack>
      <Icon as={FaTachometerAlt} />
      <Text>
        <NumericFormat value={odometer} displayType={"text"} thousandSeparator={true} />
      </Text>
    </HStack>
  );
};

export default Odometer;
