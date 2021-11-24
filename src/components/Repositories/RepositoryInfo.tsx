import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatGHApiUrl } from '../../helpers/stringFormats';
import { useSearch } from '../../hooks/useSearch';
import { IRepos, Owner } from '../../interfaces/repoInterfaces';
import Commits from '../Commits/Commits';

const RepositoryInfo = () => {
  const { handleSearch } = useSearch();
  const [error, setError] = useState('');
  const pathname = window.location.pathname.slice(1);
  const [repoInfo, setRepoInfo] = useState<IRepos>();
  const [contributors, setContributors] = useState<Owner[]>();

  useEffect(() => {
    handleSearch<IRepos>(`${pathname}`).then(data => {
      if (data?.message) return setError(data.message);

      setRepoInfo(data);
    });
  }, [pathname, handleSearch]);

  useEffect(() => {
    if (repoInfo && !repoInfo.message) {
      console.log(repoInfo.message);
      // handleSearch<Owner[]>(
      //   `${formatGHApiUrl(repoInfo?.contributors_url)}`
      // ).then(data => setContributors(data));
    }
  }, [repoInfo, handleSearch]);

  return (
    <main className="single__repo">
      {error ? (
        <p>{error}</p>
      ) : (
        <div>
          <section className="single__repo-info">
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
            <aside>
              <h2 className="single__repo-contributors">
                Contributors: ({contributors?.length})
              </h2>
              <div className="contributors__wrapper">
                {contributors?.map(({ login, url, id }) => (
                  <Link
                    key={id}
                    to={`/${formatGHApiUrl(url, /https:\/\/api.github.com\//)}`}
                    className="single__repo-contributor btn--primary "
                  >
                    {login}
                  </Link>
                ))}
              </div>
            </aside>
          </section>
          {repoInfo ? (
            <Commits commitsUrl={repoInfo?.commits_url} />
          ) : (
            <p>There is not commits yet</p>
          )}
        </div>
      )}
    </main>
  );
};

export default RepositoryInfo;
