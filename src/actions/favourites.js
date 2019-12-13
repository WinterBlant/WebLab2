import * as types from '../actionTypes/actionTypes';
import Service from '../data/LoadWeather';
import { reject } from 'q';

export function initFavs() {
    return async (dispatch) => {
        let keys = Object.keys(localStorage);
        keys.map(async localCity => {
            dispatch(findNewCity(localCity, true));
            dispatch(drawNewCity({ name: localCity }));
            const { city, error } = await Service.getWeatherByName(localCity);
            if (error !== 200) {
                dispatch(loadingError(localCity));
            } else {
                city.name = localCity;
                dispatch(updateCity(city));
                dispatch(findNewCity(localCity, false));
            }
        });
    };
}

export function addNewCity(newCity) {
    return async (dispatch) => {
        if (/^[A-Za-z -]+$/.test(newCity.name)) {
            dispatch(findNewCity(newCity.name, true))
            const { city, error } = await Service.getWeatherByName(newCity.name);
            if (error !== 200) {
                if (error !== 404) {
                    dispatch(drawNewCity({ name: newCity.name }))
                    dispatch(loadingError(newCity.name));
                    localStorage.setItem(newCity.name, '1');
                } else {
                    alert('Can\'t get the weather in : ' + newCity.name);
                }
            } else {
                if (!!localStorage.getItem(city.name)) {
                    reject().then(alert("City already exists"));
                } else {
                    dispatch(drawNewCity({ name: city.name }))
                    dispatch(updateCity(city));
                    localStorage.setItem(city.name, '1');
                }
            }
            dispatch(findNewCity(newCity.name, false))
        } else { alert('Wrong city name format'); }
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