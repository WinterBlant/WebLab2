import CityWeather from '../components/CityWeather';
import renderer from 'react-test-renderer';
import React from 'react';

describe('WeatherInfo component', () => {

    test('matches the snapshot when weather != null', () => {
        const city = {
            name: 'Saint Petersburg',
            img: '123',
            temperature: 'temp',
            wind: 'wind',
            cloudiness: 'cloudiness',
            pressure: 'pressure',
            humidity: 'humidity',
            location: '[location]'
        };
        const tree = renderer.create(
           <CityWeather weather={city}/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
    test('matches the snapshot when weather == null', () => {

        const tree = renderer.create(
            <CityWeather weather={null}/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});