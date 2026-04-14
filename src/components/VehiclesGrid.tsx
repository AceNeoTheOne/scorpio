import React, { useEffect, useState } from "react";
import { CanceledError } from "../web-services/api-client";
import { Spinner, Text } from "@chakra-ui/react";
import VehiclesServices, { Vehicle } from "../web-services/vehicles";
import useVehicles from "../hooks/useVehicles";

const VehiclesGrid = () => {
  const { vehicles, error, isLoading, setVehicles, setError, setIsLoading } = useVehicles();

  return (
    <>
      {error && <Text>{error}</Text>}
      {isLoading && <Spinner />}
      <ul>
        {vehicles.map((unit) => (
          <li key={unit.VehicleID}>{unit.VehicleID}</li>
        ))}
      </ul>
    </>
  );
};

export default VehiclesGrid;
