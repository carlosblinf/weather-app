import React, { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useWeather } from '../../contex/WeatherContext';
import useDebounce from '../../hooks/debounce';
import { City } from '../../util/types';

type FormValues = {
  search: string;
};

function Search() {
  const { addPlace } = useWeather();
  const [value, setValue] = useState('');
  const [textValue, setTextValue] = useState('');
  const [suggestionsCity, setSuggestionsCity] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState<City>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const debounceQuery = useDebounce(value, 350);

  const getCitySuggestions = async (text: string) => {
    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${text}`)
      .then((response) => response.json())
      .then((json) => setSuggestionsCity(json.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (debounceQuery) getCitySuggestions(debounceQuery);
  }, [debounceQuery]);

  useEffect(() => {
    if (selectedCity) setTextValue(`${selectedCity.name} ${selectedCity.admin1}, ${selectedCity.country}`);
  }, [selectedCity]);

  const onSubmit = () => {
    console.log(selectedCity);
    // addPlace(data.search);
    setTextValue('');
    setValue('');
  };

  const handleOnClick = (city: City) => {
    setSelectedCity(city);
    setSuggestionsCity([]);
  };

  return (
    <div className="p-2">
      <form className="flex gap-2 md:gap-10 flex-wrap justify-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="text-center w-full relative">
          <input
            type="text"
            {...register('search', { required: 'Is required, please enter a valid address' })}
            placeholder="Enter a city name"
            className="rounded-2xl px-4 h-[40px] w-full md:w-[350px] text-sm"
            onChange={(e) => setValue(e.target.value)}
            value={textValue || value}
          />
          {errors.search && <div className="mb-3 text-normal text-red-500 ">{errors.search.message}</div>}
          {suggestionsCity.length > 0 && (
            <ul className="bg-white border-[1px] rounded-lg shadow-lg p-4 absolute right-2 left-2 max-h-[200px] overflow-y-auto">
              {suggestionsCity.map((city) => (
                <li
                  key={city.id}
                  className="min-h10 w-full border-b-[1px] border-solid border-l-gray-300 py-2"
                  onClick={() => handleOnClick(city)}
                >
                  {`${city.name} ${city.admin1}, ${city.country} (${city.latitude}° E ${city.longitude}° N)`}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button type="submit" className="border-none rounded-3xl px-4 h-[40px] w-[180px] bg-bgBlue text-white text-sm">
          search
        </button>
      </form>
    </div>
  );
}

export default Search;
