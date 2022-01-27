import React from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import "./arrowBack.css";

const Arrowback = () => {
   const navigate = useNavigate();
   return <div id="irrowBack" onClick={() => navigate("/")}><MdArrowBackIosNew /></div>
}

export default Arrowback;