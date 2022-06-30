export const CHANGE_FORM_FIELD = 'CHANGE_FORM_FIELD';
export const changeFormField = (value, fieldName) => (
  {
    type: CHANGE_FORM_FIELD,
    value,
    fieldName,
  }
);

export const RESET_FORM_FIELDS = 'RESET_FORM_FIELDS';
export const resetFormFields = () => (
  {
    type: RESET_FORM_FIELDS,
  }
);