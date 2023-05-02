import React from 'react';
import {Routes} from './routes';
import QueryProvider from './providers/QueryProvider';

const App = () => {
  return (
    <QueryProvider>
      <Routes />
    </QueryProvider>
  );
};

export default App;
