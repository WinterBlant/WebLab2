import FavHeader from '../components/FavHeader';
import React from 'react';
import renderer from 'react-test-renderer';

describe('FavCityHeader component', () => {

    test('matches the snapshot when city.icon != null, city.temperature != null', () => {
        const city = {
            id: '1',
            name: 'Moscow',
            img: 'abcd',
            temperature: '1'
        };

        const tree = renderer.create(
            <FavHeader city={city}/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });


    test('matches the snapshot when city.icon == null, city.temperature == null', () => {
        const city = {
            id: '1',
            name: 'Moscow',
            img: null,
            temperature: null
        };

        const tree = renderer.create(
            <FavHeader city={city}/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});