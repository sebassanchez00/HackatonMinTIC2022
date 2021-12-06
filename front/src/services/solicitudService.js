import httpClient from "./httpClient";

const END_POINT = '/api/solicitudes'

const getSolicitudes = () => httpClient.get(END_POINT)

export {
  getSolicitudes
}