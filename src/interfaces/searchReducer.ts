import { IRepos } from './repoInterfaces';

export interface State<T> {
  incomplete_results: boolean;
  items?: T[];
  total_count: number | null;
  message?: string;
}

export enum ActionType {
  SEARCH = 'search',
  SET_REPOS = 'set_repos',
}

interface ActionSearch {
  type: ActionType.SEARCH;
  payload: string;
}
interface ActionSetRepos {
  type: ActionType.SET_REPOS;
  payload: State<IRepos>;
}

export type Actions = ActionSearch | ActionSetRepos;
