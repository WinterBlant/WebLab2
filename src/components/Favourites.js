import React from 'react';
import '../styles/favourite.css'
import FavHeader from './FavHeader';
import CityWeather from './CityWeather';
import Loader from './Loader';
import Error from './Error';

const Favourites = ({ cities, isLoading, errors, onRemove }) => (
    <div className='FavList'>
        {
            cities.map((city) => (
                <div key={city.name} className={'FavoriteCity'}>
                    <FavHeader onRemove={onRemove} city={city} />
                    {(!errors.includes(city.name)) ? ((!isLoading.includes(city.name) ? <CityWeather weather={city} /> : <Loader />)) : <Error />}
                </div>
            ))
        }
    </div>
);

export default Favourites;