export type loadingTypes = 'loading' | 'loaded' | 'error' | 'idle';

export enum SortTypes {
  BEST_MATCH = 'best-match',
  MOST_STARS = 'most-stars',
  FEWEST_STARS = 'fewest-stars',
  FEWEST_FORKS = 'fewest-forks',
  MOST_FORKS = 'most-forks',
  HELP_WANTED_ISSUES = 'help-wanted-issues',
  RECENTLY_UPDATED = 'recently-updated',
  LEAST_RECENTLY_UPDATED = 'least-recently-updated',
}

export enum SortValue {
  BEST_MATCH = 'order=desc',
  MOST_STARS = 'order=desc&sort=stars',
  FEWEST_STARS = 'order=asc&sort=stars',
  FEWEST_FORKS = 'order=asc&sort=forks',
  MOST_FORKS = 'order=desc&sort=forks',
  //  HELP_WANTED_ISSUES = 'help-wanted-issues',
  RECENTLY_UPDATED = 'order=desc&sort=updated',
  LEAST_RECENTLY_UPDATED = 'order=asc&sort=updated',
}
