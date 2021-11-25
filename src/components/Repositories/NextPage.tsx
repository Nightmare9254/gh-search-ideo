import { FC } from 'react';
import { useRepoContext } from '../../hooks/useSearchRepo';

const NextPage: FC<{ totalCount: number }> = ({ totalCount }) => {
  const { page, setPage } = useRepoContext();
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <nav className="next__page-nav">
      <button
        disabled={page === 1}
        onClick={() => {
          setPage(prevPage => Math.max(prevPage - 1, 1));
          scrollToTop();
        }}
        className="next-btn btn--primary"
      >
        Prev
      </button>
      <span className="next-page">{page}</span>
      <button
        onClick={() => {
          setPage(prevPage =>
            page <= Math.floor(totalCount / 20) ? prevPage + 1 : prevPage
          );
          scrollToTop();
        }}
        disabled={page >= Math.floor(totalCount / 20) + 1}
        className="next-btn btn--primary"
      >
        Next
      </button>
    </nav>
  );
};

export default NextPage;
