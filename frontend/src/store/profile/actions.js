export const profileActionTypes = {
  SET_LOGIN: "PROFILE.SET_LOGIN",
  SET_PASSWORD: "PROFILE.SET_PASSWORD",
  SET_ISLOGGEDIN: "PROFILE.SET_ISLOGGEDIN",
};

export const profileActions = {
  setLogin: (payload) => ({
    type: profileActionTypes.SET_LOGIN,
    payload,
  }),
  setPassword: (payload) => ({
    type: profileActionTypes.SET_PASSWORD,
    payload,
  }),
  setIsLoggedIn: (payload) => ({
    type: profileActionTypes.SET_ISLOGGEDIN,
    payload,
  }),
};
