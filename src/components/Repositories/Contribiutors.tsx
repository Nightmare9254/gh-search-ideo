import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatGHApiUrl } from '../../helpers/stringFormats';
import { useSearch } from '../../hooks/useSearch';
import { Owner } from '../../interfaces/repoInterfaces';
import Spinner from '../Spinner';

const Contributors: FC<{ contributorsUrl: string }> = ({ contributorsUrl }) => {
  const { handleSearch, loading } = useSearch();
  const [contributors, setContributors] = useState<Owner[]>();

  useEffect(() => {
    handleSearch<Owner[]>(`${formatGHApiUrl(contributorsUrl)}`).then(data =>
      setContributors(data)
    );
  }, [contributorsUrl, handleSearch]);

  return (
    <aside>
      {loading === 'loaded' ? (
        <>
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
        </>
      ) : (
        <Spinner />
      )}
    </aside>
  );
};

export default Contributors;
