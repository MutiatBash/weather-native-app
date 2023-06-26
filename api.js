import axios from "axios";
import { useState } from "react";
// import { apiKey } from "./const";

const apiKey = "0fce7d4a9b8846ef933132754232506 ";

const ForecastEndpoint = (params) =>
  `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.city}&days=${params.days}&aqi=no&alerts=no`;
const LocationEndpoint = (params) =>
  `http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.city}`;

//   To fetch data
const FetchData = async (endpoint) => {
  const options = {
    method: "GET",
    url: endpoint,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error message:", error);
  }
  // return response;
  // [];
};


// Weather data for cities
export const FetchLocationData = (params) => {
  return FetchData(LocationEndpoint(params));
};

// Weather Forecast for days
export const FetchForecastData = (params) => {
  return FetchData(ForecastEndpoint(params));
};
