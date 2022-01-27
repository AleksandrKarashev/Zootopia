import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PaginationComponent from '../components/pagination';
import SpinnerComponent from '../components/spinner';
import { useHttp } from '../hooks/http.hook';
import { Button, Table } from 'react-bootstrap';
import { IoMdPersonAdd, IoMdArrowRoundDown } from 'react-icons/io';

import "../styles/common.css";
import "../styles/usersList.css";


const UsersListPage = () => {

   const [pageN, setPageN] = useState(1);
   const [usersList, setUsersList] = useState([]);

   const navigate = useNavigate();

   const { loading, request } = useHttp();


   useEffect(() => {

      const fetchUsers = async () => {
         try {
            const users = await request(`https://gorest.co.in/public/v1/users?page=${pageN}`);
            setUsersList(users.data)
         } catch (e) { }
      }
      fetchUsers()
   }, [pageN, request])


   return (
      <div id="usersList" className='toCenter'>
         {
            (loading) ? <SpinnerComponent /> :
               <>
                  <div id="infoTab">
                     <span>Click on table to update an existing inhabitant <IoMdArrowRoundDown /></span>
                     <Button variant="warning" onClick={() => navigate("/usercreate")}>Add a new resident <IoMdPersonAdd /></Button>
                  </div>
                  <Table responsive striped bordered hover id="usersTable" >
                     <thead>
                        <tr>
                           <th>Inhabitant</th>
                           <th>Email</th>
                           <th>Status</th>
                           <th>Gender</th>
                        </tr>
                     </thead>
                     <tbody>

                        {
                           usersList.map((user) => {
                              return (
                                 <tr key={Math.random()}
                                    onClick={() => navigate(`/userdata/${user.id}`, { state: { id: user.id } })}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.status}</td>
                                    <td>{user.gender}</td>
                                 </tr>
                              )
                           })
                        }
                     </tbody>
                  </Table>
                  <PaginationComponent pageN={pageN} setPageN={setPageN} />
               </>
         }
      </div>
   );
}

export default UsersListPage;