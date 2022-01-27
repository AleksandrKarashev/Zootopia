import React, { useEffect, useState } from "react";
import Arrowback from "../components/arrowBack";
import ButtonComponent from "../components/button";
import ToggleButtonActiveComponent from "../components/toggleButtonActive";
import FormGroupsComponent from "../components/formGroups";
import MessageResult from "../components/messageResult";
import { useHttp } from "../hooks/http.hook";
import { ButtonGroup, Col, Container, Form, Row, ToggleButton } from "react-bootstrap";

import Crowd from "../media/crowd2.jpg";


const UserCreate = () => {

   const [userName, setUserName] = useState("");
   const [userEmail, setUserEmail] = useState("");
   const [userGender, setUserGender] = useState("female");
   const [userStatus, setUserStatus] = useState("active");
   const [messageResult, setMessageResult] = useState("");

   const { loading, request, message, clearMessage } = useHttp();

   const createUserFunc = async () => {
      try {
         const req = await request(`https://gorest.co.in/public/v1/users`, "POST",
            { name: userName, gender: userGender, email: userEmail, status: userStatus });

         if (req) setMessageResult("The inhabitant was created successfully")
      } catch (e) { }
   }

   useEffect(() => {
      setTimeout(() => setMessageResult(""), 1500)
   }, [messageResult, setMessageResult])

   return (
      <div className="backGround">
         <Arrowback />
         <Container>
            <Row>
               <Col xlg={4} className="UserImageContainer">
                  <div>
                     <img src={
                        Crowd
                     }
                        alt="all animals" />
                  </div>
               </Col>
               <Col xlg={8}>
                  <Form>
                     <h2>Add new inhabitant</h2>

                     <FormGroupsComponent
                        message={message}
                        userName={userName}
                        setUserName={setUserName}
                        userEmail={userEmail}
                        setUserEmail={setUserEmail}
                        clearMessage={clearMessage} />

                     <Form.Group className="mb-3" >
                        <Form.Label>Gender</Form.Label>
                        <div>
                           <ButtonGroup>
                              <ToggleButton
                                 type="radio"
                                 variant='outline-info'
                                 name="gender"
                                 value='female'
                                 checked={'female' === userGender}
                                 onClick={() => setUserGender("female")}
                              >
                                 female
                              </ToggleButton>
                              <ToggleButton
                                 type="radio"
                                 variant='outline-info'
                                 name="gender"
                                 value='female'
                                 checked={'male' === userGender}
                                 onClick={() => setUserGender("male")}
                              >
                                 male
                              </ToggleButton>
                           </ButtonGroup>
                        </div>
                        <Form.Label className="mt-3">Status</Form.Label>
                        <div>
                           <ToggleButtonActiveComponent
                              userStatus={userStatus}
                              func={setUserStatus} />
                        </div>

                     </Form.Group>
                     <MessageResult messageResult={messageResult} />
                     <ButtonComponent
                        color="primary"
                        func={createUserFunc}
                        loading={loading}
                        isClickProcessed={loading}
                        text="Add Inhabitant" />
                  </Form>
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default UserCreate;