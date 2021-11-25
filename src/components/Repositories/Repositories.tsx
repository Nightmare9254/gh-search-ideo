import { useRepoContext } from '../../hooks/useSearchRepo';
import Spinner from '../Spinner';
import UserPV from '../User/UserPV';
import NextPage from './NextPage';
import ResultsInfo from './ResultsInfo';
import SingleRepository from './SingleRepository';

const Repositories = () => {
  const { data, search, searchType, loading } = useRepoContext();

  return (
    <main className="repos">
      <ResultsInfo
        search={search}
        totalCount={
          searchType === 'users'
            ? data.users.total_count
            : data.repos.total_count
        }
        name={searchType === 'users' ? 'Users Founded' : 'Founded Repositories'}
      />
      {searchType === 'users' ? (
        <section>
          {data.users.items?.map(
            ({ login, avatar_url, url, id, followers_url }) => (
              <div className="repos__users" key={id}>
                <UserPV
                  avatarUrl={avatar_url}
                  name={login}
                  url={url}
                  followersUrl={followers_url}
                />
              </div>
            )
          )}
        </section>
      ) : (
        <>
          {data?.repos?.items?.map(
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
              forks_count,
              open_issues_count,
              watchers_count,
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
                forksCount={forks_count}
                issueCount={open_issues_count}
                watchersCount={watchers_count}
              />
            )
          )}
        </>
      )}
      {data.repos.total_count !== null && data.users.total_count !== null && (
        <NextPage
          totalCount={
            searchType === 'users'
              ? data.users.total_count
              : data.repos.total_count
          }
        />
      )}
      {loading === 'loading' && <Spinner />}
    </main>
  );
};

export default Repositories;
