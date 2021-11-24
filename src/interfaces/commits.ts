import { Owner } from './repoInterfaces';

export interface CommitsArr {
  commits: ICommits[];
  message?: string;
}
export interface ICommits {
  sha: string;
  node_id: string;
  commit: ICommit;
  url: string;
  html_url: string;
  comments_url: string;
  author: Owner;
  committer: Owner;
  parents?: ParentsEntity[] | null;
}
export interface ICommit {
  author: AuthorOrCommitter1;
  committer: AuthorOrCommitter1;
  message: string;
  tree: Tree;
  url: string;
  comment_count: number;
  verification: Verification;
}
export interface AuthorOrCommitter1 {
  name: string;
  email: string;
  date: string;
}
export interface Tree {
  sha: string;
  url: string;
}
export interface Verification {
  verified: boolean;
  reason: string;
  signature?: null;
  payload?: null;
}

export interface ParentsEntity {
  sha: string;
  url: string;
  html_url: string;
}
