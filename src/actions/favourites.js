import * as types from '../actionTypes/actionTypes';
import Service from '../data/LoadWeather';
import { reject } from 'q';
import { normalize } from '../data/StringNormalize'

export function initFavs() {
    return async (dispatch) => {
        let keys = Object.keys(localStorage);
        keys.map(async localCity => {
            dispatch(findNewCity(localCity, true));
            dispatch(drawNewCity({ name: localCity }));
            const { city, error } = await Service.getWeatherByName(localCity);
            if (error !== 200) {
                dispatch(loadingError(localCity.name));
            } else {
                dispatch(updateCity(city));
                dispatch(findNewCity(localCity, false));
            }
        });
    };
}

export function addNewCity(newCity) {
    return async (dispatch) => {
        newCity.name = normalize(newCity.name);
        if (!!localStorage.getItem(newCity.name)) {
            reject().then(alert("City already exists"));
        }
        else {
            dispatch(findNewCity(newCity.name, true));
            dispatch(drawNewCity(newCity));
            const { city, error } = await Service.getWeatherByName(newCity.name);
            if (error !== 200) {
                if (error.code !== 404) {
                    dispatch(loadingError(newCity.name));
                } else {
                    alert('Can\'t get the weather in : ' + newCity.name);
                    dispatch(removeCity(newCity.name));
                }
            } else {
                dispatch(updateCity(city));
                localStorage.setItem(city.name, '1');
                dispatch(findNewCity(newCity.name, false));
            }
        }
    }
}

export function drawNewCity(city) {
    return ({ type: types.ADD_FAV, payload: { city } })
}

export function findNewCity(name, isLoading) {
    return ({
        type: types.ADD_FAV_LOADING,
        payload: {
            name,
            isLoading
        }
    });
}

export function updateCity(city) {
    return ({ type: types.UPDATE_FAV, payload: { city } });
}

export function removeCity(name) {
    localStorage.removeItem(name);
    return ({ type: types.REMOVE_FAV, payload: { name } })
}

export function loadingError(name) {
    return ({ type: types.LOAD_ERROR, payload: { name } })
}