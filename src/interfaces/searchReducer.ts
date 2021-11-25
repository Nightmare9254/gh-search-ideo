import { IRepos, Owner } from './repoInterfaces';

export interface BaseState<T> {
  incomplete_results: boolean;
  items?: T[];
  total_count: number | null;
  message?: string;
}

export interface State {
  repos: BaseState<IRepos>;
  users: BaseState<Owner>;
}

export enum ActionType {
  SEARCH = 'search',
  SET_REPOS = 'set_repos',
  SET_USERS = 'set_users',
}

interface ActionSetUsers {
  type: ActionType.SET_USERS;
  payload: BaseState<Owner>;
}
interface ActionSetRepos {
  type: ActionType.SET_REPOS;
  payload: BaseState<IRepos>;
}

export type Actions = ActionSetRepos | ActionSetUsers;
