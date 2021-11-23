export interface IRepos {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description?: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url?: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage?: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language?: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url?: string;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license?: License;
  allow_forking: boolean;
  is_template: boolean;
  topics?: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  score: number;
}

export interface License {
  key: string;
  name: string;
  node_id: string;
  url: string;
  spdx_id: string;
}

export interface Owner {
  login: string;
  id: number;
  node_id: string;
  avatar_url?: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface SingleUser extends Owner {
  name: string;
  company?: null;
  blog: string;
  location: string;
  email?: null;
  hireable: boolean;
  bio: string;
  twitter_username?: null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

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
