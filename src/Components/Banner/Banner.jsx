import React from 'react';
import {Carousel} from 'antd';
import styles from './Banner.module.css';
import img5 from '../../Assets/Images/img5.jpg';
import img2 from '../../Assets/Images/img2.jpg';
import img3 from '../../Assets/Images/img3.jpg';
import img4 from '../../Assets/Images/img4.jpg';

export const Banner = () => {
  const contentStyle = {
    height: 'auto',
    color: '#fff',
    lineHeight: '160px',
    positionAlign: 'center',
    alignitem: 'center',
    background: '#364d79',
  };
  return (
    <div className='swiper'>
      <Carousel autoplay>
        <div className={styles.carousel}>
          <h1 className={styles.firstText}>UPCOMING LAUNCH</h1>
          <h1 className={styles.secondText}>STARTLINK MISSION</h1>
          <button className={styles.watchButton}>WATCH</button>
          <h3 style={contentStyle}>
            <img className={styles.image} src={img5} alt='' />
          </h3>
        </div>
        <div className={styles.carousel}>
          <h1 className={styles.firstText}>RECENT LAUNCH</h1>
          <h1 className={styles.secondText}>STARSHIP UPDATE</h1>
          <button className={styles.watchButton}>REWATCH</button>
          <h3 style={contentStyle}>
            <img className={styles.image} alt='' src={img2} />
          </h3>
        </div>
        <div className={styles.carousel}>
          <h1 className={styles.firstText}>RECENT LAUNCH</h1>
          <h1 className={styles.secondText}>SES 03B MPOWER MISSION</h1>
          <button className={styles.watchButton}>LEARN MORE</button>
          <h3 style={contentStyle}>
            <img className={styles.image} alt='' src={img3} />
          </h3>
        </div>
        <div className={styles.carousel}>
          <h1 className={styles.firstText}>RECENT LAUNCH</h1>
          <h1 className={styles.secondText}>NASA'S SWOT MISSION</h1>
          <button className={styles.watchButton}>LEARN MORE</button>
          <h3 style={contentStyle}>
            <img className={styles.image} alt='' src={img4} />
          </h3>
        </div>
      </Carousel>
    </div>
  );
};
