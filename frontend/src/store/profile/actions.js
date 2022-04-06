export const profileActionTypes = {
  SET_LOGIN: "PROFILE.SET_LOGIN",
  SET_PASSWORD: "PROFILE.SET_PASSWORD",
  SET_ISLOGGEDIN: "PROFILE.SET_ISLOGGEDIN",
  POST_DATA: "PROFILE.POST_DATA",
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

export const createPosts = (postData) => {
  //here we will create fetch request
  return (dispatch) => {
    console.log(JSON.stringify(postData));
    fetch("http://localhost:7000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((post) =>
        dispatch({
          type: profileActionTypes.POST_DATA,
          payload: post
        })
      )
      .catch((error) => {
        console.log(error);
      });
  };
};
