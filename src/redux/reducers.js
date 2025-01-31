// import { Modal_SUCCESS, LOGIN_SUCCESS, LOGOUT, SIGNUP_SUCCESS, SET_COORDINATES } from "./action";

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
  modalOpen: false,
  coordinates: [],
};

const authReducer = (state = initialState, action) => {
  // switch (action.type) {
  //   case Modal_SUCCESS:
  //     return {
  //       ...state,
  //       modalOpen: action.payload,
  //     };
  //   case LOGIN_SUCCESS:
  //     return {
  //       ...state,
  //       isAuthenticated: true,
  //       user: action.payload,
  //     };
  //   case SIGNUP_SUCCESS:
  //     return {
  //       ...state,
  //       isAuthenticated: true,
  //       user: action.payload,
  //     };
  //   case LOGOUT:
  //     return {
  //       ...state,
  //       isAuthenticated: false,
  //       user: null,
  //     };
  //   case SET_COORDINATES:
  //     return {
  //       ...state,
  //       coordinates: action.payload,
  //     };
  //   default:
  //     return state;
  // }
};

export default authReducer;
