import create from "./http-services";

export interface Parameters {
  VehicleID: string;
  vcSTART_DATE: string;
  vcEND_DATE: string;
}

export interface Expenses {
  VehicleID: string;
  ORDERNUM: string;
  CLOSED: string;
  STATUS: string;
  VENDORID: string;
  LINEID: number;
  DESCRIP: string;
  PARTNUMBER: string;
  LINETYPE: string;
  LINETOTAL: number;
}

//ENDPOINT DEFINITION
export default create("expenses");
