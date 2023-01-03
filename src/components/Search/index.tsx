import React from 'react';
import { useForm } from 'react-hook-form';
import { useWeather } from '../../contex/WeatherContext';

type FormValues = {
  search: string;
};

function Search() {
  const { addPlace } = useWeather();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data.search);
    addPlace(data.search);
  };

  return (
    <div className="p-2">
      <form className="flex gap-2 md:gap-10 flex-wrap justify-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="text-center w-full">
          <input
            type="text"
            {...register('search', { required: 'Is required, please enter a valid address' })}
            placeholder="Enter a city name"
            className="rounded-2xl px-4 h-[40px] w-full md:w-[350px] text-sm"
          />
          {errors.search && <div className="mb-3 text-normal text-red-500 ">{errors.search.message}</div>}
        </div>
        <button type="submit" className="border-none rounded-3xl px-4 h-[40px] w-[180px] bg-bgBlue text-white text-sm">
          search
        </button>
      </form>
    </div>
  );
}

export default Search;
