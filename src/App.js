import "./App.css";
import React from "react";
import FileUpload from './Components/Fileupload';
import FileList from './FileList/FileList';
// import Dropdown2 from "./Dropdown2";
// import Dropdownn from "./Dropdownn";
import { useState } from "react";

function App() {
	const [files, setFiles] = useState([{
		name : 'myfile.pdf'
	}
]);

	const removeFile = filename => {
		// remove the file.name which is not equal to file we are going to pass
		setFiles(files.filter(file => file.name !== filename))
	}

  return (
    <>
    {/* <Dropdown2/> */}
    {/* <Dropdownn/> */}
    {/* <Uploadfile/> */}
	<p className="title">Upload file</p>
	<FileUpload files = {files} setFiles={setFiles} removeFile={removeFile} />
	<FileList files={files} removeFile={removeFile}/>
    </>
  );
}

export default App;



// import axios from 'axios';

// import React,{Component} from 'react';

// class App extends Component {

// 	state = {

// 	// Initially, no file is selected
// 	selectedFile: null
// 	};
	
// 	// On file select (from the pop up)
// 	onFileChange = event => {
	
// 	// Update the state
// 	this.setState({ selectedFile: event.target.files[0] });
	
// 	};
	
// 	// On file upload (click the upload button)
// 	onFileUpload = () => {
	
// 	// Create an object of formData
// 	const formData = new FormData();
	
// 	// Update the formData object
// 	formData.append(
// 		"myFile",
// 		this.state.selectedFile,
// 		this.state.selectedFile.name
// 	);
	
// 	// Details of the uploaded file
// 	console.log(this.state.selectedFile);
	
// 	// Request made to the backend api
// 	// Send formData object
// 	axios.post("api/uploadfile", formData);
// 	};
	
// 	// File content to be displayed after
// 	// file upload is complete
// 	fileData = () => {
	
// 	if (this.state.selectedFile) {
		
// 		return (
// 		<div>
// 			<h2>File Details:</h2>
			
// <p>File Name: {this.state.selectedFile.name}</p>

			
// <p>File Type: {this.state.selectedFile.type}</p>

			
// <p>
// 			Last Modified:{" "}
// 			{this.state.selectedFile.lastModifiedDate.toDateString()}
// 			</p>

// 		</div>
// 		);
// 	} else {
// 		return (
// 		<div>
// 			<br />
// 			<h4>Choose before Pressing the Upload button</h4>
// 		</div>
// 		);
// 	}
// 	};
	
// 	render() {
	
// 	return (
// 		<div>
// 			<h1>
// 			GeeksforGeeks
// 			</h1>
// 			<h3>
// 			File Upload using React!
// 			</h3>
// 			<div>
// 				<input type="file" onChange={this.onFileChange} />
// 				<button onClick={this.onFileUpload}>
// 				Upload!
// 				</button>
// 			</div>
// 		{this.fileData()}
// 		</div>
// 	);
// 	}
// }

// export default App;

