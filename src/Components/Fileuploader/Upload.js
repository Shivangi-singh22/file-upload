import './style.css'
import React, { useState } from 'react';
import axios from 'axios';
// import XLSX form "xlsx";

const Fileupload = ({file,setFile}) => {

  const onInputChange = (e) => {
    console.log(e.target.files)
    setFile(e.target.files[0])
  };

  const onSubmit = (e) =>{
    e.preventDefault();
    const data = new FormData();
    data.append('file',file);
    
    axios.post('//localhost:8000/upload ',data)
    
      .then((e) => {
        console.log('success')
      })
      .catch( (e) => {
        console.error('Error',e)
      })
  };

  return (
    <>
       <form method="post" action="#" id="#">
       <div className="form-group files container">
            <label>Upload Your File </label>
            <input type="file" onChange={onInputChange} onSubmit={onSubmit} className="form-control" multiple=""/>
        </div>
        <button>Submit</button>
       </form>
    </>
  );
}

export default Upload;
