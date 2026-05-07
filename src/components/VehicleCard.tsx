import mackTruck from "../assets/Mack Truck.png";
import { Vehicle } from "../web-services/vehicles";
import { Card, CardBody, Heading, Icon, Image, useDisclosure, useToast } from "@chakra-ui/react";
import Odometer from "./Odometer";
import { FaWrench } from "react-icons/fa";
import MaintenanceHistory from "./MaintenanceHistory";
import { MouseEvent } from "react";

interface Props {
  vehicle: Vehicle;
  startDate: string;
  endDate: string;
}

const VehicleCard = ({ vehicle, startDate, endDate }: Props) => {
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
      <Card borderRadius={10} overflow="hidden" backgroundColor={"green.500"}>
        <Image src={mackTruck} backgroundColor={"white"} />
        <CardBody>
          <Heading fontSize="2xl">{vehicle.VehicleID}</Heading>
          <Odometer odometer={vehicle.odometer} />
          <Icon
            as={FaWrench}
            _hover={{ cursor: "pointer" }}
            onClick={(event) => {
              handleClick(event);
            }}
          />
        </CardBody>
      </Card>
      {isOpen && (
        <MaintenanceHistory isOpen={isOpen} onClose={onClose} vehicleId={vehicle.VehicleID} startDate={startDate} endDate={endDate} />
      )}
    </>
  );
};

export default VehicleCard;
