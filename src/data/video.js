import React, { Component } from 'react';
import video from '../video/test.mp4';


class VideoFile extends Component {
    render() {
        return(
           
                <video autoPlay  src={video}/>
           
        )
    }
}

export default VideoFile; 