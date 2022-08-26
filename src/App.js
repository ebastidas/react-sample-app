import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/core/Layout';
import Home from './components/core/Home';
import ProjectList from './components/projects/ProjectList';
import TransactionDetails from './components/transactions/TransactionDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='projects' element={<ProjectList />} />
          <Route path='transaction/:transactionId' element={<TransactionDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
