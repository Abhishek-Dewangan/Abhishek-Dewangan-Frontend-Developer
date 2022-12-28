import React from 'react';
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <div className={styles.container}>
      <a href='https://twitter.com/spacex'>TWITTER</a>
      <a href='https://www.youtube.com/spacex'>YOUTUBE</a>
      <a href='https://www.instagram.com/spacex/'>INSTAGRAM</a>
      <a href='https://www.flickr.com/photos/spacex'>FLICKER</a>
      <a href='https://www.linkedin.com/company/spacex'>LINKEDIN</a>
      <a href='https://www.spacex.com/media/privacy_policy_spacex.pdf'>
        PRIVACY POLICY
      </a>
    </div>
  );
};
