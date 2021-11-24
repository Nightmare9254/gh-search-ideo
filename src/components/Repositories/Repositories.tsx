import { useRepoContext } from '../../hooks/useSearchRepo';
import SingleRepository from './SingleRepository';

const Repositories = () => {
  const { repos, search } = useRepoContext();

  return (
    <main className="repos">
      {repos.total_count === null && (
        <p className="message">Try searching something...</p>
      )}
      {repos.total_count === 0 && (
        <p className="message">
          We could not find anything matching{' '}
          <span className="message--error">{search}</span>
        </p>
      )}
      {repos?.items?.map(
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
    </main>
  );
};

export default Repositories;
