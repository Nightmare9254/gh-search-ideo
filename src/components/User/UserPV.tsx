import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatGHApiUrl } from '../../helpers/stringFormats';
import { useSearch } from '../../hooks/useSearch';
import { Owner } from '../../interfaces/repoInterfaces';
import { PVUser } from '../../interfaces/userInterfaces';

const UserPV: FC<PVUser> = ({ avatarUrl, name, url, followersUrl }) => {
  const { handleSearch } = useSearch();
  const [followersCount, setFollowersCount] = useState<number | undefined>(0);

  useEffect(() => {
    if (!followersUrl) return;

    handleSearch<Owner[]>(`${formatGHApiUrl(followersUrl)}?&per_page=100`).then(
      data => setFollowersCount(data?.length)
    );
  }, [followersUrl, handleSearch]);

  return (
    <>
      <img
        src={avatarUrl}
        alt="Author of commit profile"
        className="commit__author-profile"
      />
      <Link
        to={`/${formatGHApiUrl(url, /https:\/\/api.github.com\//)}`}
        className="commit__author-link link"
      >
        {name}
      </Link>
      {followersCount && followersCount >= 1 ? (
        <p className="commit__followers">
          <i className="fas fa-eye"></i> {followersCount}
          {followersCount === 100 ? '+' : ''}
        </p>
      ) : null}
    </>
  );
};

export default UserPV;
