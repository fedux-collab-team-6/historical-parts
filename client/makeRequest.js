import axios from "axios";

// const apiUrl =
//   import.meta.env.MODE === "server"
//     ? import.meta.env.VITE_API_URL
//     : import.meta.env.VITE_API_URL_PROD;

const apurl = import.meta.env.PROD
  ? import.meta.env.VITE_API_URL_PROD
  : import.meta.env.VITE_API_URL;

export const makeRequest = axios.create({
  baseURL: apurl,
  headers: {
    Authorization: "bearer " + import.meta.env.VITE_API_TOKEN,
  },
});
