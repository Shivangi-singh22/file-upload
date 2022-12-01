import axios from "axios";
import React from "react";
import './Fileupload.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";  

const fileupload = ({files, setFiles, removeFile}) => {

    const uploadhandler = e => {
        console.log('file Uploaded', e.target.files);
        const file = e.target.files[0];
        file.isUploading = true;
        setFiles([...files, file])

        // passing file to vaccant Api
        const formData = new FormData();
        formData.append(
            file.name,
            file,
            file.name
            )

        // call backend Api from server
        axios.post('http://localhost:8080/upload', formData)
            .then((res) => {
                console.log(res);
                file.isUploading = false;
                setFiles([...files, file])
            })
            .catch((err) => {
                console.error('error', err)
                removeFile(file.name)
            })

    }

  return (
    <div className="file-card container">
        <div className="file-inputs">
            <input type="file" onChange={uploadhandler} />
                <button>
                    <i>
                        <FontAwesomeIcon icon={faPlus} />
                    </i><strong>Upload</strong>
                </button>
        </div>  

        <p className="main">Support files</p>
        <p className="info">PDF,JPG,PNG</p>      
    </div>
   )
}

export default fileupload;
