import { useEffect, useState } from "react";

const API_KEY = "d0b7abc2b79441ef8e993054241303";
const WEATHER_LANGUAGE = "de";

const Weather = () => {
  const [weather, setWeather] = useState({
    celcius: 0,
    condition: "",
  });

  function fetchData() {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&lang=${WEATHER_LANGUAGE}&q=Berlin`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) =>
        setWeather({
          celcius: data.current.temp_c,
          condition: data.current.condition.text,
        })
      )
      .catch((error) =>
        console.error("There was a problem with the fetch operation:", error)
      );
  }

  useEffect(() => {
    fetchData();
    setInterval(() => {
      fetchData();
      console.log("fetching data");
    }, 30000);
  }, []);

  return <div> {weather.celcius + weather.condition}</div>;
};

export default Weather;
