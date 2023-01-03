import React from 'react';
import { useWeather } from '../../contex/WeatherContext';
import { WeatherCard } from '../../util/types';
import { getDayOfWeek } from '../../util/utils';

type CardProps = {
  place: WeatherCard;
};

function Card({ place }: CardProps) {
  const { weather } = place;
  const { deletePlace } = useWeather();

  const handleSubmit = () => {
    deletePlace(weather);
  };

  const getDays = (): string[] => {
    const days = weather.daily.time.map((day) => getDayOfWeek(day));
    days[0] = 'TODAY';
    return days;
  };

  const getTemperatureOfDays = (): number[] => {
    const temperatureOfDays = weather.daily.temperature_2m_max;
    temperatureOfDays[0] = weather.current_weather.temperature;
    return temperatureOfDays;
  };

  const getBgColor = () => {
    const temperatures = getTemperatureOfDays();
    const promed = temperatures.reduce((acc, temp) => acc + temp) / temperatures.length;
    return promed < 30 ? 'bg-bgDarkBlue' : 'bg-bgYellou';
  };

  const getIcon = () => {
    const { weathercode, temperature } = weather.current_weather;
    if (weathercode < 2 && temperature >= 30) return 'wi-day-sunny';
    if (weathercode < 2) return 'wi-cloud';
    if (weathercode <= 3) return 'wi-cloudy';
    if (weathercode <= 48) return 'wi-day-fog';
    if (weathercode <= 67 || (weathercode >= 80 && weathercode <= 86)) return 'wi-day-rain';
    if (weathercode <= 77) return 'wi-day-snow';
    if (weathercode <= 99) return 'wi-day-thunderstorm';

    return 'wi-cloud';
  };

  return (
    <div className={`flex flex-col justify-between ${getBgColor()} p-5  w-[300px] h-[250px] rounded-[40px] text-sm text-white`}>
      <div className="flex justify-between px-1">
        <i className={`wi ${getIcon()} text-[38px] ${getIcon() === 'wi-day-sunny' ? 'text-darkYellou' : 'text-lightBlue'}`} />
        <div className="">
          <div>{place.cityName}</div>
          <div>
            {weather.latitude}° E, {weather.longitude}° N
          </div>
        </div>
      </div>
      <div className="flex text-center justify-around">
        {getDays().map((day, index) => (
          <div className="" key={day}>
            <div>{day}</div>
            <div>{getTemperatureOfDays()[index]}</div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button type="button" onClick={() => handleSubmit()}>
          <img src="/delete.svg" alt="delete" className="text-bgGrey1 w-6" />
        </button>
      </div>
    </div>
  );
}

export default Card;
