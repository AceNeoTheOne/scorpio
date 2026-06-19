import create from "./http-services";

export interface Parameters {
  VehicleID: string;
  vcSTART_DATE: string;
  vcEND_DATE: string;
}

export interface Miles_x_Int {
  VehicleID: string;
  FIRS_READING: number;
  LAST_READING: number;
  MILES: number;
}

//ENDPOINT DEFINITION
export default create("vehicles/milesxint");
