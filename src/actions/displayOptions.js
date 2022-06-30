export const SET_DARKMODE = 'SET_DARKMODE';
export const setDarkMode = (value) => (
  {
    type: SET_DARKMODE,
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

export const SET_SCROLL_TO_TOP_BUTTON = "SET_SCROLL_TO_TOP_BUTTON";
export const setScrollToTopButton = (value) => (
  {
    type: SET_SCROLL_TO_TOP_BUTTON,
    value,
  }
);