import { SortValue, SortValues, UserSortValue } from '../interfaces/utils';

export const getOptionValue = (option: string): SortValues => {
  switch (option) {
    case SortValue.BEST_MATCH:
      return SortValue.BEST_MATCH;
    case SortValue.FEWEST_FORKS:
      return SortValue.FEWEST_FORKS;
    case SortValue.MOST_FORKS:
      return SortValue.MOST_FORKS;
    case SortValue.FEWEST_STARS:
      return SortValue.FEWEST_STARS;
    case SortValue.MOST_STARS:
      return SortValue.MOST_STARS;
    case SortValue.RECENTLY_UPDATED:
      return SortValue.RECENTLY_UPDATED;
    case SortValue.LEAST_RECENTLY_UPDATED:
      return SortValue.LEAST_RECENTLY_UPDATED;

    case UserSortValue.BEST_MATCH:
      return UserSortValue.BEST_MATCH;
    case UserSortValue.FEWEST_FOLLOWERS:
      return UserSortValue.FEWEST_FOLLOWERS;
    case UserSortValue.MOST_FOLLOWERS:
      return UserSortValue.MOST_FOLLOWERS;
    case UserSortValue.MOST_REPOSITORIES:
      return UserSortValue.FEWEST_REPOSITORIES;
    case UserSortValue.RECENTLY_JOINED:
      return UserSortValue.RECENTLY_JOINED;
    case UserSortValue.LEAST_RECENTLY_JOINED:
      return UserSortValue.LEAST_RECENTLY_JOINED;

    default:
      return SortValue.BEST_MATCH;
  }
};
