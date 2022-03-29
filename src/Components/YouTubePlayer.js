import React, {Component} from "react";
import reactDom from "react-dom"
import YouTube from "react-youtube"

class Example extends Component {


  VideoOnEnd(event) {
    event.target.playVideo();
  }
    render() {
    const options = {
      height: '480',
      width: '800',
      playerVars: {
        autoplay: 1,
        mute: this.props.streetSound ? 0 : 1,
        modestbranding: 1,
        autohide: 1,
        playbackSpeed: this.props.playbackSpeed
      },
    };
    const {videoId} = this.props;
    return <YouTube videoId={videoId} opts={options} onEnd={this.VideoOnEnd} />;
  }
}

export default Example