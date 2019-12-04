import * as types from '../actionTypes/actionTypes'

const initialState = {
    cities: [],
    isLoading: [],
    errors: []
}

export default function favouriteReducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_FAV: {
            const cities = [...state.cities, action.payload.city];
            return {
                ...state,
                cities,
            };
        }
        case types.ADD_FAV_LOADING: {
            const { name, isLoading } = action.payload;
            const curLoad = [...state.isLoading];
            const isCityLoading = curLoad.includes(name);
            if (isCityLoading && !isLoading) {
                curLoad.splice(curLoad.indexOf(name), 1);
            } else if (isLoading && !isCityLoading) {
                curLoad.push(name);
            }
            return {
                ...state,
                isLoading: curLoad
            };
        }
        case types.UPDATE_FAV: {
            const { city } = action.payload;
            const cities = [...state.cities];
            cities[cities.findIndex(c => c.name === city.name)] = city;
            return {
                ...state,
                cities,
            };
        }
        case types.REMOVE_FAV: {
            const cities = [...state.cities];
            cities.splice(cities.findIndex(c => c.name === action.payload.name), 1);
            return {
                ...state,
                cities,
            };
        }
        case types.LOAD_ERROR: {
            const name = action.payload.name;
            const errors = [...state.errors];
            if (!errors.includes(name)) {
                errors.push(name);
            }
            return {
                ...state,
                errors,
            };
        }
        default: {
            return state;
        }
    }
}