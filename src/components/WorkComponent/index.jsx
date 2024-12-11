import style from './WorkComponent.module.scss';
import loopVideo from '../../assets/videos/videoLoop.mp4';
import balljourney from '../../assets/img/balljourney.jpg';
import bluebee from '../../assets/img/bluebee.jpg';
import mondaypush from "../../assets/img/mondaypush.jpg";
import logoanimation from '../../assets/img/logoanimation.jpg';
import selflearning from '../../assets/img/selflearning.jpg';
import socialpost from '../../assets/img/socialpost.jpg';
import blend from "../../assets/img/blend.jpg";
import { useState } from 'react';

function WorkComponent() {

  const [showVideo, setShowVideo] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  const iframes = [
    { id: 1, url: "https://drive.google.com/file/d/1fB4_lGaP2d8e3FuCX_F8W4CYDDqzf3Ju/preview", thumbnail: mondaypush, name: 'Monday Push' },
    { id: 2, url: "https://drive.google.com/file/d/1KyBjILTiytNoSKRF5K0ylsOFIJj888qj/preview", thumbnail: logoanimation, name: 'Logo Animation' },
    { id: 3, url: "https://drive.google.com/file/d/1oySwxis7i1Gmf5BnNph3tt70bLqNN6BS/preview", thumbnail: selflearning, name: 'Self-Learning' },
    { id: 4, url: "https://drive.google.com/file/d/1mdtj0x5XUsxaMJoUv5pFGOFUWfXvyVIO/preview", thumbnail: socialpost, name: 'Social Post' },
    { id: 5, url: "https://drive.google.com/file/d/13EPKmRx0A7hJ8JnjMRee85ZEOU4NnWTl/preview", thumbnail: balljourney, name: 'Ball Journey' },
    { id: 6, url: "https://drive.google.com/file/d/1KtmYG1mWNCtPeIFvgVcf0z-x69DJiBdZ/preview", thumbnail: bluebee, name: 'BlueBee' },
    { id: 7, url: "https://drive.google.com/file/d/1ASoFbBlrugEDyKRvpcd9gGKHx_uQJIFC/preview", thumbnail: blend, name: 'Blend3015' }
  ];

  const handleThumbnailClick = (id) => {
    setShowVideo(id);
  };

  const handleCloseOverlay = () => {
    setShowVideo(null);
  };

  const handleTrailerClick = () => {
    setShowTrailer(true);
  }
  const handleCloseTrailer = () => {
    setShowTrailer(false);
  }

  return (
    <div className={style.workContainer}>
      <div className={style.workHeader}>
        <h1>Animation, Design, and Direction.</h1>
        <p>Puck develops design and marketing solutions for events, marketing, and entertainment that stride at the forefront of visuals and beyond in an effort to improve brand equity on local and global scales. Peep some of my work below!</p>
      </div>
      <div className={style.videoLoop} onClick={handleTrailerClick}>
        <div className={style.overlay}></div>
        <h1>CHECK OUT MY WORK</h1>
        <video autoPlay loop muted src={loopVideo}></video>
      </div>
      <div className={style.workContent}>
        {iframes.map(iframe => (
          <div key={iframe.id} onClick={() => handleThumbnailClick(iframe.id)} className={style.imgContainer}>
            <img src={iframe.thumbnail}/>
            {iframe.name === 'Blend3015' ? (<h1 style={{textAlign: "center"}}>{iframe.name}</h1>) : (
              <h1>{iframe.name}</h1>
            )}
          </div>
        ))}
      </div>


      {showVideo && (
        <div className={style.iframeOverlay} onClick={handleCloseOverlay}>
          <div className={style.iframeContainer} onClick={(e) => e.stopPropagation()}>
            <iframe 
              src={iframes.find(iframe => iframe.id === showVideo).url} 
              frameborder="0" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true">
            </iframe>
          </div>
        </div>
      )}

      {showTrailer && (
        <div className={style.trailerOverlay} onClick={handleCloseTrailer}>
          <div className={style.trailerContainer} onClick={(e) => e.stopPropagation()}>
            <iframe 
              src='https://drive.google.com/file/d/1crrtYbyzSaGX6Lv-QU74CIjWRW2Ux5s2/preview' 
              frameborder="0" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true">
            </iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkComponent;