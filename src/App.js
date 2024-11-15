import React from 'react';
import { HashRouter } from 'react-router-dom';
import WebRoutes from './routes/WebRoutes';

function App() {
  return (
    <HashRouter>
      <WebRoutes />
    </HashRouter>
  );
}

export default App;
