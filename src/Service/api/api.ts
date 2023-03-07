import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.1.2:8080/",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNjc4MTM0OTQ3LCJleHAiOjE2Nzg5OTg5NDd9.xnrMV8nUDvIAaE752ImRGKeBhR2kvwxpt1WeTGcVTNGYZM2phTLFV04ygRl_f7-2N50p9qDWZQ5SdDzq4Of3Kg",
  },
});
