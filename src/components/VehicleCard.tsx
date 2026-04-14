import mackTruck from "../assets/Mack Truck.png";
import { Vehicle } from "../web-services/vehicles";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  vehicle: Vehicle;
}

const VehicleCard = ({ vehicle }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden" backgroundColor={"gray"}>
      <Image src={mackTruck} />
      <CardBody>
        <Heading fontSize="2xl">{vehicle.VehicleID}</Heading>
      </CardBody>
    </Card>
  );
};

export default VehicleCard;
