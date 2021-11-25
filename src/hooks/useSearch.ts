import { useCallback, useState } from 'react';
import { loadingTypes, SortValue } from '../interfaces/utils';

export const useSearch = () => {
  const [loading, setLoading] = useState<loadingTypes>('idle');

  const handleSearch = useCallback(
    async <T>(
      url: string,
      query: SortValue | string = '',
      page: number = 1,
      limit: number = 20
    ) => {
      if (!url) return null;
      setLoading('loading');

      try {
        const baseUrl = query
          ? `https://api.github.com/${url}&${query}&per_page=${limit}&page=${page}`
          : `https://api.github.com/${url}`;
        const res = await fetch(baseUrl);
        const data: T = await res.json();

        setLoading('loaded');
        return data;
      } catch (err) {
        setLoading('error');
        return null;
      }
    },
    []
  );

  return { loading, handleSearch };
};
