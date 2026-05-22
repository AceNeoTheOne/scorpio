import apiClient, { CanceledError } from "./api-client";

//interface Entity {
//id: string;
//}

class HttpServices {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getSelectAll<T>() {
    const controller = new AbortController();
    const request = apiClient.get<T[]>(this.endpoint, { signal: controller.signal });
    return { request, cancel: () => controller.abort() };
  }

  getSelect<T>(id: string) {
    const controller = new AbortController();
    const request = apiClient.get<T[]>(this.endpoint + "/" + id, { signal: controller.signal });
    return { request, cancel: () => controller.abort() };
  }

  postSelect<T, R>(entity: T) {
    const controller = new AbortController();
    const request = apiClient.post<R[]>(this.endpoint, entity, { signal: controller.signal });
    return { request, cancel: () => controller.abort() };
  }

  deleteDelete(id: string) {
    return apiClient.delete(this.endpoint + "/" + id);
  }

  postInsert<T>(entity: T) {
    return apiClient.post(this.endpoint + "/", entity);
  }

  //putUpdate<T extends Entity>(entity: T) {
  putUpdate<T>(entity: T, conditions: string) {
    return apiClient.put(this.endpoint + "/" + conditions, entity);
  }
}

const create = (endpoint: string) => new HttpServices(endpoint);

export default create;
