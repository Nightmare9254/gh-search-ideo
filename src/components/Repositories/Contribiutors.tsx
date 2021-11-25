import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatGHApiUrl } from '../../helpers/stringFormats';
import { useSearch } from '../../hooks/useSearch';
import { Owner } from '../../interfaces/repoInterfaces';
import Spinner from '../Spinner';

const Contributors: FC<{ contributorsUrl: string }> = ({ contributorsUrl }) => {
  const { handleSearch, loading } = useSearch();
  const [contributors, setContributors] = useState<Owner[]>();
  const [contributionPage, setContributionPage] = useState(1);
  const [exhausted, setExhausted] = useState(false);

  useEffect(() => {
    handleSearch<Owner[]>(
      `${formatGHApiUrl(contributorsUrl)}?&page=${contributionPage}`
    ).then(data => {
      if (data?.length === 0) setExhausted(true);
      if (data !== null)
        setContributors(prev =>
          prev !== undefined ? [...prev, ...data] : data
        );
    });
  }, [contributorsUrl, contributionPage, handleSearch]);

  return (
    <aside>
      <>
        <h2 className="single__repo-contributors">Contributors:</h2>
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
        {contributors !== undefined && contributors?.length <= 30 ? null : (
          <button
            onClick={() => setContributionPage(prevPage => (prevPage += 1))}
            disabled={exhausted}
            className="btn--secondary"
          >
            Load more..
          </button>
        )}
      </>

      {loading === 'loading' && <Spinner />}
    </aside>
  );
};

export default Contributors;
