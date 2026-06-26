import { useEffect, useState } from "react";
import { CanceledError } from "../../web-services/api-client";
import MilesServices, { Parameters, Miles_x_Int } from "../../web-services/drivers/miles_x_int";

const useMiles_x_Int = (parameters: Parameters) => {
  const [miles_x_int, setMiles_x_int] = useState<Miles_x_Int[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    //GET EXPENSES
    const { request, cancel } = MilesServices.postSelect<Parameters, Miles_x_Int>(parameters);
    request
      .then((response) => {
        setMiles_x_int(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => cancel();
  }, []);

  return { miles_x_int, error, isLoading, setMiles_x_int, setError, setIsLoading };
};
export default useMiles_x_Int;
