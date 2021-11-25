import { FC } from 'react';

const ResultsInfo: FC<{
  totalCount: number | null;
  search: string;
  name: string;
}> = ({ search, totalCount, name }) => {
  return (
    <>
      {totalCount === null && (
        <p className="message">Try searching something...</p>
      )}
      {totalCount === 0 && (
        <p className="message">
          We could not find anything matching{' '}
          <span className="message--error">{search}</span>
        </p>
      )}
      {totalCount && (
        <h2>
          {name}: {totalCount}
        </h2>
      )}
    </>
  );
};

export default ResultsInfo;
