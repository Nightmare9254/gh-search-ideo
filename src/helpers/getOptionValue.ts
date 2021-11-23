import { SortTypes, SortValue } from '../interfaces/utils';

export const getOptionValue = (option: string): SortValue => {
  switch (option) {
    case SortTypes.BEST_MATCH:
      return SortValue.BEST_MATCH;
    case SortTypes.FEWEST_FORKS:
      return SortValue.FEWEST_FORKS;
    case SortTypes.MOST_FORKS:
      return SortValue.MOST_FORKS;
    case SortTypes.FEWEST_STARS:
      return SortValue.FEWEST_STARS;
    case SortTypes.MOST_STARS:
      return SortValue.MOST_STARS;
    case SortTypes.RECENTLY_UPDATED:
      return SortValue.RECENTLY_UPDATED;
    case SortTypes.LEAST_RECENTLY_UPDATED:
      return SortValue.LEAST_RECENTLY_UPDATED;
    default:
      return SortValue.BEST_MATCH;
  }
};
