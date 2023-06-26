import * as React from "react";
import { useState } from "react";

const WeatherContext = React.createContext();

export function WeatherProvider({ children }) {
  const [locations, setLocation] = useState([]);
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <WeatherContext.Provider
      value={{
        locations,
        setLocation,
        weather,
        setWeather,
        loading,
        setLoading,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
export default WeatherContext;
