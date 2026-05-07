import { Badge, HStack, Icon, Text } from "@chakra-ui/react";
import { NumericFormat } from "react-number-format";
import { FaTachometerAlt } from "react-icons/fa";

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
