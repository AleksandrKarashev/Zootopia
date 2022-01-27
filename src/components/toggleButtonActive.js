import React from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

const ToggleButtonActiveComponent = ({ userStatus, func }) => {
   return (
      <ButtonGroup>
         <ToggleButton
            type="radio"
            variant='outline-info'
            name="active"
            value='active'
            checked={'active' === userStatus}
            onClick={() => func("active")}
         >
            active
         </ToggleButton>
         <ToggleButton
            type="radio"
            variant='outline-info'
            name="active"
            value='inactive'
            checked={'inactive' === userStatus}
            onClick={() => func("inactive")}
         >
            inactive
         </ToggleButton>
      </ButtonGroup>
   )
}

export default ToggleButtonActiveComponent;