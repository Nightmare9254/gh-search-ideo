import { useCallback, useState } from 'react';
import { loadingTypes, SortValue } from '../interfaces/utils';

export const useSearch = () => {
  const [loading, setLoading] = useState<loadingTypes>('idle');

  const handleSearch = useCallback(
    async <T>(
      url: string,
      query: SortValue | string = '',
      limit: number = 3,
      page: number = 1
    ) => {
      if (!url) return;
      setLoading('loading');
      try {
        const baseUrl = query
          ? `https://api.github.com/${url}&${query}&per_page=${limit}&page=${page}`
          : `https://api.github.com/${url}`;
        // &per_page=${limit}&page=${page}
        const res = await fetch(baseUrl);
        const data: T = await res.json();

        setLoading('loaded');
        return data;
      } catch (err) {
        setLoading('error');
      }
    },
    []
  );

  return { loading, handleSearch };
};
