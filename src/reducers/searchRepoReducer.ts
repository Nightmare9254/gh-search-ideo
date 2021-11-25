import { Actions, ActionType, State } from '../interfaces/searchReducer';

const { SET_REPOS, SET_USERS } = ActionType;

export const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case SET_REPOS: {
      return { ...state, repos: action.payload };
    }
    case SET_USERS: {
      return { ...state, users: action.payload };
    }
    default:
      throw new Error(`Unhandled action: ${action}`);
  }
};
