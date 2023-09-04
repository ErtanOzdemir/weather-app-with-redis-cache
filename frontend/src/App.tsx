import React, { useEffect, useMemo, useState } from "react";
import SearchInput from "./components/SearchInput/SearchInput";
import "./app.scss";
import LocationTag from "./components/LocationTag/LocationTag";
import UpperBar from "./components/UpperBar/UpperBar";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import axios from "axios";
import debounce from "lodash.debounce";
import CacheCard from "./components/CacheCard/CacheCard";

function App() {
  const [options, setOptions] = useState<any>([]);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedData, setSelectedData] = useState<any>(null);

  useEffect(() => {});

  const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e?.target;

    if (value) {
      const places = await axios.get(
        `${process.env.REACT_APP_API_URL}/locations?query=${value}`
      );
      setOptions(places?.data?.locations);
    }
  };

  const handleSelect = async (value: any) => {
    const weather = await axios.get(
      `${process.env.REACT_APP_API_URL}/weather?lat=${value.lat}&lon=${value.lon}`
    );

    setSelectedData(weather.data);
    setSelectedLocation(value.location);
  };

  const debouncedOnChange = useMemo(() => debounce(handleOnChange, 300), []);
  return (
    <div className='app-container'>
      <div className='section-big'>
        <UpperBar location={selectedLocation} />
        <LocationTag />
        <h1 className='section__header'>Weather Wise</h1>
        <SearchInput
          options={options.map((option: any) => ({
            label: `${option.name}, ${option.country}`,
            value: { lon: option.lon, lat: option.lat, location: option.name },
          }))}
          onChange={debouncedOnChange}
          onSelect={handleSelect}
        />
      </div>
      <div className='section-small'>
        {selectedData && (
          <>
            <p className='section__name'>Today</p>
            <WeatherCard
              main={selectedData.main}
              weather={selectedData.weather}
              dt={selectedData.dt}
              visibility={selectedData.visibility}
            />
            <p className='section__name'>Details</p>
            <CacheCard>
              <p
                className={`text ${
                  selectedData.isCache ? "text-green" : "text-red"
                }`}
              >
                {selectedData.isCache ? "From Cache" : "Not Cache"}
              </p>
            </CacheCard>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
