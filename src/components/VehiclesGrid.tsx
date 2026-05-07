import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useVehicles from "../hooks/useVehicles";
import VehicleCard from "./VehicleCard";

interface Props {
  startDate: string;
  endDate: string;
}

const VehiclesGrid = (props: Props) => {
  const { vehicles, error, isLoading, setVehicles, setError, setIsLoading } = useVehicles();

  return (
    <>
      {error && <Text>{error}</Text>}
      {isLoading && <Spinner />}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding="10px" spacing={10}>
        {vehicles.map((unit) => (
          <VehicleCard key={unit.VehicleID} vehicle={unit} {...props} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default VehiclesGrid;
