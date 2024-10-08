// import { DISPLAY_RULES_MODAL } from "../action/displayOptions";
import {
  SET_CURRENT_CARD,
  SET_DISPLAY_MENU,
  SET_DISPLAY_SUCCESS_MODAL,
  SET_SCROLL_TO_TOP_BUTTON,
  SET_DARKMODE,
  SET_PROJECTS,
} from "../actions/displayOptions";

const initialState = {
  darkMode: true,
  currentCard: " ",
  displayMenu: false,
  displaySuccessModal: "",
  scrollToTopButton: false,
  projects: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_DARKMODE:
      return {
        ...state,
        darkMode: action.value,
      };
    case SET_CURRENT_CARD:
      return {
        ...state,
        currentCard: action.value,
      };
    case SET_DISPLAY_MENU:
      return {
        ...state,
        displayMenu: !state.displayMenu,
      };
    case SET_DISPLAY_SUCCESS_MODAL:
      return {
        ...state,
        displaySuccessModal: action.value,
      };
    case SET_SCROLL_TO_TOP_BUTTON:
      return {
        ...state,
        scrollToTopButton: action.value,
      };
    case SET_PROJECTS:
      return {
        ...state,
        projects: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
