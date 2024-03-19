const Weather = () => {
  return <div className="bg-primary w-full h-32"></div>;
};

export default Weather;
{
  isLoading ? (
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
}
