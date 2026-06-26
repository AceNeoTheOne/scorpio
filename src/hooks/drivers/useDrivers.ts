import { useEffect, useState } from "react";
import { CanceledError } from "../../web-services/api-client";
import DriversServices, { Driver } from "../../web-services/drivers/drivers";

const useDrivers = () => {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    //GET ALL DRIVERS
    const { request, cancel } = DriversServices.getSelectAll<Driver>();
    request
      .then((response) => {
        setDrivers(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => cancel();
  }, []);

  return { drivers, error, isLoading, setDrivers, setError, setIsLoading };
};
export default useDrivers;
