import { WeatherResponse } from './types';
import { getDayOfWeek } from './utils';

export function getDays(weather: WeatherResponse): string[] {
  const days = weather.daily.time.map((day) => getDayOfWeek(day));
  days[0] = 'TODAY';
  return days;
}

export function getTemperatureOfDays(weather: WeatherResponse): number[] {
  const temperatureOfDays = weather.daily.temperature_2m_max;
  temperatureOfDays[0] = weather.current_weather.temperature;
  return temperatureOfDays;
}

export function getBgColor(weather: WeatherResponse, temperatures: number[]): string {
  const promed = temperatures.reduce((acc, temp) => acc + temp) / temperatures.length;
  return (weather.daily_units.temperature_2m_max === '°C' && promed > 30) ||
    (weather.daily_units.temperature_2m_max === '°F' && promed > 86)
    ? 'bg-bgYellou'
    : 'bg-bgDarkBlue';
}

export function getIcon(weather: WeatherResponse): string {
  const { weathercode, temperature } = weather.current_weather;
  if (weathercode < 2 && temperature >= 30 && weather.daily_units.temperature_2m_max === '°C') return 'wi-day-sunny';
  if (weathercode < 2 && temperature >= 86 && weather.daily_units.temperature_2m_max === '°F') return 'wi-day-sunny';
  if (weathercode < 2) return 'wi-cloud';
  if (weathercode <= 3) return 'wi-cloudy';
  if (weathercode <= 48) return 'wi-day-fog';
  if (weathercode <= 67 || (weathercode >= 80 && weathercode <= 86)) return 'wi-day-rain';
  if (weathercode <= 77) return 'wi-day-snow';
  if (weathercode <= 99) return 'wi-day-thunderstorm';

  return 'wi-cloud';
}
