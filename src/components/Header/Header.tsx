import { useEffect } from 'react';
import { useSearch } from '../../hooks/useSearch';
import { useRepoContext } from '../../hooks/useSearchRepo';
import { IRepos, SortTypes } from '../../interfaces/repoInterfaces';
import { State, ActionType } from '../../interfaces/searchReducer';

const Header = () => {
  const { dispatch, search, setSearch, setSort } = useRepoContext();
  const { handleSearch, loading } = useSearch();

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (!search) return;
      setSort(SortTypes.BEST_MATCH);
      handleSearch<State<IRepos>>(`search/repositories?q=${search}`).then(
        data =>
          data ? dispatch({ payload: data, type: ActionType.SET_REPOS }) : null
      );
    }, 500);

    return () => clearTimeout(debounce);
  }, [search, dispatch]);

  return (
    <header>
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </header>
  );
};

export default Header;
