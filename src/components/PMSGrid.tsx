import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useVehicles from "../hooks/useVehicles";
import VehicleCardSkeleton from "./VehicleCardSkeleton";
import PMSCard from "./PMSCard";
import useTitle from "../hooks/useTitle";

const PMSGrid = () => {
  useTitle("React - PM Supervision");

  const { vehicles, error, isLoading, setVehicles, setError, setIsLoading } = useVehicles();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding="10px" spacing={10}>
        {isLoading && skeletons.map((skeleton) => <VehicleCardSkeleton key={skeleton} />)}

        {vehicles.map((unit) => (
          <PMSCard key={unit.VehicleID} vehicle={unit} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default PMSGrid;
