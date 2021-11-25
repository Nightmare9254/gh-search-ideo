import dayjs from 'dayjs';
import { FC } from 'react';
import { ICommit } from '../../interfaces/commits';
import { Owner } from '../../interfaces/repoInterfaces';
import relativeTime from 'dayjs/plugin/relativeTime';
import UserPV from '../User/UserPV';

const Commit: FC<{ author: Owner; commit: ICommit }> = ({ author, commit }) => {
  dayjs.extend(relativeTime);

  return (
    <div className="commit">
      {author && (
        <UserPV
          avatarUrl={author.avatar_url}
          name={commit.author.name}
          url={author.url}
        />
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
