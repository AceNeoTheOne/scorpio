import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const VehicleCardSkeleton = () => {
  return (
    <Card borderRadius={10} backgroundColor={"green.500"}>
      <Skeleton width="295px" height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default VehicleCardSkeleton;
