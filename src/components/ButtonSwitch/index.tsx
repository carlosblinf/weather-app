import React, { useEffect, useState } from 'react';
import { useWeather } from '../../contex/WeatherContext';

function ButtonSwitch() {
  const [checked, setChecked] = useState(false);
  const { toggleUnit } = useWeather();

  const handleChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    toggleUnit(checked);
  }, [checked]);

  return (
    <label className="inline-flex relative items-center cursor-pointer" htmlFor="unit">
      <input id="unit" type="checkbox" value="" className="sr-only peer" checked={checked} onChange={handleChange} />
      <div
        className="w-16 h-8 relative bg-bgGrey peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300
   dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full
    peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[8px] after:bg-white
    after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600
     peer-checked:bg-blue-600"
      />
      <span
        className="absolute right-3 text-sm font-medium text-darkGrey dark:text-gray-300 peer-checked:right-12 
  peer-checked:text-white"
      >
        {checked ? 'F' : 'C'}
      </span>
    </label>
  );
}

export default ButtonSwitch;
