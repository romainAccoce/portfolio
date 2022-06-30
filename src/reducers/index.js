import { combineReducers } from 'redux';

import displayOptionsReducer from './displayOptions';
import contactFormFieldsReducer from './contactFormFields';

const rootReducer = combineReducers({
    displayOptions: displayOptionsReducer,
    contactFormFields: contactFormFieldsReducer,
});

export default rootReducer;