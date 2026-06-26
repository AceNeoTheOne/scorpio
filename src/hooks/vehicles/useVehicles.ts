import { useEffect, useState } from "react";
import { CanceledError } from "../../web-services/api-client";
import VehiclesServices, { Vehicle } from "../../web-services/vehicles/vehicles";

const useVehicles = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    //GET ALL VEHICLES
    const { request, cancel } = VehiclesServices.getSelectAll<Vehicle>();
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

    //DELETE VEHICLE
    //const vehicleID = "P-XX1";
    //VehiclesServices.deleteDelete(vehicleID).catch((err) => {
    //setError(err.message);
    //});

    //ADD VEHICLE
    //const newVehicle = {
    //VehicleID: "p-xx1",
    //UA: 800,
    //};
    //VehiclesServices.postInsert(newVehicle)
    //.then((response) => {
    //setError("vehicle added");
    //})
    //.catch((err) => {
    //setError(err.message);
    //});

    //UPDATE VEHICLE
    //const conditions = "P-XX1";
    //const vehicleData = {
    //UA: 1000,
    //};
    //VehiclesServices.putUpdate(vehicleData, conditions)
    //.then((response) => {
    //setError("vehicle updated");
    //})
    //.catch((err) => {
    //setError(err.message);
    //});

    return () => cancel();
  }, []);

  return { vehicles, error, isLoading, setVehicles, setError, setIsLoading };
};
export default useVehicles;
