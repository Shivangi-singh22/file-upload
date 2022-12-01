import { useState } from "react";
import React from 'react';
import axios from "axios";

const Dropdown2 = () => {

  const [add, setAdd] = useState('');
  const [del, setDel] = useState('');

  function filehandler(e) {
    console.log('file uploaded' , e.target.files);
    setAdd(e.target.files)
  }

  function handleApi() {
    console.log('file submitted',res);
    const formData = new FormData()
    formData.append('file',files)
    axios.post('url',formData)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <label htmlFor='filedata'></label>
      <input type='file' id="filedata" placeholder="Add file" onChange={filehandler}/>
      <button onClick={handleApi}>Submit</button>
    </div>
  )
}

export default Dropdown2;
