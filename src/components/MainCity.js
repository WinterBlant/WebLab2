import React from 'react';
import '../styles/main.css';

const MainCity = ({ weather }) => (
    !!weather ?
        <div className="currentCity">
            <h1>
                {weather.name}
            </h1>
            <div className="additionalInfo">
                <img
                    className="weatherImage"
                    src={weather.img}
                    alt='Иконка погоды'>
                </img>
                <h1>
                    {weather.temperature}
                </h1>
            </div>
        </div>
        :
        null
);


export default MainCity;