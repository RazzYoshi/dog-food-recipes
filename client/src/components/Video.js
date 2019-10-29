import React, { Component } from "react";
import "./Video.css";

export class Video extends Component {
  render() {
    const { video: {url, name, description} } = this.props;
    return (
      <div className="Video">
        <a className="video-link" href={url}>▶ {name}</a>
        <span className="video-description">{description}</span>
      </div>
    );
  }
}

export default Video;
