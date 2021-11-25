import { ChangeEvent } from 'react';
import { getOptionValue } from '../../helpers/getOptionValue';
import { formatDisplay } from '../../helpers/stringFormats';
import { useRepoContext } from '../../hooks/useSearchRepo';
import {
  SearchType,
  SortTypes,
  SortValue,
  UserSortTypes,
  UserSortValue,
} from '../../interfaces/utils';

const RepoFilter = () => {
  const { setSort, setSearchType, searchType, sort } = useRepoContext();

  const handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
    const sortValue = getOptionValue(e.target.value);

    setSort(sortValue);
  };

  const handleType = (e: ChangeEvent<HTMLSelectElement>) => {
    const searchType = e.target.value;
    setSort(SortValue.BEST_MATCH);
    if (searchType === SearchType.REPOSITORIES) {
      setSearchType(searchType);
    } else {
      setSearchType(SearchType.USERS);
    }
  };

  return (
    <>
      <select name="type" id="type" onChange={handleType} className="sort">
        <option className="sort__header" disabled={true}>
          Type
        </option>
        <option className="sort__option" value={SearchType.REPOSITORIES}>
          {formatDisplay(SearchType.REPOSITORIES)}
        </option>
        <option className="sort__option" value={SearchType.USERS}>
          {formatDisplay(SearchType.USERS)}
        </option>
      </select>
      <select
        name="sort"
        id="sort-type"
        onChange={handleSort}
        className="sort"
        value={sort}
      >
        <option className="sort__header" disabled={true}>
          Sort
        </option>
        {searchType === 'repositories' ? (
          <>
            <option className="sort__option" value={SortValue.BEST_MATCH}>
              {formatDisplay(SortTypes.BEST_MATCH)}
            </option>
            <option className="sort__option" value={SortValue.MOST_STARS}>
              {formatDisplay(SortTypes.MOST_STARS)}
            </option>
            <option className="sort__option" value={SortValue.FEWEST_STARS}>
              {formatDisplay(SortTypes.FEWEST_STARS)}
            </option>
            <option className="sort__option" value={SortValue.MOST_FORKS}>
              {formatDisplay(SortTypes.MOST_FORKS)}
            </option>
            <option className="sort__option" value={SortValue.FEWEST_FORKS}>
              {formatDisplay(SortTypes.FEWEST_FORKS)}
            </option>
            <option className="sort__option" value={SortValue.RECENTLY_UPDATED}>
              {formatDisplay(SortTypes.RECENTLY_UPDATED)}
            </option>
            <option
              className="sort__option"
              value={SortTypes.LEAST_RECENTLY_UPDATED}
            >
              {formatDisplay(SortTypes.LEAST_RECENTLY_UPDATED)}
            </option>
          </>
        ) : (
          <>
            <option className="sort__option" value={UserSortValue.BEST_MATCH}>
              {formatDisplay(UserSortTypes.BEST_MATCH)}
            </option>
            <option
              className="sort__option"
              value={UserSortValue.MOST_FOLLOWERS}
            >
              {formatDisplay(UserSortTypes.MOST_FOLLOWERS)}
            </option>
            <option
              className="sort__option"
              value={UserSortValue.FEWEST_FOLLOWERS}
            >
              {formatDisplay(UserSortTypes.FEWEST_FOLLOWERS)}
            </option>
            <option
              className="sort__option"
              value={UserSortValue.MOST_REPOSITORIES}
            >
              {formatDisplay(UserSortTypes.MOST_REPOSITORIES)}
            </option>
            <option
              className="sort__option"
              value={UserSortValue.FEWEST_REPOSITORIES}
            >
              {formatDisplay(UserSortTypes.FEWEST_REPOSITORIES)}
            </option>
            <option
              className="sort__option"
              value={UserSortValue.RECENTLY_JOINED}
            >
              {formatDisplay(UserSortTypes.RECENTLY_JOINED)}
            </option>
            <option
              className="sort__option"
              value={UserSortValue.LEAST_RECENTLY_JOINED}
            >
              {formatDisplay(UserSortTypes.LEAST_RECENTLY_JOINED)}
            </option>
          </>
        )}
      </select>
    </>
  );
};

export default RepoFilter;
