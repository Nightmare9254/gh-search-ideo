import { useEffect } from 'react';
import { useSearch } from '../../hooks/useSearch';
import { useRepoContext } from '../../hooks/useSearchRepo';
import { IRepos } from '../../interfaces/repoInterfaces';
import { State, ActionType } from '../../interfaces/searchReducer';

const Header = () => {
  const { dispatch, search, setSearch, setSort, sort } = useRepoContext();
  const { handleSearch, loading } = useSearch();
  console.log(sort);
  useEffect(() => {
    const debounce = setTimeout(() => {
      if (!search) return;

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
