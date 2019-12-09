import MainCity from '../components/MainCity';
import renderer from 'react-test-renderer';
import React from 'react';

describe('CurrentCityComponent component', () => {
    test('matches the snapshot when the weather object is not null', () => {
        const weather = {
            name: 'Saint Petersburg',
            img: '123',
            temperature: '5'
        };
        const tree = renderer.create(
            <MainCity weather={weather}/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
    test('matches the snapshot when the weather object is null', () => {
        const weather = null;
        const tree = renderer.create(
            <MainCity weather={weather}/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});