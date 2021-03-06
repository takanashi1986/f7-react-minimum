import {
  LOGIN_SUCCESS,
  REAUTH_SUCCESS,
  LOGOUT,
} from "../../redux/actions/login";

const initialState = Object.freeze({
  session: null,
  user_id: null,
  user_name: null,
});

export default (state = initialState, action) => {
  const { session, user_id, user_name } = action.payload || {};
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REAUTH_SUCCESS:
      return {
        ...initialState,
        session,
        user_id,
        user_name,
      };
    case LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
