import { City } from '../util/types';
import { getRangeDays } from '../util/utils';

const WeatherService = {
  getWeather: async (place: City, unit: string) => {
    const { startDate, endDate } = getRangeDays(4);
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?daily=weathercode,temperature_2m_max&current_weather=true&latitude=${place.latitude}&longitude=${place.longitude}&start_date=${startDate}&end_date=${endDate}&timezone=${place.timezone}&temperature_unit=${unit}`
    );
    return response.json();
  },
  getCities: async (text: string) => {
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${text}`);
    const responseJson = await response.json();
    return responseJson.results;
  },
};

export default WeatherService;
