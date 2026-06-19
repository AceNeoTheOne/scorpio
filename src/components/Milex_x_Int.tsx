import { FaArrowsAltH } from "react-icons/fa";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { NumericFormat } from "react-number-format";

interface Props {
  miles: number;
}

const Miles_x_Int = ({ miles }: Props) => {
  return (
    <HStack>
      <Icon as={FaArrowsAltH} />
      <Text>
        <NumericFormat value={miles} displayType={"text"} thousandSeparator={true} />
      </Text>
    </HStack>
  );
};

export default Miles_x_Int;
