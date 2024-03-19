import { useState } from "react";
import { CardBody, CardContainer, CardItem } from "../utils/components/3DCard";
import { useQuery } from "@tanstack/react-query";

const API_KEY = "d0b7abc2b79441ef8e993054241303";
const WEATHER_LANGUAGE = "de";

export function WeatherCard({ location }) {
  const [fakeError, setFakeError] = useState(true);

  const fetchData = async () => {
    return fetch(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&lang=${WEATHER_LANGUAGE}&q=${location}`
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
        icon: data.current.condition.icon,
      }))
      .catch((error) =>
        console.error("There was a problem with the fetch operation:", error)
      );
  };

  const {
    isLoading,
    isError,
    data: weather,
    error,
  } = useQuery({
    queryKey: ["weather", location],
    queryFn: fetchData,
    refetchInterval: 30000,
    enabled: !!location,
  });

  return (
    <CardContainer className="inter-var mx-4 w-full lg:mx-0">
      <CardBody className="bg-primary relative group/card border-black/[0.1] w-auto sm:w-full container h-auto rounded-xl p-6 border ">
        {isLoading ? (
          <div>Loading...</div>
        ) : fakeError ? (
          <CardItem>
            <div className="text-white">
              Leider können wir derzeit keine aktuelle Wettervorhersage von
              unseren Servern abrufen.{" "}
              <strong>
                Glücklicherweise ist das Wetter für die Unternehmen, mit denen
                wir zusammenarbeiten, immer schön.
              </strong>
              <button
                className="text-primary bg-white px-2 py-1 rounded-lg mt-6"
                onClick={() => setFakeError(false)}
              >
                Disable Fake Error (not included design)
              </button>
            </div>
          </CardItem>
        ) : (
          <>
            <CardItem
              translateZ="80"
              className="text-white text-left text-sm mt-2 flex flex-col items-center md:flex-row w-full justify-between"
            >
              <div className="flex items-center text-lg">
                <img src={weather?.icon || ""} alt="Weather API Weather Icon" />
                Es ist {weather?.celcius}°C und {weather?.condition} in&nbsp;
                <strong>{localStorage.getItem("location") || "Berlin"}</strong>
              </div>

              <strong>
                Wie auch immer das Wetter ist, es ist nicht besser als Ihnen und
                wärmer als Construktiv.
              </strong>
            </CardItem>
          </>
        )}
      </CardBody>
    </CardContainer>
  );
}
