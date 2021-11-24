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
    <div className="commit">
      {author && (
        <>
          <img
            src={author.avatar_url}
            alt="Author of commit profile"
            className="commit__author-profile"
          />
          <Link
            to={`/${formatGHApiUrl(author.url, /https:\/\/api.github.com\//)}`}
            className="commit__author-link link"
          >
            {commit.author.name}
          </Link>
        </>
      )}
      <p className="commit__date">{dayjs(commit.author.date).fromNow()}</p>
      <p
        className={`commit__message ${
          commit.message.length >= 180 ? 'commit__message--limit' : null
        }`}
      >
        {commit.message.slice(0, 180)}
        {commit.message.length >= 180 ? '...' : null}
      </p>
    </div>
  );
};

export default Commit;
