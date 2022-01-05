export const actionConstants = {
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  GET_REPO_REQUEST: "GET_REPO_REQUEST",
  GET_REPO_SUCCESS: "GET_REPO_SUCCESS",
  GET_REPO_FAILURE: "GET_REPO_FAILURE",
};

export const loginSuccess = (token) => {
  return {
    type: actionConstants.LOGIN_SUCCESS,
    payload: { token: token },
  };
};

export const getRepoRequest = () => {
  return {
    type: actionConstants.GET_REPO_REQUEST,
    payload: { isLoading: true },
  };
};

export const getRepoSuccess = (repos) => {
  return {
    type: actionConstants.GET_REPO_SUCCESS,
    payload: { repos: repos },
  };
};

export const getRepoFailure = () => {
  return {
    type: actionConstants.GET_REPO_FAILURE,
    payload: {
      isError: true,
    },
  };
};
