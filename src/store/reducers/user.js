import { UPDATE_USERNAME } from "../actions/actionTypes";

const initialState = {
  username: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERNAME:
      console.log("dziala dodawanie uzytkownika");
      return {
        ...state,
        username: action.username
      };
    default:
      return state;
  }
};

export default reducer;
