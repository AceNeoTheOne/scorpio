import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useVehicles from "../hooks/useVehicles";
import VehicleCard from "./VehicleCard";
import VehicleCardSkeleton from "./VehicleCardSkeleton";

interface Props {
  startDate: string;
  endDate: string;
}

const VehiclesGrid = (props: Props) => {
  const { vehicles, error, isLoading, setVehicles, setError, setIsLoading } = useVehicles();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <>
      {error && <Text>{error}</Text>}
      {/* {isLoading && <Spinner />} */}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding="10px" spacing={10}>
        {isLoading && skeletons.map((skeleton) => <VehicleCardSkeleton key={skeleton} />)}

        {vehicles.map((unit) => (
          <VehicleCard key={unit.VehicleID} vehicle={unit} {...props} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default VehiclesGrid;
