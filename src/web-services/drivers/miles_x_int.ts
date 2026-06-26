import create from "../http-services";

export interface Parameters {
  DriverId: string;
  vcSTART_DATE: string;
  vcEND_DATE: string;
}

export interface Miles_x_Int {
  DriverId: string;
  MILES: number;
}

//ENDPOINT DEFINITION
export default create("drivers/milesxint");
