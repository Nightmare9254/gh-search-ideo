import { ChangeEvent } from 'react';
import { getOptionValue } from '../../helpers/getOptionValue';
import { formatDisplay } from '../../helpers/stringFormats';
import { useSearch } from '../../hooks/useSearch';
import { useRepoContext } from '../../hooks/useSearchRepo';
import { IRepos } from '../../interfaces/repoInterfaces';
import { ActionType, State } from '../../interfaces/searchReducer';
import { SortTypes, SortValue } from '../../interfaces/utils';
import Spinner from '../Spinner';

const RepoFilter = () => {
  const { handleSearch, loading } = useSearch();
  const { search, dispatch, setSort } = useRepoContext();

  const handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
    const sortValue = getOptionValue(e.target.value);
    setSort(sortValue);
    handleSearch<State<IRepos>>(
      `search/repositories?q=${search}`,
      sortValue
    ).then(data =>
      data ? dispatch({ payload: data, type: ActionType.SET_REPOS }) : null
    );
  };

  return (
    <>
      <select name="sort" id="sort-type" onChange={handleSort} className="sort">
        <option className="sort__header" disabled={true}>
          Sort
        </option>
        <option className="sort__option" value={SortValue.BEST_MATCH}>
          {formatDisplay(SortTypes.BEST_MATCH)}
        </option>
        <option className="sort__option" value={SortTypes.MOST_STARS}>
          {formatDisplay(SortTypes.MOST_STARS)}
        </option>
        <option className="sort__option" value={SortTypes.FEWEST_STARS}>
          {formatDisplay(SortTypes.FEWEST_STARS)}
        </option>
        <option className="sort__option" value={SortTypes.MOST_FORKS}>
          {formatDisplay(SortTypes.MOST_FORKS)}
        </option>
        <option className="sort__option" value={SortTypes.FEWEST_FORKS}>
          {formatDisplay(SortTypes.FEWEST_FORKS)}
        </option>
        <option className="sort__option" value={SortTypes.RECENTLY_UPDATED}>
          {formatDisplay(SortTypes.RECENTLY_UPDATED)}
        </option>
        <option
          className="sort__option"
          value={SortTypes.LEAST_RECENTLY_UPDATED}
        >
          {formatDisplay(SortTypes.LEAST_RECENTLY_UPDATED)}
        </option>
      </select>
      {loading === 'loading' && <Spinner />}
    </>
  );
};

export default RepoFilter;
