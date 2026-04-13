import React, { useEffect, useState } from "react";
import { CanceledError } from "../web-services/api-client";
import { Spinner, Text } from "@chakra-ui/react";
import VehiclesServices, { Vehicle } from "../web-services/vehicles-services";

//interface Vehicle {
//VehicleID: string;
//odometer: number;
//}

//interface Vehicles extends Array<Vehicle> {}

const VehiclesGrid = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //GET ALL VEHICLES
  useEffect(() => {
    //const controller = new AbortController();

    setIsLoading(true);

    const { request, cancel } = VehiclesServices.getAllVehicles();
    request
      .then((response) => {
        setVehicles(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => cancel();
  }, []);

  //DELETE VEHICLE
  useEffect(() => {
    const vehicle = "P-XX1";
    VehiclesServices.deleteVehicle(vehicle).catch((err) => {
      setError(err.message);
    });
  }, []);

  //ADD VEHICLE
  useEffect(() => {
    const vehicle = {
      VehicleID: "p-xx1",
      UA: 800,
    };
    VehiclesServices.addVehicle(vehicle)
      .then((response) => {
        setError("vehicle added");
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  //UPDATE VEHICLE
  useEffect(() => {
    const vehicleId = "P-XX1";
    const vehicle = {
      UA: 1000,
    };
    VehiclesServices.updateVehicle(vehicleId, vehicle)
      .then((response) => {
        setError("vehicle updated");
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

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
