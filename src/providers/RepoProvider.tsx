import { FC } from 'react';
import { SearchRepoProvider } from '../hooks/useSearchRepo';

const RepoProvider: FC = ({ children }) => {
  return <SearchRepoProvider>{children}</SearchRepoProvider>;
};

export default RepoProvider;
