import { useEffect, useState } from "react";
import { CanceledError } from "../web-services/api-client";
import UsersServices, { User, LoginStatus } from "../web-services/users";

const useUsers = (user: User) => {
  const [loginStatus, setLoginStatus] = useState<LoginStatus[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    //GET USER
    const { request, cancel } = UsersServices.postSelect<User, LoginStatus>(user);
    request
      .then((response) => {
        setLoginStatus(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setLoginStatus([{ loginStatus: false }]);
        setError(err.message);
        setIsLoading(false);
      });

    return () => cancel();
  }, [user]);

  return { loginStatus, error, isLoading, setLoginStatus, setError, setIsLoading };
};
export default useUsers;
