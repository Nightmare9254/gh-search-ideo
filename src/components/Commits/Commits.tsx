import { FC, useEffect, useState } from 'react';
import { formatGHApiUrl } from '../../helpers/stringFormats';
import { CommitsArr, ICommits } from '../../interfaces/commits';
import { useSearch } from '../../hooks/useSearch';
import Commit from './Commit';
import Spinner from '../Spinner';

const Commits: FC<{ commitsUrl: string }> = ({ commitsUrl }) => {
  const [commits, setCommits] = useState<ICommits[]>();
  const { handleSearch, loading } = useSearch();
  const [error, setError] = useState('');

  useEffect(() => {
    handleSearch<any | ICommits[]>(
      `${formatGHApiUrl(commitsUrl, /{(.*?)}/)}` //replace string between curly braces
    ).then(data => {
      if (data?.message) return setError(data.message);

      setCommits(data);
    });
  }, [commitsUrl, handleSearch]);

  return (
    <>
      {error && <p className="message">{error}</p>}
      {loading === 'loaded' && !error ? (
        <section className="commits">
          <h2 className="commits__length">Commits: ({commits?.length})</h2>
          {commits?.map(({ author, commit, sha }) => (
            <Commit key={sha} author={author} commit={commit} />
          ))}
        </section>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Commits;
