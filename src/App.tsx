import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RepositoryInfo from './components/Repositories/RepositoryInfo';

import Main from './pages/Main';
import User from './pages/User';

const App = () => {
  return (
    <div>
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
        </Routes>
      </Router>
    </div>
  );
};

export default App;
