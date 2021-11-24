import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="not__found">
      <h1 className="not__found-header">
        Page you are looking does not exists
      </h1>
      <Link to="/" className="not__found-link link">
        Go back to main page
      </Link>
    </section>
  );
};

export default NotFound;
