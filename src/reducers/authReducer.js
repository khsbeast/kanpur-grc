import { SIGN_IN, SIGN_IN_ERR, SIGN_UP, SIGN_UP_ERR } from "../types";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        state,
      };
    case SIGN_IN_ERR:
      return {
        state,
      };
    case SIGN_UP:
      return {
        state,
      };
    case SIGN_UP_ERR:
      return {
        state,
      };
    default:
      return state;
  }
};

export default authReducer;
