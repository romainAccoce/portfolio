// import { DISPLAY_RULES_MODAL } from "../action/displayOptions";
import { SELECT_LANGUAGE, SET_HOVERED, SET_CURRENT_CARD, SET_DISPLAY_MENU } from "../actions/displayOptions";

const initialState = {
  language: 'english',
  currentCard: ' ',
  displayMenu: false,
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case  SELECT_LANGUAGE:
      return {
        ...state,
        language: action.value,
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
    default:
      return state;
  }
};

export default reducer;