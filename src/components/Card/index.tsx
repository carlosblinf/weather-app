import React from 'react';
import { useWeather } from '../../contex/WeatherContext';

type CardProps = {
  place: any;
};

function Card({ place }: CardProps) {
  const { deletePlace } = useWeather();
  const handleSubmit = () => {
    console.log('first');
    deletePlace(place);
  };
  return (
    <div className="flex flex-col justify-between bg-bgDarkBlue p-5  w-[300px] h-[250px] rounded-[40px] text-sm text-white">
      <div className="flex justify-between">
        <img src="" alt="time" />
        <div className="">
          <div>Washington DC</div>
          <div>38.9072° N, 77.0369° W</div>
        </div>
      </div>
      <div className="flex text-center justify-around">
        <div className="">
          <div>TODAY</div>
          <div>22°</div>
        </div>
        <div className="">
          <div>SUN</div>
          <div>22°</div>
        </div>
        <div className="">
          <div>MON</div>
          <div>22°</div>
        </div>
        <div className="">
          <div>TUE</div>
          <div>22°</div>
        </div>
        <div className="">
          <div>WED</div>
          <div>22°</div>
        </div>
      </div>
      <div className="text-center">
        <button type="button" onClick={() => handleSubmit()}>
          <i>i</i>
        </button>
      </div>
    </div>
  );
}

export default Card;
