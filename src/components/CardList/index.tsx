import React from 'react';
import Card from '../Card';

function CardList() {
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default CardList;
