import { profileActionTypes,createPosts } from "./actions";

const initialState = {
  login: "",
  password: "",
  isLoggedIn: false,
  user:{}
};

export const profileReduces = (state = initialState, action) => {
  switch (action.type) {
    case profileActionTypes.SET_LOGIN:
      return {
        ...state,
        login: action.payload,
      };

    case profileActionTypes.SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };

    case profileActionTypes.SET_ISLOGGEDIN:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case profileActionTypes.POST_DATA:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
