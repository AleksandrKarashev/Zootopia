import React from 'react';
import { HashRouter } from 'react-router-dom';
import useRoutes from './routes.js';

const App = () => {

   const routes = useRoutes();

   return (
      <HashRouter basename='/'>
         <div id="app">
            {routes}
         </div>
      </HashRouter>
   );
}

export default App;
