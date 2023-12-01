import axios from "axios";

export const instance = axios.create({
  baseURL: "https://vocab-builder-backend.p.goit.global/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthHeader = (token) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  instance.defaults.headers.common["Authorization"] = ``;
};
