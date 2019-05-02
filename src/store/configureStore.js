import { createStore, combineReducers } from 'redux';

import calendarReducer from './reducers/calendar';

const rootReducer = combineReducers({
    calendar: calendarReducer
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;