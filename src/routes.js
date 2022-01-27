import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import UserData from './pages/UserData';
import UserCreate from './pages/UserCreate';
import UsersListPage from './pages/UsersList';
import Zootopia from "./media/zootopia-logo.png";


const useRoutes = () => {
   return (
      <>
         <div id="logoContainer" className="py-3">
            <img src={Zootopia} alt="zootopia animals" />
         </div>
         <Routes>
            <Route exact path='/' element={<UsersListPage />} />
            <Route exact path='/userdata/:id' element={<UserData />} />
            <Route exact path='/usercreate' element={<UserCreate />} />
            <Route path="*" element={<Navigate replace to="/" />} />
         </Routes>
      </>
   )
}


export default useRoutes;