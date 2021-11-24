import { useEffect } from 'react';
import { useSearch } from '../../hooks/useSearch';
import { useRepoContext } from '../../hooks/useSearchRepo';
import { IRepos } from '../../interfaces/repoInterfaces';
import { State, ActionType } from '../../interfaces/searchReducer';
import RepoFilter from '../Filters/RepoFilters';
import Spinner from '../Spinner';

const Header = () => {
  const { dispatch, search, setSearch } = useRepoContext();
  const { handleSearch, loading } = useSearch();

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (!search) return;

      handleSearch<State<IRepos>>(`search/repositories?q=${search}`).then(
        data =>
          data ? dispatch({ payload: data, type: ActionType.SET_REPOS }) : null
      );
    }, 500);

    return () => clearTimeout(debounce);
  }, [search, dispatch, handleSearch]);

  return (
    <header className="header">
      <section>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search for repos"
          className="header__search"
        />
        <RepoFilter />
      </section>
      {loading === 'loading' && <Spinner />}
    </header>
  );
};

export default Header;
