/* eslint-disable react/no-array-index-key */
import React from 'react';
import Card from '../Card';
import { CardListProps } from '../../util/types';

function CardList({ places }: CardListProps) {
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {places.map((place, index) => (
        <Card key={index} place={place}/>
      ))}
    </div>
  );
}

export default CardList;
