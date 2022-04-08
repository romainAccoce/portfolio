// import { DISPLAY_RULES_MODAL } from "../action/displayOptions";
import { SELECT_LANGUAGE, SET_HOVERED, SET_CURRENT_CARD } from "../actions/displayOptions";

const initialState = {
  language: 'english',
  isHovered: false,
  currentCard: false,
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case  SELECT_LANGUAGE:
      return {
        ...state,
        language: action.value,
      };
    case SET_HOVERED:
      return {
        ...state,
        isHovered: !state.isHovered,
      };
    case SET_CURRENT_CARD:
      return {
        ...state,
        currentCard: !state.currentCard,
      };
    default:
      return state;
  }
};

export default reducer;