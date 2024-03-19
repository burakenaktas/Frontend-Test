import { CardBody, CardContainer, CardItem } from "../utils/components/3DCard";
import { useQuery } from "@tanstack/react-query";

const API_KEY = "d0b7abc2b79441ef8e993054241303";
const WEATHER_LANGUAGE = "de";

export function WeatherCard({ location }) {
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
    <CardContainer className="inter-var mx-4 lg:mx-0">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border ">
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          <>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {weather?.condition}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Es ist {weather?.celcius}°C in{" "}
              {localStorage.getItem("location") || "Berlin"}
            </CardItem>

            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </>
        )}
      </CardBody>
    </CardContainer>
  );
}
