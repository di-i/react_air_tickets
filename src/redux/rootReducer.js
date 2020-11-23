import { combineReducers } from 'redux';
import { filterReducer } from './filterReducer';
import { ticketsReducer } from './ticketsReducer';

export const rootReducer = combineReducers({
    tickets: ticketsReducer,
    filter: filterReducer,
})