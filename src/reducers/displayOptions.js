// import { DISPLAY_RULES_MODAL } from "../action/displayOptions";
import { SELECT_LANGUAGE, SET_CURRENT_CARD, SET_DISPLAY_MENU, SET_DISPLAY_SUCCESS_MODAL } from "../actions/displayOptions";

const initialState = {
  language: 'english',
  currentCard: ' ',
  displayMenu: false,
  displaySuccessModal: '',
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
    case SET_DISPLAY_SUCCESS_MODAL:
      return {
        ...state,
        displaySuccessModal: action.value,
      };
    
    default:
      return state;
  }
};

export default reducer;