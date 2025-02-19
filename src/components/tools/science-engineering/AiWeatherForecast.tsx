import React, { useState } from "react";
import axios from "axios";

export default function AiWeatherForecast() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeather API key
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      alert("Error fetching weather data");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">AI Weather Forecast</h2>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border p-2 w-full rounded"
      />
      <button
        onClick={fetchWeather}
        className="mt-2 p-2 bg-blue-500 text-white rounded w-full"
      >
        Get Weather
      </button>
      {weather && (
        <div className="mt-4 p-4 bg-white rounded shadow">
          <h3 className="text-lg font-semibold">
            {weather.name}, {weather.sys.country}
          </h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}
