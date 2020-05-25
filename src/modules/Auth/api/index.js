export const tokenForClientRequest = ({token}) => ({
  url: `/oauth/token?grant_type=client_credentials`,
  method: "post",
  headers: {
    Authorization: token
  }
});

export const signUpRequest = ({
                                firstName,
                                lastName,
                                username,
                                email,
                                password
                              }) => ({
  url: `/user`,
  method: "post",
  data: {
    firstName,
    lastName,
    username,
    email,
    password,
    role: "USER"
  },
  headers: {
    Authorization: true
  }
});

export const signInRequest = ({currentUserCredentials: {username, password}, token}) => ({
  url: `/oauth/token?grant_type=password&username=${username}&password=${password}`,
  method: "post",
  headers: {
    Authorization: token
  }
});

export const signOutRequest = () => ({
  url: `/account/signOut`,
  method: "put",
  headers: {
    Authorization: false
  }
});

export const refreshTokenRequest = ({refreshToken, token}) => ({
  url: `/oauth/token?grant_type=refresh_token&refresh_token=${refreshToken}`,
  method: "post",
  headers: {
    Authorization: token
  }
});
