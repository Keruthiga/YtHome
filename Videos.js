import React from 'react';
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { BiSolidCommentDetail, BiDotsHorizontal } from "react-icons/bi";
import { IoMdShareAlt } from 'react-icons/io';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import ReactPlayer from 'react-player';

function Videos({ video }) {
  return (
    <div className="video" style={{ textAlign: 'center', position: 'relative' }}>
      <div className='video-content d-flex align-items-end' style={{ display: 'inline-block', width: '25%', margin: '3rem auto' }}>
        <div className='player-wrapper'>
          <ReactPlayer className='react-player' url={video.url} width='400px' height='90vh' />
        </div>
        <div className="like-dislike align-itmes-center justify-content-center">
          {/* Upward Arrow (Previous Video) */}
          <button className="arrow-button" style={{ fontSize: '25px', position: 'absolute', bottom: '0', right: '0', padding: "5px 5px", color: "white", borderRadius: "50%", backgroundColor: "#474747" }}>
            <BsArrowDown />
          </button>
          <div>
            <div style={{ fontSize: '20px', color: "white", marginLeft: "4px", padding: "4px 0px", borderRadius: "50%", backgroundColor: "#474747", display: "flex", justifyContent: "center", alignItems: "center" }}><FaThumbsUp /></div>
            <p style={{ marginTop: "4px", color: "white", fontSize: "14px" }}>{video.views}</p>
          </div>
          <div>
            <div style={{fontSize:'20px', color:"white",marginLeft:"4px",padding:"4px 0px",borderRadius:"50%",backgroundColor:"#474747",display:"flex",justifyContent:"center",alignItems:"center"}}><FaThumbsUp /></div>
            <p style={{marginTop:"4px", color:"white",fontSize:"14px"}}>{video.views}</p>
          </div>
          <div>
            <div style={{fontSize:'20px', color:"white",marginLeft:"4px",padding:"4px 0px",borderRadius:"50%",backgroundColor:"#474747",display:"flex",justifyContent:"center",alignItems:"center"}}><FaThumbsDown /></div>
            <p style={{marginTop:"4px", color:"white",fontSize:"14px"}}>Dislike</p>
          </div>
          <div>
            <div style={{fontSize:'20px', color:"white",marginLeft:"4px",padding:"4px 0px",borderRadius:"50%",backgroundColor:"#474747",display:"flex",justifyContent:"center",alignItems:"center"}}><BiSolidCommentDetail/></div>
            <p style={{marginTop:"4px", color:"white",fontSize:"14px"}}>{video.comments}</p>
          </div>
          <div>
            <div style={{fontSize:'20px', color:"white",marginLeft:"4px",padding:"4px 0px",borderRadius:"50%",backgroundColor:"#474747",display:"flex",justifyContent:"center",alignItems:"center"}}><IoMdShareAlt/></div>
            <p style={{marginTop:"4px", color:"white",fontSize:"14px"}}>Share</p>
          </div>
          <div>
            <div style={{fontSize:'20px', color:"white",marginLeft:"4px",padding:"4px 0px",borderRadius:"50%",backgroundColor:"#474747",display:"flex",justifyContent:"center",alignItems:"center"}}><BiDotsHorizontal/></div>
          </div>
          {/* Downward Arrow (Next Video) */}
          <button className="arrow-button"style={{fontSize:'25px', position: 'absolute', top: '0', right: '0',padding:"5px 5px",color:"white",borderRadius:"50%",backgroundColor:"#474747"}} >
            <BsArrowUp/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Videos;
