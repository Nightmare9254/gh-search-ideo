import { createContext, FC, useContext, useReducer, useState } from 'react';
import { getOptionValue } from '../helpers/getOptionValue';
import { IRepos } from '../interfaces/repoInterfaces';
import { Actions, ActionType, State } from '../interfaces/searchReducer';
import { SortTypes, SortValue } from '../interfaces/utils';

const { SET_REPOS } = ActionType;

const reducer = (repos: State<IRepos>, action: Actions) => {
  switch (action.type) {
    case SET_REPOS: {
      return action.payload;
    }
    default:
      throw new Error(`Unhandled action: ${action.type}`);
  }
};

const useSearchReducer = () => {
  const [repos, dispatch] = useReducer(reducer, {
    incomplete_results: false,
    total_count: 0,
  });
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<SortValue>(
    getOptionValue(SortTypes.BEST_MATCH)
  );
  return {
    repos,
    dispatch,
    search,
    setSearch,
    sort,
    setSort,
  };
};

const SearchRepoContext = createContext<ReturnType<
  typeof useSearchReducer
> | null>(null);

export const useRepoContext = () => {
  const ctx = useContext(SearchRepoContext)!;

  if (!ctx)
    throw new Error(
      'Context is undefined or you are useing it outside provider'
    );

  return ctx;
};

export const SearchRepoProvider: FC = ({ children }) => {
  return (
    <SearchRepoContext.Provider value={useSearchReducer()}>
      {children}
    </SearchRepoContext.Provider>
  );
};
