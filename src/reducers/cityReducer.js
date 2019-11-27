import * as types from '../actionTypes/actionTypes';

const initialState = {
    isLoading: true,
    weather: {},
    error: false
};

export default function cityReducer(state = initialState, action) {
    switch (action.type) {
        case types.GEOCITY_LOADING: {
            const { isLoading } = action.payload;
            return {
                ...state,
                isLoading,
            };
        }
        case types.GEOCITY_LOADING_SUCCESS: {
            const { isLoading, weather } = action.payload;
            return {
                ...state,
                isLoading,
                weather,
            };
        }
        case types.GEOCITY_LOADING_ERROR: {
            const { isLoading, error } = action.payload;
            return {
                ...state,
                isLoading,
                error,
            };
        }
        default: {
            return state;
        }
    }
}