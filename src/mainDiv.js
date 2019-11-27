import React from 'react';
import './styles/main.css'
import CityWeather from './components/CityWeather';
import MainCity from './components/MainCity';
import Loader from './components/Loader';
import Error from './components/Error'

export default class MainDiv extends React.Component {
    render() {
        const { weather, isLoading, error } = this.props;
        return (
            < div className="Main" >
                {!error ? (isLoading ? <Loader /> :
                    (
                        <>
                            <MainCity weather={weather} />
                            <CityWeather weather={weather} />
                        </>
                    )) : <Error />}
            </div >
        );
    }
}

