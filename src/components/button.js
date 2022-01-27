import React from "react";
import { Button, Spinner } from "react-bootstrap";

const ButtonComponent = ({ color, func, loading, isClickProcessed, text }) => {
   return (<Button variant={color} onClick={func} disabled={loading ? true : false}>
      {text}
      {isClickProcessed ? <Spinner
         as="span"
         animation="grow"
         size="sm"
         role="status"
         aria-hidden="true"
      /> : null}
   </Button>
   )
}

export default ButtonComponent;