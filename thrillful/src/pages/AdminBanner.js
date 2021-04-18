import React, { Component } from 'react';
import '../CSS/Banner.css';
import { Box, Button, Text, Image, Center, Input } from '@chakra-ui/react';
import axios from 'axios';




class AdminBanner extends Component {
    //initialize state 
    state = {
        selectedFile: null
    }

    //file is now stored in the selected state
    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.tart.files[0]
        })
    }

    //method no argument goal is to upload a file. 
    //https://academind.com/tutorials/reactjs-image-upload/

    // fileUploadHandler = () => {
    //     //create an API endpoint that accepts foriegn data a mixture files. And stores the files in cloud storage. 
    //     const fd = new FormData();
    //     fd.append('image',
    //         this.state.selectedFile,
    //         this.state.selectedFile
    //     )
    //     axios.post('my-domain.com/file-upload', this.state.selectedFile, formData,{
    //         onUploadProgress: progressEvent => {
    //             console.log(progressEvent.loaded / progressEvent.total)
    //         }
    //     })
    // }

    render() {
        return (
            <Box className="imageBox">
                <Input type="file" onChange={this.fileSelectedHandler} />
                <Button onClick={this.fileUploadHandler}>Upload</Button>

            </Box>
        );
    }

}

export default AdminBanner
