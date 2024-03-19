import { useQuery } from "@tanstack/react-query";

const API_KEY = "d0b7abc2b79441ef8e993054241303";
const WEATHER_LANGUAGE = "de";

const fetchData = async () => {
  return fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&lang=${WEATHER_LANGUAGE}&q=Berlin`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => ({
      celcius: data.current.temp_c,
      condition: data.current.condition.text,
    }))
    .catch((error) =>
      console.error("There was a problem with the fetch operation:", error)
    );
};

const Weather = () => {
  const {
    isLoading,
    isError,
    data: weather,
    error,
  } = useQuery({
    queryKey: ["weather"],
    queryFn: fetchData,
    refetchInterval: 30000,
  });

  return isLoading ? (
    <div>Loading...</div>
  ) : isError ? (
    <div>Error: {error.message}</div>
  ) : (
    <div>
      <h1>Weather</h1>
      <p>{weather.celcius}°C</p>
      <p>{weather.condition}</p>
    </div>
  );
};

export default Weather;
