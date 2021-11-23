import RepoFilter from '../components/Filters/RepoFilters';
import Header from '../components/Header/Header';
import Repositories from '../components/Repositories/Repositories';

import RepoProvider from '../providers/RepoProvider';

const Main = () => {
  return (
    <>
      <RepoProvider>
        <Header />
        <RepoFilter />
        <Repositories />
      </RepoProvider>
    </>
  );
};

export default Main;
