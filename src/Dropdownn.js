import React from 'react';
import Dropdown from "react-dropdown";
// import untitled35 from "./untitled35";

const Dropdownn = () => {
  return (
    <div className='container'>
      <h1>Select a file</h1>
      <div class="dropdown">
      <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown link </a>

    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Choose a file</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
      </div>
      
      
    </div>
  )
}

export default Dropdownn;
