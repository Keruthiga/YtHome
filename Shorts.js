import React from 'react';
import Videolist from '../components/Videolist';

function Shorts() {
  const videos=[
    {
      url: "https://www.youtube.com/embed/AGKPeStDipE", 
      views: 1000,
      comments: 120,
    },
    {
      url: 'https://www.youtube.com/embed/vzImaMe7gT8',
      views: 2000,
      comments: 20,
    },
    {
      url: 'https://youtube.com/shorts/peDL4njZnvE?si=rF7Yovy3s2A6sS26',
      views: 3000,
      comments: 140,
    },
    {
      url: "https://youtube.com/shorts/mbBOtmRR-ZQ?si=qGpVnEagNaNYwIUh",
      views: 1000,
      comments: 120,
    },
    {
      url: 'https://youtube.com/shorts/IFpcAfV8TaY?si=LZ0-1crs6xd6rbdq',
      views: 2000,
      comments: 20,
    },
    {
      url: 'https://youtube.com/shorts/y687P6_P3dw?si=SwIqIYgwUp73sgyX',
      views: 3000,
      comments: 140,
    },
    ,
    {
      url: 'https://youtube.com/shorts/W6Eh9kXWktA?si=PjQKZIgHyOiJrTfP',
      views: 2000,
      comments: 20,
    },
    {
      url: 'https://youtube.com/shorts/TDmUPEAEGxM?si=agrHsddPd-X2pzGa',
      views: 3000,
      comments: 140,
    },
    {
      url: "https://youtube.com/shorts/mBE_Dez7o0A?si=xAe6tSbWgE0efhMy",
      views: 1000,
      comments: 120,
    },
    {
      url: 'https://youtube.com/shorts/Umoom3QfyKU?si=TLGmf4_ckOg92WYm',
      views: 2000,
      comments: 20,
    },
    {
      url: 'https://youtube.com/shorts/TDmUPEAEGxM?si=cGl1q6N751m2aAe8',
      views: 2345,
      comments: 140,
    }
  ];

  return (
    <div className="shortsVideo mt-2" style={{ backgroundColor: "rgb(16, 14, 14)" }}>
      <Videolist videos={videos} />
    </div>
  );
}

export default Shorts;
