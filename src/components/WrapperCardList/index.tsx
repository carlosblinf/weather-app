import React from 'react';
import CardList from '../CardList';
import { useWeather } from '../../contex/WeatherContext';
import EmptyState from '../EmptySate';

function WrapperCardList() {
  const { places } = useWeather();

  return <div className="flex-1 p-10">{places.length > 0 ? <CardList places={places} /> : <EmptyState />}</div>;
}

export default WrapperCardList;
