import create from "../http-services";

export interface Vehicle {
  VehicleID: string;
  odometer: number;
  ignitionStatus: string;
  speed: number;
  OMN_driver1: string;
  OMN_driver2: string;
  Hours_In_Spot: number;
  geo_ref2: string;
  tankCurrentPercentFull: number;
}

interface NewVehicle {
  VehicleID: string;
  UA: number;
}

interface UpdatedVehicle {
  UA: number;
}

//ENDPOINT DEFINITION
export default create("vehicles");
