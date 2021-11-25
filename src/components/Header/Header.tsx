import { useEffect } from 'react';
import { useSearch } from '../../hooks/useSearch';
import { useRepoContext } from '../../hooks/useSearchRepo';
import RepoFilter from '../Filters/RepoFilters';
import Spinner from '../Spinner';

const Header = () => {
  const { search, setSearch, setPage } = useRepoContext();
  const { loading } = useSearch();

  useEffect(() => {
    const debounce = setTimeout(() => {
      setPage(1);
    }, 500);

    return clearTimeout(debounce);
  });

  return (
    <header className="header">
      <section>
        <input
          type="text"
          value={search}
          onChange={e => {
            setSearch(e.target.value);
          }}
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
