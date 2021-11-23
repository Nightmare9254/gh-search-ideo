import { FC } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { License } from '../../interfaces/repoInterfaces';
import { formatGHApiUrl } from '../../helpers/stringFormats';

const SingleRepository: FC<{
  fullName: string;
  createdAt: string;
  commitsUrl: string;
  url: string;
  language?: string;
  license?: License;
  description?: string;
  topics?: string[];
}> = ({
  fullName,
  createdAt,

  description,
  topics,
  url,
  language,
  license,
}) => {
  return (
    <section>
      <Link to={`/${formatGHApiUrl(url, /\/search\//)}`}>{fullName}</Link>
      <p>{description}</p>
      <div>
        {topics?.map((topic, idx) => (
          <button key={idx}>{topic}</button>
        ))}
      </div>
      <p>
        <span>{language}</span> <span>{license?.name}</span>{' '}
        <span>Created At {dayjs(createdAt).format('DD MM YYYY')}</span>
      </p>
    </section>
  );
};

export default SingleRepository;
