import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatGHApiUrl } from '../../helpers/stringFormats';
import { useSearch } from '../../hooks/useSearch';
import { IRepos, Owner } from '../../interfaces/repoInterfaces';
import Commits from '../Commits/Commits';

const RepositoryInfo = () => {
  const { handleSearch, loading } = useSearch();
  const pathname = window.location.pathname.slice(1);
  const [repoInfo, setRepoInfo] = useState<IRepos>();
  const [contributors, setContributors] = useState<Owner[]>();

  useEffect(() => {
    handleSearch<IRepos>(`${pathname}`).then(data => setRepoInfo(data));
  }, [pathname]);

  useEffect(() => {
    if (repoInfo) {
      handleSearch<Owner[]>(
        `${formatGHApiUrl(repoInfo?.contributors_url)}`
      ).then(data => setContributors(data));
    }
  }, [repoInfo]);

  return (
    <main>
      <section>
        <h1>Repository Name: {repoInfo?.name}</h1>
        {repoInfo?.owner && (
          <Link to={`/users/${repoInfo?.owner.login}`}>
            Owner: <span>{repoInfo.owner.login}</span>
          </Link>
        )}
        <aside>
          <h2>Contributors</h2>
          {contributors?.map(({ login, url, id }) => (
            <Link
              key={id}
              to={`/${formatGHApiUrl(url, /https:\/\/api.github.com\//)}`}
            >
              {login}
            </Link>
          ))}
        </aside>
      </section>
      {repoInfo ? (
        <Commits commitsUrl={repoInfo?.commits_url} />
      ) : (
        <p>There is not commits yet</p>
      )}
    </main>
  );
};

export default RepositoryInfo;
