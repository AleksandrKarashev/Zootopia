import React from 'react';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import useRoutes from './routes.js';

const App = () => {

   const routes = useRoutes();

   return (
      <HashRouter>
         <div id="app" >
            {routes}
         </div >
      </HashRouter>
   );
}

export default App;
