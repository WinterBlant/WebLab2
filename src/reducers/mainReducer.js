import { combineReducers } from 'redux';
import cityReducer from './cityReducer'
import favouriteReducer from './favouriteReducer'

export const mainReducer = combineReducers(
  {
    city: cityReducer,
    favourite: favouriteReducer,
  }
)