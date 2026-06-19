import mackTruck from "../assets/Mack Truck.png";
import { Vehicle } from "../web-services/vehicles";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Progress,
  Spacer,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import Odometer from "./Odometer";
import { FaWrench, FaUser } from "react-icons/fa";
import MaintenanceHistory from "./MaintenanceHistory";
import { MouseEvent } from "react";
import { boxStyle } from "../styles/styles";
import useMiles_x_Int from "../hooks/useMiles_x_Int";
import Miles_x_Int from "./Milex_x_Int";

interface Props {
  vehicle: Vehicle;
  startDate: string;
  endDate: string;
}

const VehicleCard = ({ vehicle, startDate, endDate }: Props) => {
  const bgColor = useColorModeValue("green.200", "green.500");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  const handleClick = (mseEvent: MouseEvent) => {
    const d1 = new Date(startDate);
    const d2 = new Date(endDate);
    if (d1 > d2) {
      toast({
        title: "Warning.",
        description: "Start date is later than end date.",
        status: "warning",
        duration: 6000,
        isClosable: true,
      });
      return;
    }
    onOpen();
  };

  const parameters = {
    VehicleID: vehicle.VehicleID,
    vcSTART_DATE: startDate + " 00:00:00",
    vcEND_DATE: endDate + " 23:59:59",
  };
  const { miles_x_int, error, isLoading, setMiles_x_int, setError, setIsLoading } = useMiles_x_Int(parameters);

  return (
    <>
      <Card borderRadius={10} overflow="hidden" bg={bgColor}>
        <Image objectFit="cover" src={mackTruck} backgroundColor={"white"} />
        <CardBody>
          <Flex align="center" mb={2}>
            <Heading fontSize="2xl">{vehicle.VehicleID}</Heading>
            <Spacer />
            <Odometer odometer={vehicle.odometer} />
          </Flex>

          <hr
            style={{
              backgroundColor: "rgb(255, 255, 255)",
              height: "1px",
            }}
          />

          <Flex mt={2}>
            {miles_x_int.map((vehicle_miles) => (
              <Miles_x_Int key={vehicle_miles.VehicleID} miles={vehicle_miles.MILES} />
            ))}
          </Flex>

          <HStack>
            {vehicle.driver1 && <Icon as={FaUser} />}
            <Text>{vehicle.driver1}</Text>
            <Spacer />
            {vehicle.driver2 && <Icon as={FaUser} />}
            <Text>{vehicle.driver2}</Text>
          </HStack>

          <Flex mt={2}></Flex>

          <hr
            style={{
              backgroundColor: "rgb(255, 255, 255)",
              height: "1px",
            }}
          />

          <Flex mt={4}>
            <Text fontSize="14px" as="b">
              FUEL LEVEL
            </Text>
            <Spacer />
            <Icon
              as={FaWrench}
              _hover={{ cursor: "pointer" }}
              onClick={(event) => {
                handleClick(event);
              }}
              /* color="yellow.100" */
              boxSize={5}
            />
          </Flex>
          <Box sx={boxStyle} overflow="hidden">
            <Progress colorScheme="blue" size="sm" value={vehicle.tankCurrentPercentFull} />
          </Box>
        </CardBody>
      </Card>
      {isOpen && (
        <MaintenanceHistory isOpen={isOpen} onClose={onClose} vehicleId={vehicle.VehicleID} startDate={startDate} endDate={endDate} />
      )}
    </>
  );
};

export default VehicleCard;
