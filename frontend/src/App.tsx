import React from "react";
import SearchInput from "./components/SearchInput/SearchInput";
import "./app.scss";
import LocationTag from "./components/LocationTag/LocationTag";
import UpperBar from "./components/UpperBar/UpperBar";
import WeatherCard from "./components/WeatherCard/WeatherCard";

function App() {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return console.log("Changed");
  };
  return (
    <div className='app-container'>
      <div className='section-big'>
        <UpperBar />
        <LocationTag />
        <h1 className='section__header'>Weather Wise</h1>
        <SearchInput onChange={handleOnChange} />
      </div>
      <div className='section-small'>
        <p className='section__name'>Today</p>
        <WeatherCard />
      </div>
    </div>
  );
}

export default App;
