import { useEffect, useState } from "react";
import Search from "./Search";

export default function WheatherApp() {
  const [searchCity, setSearchCity] = useState('motihari');
  const [wheatherData, setWheatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_Key = `461785f112b159407e1b96e853fa442c`;

  async function fetchWheatherApi(cityName) {
      setLoading(true);
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_Key}`
      );

      console.log(response);

      if(!response.ok) throw response.statusText;

      let result = await response.json();
      setWheatherData(result);
      setLoading(false);
    } catch (err) {

      setError(`Some error like ${err}`);
    }
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    fetchWheatherApi(searchCity);
    setSearchCity("");
  }

  useEffect(() => {
    fetchWheatherApi(searchCity);
  }, []);

  return (
    <div className="container">
      <h1>Wheather App</h1>
      <Search
        searchCity={searchCity}
        setSearchInput={setSearchCity}
        handleSubmit={handleSubmit}
      />
      {error ? (
        <p>{error}</p>
      ) : loading ? (
        <p>Data is loading........Please Wait..!</p>
      ) : (
        wheatherData && (
          <div className="wheather-content">
            <img
              src={`https://openweathermap.org/img/wn/${wheatherData.weather[0].icon}@2x.png`}
              alt=""
            />
            <h2 className="city-name">{wheatherData.name}</h2>
            <p className="temp">{wheatherData.main.temp} </p>
            <p className="description">{wheatherData.weather[0].description}</p>
            <div className="wheather-info">
              <div className="col-1">
                <p className="wind">Wind Speed</p>
                <span>{wheatherData.wind.speed}</span>
              </div>
              <div className="col-1">
                <div className="humidity">Humidiy</div>
                <span>{wheatherData.main.humidity}</span>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
