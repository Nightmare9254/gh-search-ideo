import { useRepoContext } from '../../hooks/useSearchRepo';
import SingleRepository from './SingleRepository';

const Repositories = () => {
  const { repos } = useRepoContext();

  return (
    <main>
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
