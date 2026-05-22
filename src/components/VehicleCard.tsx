import mackTruck from "../assets/Mack Truck.png";
import { Vehicle } from "../web-services/vehicles";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Icon,
  Image,
  Progress,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import Odometer from "./Odometer";
import { FaWrench } from "react-icons/fa";
import MaintenanceHistory from "./MaintenanceHistory";
import { MouseEvent } from "react";
import { boxStyle } from "../styles/styles";

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
          <Flex>
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
              color="yellow.100"
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
