import { FC } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { ISingleRepo } from '../../interfaces/repoInterfaces';
import { formatGHApiUrl } from '../../helpers/stringFormats';

const SingleRepository: FC<ISingleRepo> = ({
  fullName,
  createdAt,
  description,
  topics,
  url,
  language,
  license,
}) => {
  return (
    <section className="repo">
      <Link
        to={`/${formatGHApiUrl(url, /\/search\//)}`}
        className="repo__link link"
      >
        {fullName.split('/')[0]}
        <span className="repo__link--name">{`/${fullName.split('/')[1]}`}</span>
      </Link>
      <p className="repo__description">{description}</p>
      <p className="repo__info">
        {language && (
          <>
            Written in:<span className="repo__info--item"> {language}</span>{' '}
          </>
        )}
        {license && (
          <>
            Licensed on:
            <span className="repo__info--item"> {license?.name}</span>{' '}
          </>
        )}
        Created At:
        <span className="repo__info--item">
          {dayjs(createdAt).format('DD MM YYYY')}
        </span>
      </p>
      {topics && (
        <aside className="repo__topics">
          {topics?.map((topic, idx) => (
            <button className="repo__topic--btn btn--primary" key={idx}>
              {topic}
            </button>
          ))}
        </aside>
      )}
    </section>
  );
};

export default SingleRepository;
