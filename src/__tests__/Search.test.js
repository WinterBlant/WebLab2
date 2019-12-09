import AddFav from '../components/AddFav';
import renderer from 'react-test-renderer';
import React from 'react';

describe('Search component', () => {
    test('matches the snapshot', () => {
        const tree = renderer.create(
            <AddFav />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});