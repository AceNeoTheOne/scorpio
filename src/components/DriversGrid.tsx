import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useDrivers from "../hooks/drivers/useDrivers";
import DriverCard from "./DriverCard";
import VehicleCardSkeleton from "./VehicleCardSkeleton";
import useTitle from "../hooks/useTitle";

interface Props {
  startDate: string;
  endDate: string;
}

const DriversGrid = (props: Props) => {
  useTitle("React - Company Drivers");

  const { drivers, error, isLoading, setDrivers, setError, setIsLoading } = useDrivers();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <>
      {error && <Text>{error}</Text>}
      {/* {isLoading && <Spinner />} */}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding="10px" spacing={10}>
        {isLoading && skeletons.map((skeleton) => <VehicleCardSkeleton key={skeleton} />)}

        {drivers.map((driver) => (
          <DriverCard key={driver.DriverId} driver={driver} {...props} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default DriversGrid;
