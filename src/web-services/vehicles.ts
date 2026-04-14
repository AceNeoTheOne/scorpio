import create from "./http-services";

export interface Vehicle {
  VehicleID: string;
  odometer: number;
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
