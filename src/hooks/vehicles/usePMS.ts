import { useEffect, useState } from "react";
import { CanceledError } from "../../web-services/api-client";
import PMSServices, { PMS } from "../../web-services/vehicles/pms";
import { Vehicle } from "../../web-services/vehicles/vehicles";

const usePMS = (vehicle: Vehicle) => {
  const [pms, setPms] = useState<PMS[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    //GET ALL VEHICLES
    const { request, cancel } = PMSServices.getSelect<PMS>(vehicle.VehicleID);
    request
      .then((response) => {
        setPms(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => cancel();
  }, []);

  return { pms, error, isLoading, setPms, setError, setIsLoading };
};
export default usePMS;
