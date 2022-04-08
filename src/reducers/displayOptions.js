// import { DISPLAY_RULES_MODAL } from "../action/displayOptions";
import { SELECT_LANGUAGE, SET_HOVERED } from "../actions/displayOptions";

const initialState = {
  language: 'english',
  isHovered: false,
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
    default:
      return state;
  }
};

export default reducer;