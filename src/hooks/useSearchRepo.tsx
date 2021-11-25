import {
  createContext,
  FC,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { IRepos, Owner } from '../interfaces/repoInterfaces';
import { ActionType, BaseState, State } from '../interfaces/searchReducer';
import { SearchType, SortValue, SortValues } from '../interfaces/utils';
import { reducer } from '../reducers/searchRepoReducer';
import { useSearch } from './useSearch';

const { SET_REPOS, SET_USERS } = ActionType;

const initialState: State = {
  repos: {
    incomplete_results: false,
    total_count: null,
  },
  users: { incomplete_results: false, total_count: 0 },
};

const useSearchReducer = () => {
  const [data, dispatch] = useReducer(reducer, initialState);

  const [search, setSearch] = useState('');
  const [searchType, setSearchType] = useState(SearchType.REPOSITORIES);
  const [sort, setSort] = useState<SortValues>(SortValue.BEST_MATCH);
  const [page, setPage] = useState(1);
  const { handleSearch, loading } = useSearch();

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (!search) return;

      switch (searchType) {
        case SearchType.REPOSITORIES:
          return handleSearch<BaseState<IRepos>>(
            `search/repositories?q=${search}`,
            sort,
            page
          ).then(data =>
            data ? dispatch({ payload: data, type: SET_REPOS }) : null
          );

        case SearchType.USERS:
          return handleSearch<BaseState<Owner>>(
            `search/users?q=${search}`,
            sort,
            page
          ).then(data =>
            data ? dispatch({ payload: data, type: SET_USERS }) : null
          );

        default:
          throw new Error(`Unhandled action ${searchType}`);
      }
    }, 500);

    return () => clearTimeout(debounce);
  }, [search, dispatch, sort, searchType, page, handleSearch]);

  return {
    data,
    dispatch,
    page,
    setPage,
    search,
    setSearch,
    sort,
    setSort,
    searchType,
    setSearchType,
    loading,
  };
};

const SearchRepoContext = createContext<ReturnType<
  typeof useSearchReducer
> | null>(null);

export const useRepoContext = () => {
  const ctx = useContext(SearchRepoContext)!;

  if (!ctx)
    throw new Error(
      'Context is undefined or you are using it outside provider'
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
