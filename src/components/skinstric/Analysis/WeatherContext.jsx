import React, { createContext, useContext, useState, useEffect } from "react";

const WeatherContext = createContext();

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState({
    location: "Melbourne",
    temperature: "22°C",
    condition: "Sunny",
    humidity: "45%",
    uvIndex: 6,
  });

  useEffect(() => {
  }, []);

  return (
    <WeatherContext.Provider value={weather}>
      {children}
    </WeatherContext.Provider>
  );
};