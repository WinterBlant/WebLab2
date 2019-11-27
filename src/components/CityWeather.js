import React from 'react';
import '../styles/app.css';

const CityWeather = ({ weather }) => (
    !!weather ? (
            <div className="WeatherInfo">
                <div className="Info">
                    <h3>Ветер</h3>
                    <h4>{weather.wind}</h4>
                </div>
                <div className="Info">
                    <h3>Облачность</h3>
                    <h4>{weather.cloudiness}</h4>
                </div>
                <div className="Info">
                    <h3>Давление</h3>
                    <h4>{weather.pressure}</h4>
                </div>
                <div className="Info">
                    <h3>Влажность</h3>
                    <h4>{weather.humidity}</h4>
                </div>
                <div className="Info">
                    <h3>Координаты</h3>
                    <h4>{weather.location}</h4>
                </div>
            </div>
        ) :
        null
);

export default CityWeather;