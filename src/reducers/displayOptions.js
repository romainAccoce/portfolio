// import { DISPLAY_RULES_MODAL } from "../action/displayOptions";

const initialState = {
  language: 'english',
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // case  DISPLAY_RULES_MODAL:
    //   return {
    //     ...state,
    //     displayRules: !state.displayRules,
    //   };
    default:
      return state;
  }
};

export default reducer;