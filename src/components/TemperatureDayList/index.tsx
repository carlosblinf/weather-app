import React from 'react';
import useWeatherCard from '../../hooks/useWeatherCard';
import { TemperatureDayListProps } from '../../util/types';

function TemperatureDayList({ weather }: TemperatureDayListProps) {
  const { days, temperatureOfDays } = useWeatherCard(weather);

  return (
    <div className="flex text-center justify-around">
      {days.map((day, index) => (
        <div className="" key={day}>
          <div>{day}</div>
          <div>{`${temperatureOfDays[index]} ${weather.daily_units.temperature_2m_max}`}</div>
        </div>
      ))}
    </div>
  );
}

export default TemperatureDayList;
