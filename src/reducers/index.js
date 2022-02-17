import { combineReducers } from 'redux';

import displayOptionsReducer from './displayOptions';

const rootReducer = combineReducers({
    displayOptions: displayOptionsReducer, 
});

export default rootReducer;