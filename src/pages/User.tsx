import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { IRepos, SingleUser } from '../interfaces/repoInterfaces';
import { useSearch } from '../hooks/useSearch';
import { formatGHApiUrl } from '../helpers/stringFormats';
import SingleRepository from '../components/Repositories/SingleRepository';
dayjs.extend(relativeTime);

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState<SingleUser>();
  const [userRepos, setUserRepos] = useState<IRepos[]>();
  const { handleSearch, loading } = useSearch();

  useEffect(() => {
    handleSearch<SingleUser>(`users/${id}`).then(data => setUser(data));
  }, [id, handleSearch]);

  useEffect(() => {
    if (user)
      handleSearch<IRepos[]>(
        `${formatGHApiUrl(user?.repos_url, /https:\/\/api.github.com\//)}`
      ).then(data => setUserRepos(data));
  }, [user, handleSearch]);

  return (
    <main className="user">
      <section className="user__information">
        <img
          src={user?.avatar_url ? user.avatar_url : user?.gravatar_id}
          alt="User account profile"
          className="user__image"
        />
        <aside>
          <h1 className="user__name">{user?.name}</h1>
          <p className="user__login">{user?.login}</p>
          {user?.bio && (
            <p className="user__bio">
              <i className="fas fa-user"></i> {user?.bio}
            </p>
          )}
          {user?.location && (
            <p className="user__bio">
              <i className="fas fa-map-marker-alt"></i> {user?.location}
            </p>
          )}
          {user?.email && (
            <p className="user__bio">
              <i className="fas fa-envelope"></i> {user?.email}
            </p>
          )}
          <p className="user__bio">
            <i className="far fa-calendar"></i>{' '}
            {dayjs(user?.created_at).format('DD-MM-YYYY')}
          </p>
        </aside>
      </section>
      <section className="user__repos">
        {userRepos?.map(
          ({
            id,
            full_name,
            created_at,
            description,
            topics,
            commits_url,
            url,
            language,
            license,
          }) => (
            <SingleRepository
              key={id}
              fullName={full_name}
              createdAt={created_at}
              description={description}
              topics={topics}
              commitsUrl={commits_url}
              url={url}
              language={language}
              license={license}
            />
          )
        )}
      </section>
    </main>
  );
};

export default User;
