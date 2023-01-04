import { useWeather } from '../contex/WeatherContext';
import { getBgColor, getDays, getIcon, getTemperatureOfDays } from '../util/cardFunctions';
import { WeatherResponse } from '../util/types';

function useWeatherCard(weather: WeatherResponse) {
  const { deletePlace } = useWeather();

  const handleSubmit = () => {
    deletePlace(weather);
  };

  const days: string[] = getDays(weather);

  const temperatureOfDays: number[] = getTemperatureOfDays(weather);

  const bgColor: string = getBgColor(weather, temperatureOfDays);

  const icon: string = getIcon(weather);

  return { handleSubmit, days, temperatureOfDays, bgColor, icon };
}

export default useWeatherCard;
