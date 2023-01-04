import React from 'react';
import { CardProps } from '../../util/types';
import useWeatherCard from '../../hooks/useWeatherCard';
import TemperatureDayList from '../TemperatureDayList';

function Card({ place }: CardProps) {
  const { weather } = place;
  const { handleSubmit, bgColor, icon } = useWeatherCard(weather);

  return (
    <div className={`flex flex-col justify-between ${bgColor} p-5  w-[300px] h-[250px] rounded-[40px] text-sm text-white`}>
      <div className="flex justify-between px-1">
        <i className={`wi ${icon} text-[42px] ${icon === 'wi-day-sunny' ? 'text-darkYellou' : 'text-lightBlue'}`} />
        <div className="">
          <div>{place.cityName}</div>
          <div>
            {weather.latitude}° E, {weather.longitude}° N
          </div>
        </div>
      </div>
      <TemperatureDayList weather={weather} />
      <div className="text-center">
        <button type="button" onClick={() => handleSubmit()}>
          <img src="/delete.svg" alt="delete" className="text-bgGrey1 w-6" />
        </button>
      </div>
    </div>
  );
}

export default Card;
