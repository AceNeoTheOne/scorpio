import create from "../http-services";

export interface Driver {
  DriverId: string;
  LastName: string;
  FirstName: string;
}

//ENDPOINT DEFINITION
export default create("drivers");
