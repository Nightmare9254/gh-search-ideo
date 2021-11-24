import { formatGHApiUrl } from '../helpers/stringFormats';
import { Owner } from '../interfaces/repoInterfaces';
import { useSearch } from './useSearch';

export const useContributors = () => {
  const { handleSearch, loading } = useSearch();
  const fetchOwner = (contributorsUrl: string) =>
    handleSearch<Owner[]>(`${formatGHApiUrl(contributorsUrl)}`);

  return {
    fetchOwner,
    loading,
  };
};
