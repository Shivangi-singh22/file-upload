import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackspace, faFileAlt, faSpinner} from '@fortawesome/free-solid-svg-icons';
import './FileItem.css';


const FileItem = ({file,deleteFile}) => {
  return (
        <li className='list-item col' key={file.name} >
      <FontAwesomeIcon icon={faFileAlt} />
         <p> {file.name} </p>
        <div className='actions'>
          {file.isUploading &&
            <FontAwesomeIcon icon={faSpinner} className="fa-spin"/>
          }
          {!file.isUploading &&
            <FontAwesomeIcon icon={faBackspace} 
                onClick={() => deleteFile(file.name)}/>
          }  
        </div>     
    </li>
  )
}

export default FileItem
