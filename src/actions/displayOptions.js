export const SELECT_LANGUAGE = 'SELECT_LANGUAGE';
export const selectLanguage = (value) => (
  {
    type: SELECT_LANGUAGE,
    value,
  }
);

export const SET_CURRENT_CARD = "SET_CURRENT_CARD";
export const setCurrentCard = (value) => (
  {
    type: SET_CURRENT_CARD,
    value,
  }
);