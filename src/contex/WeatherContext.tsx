/* eslint-disable react/jsx-no-constructed-context-values */
import { useContext, createContext, useState } from 'react';
import { WeatherResponse, WeatherProviderProps } from '../util/types';
import api from '../util/api';
import { getRangeDays } from '../util/utils';

interface WeatherContextType {
  places: any[];
  addPlace: (place: string) => void;
  deletePlace: (place: WeatherResponse) => void;
}

const WeatherContext = createContext({} as WeatherContextType);

export const useWeather = () => useContext(WeatherContext);

export function WeatherContextProvider({ children }: WeatherProviderProps) {
  const [places, setPlaces] = useState<any[]>([]);

  async function addPlace(place: string) {
    const { startDate, endDate } = getRangeDays(4);
    const newPlace = await api.get<WeatherResponse>(`&latitude=${place}&longitude=-82.38&start_date=${startDate}&end_date=${endDate}`);
    console.log(newPlace);
    // const nePlace: WeatherResponse = newPlace;
    setPlaces((prev) => [...prev, newPlace]);
  }

  async function deletePlace(place: WeatherResponse) {
    const updatePlaces = places.filter((current) => current.latitude !== place.latitude && current.longitude !== place.longitude);
    setPlaces(updatePlaces);
  }

  return <WeatherContext.Provider value={{ places, addPlace, deletePlace }}>{children}</WeatherContext.Provider>;
}
