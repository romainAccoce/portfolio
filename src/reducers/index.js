import { combineReducers } from 'redux';

import displayOptionsReducer from './displayOptions';
import contactFormFieldsReducer from './contactForm';

const rootReducer = combineReducers({
    displayOptions: displayOptionsReducer,
    contactFormFields: contactFormFieldsReducer,
});

export default rootReducer;