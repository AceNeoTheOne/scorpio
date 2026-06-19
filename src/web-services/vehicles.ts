import create from "./http-services";

export interface Vehicle {
  VehicleID: string;
  odometer: number;
  tankCurrentPercentFull: number;
  driver1: string;
  driver2: string;
  ignitionStatus: string;
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
