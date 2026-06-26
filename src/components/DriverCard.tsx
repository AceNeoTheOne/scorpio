import driverPlaceholder from "../assets/Driver Placeholder.png";
import { Driver } from "../web-services/drivers/drivers";
import {
  Card,
  CardBody,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Skeleton,
  Spacer,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { FaWrench, FaUser, FaTachometerAlt, FaKey, FaStopwatch, FaLocationArrow, FaStop } from "react-icons/fa";
import MaintenanceHistory from "./MaintenanceHistory";
import { MouseEvent } from "react";
import useMiles_x_Int from "../hooks/drivers/useMiles_x_Int";
import Miles_x_Int from "./Milex_x_Int";

interface Props {
  driver: Driver;
  startDate: string;
  endDate: string;
}

const DriverCard = ({ driver, startDate, endDate }: Props) => {
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
    DriverId: driver.DriverId,
    vcSTART_DATE: startDate + " 00:00:00",
    vcEND_DATE: endDate + " 23:59:59",
  };
  const skeletons = [1];
  const { miles_x_int, error, isLoading, setMiles_x_int, setError, setIsLoading } = useMiles_x_Int(parameters);

  return (
    <>
      <Card borderRadius={10} overflow="hidden" bg={bgColor}>
        <Image objectFit="cover" src={driverPlaceholder} backgroundColor={"white"} />
        <CardBody>
          <Flex align="center">
            <Heading fontSize="2xl">{driver.DriverId}</Heading>
            <Spacer />
          </Flex>
          <Text mb={2}>{driver.FirstName + " " + driver.LastName}</Text>
          <hr
            style={{
              backgroundColor: "rgb(255, 255, 255)",
              height: "1px",
            }}
          />
          {isLoading && skeletons.map((skeleton) => <Skeleton key={skeleton} height="13px" mt={3.5} />)}
          <Flex mt={2}>
            {miles_x_int.map((driver_miles) => (
              <Miles_x_Int key={driver_miles.DriverId} miles={driver_miles.MILES} />
            ))}
          </Flex>
          <Flex mt={2}></Flex>
          <hr
            style={{
              backgroundColor: "rgb(255, 255, 255)",
              height: "1px",
            }}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default DriverCard;
