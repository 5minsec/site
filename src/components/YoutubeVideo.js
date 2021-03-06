import React from 'react';
import styles from './YoutubeVideo.module.css';


function Video() {
  return (
    <div className='col text-center'>
        <h2>Youtube</h2>
        <div className={styles.videoContainer}>
            <iframe
                src="https://www.youtube.com/embed/zX0g2btna5E"
                className={styles.videoFrame}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
    </div>
  );
}


export default function YoutubeVideo() {
  return (
    <section className={styles.youtubeVideo}>
      <div className="container">
        <div className="row">
          <Video />
        </div>
      </div>
    </section>
  );
}
