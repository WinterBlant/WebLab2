import renderer from 'react-test-renderer';
import React from 'react';
import MainDiv from '../mainDiv';

let city;
beforeEach(() => {
    city = {
        isLoading: false,
        weather: {
            name: 'Saint Petersburg',
            img: '123',
            temperature: 'temp',
            wind: 'wind',
            cloudiness: 'cloudiness',
            pressure: 'pressure',
            humidity: 'humidity',
            location: '[location]'
        },
        error: false
    };
});

describe('MainContainer component', () => {

    test('matches the snapshot when local weather is loaded', () => {

        const tree = renderer.create(
            <MainDiv weather={city.weather} isLoading={city.isLoading} error={city.error} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('matches the snapshot when local weather is loading', () => {
        city.isLoading = true;

        const tree = renderer.create(
            <MainDiv weather={city.weather} isLoading={city.isLoading} error={city.error} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('matches the snapshot on error', () => {
        city.error = true;
        const tree = renderer.create(
            <MainDiv weather={city.weather} isLoading={city.isLoading} error={city.error} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});