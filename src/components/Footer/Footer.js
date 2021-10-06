import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(styles);

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <a
        href="https://docs.beefy.finance"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.textLink}
      >
        <span>Docs</span>
      </a>
      <Box flex={1} />
      <a
        href="https://twitter.com/beefyfinance"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}
      >
        <i className={`fab fa-twitter ${classes.linkIcon}`}></i>
      </a>
      <a
        href="https://t.me/beefyfinance"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}
      >
        <i className={`fab fa-telegram ${classes.linkIcon}`}></i>
      </a>
      <a
        href="https://discord.gg/yq8wfHd"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}
      >
        <i className={`fab fa-discord ${classes.linkIcon}`}></i>
      </a>
    </div>
  );
};

export default memo(Footer);
