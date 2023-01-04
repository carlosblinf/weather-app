/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { SuggestionListProps } from '../util/types';

function SuggestionList({ suggestionsCity, handleOnClick }: SuggestionListProps) {
  if (!suggestionsCity.length) return null;

  return (
    <ul className="bg-white border-[1px] rounded-lg shadow-lg p-4 absolute right-2 left-2 max-h-[200px] overflow-y-auto">
      {suggestionsCity.map((city) => (
        <li
          key={city.id}
          className="min-h10 w-full border-b-[1px] border-solid border-l-gray-300 py-2"
          onClick={() => handleOnClick(city)}
        >
          {`${city.name} ${city.admin1}, ${city.country} (${city.latitude}° E ${city.longitude}° N)`}
        </li>
      ))}
    </ul>
  );
}

export default SuggestionList;
