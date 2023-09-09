import React from 'react';
import Videos from './Videos';

function VideoList({ videos }) {
  
  return (
    <div className="video-list">
      {videos.map((video, index) => (
        <div className="video-item" key={index}>
          <Videos video={video} />
        </div>
      ))}
    </div>
  );
}

export default VideoList;
