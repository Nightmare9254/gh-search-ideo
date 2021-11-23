import { ChangeEvent } from 'react';
import { formatDisplay } from '../../helpers/stringFormats';
import { useSearch } from '../../hooks/useSearch';
import { useRepoContext } from '../../hooks/useSearchRepo';
import { IRepos, SortTypes, SortValue } from '../../interfaces/repoInterfaces';
import { ActionType, State } from '../../interfaces/searchReducer';

const RepoFilter = () => {
  const { handleSearch, loading } = useSearch();
  const { search, dispatch, setSort, sort } = useRepoContext();

  const handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
    const sortValue = e.target.value;
    setSort(SortTypes.BEST_MATCH);
    handleSearch<State<IRepos>>(
      `search/repositories?q=${search}`,
      sortValue
    ).then(data =>
      data ? dispatch({ payload: data, type: ActionType.SET_REPOS }) : null
    );
  };

  return (
    <div>
      <div>
        <select name="sort" id="sort-type" onChange={handleSort}>
          <option disabled={true}>Sort:{formatDisplay(sort)} </option>
          <option value={SortValue.BEST_MATCH}>
            {formatDisplay(SortTypes.BEST_MATCH)}
          </option>
          <option value={SortTypes.BEST_MATCH}>
            {formatDisplay(SortTypes.MOST_STARS)}
          </option>
          <option value={SortTypes.FEWEST_STARS}>
            {formatDisplay(SortTypes.FEWEST_STARS)}
          </option>
          <option value={SortTypes.MOST_FORKS}>
            {formatDisplay(SortTypes.MOST_FORKS)}
          </option>
          <option value={SortTypes.FEWEST_FORKS}>
            {formatDisplay(SortTypes.FEWEST_FORKS)}
          </option>
          <option value={SortTypes.RECENTLY_UPDATED}>
            {formatDisplay(SortTypes.RECENTLY_UPDATED)}
          </option>
          <option value={SortTypes.LEAST_RECENTLY_UPDATED}>
            {formatDisplay(SortTypes.LEAST_RECENTLY_UPDATED)}
          </option>
        </select>
      </div>
    </div>
  );
};

export default RepoFilter;
