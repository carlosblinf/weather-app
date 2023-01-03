import React from 'react';

function EmptyState() {
  return (
    <div className="flex items-center gap-4 flex-wrap justify-center text-center">
      <i className="wi wi-day-cloudy text-[60px] md:text-[100px] text-bgGrey1" />
      <div className="text-bgGrey1 text-2xl md:text-3xl">Submit a city to fill up this space</div>
    </div>
  );
}

export default EmptyState;
