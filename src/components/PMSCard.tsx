import mackTruck from "../assets/Mack Truck.png";
import { Vehicle } from "../web-services/vehicles";
import { Box, Card, CardBody, Flex, Heading, Image, Progress, Skeleton, Spacer, Text, useColorModeValue } from "@chakra-ui/react";
import Odometer from "./Odometer";
import usePMS from "../hooks/usePMS";
import { boxStyle } from "../styles/styles";

interface Props {
  vehicle: Vehicle;
}

const PMSCard = ({ vehicle }: Props) => {
  const bgColor = useColorModeValue("green.200", "green.500");

  const skeletons = [1, 2, 3, 4, 5, 6];

  const { pms, error, isLoading, setPms, setError, setIsLoading } = usePMS(vehicle);

  return (
    <>
      <Card borderRadius={10} overflow="hidden" bg={bgColor}>
        <Image src={mackTruck} backgroundColor={"white"} />
        <CardBody>
          <Flex align="center" mb={4}>
            <Heading fontSize="2xl">{vehicle.VehicleID}</Heading>
            <Spacer />
            <Odometer odometer={vehicle.odometer} />
          </Flex>

          {isLoading && skeletons.map((skeleton) => <Skeleton key={skeleton} height="15px" margin={2} />)}
          {pms.map((pm) => (
            <>
              <Text textTransform="uppercase" fontSize="14px" as="b">
                {pm.DESCRIP}
              </Text>

              <Box sx={boxStyle} overflow="hidden">
                <Progress key={pm.DESCRIP} colorScheme="cyan" size="sm" value={pm.DUE_PERC > 0 ? pm.DUE_PERC : 0} />
              </Box>
            </>
          ))}
        </CardBody>
      </Card>
    </>
  );
};

export default PMSCard;
