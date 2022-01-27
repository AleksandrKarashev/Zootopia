import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const FormGroupsComponent = ({ message, userName, setUserName, userEmail, setUserEmail, clearMessage }) => {

   const [userNameError, setUserNameError] = useState("");
   const [userEmailError, setUserEmailError] = useState("");

   useEffect(() => {
      if (message) {
         for (let i = 0; i < message.length; i++) {
            if (message[i].field === "name") setUserNameError(message[i].message)
            else if (message[i].field === "email") setUserEmailError(message[i].message)
         }
      }
   }, [setUserNameError, setUserEmailError, message])

   useEffect(() => {
      clearMessage()
      setUserNameError(null)
   }, [userName, setUserName, clearMessage])

   useEffect(() => {
      clearMessage()
      setUserEmailError(null)
   }, [userEmail, setUserEmail, setUserEmail, clearMessage])

   return (
      <>
         <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name"
               value={userName} onChange={(e) => setUserName(e.target.value)} />

            {userNameError ?
               <Form.Text className="text-danger" >
                  {userNameError}
               </Form.Text> : ""}
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email"
               value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
            {userEmailError ? <Form.Text className="text-danger">
               {userEmailError}
            </Form.Text> : ""}
         </Form.Group>
      </>
   )
}

export default FormGroupsComponent;