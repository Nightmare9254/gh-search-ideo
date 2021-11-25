export type loadingTypes = 'loading' | 'loaded' | 'error' | 'idle';

export enum SortTypes {
  BEST_MATCH = 'best-match',
  MOST_STARS = 'most-stars',
  FEWEST_STARS = 'fewest-stars',
  FEWEST_FORKS = 'fewest-forks',
  MOST_FORKS = 'most-forks',
  RECENTLY_UPDATED = 'recently-updated',
  LEAST_RECENTLY_UPDATED = 'least-recently-updated',
}

export enum SortValue {
  BEST_MATCH = 'order=desc',
  MOST_STARS = 'order=desc&sort=stars',
  FEWEST_STARS = 'order=asc&sort=stars',
  FEWEST_FORKS = 'order=asc&sort=forks',
  MOST_FORKS = 'order=desc&sort=forks',
  RECENTLY_UPDATED = 'order=desc&sort=updated',
  LEAST_RECENTLY_UPDATED = 'order=asc&sort=updated',
}
export enum UserSortTypes {
  BEST_MATCH = 'best-match',
  MOST_FOLLOWERS = 'most-followers',
  FEWEST_FOLLOWERS = 'fewest-followers',
  MOST_REPOSITORIES = 'most-repositories',
  FEWEST_REPOSITORIES = 'fewest-repositories',
  RECENTLY_JOINED = 'recently-joined',
  LEAST_RECENTLY_JOINED = 'least-recently-joined',
}

export enum UserSortValue {
  BEST_MATCH = 'order=desc',
  MOST_FOLLOWERS = 'order=desc&sort=followers',
  FEWEST_FOLLOWERS = 'order=asc&sort=followers',
  MOST_REPOSITORIES = 'order=desc&sort=repositories',
  FEWEST_REPOSITORIES = 'order=asc&sort=repositories',
  RECENTLY_JOINED = 'order=desc&sort=joined',
  LEAST_RECENTLY_JOINED = 'order=asc&sort=joined',
}
export type SortValues = SortValue | UserSortValue;
export type Sort = SortTypes | UserSortTypes | SearchType;
export enum SearchType {
  REPOSITORIES = 'repositories',
  USERS = 'users',
}
