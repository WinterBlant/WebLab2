import Favourites from '../components/Favourites';
import React from 'react';
import renderer from 'react-test-renderer';

let cities;
beforeEach(() => {
    cities = [
        {
            name: 'Saint Petersburg',
            img: '123',
            temperature: 'temp',
            wind: 'wind',
            cloudiness: 'cloudiness',
            pressure: 'pressure',
            humidity: 'humidity',
            location: '[location]'
        },
        {
            name: 'Tomsk',
            img: 'uifyi',
            temperature: 'temp',
            wind: 'wind',
            cloudiness: 'cloudiness',
            pressure: 'pressure',
            humidity: 'humidity',
            location: '[location]'
        }
    ];
});
describe('FavoritesList component', () => {

    test('matches the snapshot when cities loaded', () => {

        const tree = renderer.create(
            <Favourites cities={cities} isLoading={[]} errors={[]}/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });


    test('matches the snapshot when cities are loading', () => {

        const isLoading = ['Moscow'];

        const tree = renderer.create(
            <Favourites cities={cities} isLoading={isLoading} onRemove={f => f} errors={[]}/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
    test('matches the snapshot when on error', () => {

        const errors = ['Kemerovo'];

        const tree = renderer.create(
            <Favourites cities={cities} isLoading={[]} onRemove={f => f} errors={errors}/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});