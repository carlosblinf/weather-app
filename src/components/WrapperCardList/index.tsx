import React from 'react';
import CardList from '../CardList';
import { useWeather } from '../../contex/WeatherContext';

function WrapperCardList() {
  const { places } = useWeather();

  return (
    <div className="flex-1 p-10">
      <CardList places={places} />
    </div>
  );
}

export default WrapperCardList;
