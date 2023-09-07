import React from "react";
import { useParams } from "react-router-dom";

const VideoPage = () => {
  const { videoId } = useParams();

  // Define the video data for each video ID (you can use an array or object here)
  const videoData = {
    1: {
      videoUrl: "https://www.youtube.com/embed/rhPSo4_Tgi0?si=vwYTlSZzQqlE5MpV",
    },
    2: {
      videoUrl: "https://www.youtube.com/embed/emNkJGwcusQ?si=9v5v94CB5wndmrBG",
    },
    3: {
      videoUrl: "https://www.youtube.com/embed/CJrVX-ta4ss?si=P0WhY3IeIQ1kLJTo",
    },
    4: {
      videoUrl: "https://www.youtube.com/embed/4NOTxBkfBjo?si=HhZWgKx5NdYfros1",
    },
    5: {
      videoUrl: "https://www.youtube.com/embed/m67-bOpOoPU?si=7qONoYSJfjUhSlJs",
    },
    6: {
      videoUrl: "https://www.youtube.com/embed/yRpLlJmRo2w?si=Hh0uALW7vyd-HjY8",
    },
    7: {
      videoUrl: "https://www.youtube.com/embed/BgScmBg-bsk?si=LRHSBPmlK1KYOS9c",
    },
    8: {
      videoUrl: "https://www.youtube.com/embed/GxwHXxumdQk?si=oebK8ndlgK5NWHY4",
    },
    9: {
      videoUrl: "https://www.youtube.com/embed/krfUjg0S2uI?si=DFdM0BJ6Fcic0YYa",
    },
    10: {
      videoUrl: "https://www.youtube.com/embed/Oes56FoYABc?si=ZhB6nPTEZ7t11d-B",
    },
    11: {
      videoUrl: "https://www.youtube.com/embed/4NOTxBkfBjo?si=HhZWgKx5NdYfros1",
    },
    12: {
      videoUrl: "https://www.youtube.com/embed/m67-bOpOoPU?si=7qONoYSJfjUhSlJs",
    },
    13: {
      videoUrl: "https://www.youtube.com/embed/G3e-cpL7ofc?si=RWFA8NpD7Hxi9UDX",
    },
    14: {
      videoUrl: "https://www.youtube.com/embed/2OTq15A5s0Y?si=Q0D1XjamLr_0EUx7",
    },
    15: {
      videoUrl: "https://www.youtube.com/embed/Vblvb_s12zM?si=Iv7EdqUkCZxgon9l",
    },
    16: {
      videoUrl: "https://www.youtube.com/embed/GxwHXxumdQk?si=oebK8ndlgK5NWHY4",
    },
    17: {
      videoUrl: "https://www.youtube.com/embed/krfUjg0S2uI?si=DFdM0BJ6Fcic0YYa",
    },
    18: {
      videoUrl: "https://www.youtube.com/embed/dBUBYz75gdk?si=-d6TpfVHAHvVdNlW",
    },
    19: {
      videoUrl: "https://www.youtube.com/embed/cYga4JhX5yM?si=-LzCDtltnD7MvQL2",
    },
    20: {
      videoUrl: "https://www.youtube.com/embed/lh3MGxP3Rl8?si=gYBFB-3eyJYoAvJS",
    },
  };

  const video = videoData[videoId];

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <div className="video">
      <div className="content">
        <iframe
          style={{ marginLeft: "250px", position: "absolute", bottom: "170px" }}
          name={`v${videoId}`}
          width="800px"
          height="500px"
          src={video.videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="info">
          <h4 className="title_1">{video.title}</h4>
          <p className="channel-name">{video.channelName}</p>
          <p className="views">{video.views}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
