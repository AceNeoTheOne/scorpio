import { useEffect, useState } from "react";
import { CanceledError } from "../web-services/api-client";
import ExpensesServices, { Parameters, Expenses } from "../web-services/expenses";

const useExpenses = (parameters: Parameters) => {
  const [expenses, setExpenses] = useState<Expenses[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    //GET USER
    const { request, cancel } = ExpensesServices.postSelect<Parameters, Expenses>(parameters);
    request
      .then((response) => {
        setExpenses(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => cancel();
  }, []);

  return { expenses, error, isLoading, setExpenses, setError, setIsLoading };
};
export default useExpenses;
