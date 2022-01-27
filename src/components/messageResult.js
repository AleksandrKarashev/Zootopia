import React from "react";
import { Form } from "react-bootstrap";

const MessageResult = ({ messageResult }) => {

   return (
      <Form.Group className="my-3 toCenter">
         <div>{messageResult}</div>
      </Form.Group>
   )
}

export default MessageResult;