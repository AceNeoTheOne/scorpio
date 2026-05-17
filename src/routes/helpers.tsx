import { useCookies } from "react-cookie";

export const getCookie = (name: string): string | undefined => {
  const [cookies] = useCookies([name]);
  if (cookies[name]) return cookies[name];
  //const value = `; ${document.cookie}`;
  //const parts = value.split(`; ${name}=`);
  //if (parts.length === 2) {
  //return parts.pop()?.split(";").shift();
  //}
  return undefined;
};
