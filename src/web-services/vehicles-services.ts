//EREASE THIS FILE, FOR LEARNING PURPOSES ONLY
import apiClient, { CanceledError } from "./api-client";

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

class VehiclesServices {
  getAllVehicles() {
    const controller = new AbortController();
    const request = apiClient.get<Vehicle[]>("vehicles", { signal: controller.signal });
    return { request, cancel: () => controller.abort() };
  }

  deleteVehicle(id: string) {
    return apiClient.delete("vehicles/" + id);
  }

  addVehicle(vehicle: NewVehicle) {
    return apiClient.post("vehicles/", vehicle);
  }

  updateVehicle(id: string, vehicle: UpdatedVehicle) {
    return apiClient.put("vehicles/" + id, vehicle);
  }
}

export default new VehiclesServices();
