import create from "../http-services";

export interface PMS {
  VehicleID: string;
  DESCRIP: string;
  DUE_PERC: number;
}

//ENDPOINT DEFINITION
export default create("pms");
