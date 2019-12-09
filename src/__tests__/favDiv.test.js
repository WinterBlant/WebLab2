import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import FavouriteDiv from '../favDiv';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let city;
let cities;
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
    cities = [{
        name: 'Saint Petersburg',
        img: '123',
        temperature: 'temp',
        wind: 'wind',
        cloudiness: 'cloudiness',
        pressure: 'pressure',
        humidity: 'humidity',
        location: '[location]'
    }];
});

describe('FavoritesContainer container', () => {

    test('matches the snapshot when favorites cities are loaded', () => {
        const store = mockStore({
            city: city,
            favourite: {
                cities: cities,
                errors: [],
                isLoading: []
            }
        });
        const tree = renderer.create(
            <Provider store={store}>
                <FavouriteDiv />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('matches the snapshot when favorites cities are loading', () => {

        const store = mockStore({
            city: city,
            favourite: {
                cities: cities,
                errors: [],
                isLoading: ['Saint Petersburg']
            }
        });

        const tree = renderer.create(
            <Provider store={store}>
                <FavouriteDiv />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('matches the snapshot on error', () => {

         const store = mockStore({
            city: city,
            favourite: {
                cities: cities,
                errors: ['Saint Petersburg'],
                isLoading: []
            }
        });
        const tree = renderer.create(
            <Provider store={store}>
                <FavouriteDiv />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});