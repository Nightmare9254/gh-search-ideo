import { FC, useEffect, useState } from 'react';
import { formatGHApiUrl } from '../../helpers/stringFormats';
import { ICommits } from '../../interfaces/commits';
import { useSearch } from '../../hooks/useSearch';
import Commit from './Commit';
import Spinner from '../Spinner';

const Commits: FC<{ commitsUrl: string }> = ({ commitsUrl }) => {
  const [commits, setCommits] = useState<ICommits[]>();
  const { handleSearch, loading } = useSearch();
  const [commitsPage, setCommitsPage] = useState(1);
  const [exhausted, setExhausted] = useState(false);

  useEffect(() => {
    handleSearch<ICommits[]>(
      `${formatGHApiUrl(commitsUrl, /{(.*?)}/)}?&page=${commitsPage}`
    ).then(data => {
      if (data?.length === 0) setExhausted(true);

      if (data !== null)
        setCommits(prev => (prev !== undefined ? [...prev, ...data] : data));
    });
  }, [commitsUrl, handleSearch, commitsPage]);
  return (
    <>
      <section className="commits">
        <h2 className="commits__length">Commits: </h2>
        {commits?.map(({ author, commit, sha }) => (
          <Commit key={sha} author={author} commit={commit} />
        ))}
        {commits !== undefined && commits?.length <= 30 ? null : (
          <button
            onClick={() => setCommitsPage(prevPage => (prevPage += 1))}
            disabled={exhausted}
            className="btn--secondary"
          >
            Load more..
          </button>
        )}
      </section>

      {loading === 'loading' && <Spinner />}
    </>
  );
};

export default Commits;
