export const SELECT_LANGUAGE = 'SELECT_LANGUAGE';
export const selectLanguage = (value) => (
  {
    type: SELECT_LANGUAGE,
    value,
  }
);

export const SET_HOVERED = "SET_HOVERED";
export const setHovered = () => (
  {
  type: SET_HOVERED,
  }
);