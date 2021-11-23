import { useState } from 'react';
import { SortValue } from '../interfaces/repoInterfaces';
import { loadingTypes } from '../interfaces/utils';

export const useSearch = () => {
  const [loading, setLoading] = useState<loadingTypes>('idle');
  const handleSearch = async <T>(
    url: string,
    query: SortValue | string = ''
  ) => {
    setLoading('loading');
    try {
      const baseUrl = query
        ? `https://api.github.com/${url}&page=2&per_page=1`
        : `https://api.github.com/${url}`;

      const res = await fetch(baseUrl);
      const data: T = await res.json();
      console.log(data);
      setLoading('loaded');
      return data;
    } catch (err) {
      setLoading('error');

      console.log(err);
    }
  };

  return {
    loading,
    handleSearch,
  };
};
