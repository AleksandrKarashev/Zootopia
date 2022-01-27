import React, { useEffect, useState } from "react";
import { ButtonGroup, ToggleButton, Form, Container, Row, Col } from "react-bootstrap";
import Arrowback from "../components/arrowBack";
import SpinnerComponent from "../components/spinner";
import ButtonComponent from "../components/button";
import FormGroupsComponent from "../components/formGroups";
import MessageResult from "../components/messageResult";

import { useHttp } from "../hooks/http.hook";

import Lion from "../media/male/Lion-min.png";
import Big from "../media/male/Big-min.jpg";
import Sleepy from "../media/male/sleepy-min.jpg";
import Mu from "../media/male/mu-min.jpg";
import Ioga from "../media/male/112707-min.jpg";
import Cat from "../media/male/cat-min.png";
import Finnick from "../media/male/Finnick_Zootopia-min.jpg";
import Lis from "../media/male/lis-min.jpg";
import Wolf from "../media/male/wolf-min.jpg";

import Rabbit from "../media/female/rabbit-min.jpg";
import Daughter from "../media/female/daughter-min.jpg";
import Bellwether from "../media/female/Bellwether-min.jpg";
import Wife from "../media/female/wife-min.jpg";

import Crowd from "../media/crowd2.jpg";



const UserData = () => {

   const [userId, setUserId] = useState("");

   const [userName, setUserName] = useState("");
   const [userEmail, setUserEmail] = useState("");
   const [userGender, setUserGender] = useState("");
   const [userStatus, setUserStatus] = useState("");
   const [firstLoading, setFirstLoading] = useState(true);
   const [updateLoading, setUpdateLoading] = useState(false);
   const [deleteLoading, setDeleteLoading] = useState(false);
   const [messageResult, setMessageResult] = useState("");

   const male = [Lion, Big, Sleepy, Mu, Ioga, Cat, Finnick, Lis, Wolf];
   const female = [Rabbit, Daughter, Bellwether, Wife];

   function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
   }

   const { loading, request, message, clearMessage } = useHttp();

   useEffect(() => {
      setTimeout(() => setMessageResult(""), 1500)
   }, [messageResult, setMessageResult])

   useEffect(() => {
      const id = window.location.pathname.split("/")[2];
      setUserId(id)

      const fetchUser = async () => {
         try {
            const user = await request(`https://gorest.co.in/public/v1/users/${id}`);
            setUserName(user.data.name)
            setUserEmail(user.data.email)
            setUserGender(user.data.gender)
            setUserStatus(user.data.status)
         } catch (e) {
         } finally {
            setFirstLoading(false);
         }
      }
      fetchUser()
   }, [request])

   const updateUser = async () => {
      setUpdateLoading(true)
      try {
         const req = await request(`https://gorest.co.in/public/v1/users/${userId}`, "PATCH",
            { name: userName, email: userEmail, status: userStatus });
         if (req) setMessageResult("The inhabitant has been updated successfully")
      } catch (e) {
      } finally {
         setUpdateLoading(false)
      }
   }

   const deleteUser = async () => {
      try {
         setDeleteLoading(true)
         await request(`https://gorest.co.in/public/v1/users/${userId}`, "DELETE");
         setUserName("")
         setUserEmail("")
         setUserGender("")
         setUserStatus("")
         setMessageResult("The inhabitant has been deleted successfully")
      } catch (e) {
      } finally {
         setDeleteLoading(false)
      }
   }

   const Character = React.useMemo(() => {
      return userGender === "male" ?
         male[getRandomInt(0, male.length)] :
         userGender === "female" ?
            female[getRandomInt(0, female.length)] :
            Crowd;
   }, [userGender]);

   const foo = () => { };

   return (
      <div className="backGround">
         <Arrowback />
         {!firstLoading ?
            <Container>
               <Row>
                  <Col xlg={4} className="UserImageContainer">
                     <div>
                        <img src={
                           Character
                        }
                           alt="all animals" />
                     </div>
                  </Col>
                  <Col xlg={8}>
                     <Form className="userForm">
                        <h2>The inhabitant data</h2>
                        <FormGroupsComponent
                           message={message}
                           userName={userName}
                           setUserName={setUserName}
                           userEmail={userEmail}
                           setUserEmail={setUserEmail}
                           clearMessage={clearMessage} />

                        <Form.Group className="mb-3" controlId="formBasicGender">
                           <fieldset disabled>
                              <Form.Label>Gender</Form.Label>
                              <Form.Control type="text"
                                 value={userGender} onChange={foo} />
                           </fieldset>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                           <Form.Label>Status</Form.Label>
                           <div>
                              <ButtonGroup>
                                 <ToggleButton
                                    type="radio"
                                    variant='outline-info'
                                    name="active"
                                    value='active'
                                    checked={'active' === userStatus}
                                    onClick={() => setUserStatus("active")}
                                 >
                                    active
                                 </ToggleButton>
                                 <ToggleButton
                                    type="radio"
                                    variant='outline-info'
                                    name="active"
                                    value='inactive'
                                    checked={'inactive' === userStatus}
                                    onClick={() => setUserStatus("inactive")}
                                 >
                                    inactive
                                 </ToggleButton>
                              </ButtonGroup>
                           </div>
                        </Form.Group>

                        <MessageResult messageResult={messageResult} />

                        <Form.Group className="my-3 toCenter" >
                           <ButtonComponent
                              color="primary"
                              func={updateUser}
                              loading={loading}
                              isClickProcessed={updateLoading}
                              text="Update User" />

                           <ButtonComponent
                              color="danger"
                              func={deleteUser}
                              loading={loading}
                              isClickProcessed={deleteLoading}
                              text="Delete User" />
                        </Form.Group>
                     </Form>
                  </Col>
               </Row>
            </Container> :
            <SpinnerComponent />
         }
      </div>
   )
}

export default UserData;