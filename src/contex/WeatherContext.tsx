/* eslint-disable react/jsx-no-constructed-context-values */
import { useContext, createContext, useState } from 'react';
import { WeatherResponse, WeatherProviderProps, City, WeatherCard } from '../util/types';
import WeatherService from '../services/WeatherService';

interface WeatherContextType {
  places: WeatherCard[];
  addPlace: (place: City) => void;
  deletePlace: (place: WeatherResponse) => void;
}

const WeatherContext = createContext({} as WeatherContextType);

export const useWeather = () => useContext(WeatherContext);

export function WeatherContextProvider({ children }: WeatherProviderProps) {
  const [places, setPlaces] = useState<WeatherCard[]>([]);

  async function addPlace(place: City) {
    const placeResponse = await WeatherService.getWeather(place);
    const newPlace: WeatherCard = { cityName: `${place.name},${place.country}`, weather: placeResponse };

    setPlaces((prev) => [...prev, newPlace]);
  }

  async function deletePlace(place: WeatherResponse) {
    const updatePlaces = places.filter(
      (current) => current.weather.latitude !== place.latitude && current.weather.longitude !== place.longitude
    );
    setPlaces(updatePlaces);
  }

  return <WeatherContext.Provider value={{ places, addPlace, deletePlace }}>{children}</WeatherContext.Provider>;
}
