import React, { FC, useEffect, useState } from 'react';
import { formatGHApiUrl } from '../../helpers/stringFormats';
import { ICommits } from '../../interfaces/commits';
import { useSearch } from '../../hooks/useSearch';
import Commit from './Commit';

const Commits: FC<{ commitsUrl: string }> = ({ commitsUrl }) => {
  const [commits, setCommits] = useState<ICommits[]>();
  const { handleSearch, loading } = useSearch();

  useEffect(() => {
    handleSearch<ICommits[]>(
      `${formatGHApiUrl(commitsUrl, /{(.*?)}/)}` //replace string between curly braces
    ).then(data => setCommits(data));
  }, [commitsUrl]);

  return (
    <section>
      {commits?.map(({ author, commit, sha }) => (
        <Commit key={sha} author={author} commit={commit} />
      ))}
    </section>
  );
};

export default Commits;
