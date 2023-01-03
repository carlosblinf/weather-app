import { ReactNode } from 'react';

export interface WeatherProviderProps {
  children: ReactNode;
}

export interface CurrentWeather {
	temperature: number;
	windspeed: number;
	winddirection: number;
	weathercode: number;
	time: string;
}

export interface DailyUnit {
	time: string;
	weathercode: string;
	temperature_2m_max: string;
}

export interface Daily {
	time: string[];
	weathercode: number[];
	temperature_2m_max: number[];
}

export interface WeatherResponse {
	latitude: number;
	longitude: number;
	generationtime_ms: number;
	utc_offset_seconds: number;
	timezone: string;
	timezone_abbreviation: string;
	elevation: number;
	current_weather: CurrentWeather;
	daily_units: DailyUnit;
	daily: Daily;
}
