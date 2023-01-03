import React from 'react';

function Card() {
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
          <div>TODAY</div>
          <div>22°</div>
        </div>
        <div className="">
          <div>TODAY</div>
          <div>22°</div>
        </div>
        <div className="">
          <div>TODAY</div>
          <div>22°</div>
        </div>
        <div className="">
          <div>TODAY</div>
          <div>22°</div>
        </div>
      </div>
      <div className="text-center">
        <button type="button">
          <i>i</i>
        </button>
      </div>
    </div>
  );
}

export default Card;
