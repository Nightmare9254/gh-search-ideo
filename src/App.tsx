import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RepositoryInfo from './components/Repositories/RepositoryInfo';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import User from './pages/User';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="repos">
            <Route path=":id">
              <Route path=":id" element={<RepositoryInfo />} />
            </Route>
          </Route>
          <Route path="users">
            <Route path=":id" element={<User />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
