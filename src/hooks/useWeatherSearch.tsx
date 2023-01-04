import React, { useEffect, useState } from 'react';
import { useWeather } from '../contex/WeatherContext';
import { City } from '../util/types';
import useDebounce from './debounce';
import WeatherService from '../services/WeatherService';

function useWeatherSearch() {
  const { addPlace } = useWeather();
  const [value, setValue] = useState('');
  const [textValue, setTextValue] = useState('');
  const [suggestionsCity, setSuggestionsCity] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState<City>();

  const debounceQuery = useDebounce(value, 350);

  async function getCitySuggestions(text: string) {
    const results = await WeatherService.getCities(text);
    setSuggestionsCity(results);
  }

  useEffect(() => {
    if (debounceQuery && debounceQuery.length >= 3) getCitySuggestions(debounceQuery);
  }, [debounceQuery]);

  useEffect(() => {
    if (selectedCity) setTextValue(`${selectedCity.name} ${selectedCity.admin1}, ${selectedCity.country}`);
  }, [selectedCity]);

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleOnClick(city: City) {
    setSelectedCity(city);
    setSuggestionsCity([]);
  }

  function onSubmit() {
    if (selectedCity) addPlace(selectedCity);
    setTextValue('');
    setValue('');
  }
  return { value, textValue, suggestionsCity, handleOnChange, handleOnClick, onSubmit };
}

export default useWeatherSearch;
