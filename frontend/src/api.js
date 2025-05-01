import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000",
});

export const getItinerary = (id) => API.get(`/itinerary/${id}`);
export const createItinerary = (data) => API.post("/itinerary", data);
export const getRecommendation = (nights) => API.get(`/recommend/${nights}`);
