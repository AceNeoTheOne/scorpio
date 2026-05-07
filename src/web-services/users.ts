import create from "./http-services";

export interface User {
  vcUSER: string;
  vcPASSWORD: string;
}

export interface LoginStatus {
  loginStatus: boolean;
}

//ENDPOINT DEFINITION
export default create("users");
