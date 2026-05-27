import mackTruck from "../assets/Mack Truck.png";
import { Card, CardBody, Image, Skeleton, SkeletonText } from "@chakra-ui/react";

const VehicleCardSkeleton = () => {
  return (
    <Card borderRadius={10} backgroundColor={"green.500"}>
      <Skeleton>
        <Image objectFit="cover" src={mackTruck} />
      </Skeleton>
      <CardBody>
        <SkeletonText noOfLines={4} skeletonHeight="15px" />
      </CardBody>
    </Card>
  );
};

export default VehicleCardSkeleton;
