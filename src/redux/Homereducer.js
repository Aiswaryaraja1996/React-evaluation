import { actionConstants } from "./Action";

const initialState = {
  repos: [],
  isLoading: true,
  isError: false,
};

export default function Homereducer(state = initialState, action) {
  switch (action.type) {
    case actionConstants.GET_REPO_REQUEST:
      return { ...state, isLoading: true };
    case actionConstants.GET_REPO_SUCCESS:
      return { ...state, repos: action.payload.repos, isLoading: false };
    case actionConstants.GET_REPO_FAILURE:
      return { ...state, isError: true };
    default:
      return state;
  }
}
