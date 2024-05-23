import style from './WorkComponent.module.scss';
import loopVideo from '../../assets/videos/videoLoop.mp4';
import balljourney from '../../assets/img/balljourney.jpg';
import bluebee from '../../assets/img/bluebee.jpg';
import stairs from '../../assets/img/stairs.jpg';
import pizzahut from '../../assets/img/pizzahut.jpg';
import hbs from '../../assets/img/hbs.jpg';
import beahit from '../../assets/img/beahit.jpg';
import saigon from '../../assets/img/saigon.jpg';
import { useState } from 'react';

function WorkComponent() {

  const [showVideo, setShowVideo] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  const iframes = [
    { id: 1, url: "https://drive.google.com/file/d/13EPKmRx0A7hJ8JnjMRee85ZEOU4NnWTl/preview", thumbnail: balljourney, name: 'Ball Journey' },
    { id: 2, url: "https://drive.google.com/file/d/1KtmYG1mWNCtPeIFvgVcf0z-x69DJiBdZ/preview", thumbnail: bluebee, name: 'Blue Bee' },
    { id: 3, url: "https://drive.google.com/file/d/1JnbmPmaRGux_6veJB7eetvISrDpQZAT6/preview", thumbnail: stairs, name: 'Stairs' },
    { id: 4, url: "https://drive.google.com/file/d/1ntBWHrz2NAXgYr_XkBvC_NZ3VYuH0V11/preview", thumbnail: pizzahut, name: 'PH Pitch' },
    { id: 5, url: "https://drive.google.com/file/d/1xQ8Kz4LRd8I_FxkuEAbBgFXw_zekb4yo/preview", thumbnail: hbs, name: 'HBS' },
    { id: 6, url: "https://drive.google.com/file/d/1i44qqzTR8F8CYhWS_Xq7XYyLH4J9GQQp/preview", thumbnail: beahit, name: 'Be A Hit' },
    { id: 7, url: "https://drive.google.com/file/d/1ODGGcHtETkDB3ATjyVI5mwtPHehrhbeh/preview", thumbnail: saigon, name: 'Happiness Saigon' },
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
        <p>Ravie develops design and marketing solutions for events, marketing, and entertainment that stride at the forefront of visuals and beyond in an effort to improve brand equity on local and global scales. Peep some of our work below!</p>
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
            <h1>{iframe.name}</h1>
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
              src='https://drive.google.com/file/d/1Fwg4KdOCrW-r57JEcL7y6--01y3VYin1/preview' 
              frameborder="0" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true">
            </iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkComponent;