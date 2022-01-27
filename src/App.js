import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import useRoutes from './routes.js';

const App = () => {

   const routes = useRoutes();

   return (
      <Router>
         <div div id="app" >
            {routes}
         </div >
      </Router>
   );
}

export default App;
