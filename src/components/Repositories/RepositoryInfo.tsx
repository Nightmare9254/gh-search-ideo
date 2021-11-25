import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSearch } from '../../hooks/useSearch';
import { IRepos } from '../../interfaces/repoInterfaces';
import Commits from '../Commits/Commits';
import Spinner from '../Spinner';
import Contributors from './Contribiutors';

const RepositoryInfo = () => {
  const { handleSearch, loading } = useSearch();

  const [error, setError] = useState('');
  const pathname = window.location.pathname.slice(1);
  const [repoInfo, setRepoInfo] = useState<IRepos>();

  useEffect(() => {
    handleSearch<IRepos>(`${pathname}`).then(data => {
      if (data?.message) return setError(data.message);

      if (data !== null) setRepoInfo(data);
    });
  }, [pathname, handleSearch]);

  return (
    <main className="single__repo">
      {error ? (
        <p className="message">{error}</p>
      ) : (
        <>
          <section className="single__repo-info">
            <>
              <h1 className="single__repo-name">
                Repository Name:{' '}
                <span className="single__repo-title">{repoInfo?.name}</span>
              </h1>
              {repoInfo?.owner && (
                <Link
                  to={`/users/${repoInfo?.owner.login}`}
                  className="single__repo-profile link"
                >
                  Owner:{' '}
                  <span className="single__repo-owner">
                    {repoInfo.owner.login}
                  </span>
                </Link>
              )}
              {repoInfo?.contributors_url ? (
                <Contributors contributorsUrl={repoInfo.contributors_url} />
              ) : (
                <p>No one has contributed</p>
              )}
            </>
          </section>
          {repoInfo ? (
            <Commits commitsUrl={repoInfo?.commits_url} />
          ) : (
            <p className="message">There is not commits yet</p>
          )}
        </>
      )}
      {loading === 'loading' && <Spinner />}
    </main>
  );
};

export default RepositoryInfo;
