import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/weather-icons.min.css';
import './index.css';
import { WeatherContextProvider } from './contex/WeatherContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WeatherContextProvider>
      <App />
    </WeatherContextProvider>
  </React.StrictMode>
);
