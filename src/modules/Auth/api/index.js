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
  userName,
  email,
  password
}) => ({
  url: `/user`,
  method: "post",
  data: {
    firstName,
    lastName,
    userName,
    email,
    password
  },
  headers: {
    Authorization: true
  }
});

export const signInRequest = ({ email, password }) => ({
  url: `/account/signIn`,
  method: "post",
  data: {
    email,
    password
  },
  headers: {
    Authorization: false
  }
});

export const signOutRequest = () => ({
  url: `/account/signOut`,
  method: "put",
  headers: {
    Authorization: false
  }
});

export const refreshTokenRequest = refreshToken => ({
  url: `/account/refresh`,
  method: "post",
  data: { refreshToken },
  headers: {
    Authorization: false
  }
});
