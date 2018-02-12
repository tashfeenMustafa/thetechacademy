import React from 'react';
import ReactPlayer from 'react-player';

class Video extends React.Component {
  render () {
    return (
      <video id="bgvid" playsInline autoPlay muted loop>
        <source src="https://firebasestorage.googleapis.com/v0/b/thetechacademy-3a475.appspot.com/o/Home%2FVideos%2FMoarClip1.mp4?alt=media&token=0dd76c75-e416-4f27-8d1a-35f4ce81dc03" type="video/mp4"/>
      </video>
    );
  }
}

export default Video;
