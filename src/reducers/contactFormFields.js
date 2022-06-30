import { CHANGE_FORM_FIELD, RESET_FORM_FIELDS } from "../actions/contactFormFields";

export const initialState = {
    name: '',
    email: '',
    subject: '',
    message: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FORM_FIELD:
      return {
        ...state,
        [action.fieldName]: action.value,
      };
    case RESET_FORM_FIELDS:
      return {
        ...state,
        name: '',
        email: '',
        subject: '',
        message: '',
      };
    default:
      return state;
  }
};

export default reducer;