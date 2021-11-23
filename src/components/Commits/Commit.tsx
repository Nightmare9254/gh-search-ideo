import dayjs from 'dayjs';
import { FC } from 'react';
import { ICommit } from '../../interfaces/commits';
import { Owner } from '../../interfaces/repoInterfaces';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Link } from 'react-router-dom';
import { formatGHApiUrl } from '../../helpers/stringFormats';

const Commit: FC<{ author: Owner; commit: ICommit }> = ({ author, commit }) => {
  dayjs.extend(relativeTime);

  return (
    <>
      <p>{commit.message}</p>
      <div>
        {author && (
          <>
            <img src={author.avatar_url} alt="Author of commit profile" />
            <Link
              to={`/${formatGHApiUrl(
                author.url,
                /https:\/\/api.github.com\//
              )}`}
            >
              {commit.author.name}
            </Link>
          </>
        )}
        {dayjs(commit.author.date).fromNow()}
      </div>
    </>
  );
};

export default Commit;
