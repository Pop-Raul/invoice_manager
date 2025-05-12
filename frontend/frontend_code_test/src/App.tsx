import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import { Layout } from './layout/Layout';

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <LoginForm />
          }
        />

        <Route
          path="/invoices"
          element={ <Layout />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
