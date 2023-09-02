import "./weatherCard.scss";

interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface IWind {
  speed: number;
  deg: number;
}

interface ISys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface WeatherCardPros {
  weather?: IWeather[];
  main?: IMain;
  wind?: IWind;
  sys?: ISys;
  visibility?: number;
}

export default function WeatherCard({
  weather,
  main,
  wind,
  sys,
  visibility,
}: WeatherCardPros) {
  return (
    <div className='card-container'>
      <div className='card-section'>LOGO</div>
      <div className='card-section'>
        <ul>
          {main?.feels_like && <li>Real feel: {main.feels_like} </li>}
          {main?.humidity && <li>Humidity: {main.humidity} </li>}
          {main?.temp_min && <li>Temp Min: {main.temp_min} </li>}
          {main?.temp_max && <li>Temp Max: {main.temp_max} </li>}
          {main?.pressure && <li>Pressure: {main.pressure} </li>}
          {visibility && <li>Visibilty: {visibility} </li>}
          {wind?.speed && <li>Wind Speed: {wind.speed}</li>}
        </ul>
      </div>
    </div>
  );
}
