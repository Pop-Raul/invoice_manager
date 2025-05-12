import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { Provider as ReduxProvider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 2. Înveleşte totul în ThemeProvider */}
      {/* <ReduxProvider store={}> */}
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      {/* </ReduxProvider> */}
  </React.StrictMode>
);