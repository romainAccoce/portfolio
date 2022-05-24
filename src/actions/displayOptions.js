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

export const SET_DISPLAY_MENU = "SET_DISPLAY_MENU";
export const setDisplayMenu = () => (
  {
    type: SET_DISPLAY_MENU,
  }
);

export const SET_DISPLAY_SUCCESS_MODAL = "SET_DISPLAY_SUCCESS_MODAL";
export const setDisplaySuccessModal = (value) => (
  {
    type: SET_DISPLAY_SUCCESS_MODAL,
    value,
  }
);