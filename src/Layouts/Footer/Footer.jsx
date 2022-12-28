import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={styles.container}>
      <a rel='noreferrer' target='_blank' href='https://twitter.com/spacex'>
        TWITTER
      </a>
      <a
        rel='noreferrer'
        target={'_blank'}
        href='https://www.youtube.com/spacex'
      >
        YOUTUBE
      </a>
      <a
        rel='noreferrer'
        target={'_blank'}
        href='https://www.instagram.com/spacex/'
      >
        INSTAGRAM
      </a>
      <a
        rel='noreferrer'
        target={'_blank'}
        href='https://www.flickr.com/photos/spacex'
      >
        FLICKER
      </a>
      <a
        rel='noreferrer'
        target={'_blank'}
        href='https://www.linkedin.com/company/spacex'
      >
        LINKEDIN
      </a>
      <a
        rel='noreferrer'
        target={'_blank'}
        href='https://www.spacex.com/media/privacy_policy_spacex.pdf'
      >
        PRIVACY POLICY
      </a>
    </div>
  );
};
