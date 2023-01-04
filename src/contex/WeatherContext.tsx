/* eslint-disable react/jsx-no-constructed-context-values */
import { useContext, createContext, useState } from 'react';
import { WeatherResponse, WeatherProviderProps, City, WeatherCard, WeatherContextType } from '../util/types';
import WeatherService from '../services/WeatherService';

const WeatherContext = createContext({} as WeatherContextType);

export const useWeather = () => useContext(WeatherContext);

export function WeatherContextProvider({ children }: WeatherProviderProps) {
  const [places, setPlaces] = useState<WeatherCard[]>([]);
  const [unit, setUnit] = useState<string>('celsius');

  async function addPlace(place: City) {
    const placeResponse = await WeatherService.getWeather(place, unit);
    const newPlace: WeatherCard = { cityName: `${place.name},${place.country}`, weather: placeResponse };

    setPlaces((prev) => [...prev, newPlace]);
  }

  async function deletePlace(place: WeatherResponse) {
    const updatePlaces = places.filter(
      (current) => current.weather.latitude !== place.latitude && current.weather.longitude !== place.longitude
    );
    setPlaces(updatePlaces);
  }

  function toggleUnit(fahrenheit: boolean) {
    const selectedUnit = fahrenheit ? 'fahrenheit' : 'celsius';
    setUnit(selectedUnit);
  }

  return <WeatherContext.Provider value={{ places, addPlace, deletePlace, unit, toggleUnit }}>{children}</WeatherContext.Provider>;
}
