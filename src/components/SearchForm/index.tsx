import React from 'react';
import { useForm } from 'react-hook-form';
import { FormValues } from '../../util/types';
import useWeatherSearch from '../../hooks/useWeatherSearch';
import SuggestionList from '../../SuggestionList';

function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const { value, textValue, suggestionsCity, handleOnChange, handleOnClick, onSubmit } = useWeatherSearch();

  return (
    <div>
      <form className="flex gap-2 md:gap-10 flex-wrap justify-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="text-center w-full md:w-auto relative">
          <input
            type="text"
            {...register('search', { required: true, minLength: 3 })}
            placeholder="Enter a city name"
            className="rounded-2xl px-4 h-[40px] w-full md:w-[350px] text-sm"
            onChange={handleOnChange}
            value={textValue || value}
            autoComplete="off"
          />
          {errors.search && <div className="mb-3 text-normal text-red-500 ">Is required, please enter at least 3 letters</div>}
          <SuggestionList suggestionsCity={suggestionsCity} handleOnClick={handleOnClick} />
        </div>
        <button type="submit" className="border-none rounded-3xl px-4 h-[40px] w-[180px] bg-bgBlue text-white text-sm">
          search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
