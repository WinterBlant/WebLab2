import Service from '../data/LoadWeather';
import * as types from '../actionTypes/actionTypes';

export function initWeather() {
  return async (dispatch) => {
    dispatch(loadingStart());
    const { city, error } = await Service.getWeather();
    if (error !== 200) {
      dispatch(loadingError());
    } else {
      dispatch(loadingSuccess(city));
    }
  };
}

export function loadingStart() {
  return ({ type: types.GEOCITY_LOADING, payload: { isLoading: true } });
}

export function loadingSuccess(weather) {
  return ({
    type: types.GEOCITY_LOADING_SUCCESS,
    payload: { isLoading: false, weather: weather }
  });
}

export function loadingError() {
  return ({ type: types.GEOCITY_LOADING_ERROR, payload: { isLoading: false, error: true } });
}