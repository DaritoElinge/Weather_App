export default function WeatherCard({ data }) {
  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.weather[0].description}</p>
      <p>Temperatura: {data.main.temp}°C</p>
      <p>Humedad: {data.main.humidity}%</p>
    </div>
  );
}
